"use client";

import { useEffect, useState, useTransition } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { User, Phone, Lock } from "lucide-react";
import { useRouter } from "next/navigation";
import { ConfirmationResult, RecaptchaVerifier } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { clearTimeout } from "timers";

type DialogState = "login" | "register" | "forgotPassword" | "otpVerification";

export function LoginDialog() {
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [dialogState, setDialogState] = useState<DialogState>("login");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [otp, setOtp] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState("");
  const [resendCountdown, setResendCountdown] = useState(0);

  const [recaptchaVerifier, setRecaptchaVerifier] =
    useState<RecaptchaVerifier | null>(null);
  const [confirmationResult, setConfirmationResult] =
    useState<ConfirmationResult | null>(null);
  const [isPending, startTransition] = useTransition();

  //Handles OTP timer
  //Stops user from abusing OTP
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (resendCountdown > 0) {
      timer = setTimeout(() => setResendCountdown(resendCountdown - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [resendCountdown]);

  useEffect(() => {
    const recaptchaVerifier = new RecaptchaVerifier(
      auth,
      "recaptcha-container",
      {
        size: "invisible",
      }
    );

    setRecaptchaVerifier(recaptchaVerifier);

    return () => {
      recaptchaVerifier.clear();
    };
  }, [auth]);

  const resetDialog = () => {
    setDialogState("login");
    setPhoneNumber("");
  };

  const handleSubmit = () => {
    if (dialogState === "register" || dialogState === "forgotPassword") {
      setDialogState("otpVerification");
    } else if (dialogState === "otpVerification") {
      // Handle OTP verification logic here
      resetDialog();
    }
  };

  const getTitle = () => {
    switch (dialogState) {
      case "login":
        return "Нэвтрэх";
      case "register":
        return "Тавтай морилно уу";
      case "forgotPassword":
        return "Нууц үгээ мартсан уу?";
      case "otpVerification":
        return "Баталгаажуулах";
    }
  };

  const getSubmitButtonText = () => {
    switch (dialogState) {
      case "login":
        return "Нэвтрэх";
      case "register":
        return "Бүртгүүлэх";
      case "forgotPassword":
        return "Үргэлжлүүлэх";
      case "otpVerification":
        return "Баталгаажуулах";
    }
  };

  return (
    <>
      <div id="recaptcha-container" />
      <Dialog
        open={open}
        onOpenChange={(newOpen) => {
          setOpen(newOpen);
          if (!newOpen) resetDialog();
        }}
      >
        <DialogTrigger asChild>
          <Button variant="ghost" size="icon" className="h-9 w-9">
            <User className="!h-6 !w-6" />
            <span className="sr-only">User Account</span>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center">
              {getTitle()}
            </DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            {dialogState !== "otpVerification" && (
              <div className="grid gap-2">
                <Label htmlFor="phone" className="text-base font-semibold">
                  Утасны дугаар
                </Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                  <Input
                    id="phone"
                    className="pl-9"
                    placeholder="Утасны дугаар оруулна уу"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
              </div>
            )}
            {dialogState === "login" && (
              <div className="grid gap-2">
                <Label htmlFor="password" className="text-base font-semibold">
                  Нууц үг
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                  <Input
                    id="password"
                    type="password"
                    className="pl-9"
                    placeholder="Нууц үг оруулна уу"
                  />
                </div>
              </div>
            )}
            {dialogState === "otpVerification" && (
              <>
                <p className="text-sm text-center text-muted-foreground">
                  Таны оруулсан {phoneNumber} дугаар луу идэвхжүүлэх код
                  илгээгдсэн. Та утсаа шалгаад үйлдэлээ үргэлжлүүлнэ үү.
                </p>
                <div className="grid gap-2">
                  <Label htmlFor="otp" className="text-base font-semibold">
                    Баталгаажуулах код
                  </Label>
                  <Input id="otp" placeholder="Баталгаажуулах код оруулна уу" />
                </div>
              </>
            )}
          </div>
          <Button className="w-full" type="submit" onClick={handleSubmit}>
            {getSubmitButtonText()}
          </Button>
          {dialogState !== "otpVerification" && (
            <>
              <div className="relative my-4">
                <Separator />
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-2 text-sm text-muted-foreground">
                  Эсвэл
                </span>
              </div>
              <div className="flex flex-col items-center space-y-2 text-sm">
                {dialogState === "login" ? (
                  <>
                    <Button
                      variant="link"
                      className="p-0"
                      onClick={() => setDialogState("register")}
                    >
                      Бүртгэлгүй юу? Бүртгүүлэх
                    </Button>
                    <Button
                      variant="link"
                      className="p-0"
                      onClick={() => setDialogState("forgotPassword")}
                    >
                      Нууц үгээ мартсан уу? Сэргээх
                    </Button>
                  </>
                ) : (
                  <Button
                    variant="link"
                    className="p-0"
                    onClick={() => setDialogState("login")}
                  >
                    Бүртгэлтэй юу? Нэвтрэх
                  </Button>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
