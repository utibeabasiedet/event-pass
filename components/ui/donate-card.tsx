"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, HeartHandshake } from "lucide-react";
import { toast } from "sonner";
import { EVENT } from "@/lib/config";

export function DonateCard() {
  const d = EVENT.donation;

  async function copy(text: string) {
    await navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard");
  }

  return (
    <Card className="relative overflow-hidden border-white/10 bg-white/5 backdrop-blur-xl">
      <div className="absolute inset-0 bg-[radial-gradient(700px_circle_at_20%_0%,rgba(255,255,255,0.10),transparent_50%),radial-gradient(900px_circle_at_80%_120%,rgba(255,255,255,0.08),transparent_50%)]" />
      <div className="relative p-6 md:p-7">
        <div className="flex items-start gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 ring-1 ring-white/10">
            <HeartHandshake className="h-5 w-5" />
          </div>
          <div className="min-w-0">
            <p className="text-sm text-white/70">For those who wish to give</p>
            <h3 className="mt-0.5 text-lg font-semibold tracking-tight">
              {d.accountName}
            </h3>
          </div>
        </div>

        <div className="mt-5 grid gap-3 rounded-2xl bg-black/20 p-4 ring-1 ring-white/10">
          <Row
            label="Bank"
            value={d.bankName}
            onCopy={() => copy(d.bankName)}
          />
          <Row
            label="Account Number"
            value={d.accountNumber}
            onCopy={() => copy(d.accountNumber)}
          />
        </div>

        <div className="mt-5">
          <Button
            type="button"
            variant="secondary"
            className="w-full bg-white/10 text-white hover:bg-white/15"
            onClick={() =>
              copy(`${d.bankName} - ${d.accountNumber} (${d.accountName})`)
            }
          >
            <Copy className="mr-2 h-4 w-4" />
            Copy bank details
          </Button>
        </div>
      </div>
    </Card>
  );
}

function Row({
  label,
  value,
  onCopy,
}: {
  label: string;
  value: string;
  onCopy: () => void;
}) {
  return (
    <div className="flex items-center justify-between gap-3">
      <div className="min-w-0">
        <p className="text-xs uppercase tracking-wider text-white/50">
          {label}
        </p>
        <p className="truncate text-sm font-medium text-white">{value}</p>
      </div>
      <Button
        type="button"
        size="icon"
        variant="ghost"
        className="shrink-0 text-white/70 hover:bg-white/10 hover:text-white"
        onClick={onCopy}
        aria-label={`Copy ${label}`}
      >
        <Copy className="h-4 w-4" />
      </Button>
    </div>
  );
}
