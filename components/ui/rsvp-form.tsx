"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { rsvpSchema, type RSVPInput } from "@/lib/validators";
import { EVENT } from "@/lib/config";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { Loader2, Sparkles } from "lucide-react";

export function RSVPForm() {
  const form = useForm<RSVPInput>({
    resolver: zodResolver(rsvpSchema),
    defaultValues: {
      fullName: "",
      emailAddress: "",
      phoneNumber: "",
      sex: "",
      eventId: EVENT.eventId,
    },
    mode: "onTouched",
  });

  const isSubmitting = form.formState.isSubmitting;

  async function onSubmit(values: RSVPInput) {
    try {
      const res = await fetch("/api/guest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await res.json();

      if (!res.ok || !data?.ok) {
        toast.error(data?.message || "Unable to submit. Try again.");
        return;
      }

      toast.success("RSVP submitted successfully");
      form.reset({
        fullName: "",
        emailAddress: "",
        phoneNumber: "",
        sex: "",
        eventId: EVENT.eventId,
      });
    } catch (e: any) {
      toast.error(e?.message || "Network error. Please try again.");
    }
  }

  return (
    <Card className="border-white/10 bg-white/5 backdrop-blur-xl">
      <div className="p-6 md:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm text-white/70">Event Pass</p>
            <h3 className="mt-1 text-2xl font-semibold tracking-tight text-white">
              RSVP Confirmation
            </h3>
            <p className="mt-2 text-sm text-white/60">
              Please fill in your details to confirm attendance.
            </p>
          </div>

          <div className="hidden md:grid h-11 w-11 place-items-center rounded-2xl bg-white/10 ring-1 ring-white/10">
            <Sparkles className="h-5 w-5 text-white/80" />
          </div>
        </div>

        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-7 space-y-6">
          <input type="hidden" {...form.register("eventId")} />

          <Field>
            <Label className="text-white/80">Full Name *</Label>
            <Input
              placeholder="Enter your full name"
              className="border-white/10 bg-black/20 text-white placeholder:text-white/30 focus-visible:ring-white/20"
              {...form.register("fullName")}
            />
            <Err msg={form.formState.errors.fullName?.message} />
          </Field>

          <div className="grid gap-6 md:grid-cols-2">
            <Field>
              <Label className="text-white/80">Email Address *</Label>
              <Input
                type="email"
                placeholder="your.email@example.com"
                className="border-white/10 bg-black/20 text-white placeholder:text-white/30 focus-visible:ring-white/20"
                {...form.register("emailAddress")}
              />
              <Err msg={form.formState.errors.emailAddress?.message} />
            </Field>

            <Field>
              <Label className="text-white/80">Phone Number *</Label>
              <Input
                type="tel"
                placeholder="0800 000 0000"
                className="border-white/10 bg-black/20 text-white placeholder:text-white/30 focus-visible:ring-white/20"
                {...form.register("phoneNumber")}
              />
              <Err msg={form.formState.errors.phoneNumber?.message} />
            </Field>
          </div>

          <Field>
            <Label className="text-white/80">Gender (Optional)</Label>
            <Select
              value={form.watch("sex")}
              onValueChange={(v) =>
                form.setValue("sex", v, { shouldTouch: true })
              }
            >
              <SelectTrigger className="border-white/10 bg-black/20 text-white focus:ring-white/20">
                <SelectValue placeholder="Select an option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="other">Other</SelectItem>
                <SelectItem value="prefer-not-to-say">
                  Prefer not to say
                </SelectItem>
              </SelectContent>
            </Select>
            <Err msg={form.formState.errors.sex?.message} />
          </Field>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-2xl bg-white text-black hover:bg-white/90"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              "Confirm Attendance"
            )}
          </Button>

          <p className="text-xs text-white/40">
            By submitting, you confirm your RSVP details are correct.
          </p>
        </form>
      </div>
    </Card>
  );
}

function Field({ children }: { children: React.ReactNode }) {
  return <div className="space-y-2">{children}</div>;
}

function Err({ msg }: { msg?: string }) {
  if (!msg) return null;
  return <p className="text-xs text-red-300">{msg}</p>;
}
