import { notFound } from "next/navigation";
import { getKeycapById } from "@/app/actions/getKeycapById";
import KeycapDetail from "./KeycapDetail";

export default async function KeycapPage({
  params,
}: {
  params: { id: string };
}) {
  const keycap = await getKeycapById(parseInt(params.id));

  if (!keycap) {
    notFound();
  }

  return <KeycapDetail keycap={keycap} />;
}
