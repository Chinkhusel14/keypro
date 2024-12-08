import { notFound } from "next/navigation";
import { getKeyboardById } from "@/app/actions/getKeyboardById";
import KeyboardDetail from "./KeyboardDetail";

export default async function KeyboardPage({
  params,
}: {
  params: { id: string };
}) {
  const keyboard = await getKeyboardById(parseInt(params.id));

  if (!keyboard) {
    notFound();
  }

  return <KeyboardDetail keyboard={keyboard} />;
}
