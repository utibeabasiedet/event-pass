import { EVENT } from "@/lib/config";
import { Reveal } from "@/components/ui/reveal";
import { RSVPForm } from "@/components/ui/rsvp-form";
import { DonateCard } from "@/components/ui/donate-card";
import { CalendarDays, Clock3, MapPin, Sparkles, Heart } from "lucide-react";

const NAVY = "#1A24A0";
const GOLD = "#DD9637";

export default function Page() {
 const s = EVENT.schedule;


  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background overlays */}
      <div className="pointer-events-none absolute inset-0 grain" />
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute -top-24 left-[-120px] h-[420px] w-[420px] rounded-full blur-3xl"
          style={{
            background: `radial-gradient(circle, ${GOLD}33 0%, transparent 60%)`,
          }}
        />
        <div
          className="absolute -bottom-32 right-[-120px] h-[520px] w-[520px] rounded-full blur-3xl"
          style={{
            background: `radial-gradient(circle, ${NAVY}55 0%, transparent 62%)`,
          }}
        />
      </div>

      {/* Top bar */}
      <div className="relative mx-auto flex max-w-6xl items-center justify-between px-5 py-6 md:px-8">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-2xl glass">
            <Sparkles className="h-4 w-4" style={{ color: GOLD }} />
          </div>
          <div className="leading-tight">
            <p className="text-sm font-medium tracking-wide text-white/85">
              Event Pass
            </p>
            <p className="text-xs text-white/55">RSVP • Service Details</p>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-white/70">
          <span
            className="inline-block h-1.5 w-1.5 rounded-full"
            style={{ background: GOLD }}
          />
          Kindly RSVP to help us plan well
        </div>
      </div>

      {/* Hero + content */}
      <section className="relative mx-auto grid max-w-6xl gap-10 px-5 pb-14 pt-2 md:grid-cols-12 md:px-8 md:pb-20 md:pt-8">
        {/* Left */}
        <div className="md:col-span-7">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-white/75">
              <Heart className="h-4 w-4" style={{ color: GOLD }} />
              In loving memory of
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight md:text-6xl">
              <span className="serif font-semibold text-white">
                {EVENT.personName}
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-white/75 md:text-lg">
              {EVENT.quote}
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-8 max-w-xl rounded-3xl glass p-5 md:p-6">
              <p className="text-sm leading-relaxed text-white/75">
                You are warmly welcome to join the family as we celebrate a life
                of faith, service, and love. Kindly RSVP to help us make
                adequate arrangements.
              </p>
              <div className="mt-4 flex items-center gap-2 text-xs text-white/60">
                <span
                  className="inline-block h-1.5 w-1.5 rounded-full"
                  style={{ background: GOLD }}
                />
                Your presence means a lot.
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.22}>
            <div className="mt-8 grid gap-4 rounded-3xl glass p-5 md:max-w-xl md:p-6">
              <DetailRow
                icon={<CalendarDays className="h-4 w-4" />}
                label="Date"
                value={s.date}
              />
              <DetailRow
                icon={<Clock3 className="h-4 w-4" />}
                label="Funeral Time"
                value={s.funeralTime}
              />

              <div className="mt-1">
                <p className="text-sm font-medium text-white/85">Locations</p>

                <div className="mt-3 grid gap-3">
                  {s.locations.map((loc) => (
                    <div
                      key={loc.label}
                      className="rounded-2xl border border-white/10 bg-white/5 p-4"
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className="grid h-7 w-7 place-items-center rounded-xl"
                          style={{
                            background: "rgba(221,150,55,0.15)",
                            border: "1px solid rgba(221,150,55,0.30)",
                            color: "#DD9637",
                          }}
                        >
                          <MapPin className="h-4 w-4" />
                        </div>

                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-white/90">
                            {loc.label}
                          </p>
                          <p className="mt-0.5 text-sm text-white/75">
                            {loc.venue}
                          </p>
                          <p className="mt-1 text-sm text-white/60">
                            {loc.address}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right */}
        <div className="md:col-span-5">
          <div className="grid gap-5">
            <Reveal delay={0.1}>
              <section className="rounded-3xl glass p-5">
                <h2 className="serif text-2xl font-semibold text-white">
                  A life celebrated
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  Thank you for standing with the family in prayer and love.
                  Your presence, kind words, and support are deeply appreciated.
                </p>
                <div className="mt-4 flex items-center gap-2 text-xs text-white/60">
                  <span
                    className="inline-block h-1.5 w-1.5 rounded-full"
                    style={{ background: GOLD }}
                  />
                  RSVP and donation details are available below.
                </div>
              </section>
            </Reveal>

            <Reveal delay={0.14}>
              <DonateCard />
            </Reveal>

            <Reveal delay={0.18}>
              <RSVPForm />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-white/10">
        <div className="mx-auto max-w-6xl px-5 py-10 text-center md:px-8">
          <p className="text-sm text-white/70">
            Thank you for your prayers, love, and support.
          </p>
          <p className="mt-2 text-xs text-white/50">
            © {new Date().getFullYear()} • Memorial Event Pass
          </p>
        </div>
      </footer>
    </main>
  );
}

function DetailRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div
        className="grid h-7 w-7 place-items-center rounded-xl"
        style={{
          background: "rgba(221,150,55,0.15)",
          border: "1px solid rgba(221,150,55,0.30)",
          color: "#DD9637",
        }}
      >
        {icon}
      </div>
      <p className="text-sm text-white/65">{label}</p>
      <p className="ml-auto text-sm font-medium text-white/90">{value}</p>
    </div>
  );
}
