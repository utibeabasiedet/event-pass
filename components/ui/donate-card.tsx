"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, HeartHandshake, Check } from "lucide-react";
import { toast } from "sonner";
import { EVENT } from "@/lib/config";
import { useState } from "react";

const NAVY = "#1A24A0";
const GOLD = "#DD9637";

export function DonateCard() {
  const d = EVENT.donation;
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  async function copy(text: string, key?: string) {
    try {
      await navigator.clipboard.writeText(text);
      toast.success("Copied to clipboard");
      if (key) {
        setCopiedKey(key);
        window.setTimeout(() => setCopiedKey(null), 1200);
      }
    } catch {
      toast.error("Copy failed. Please copy manually.");
    }
  }

  return (
    <Card className="relative overflow-hidden rounded-3xl glass">
      {/* gold glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            `radial-gradient(700px circle at 20% 0%, ${GOLD}26, transparent 55%),` +
            `radial-gradient(900px circle at 90% 120%, ${NAVY}33, transparent 60%)`,
        }}
      />

      <div className="relative p-6 md:p-7">
        <div className="flex items-start gap-3">
          <div
            className="grid h-10 w-10 place-items-center rounded-xl"
            style={{
              background: `${GOLD}22`,
              border: `1px solid ${GOLD}40`,
              color: GOLD,
            }}
          >
            <HeartHandshake className="h-5 w-5" />
          </div>

          <div className="min-w-0">
            <p className="text-sm text-white/70">
              For those who wish to donate.
            </p>
            {/* <h3 className="mt-0.5 text-lg font-semibold tracking-tight text-white">
              {d.accountName}
            </h3> */}
            <p className="mt-1 text-xs text-white/55">
              Your generosity is appreciated. Thank you for your support.
            </p>
          </div>
        </div>

        <div className="mt-5 grid gap-3 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
          <Row
            label="Account Name"
            value={d.accountName}
            onCopy={() => copy(d.accountName, "Samuel Iyomere")}
            copied={copiedKey === "Samuel Iyomere"}
          />
          <Row
            label="Bank"
            value={d.bankName}
            onCopy={() => copy(d.bankName, "bank")}
            copied={copiedKey === "bank"}
          />
          <Row
            label="Account Number"
            value={d.accountNumber}
            onCopy={() => copy(d.accountNumber, "acct")}
            copied={copiedKey === "acct"}
          />
        </div>

        <div className="mt-5">
          <Button
            type="button"
            className="w-full rounded-2xl text-white"
            style={{
              background: `linear-gradient(90deg, ${GOLD}, ${GOLD}CC)`,
            }}
            onClick={() =>
              copy(
                `${d.bankName} - ${d.accountNumber} (${d.accountName})`,
                "all"
              )
            }
          >
            {copiedKey === "all" ? (
              <>
                <Check className="mr-2 h-4 w-4" />
                Copied
              </>
            ) : (
              <>
                <Copy className="mr-2 h-4 w-4" />
                Copy bank details
              </>
            )}
          </Button>

          <p className="mt-2 text-center text-[11px] text-white/55">
            If copy doesn’t work, you can tap and hold to select the text.
          </p>
        </div>
      </div>
    </Card>
  );
}

function Row({
  label,
  value,
  onCopy,
  copied,
}: {
  label: string;
  value: string;
  onCopy: () => void;
  copied?: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-3">
      <div className="min-w-0">
        <p className="text-xs uppercase tracking-wider text-white/50">
          {label}
        </p>
        <p className="truncate text-sm font-medium text-white/90">{value}</p>
      </div>

      <Button
        type="button"
        size="icon"
        variant="ghost"
        className="shrink-0 text-white/70 hover:bg-white/10 hover:text-white"
        onClick={onCopy}
        aria-label={`Copy ${label}`}
      >
        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
      </Button>
    </div>
  );
}
