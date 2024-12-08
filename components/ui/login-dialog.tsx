"use client";

import { FormEvent, useEffect, useState, useTransition } from "react";
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
import { LoaderIcon, Lock, Phone, User } from "lucide-react";
import {
  ConfirmationResult,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import { auth } from "@/lib/firebase";

export function LoginDialog() {
  const [open, setOpen] = useState(false);
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

  // Handles OTP timer
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (resendCountdown > 0) {
      timer = setTimeout(() => setResendCountdown(resendCountdown - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [resendCountdown]);

  // Initialize RecaptchaVerifier
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
  }, []);

  const verifyOtp = async () => {
    startTransition(async () => {
      setError("");

      if (!confirmationResult) {
        setError("Please request OTP first");
        return;
      }

      try {
        await confirmationResult?.confirm(otp);
        console.log("CONFIRMED");
        console.log(confirmationResult);
      } catch (error) {
        console.log(error);

        setError("Failed to verify OTP. Please check the OTP.");
      }
    });
  };

  const resetDialog = () => {
    setPhoneNumber("");
    setResendCountdown(0);
    setOtp("");
    setError(null);
    setSuccess("");
  };

  const requestOtp = async (e?: FormEvent<HTMLFormElement>) => {
    e?.preventDefault();

    setResendCountdown(60);

    startTransition(async () => {
      setError("");

      if (!recaptchaVerifier) {
        return setError("Recaptcha");
      }

      const formattedPhoneNumber = `+976 ${phoneNumber.replace(/^0/, "")}`;

      try {
        const confirmationResult = await signInWithPhoneNumber(
          auth,
          formattedPhoneNumber,
          recaptchaVerifier
        );

        setConfirmationResult(confirmationResult);
        console.log(confirmationResult);
        setSuccess("OTP sent successfully.");
      } catch (err: any) {
        console.log(err);
        setResendCountdown(0);

        if (err.code === "auth/invalid-phone-number") {
          setError("Invalid phone number. Please check the number.");
        } else if (err.code === "auth/too-many-requests") {
          setError("Too many requests. Please try again later.");
        } else {
          setError("Failed to send OTP. Please try again.");
        }
      }
    });
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(newOpen) => {
        setOpen(newOpen);
        if (!newOpen) resetDialog();
      }}
    >
      <div id="recaptcha-container" />

      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" className="h-9 w-9">
          <User className="!h-6 !w-6" />
          <span className="sr-only">User Account</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            Нэвтрэх
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {!confirmationResult && (
            <form onSubmit={requestOtp} className="grid gap-2">
              <Label htmlFor="phone" className="text-base font-semibold">
                Утасны дугаар
              </Label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                <Input
                  id="phone"
                  className="pl-9"
                  placeholder="Утасны дугаар оруулна уу"
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
            </form>
          )}
          {confirmationResult && (
            <form onSubmit={verifyOtp} className="grid gap-2">
              <Label htmlFor="phone" className="text-base font-semibold">
                Баталгаажуулах
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                <Input
                  id="phone"
                  className="pl-9"
                  placeholder="89001011"
                  type="tel"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
              </div>
            </form>
          )}
        </div>
        <Button
          disabled={!phoneNumber || isPending || resendCountdown > 0}
          className="w-full"
          type="submit"
          onClick={() => requestOtp()}
        >
          {resendCountdown > 0
            ? `Дахин илгээх боломжтой: ${resendCountdown} секунд`
            : isPending
            ? "Sending OTP"
            : "Send OTP"}
        </Button>
        {error && (
          <p className="mt-2 text-sm text-center text-muted-foreground">
            {error}
          </p>
        )}
        {success && (
          <p className="mt-2 text-sm text-center text-muted-foreground">
            {success}
          </p>
        )}
        {isPending && <LoaderIcon className="text-center" />}
      </DialogContent>
    </Dialog>
  );
}
