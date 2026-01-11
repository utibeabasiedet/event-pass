// "use client";

// import type React from "react";

// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { MapPin, Calendar, Clock, Heart } from "lucide-react";

// interface RSVPFormData {
//   fullName: string;
//   emailAddress: string;
//   phoneNumber: string;
//   sex: string;
//   eventId: string;
// }

// export default function MemorialPage() {
//   const [formData, setFormData] = useState<RSVPFormData>({
//     fullName: "",
//     emailAddress: "",
//     phoneNumber: "",
//     sex: "",
//     eventId: "memorial-2024",
//   });

//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSelectChange = (value: string) => {
//     setFormData({
//       ...formData,
//       sex: value,
//     });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Handle form submission here
//     console.log("Form submitted:", formData);
//     setIsSubmitted(true);
//     setTimeout(() => setIsSubmitted(false), 3000);
//   };

//   return (
//     <main className="min-h-screen bg-stone-50">
//       {/* Hero Section */}
//       <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-stone-100 to-stone-50 overflow-hidden">
//         {/* Decorative elements */}
//         <div className="absolute top-20 right-10 w-32 h-32 bg-amber-100 rounded-full opacity-30 blur-3xl animate-float" />
//         <div
//           className="absolute bottom-20 left-10 w-40 h-40 bg-amber-50 rounded-full opacity-20 blur-3xl animate-float"
//           style={{ animationDelay: "1s" }}
//         />

//         <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
//           <div
//             className="mb-8 animate-fade-in-up"
//             style={{ animationDelay: "0.2s" }}
//           >
//             <div className="inline-flex items-center justify-center w-32 h-32 rounded-full border-2 border-amber-200 bg-white shadow-lg overflow-hidden">
//               <div className="w-full h-full bg-gradient-to-br from-amber-50 via-stone-100 to-amber-100 flex items-center justify-center">
//                 <Heart className="w-16 h-16 text-amber-700 opacity-40" />
//               </div>
//             </div>
//           </div>

//           <h1
//             className="font-serif text-6xl md:text-7xl font-bold text-stone-900 mb-6 animate-fade-in-up text-balance"
//             style={{ animationDelay: "0.3s" }}
//           >
//             In Loving Memory
//           </h1>

//           <div
//             className="h-1 w-24 bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto mb-8 animate-fade-in-up"
//             style={{ animationDelay: "0.4s" }}
//           />

//           <p
//             className="text-xl text-stone-600 mb-3 animate-fade-in-up font-light"
//             style={{ animationDelay: "0.5s" }}
//           >
//             <span className="font-serif text-2xl font-semibold text-stone-900">
//               DR. MICHAEL EJUEYITSE JEMIDE IYOMERE
//             </span>
//           </p>

//           <p
//             className="text-lg text-stone-500 animate-fade-in-up"
//             style={{ animationDelay: "0.6s" }}
//           >
//             January 15, 1950 — January 8, 2024
//           </p>

//           <p
//             className="text-stone-600 mt-8 text-lg leading-relaxed animate-fade-in-up max-w-xl mx-auto"
//             style={{ animationDelay: "0.7s" }}
//           >
//             "A life well-lived is a precious gift of hope to those who loved
//             you."
//           </p>
//         </div>
//       </section>

//       {/* Tribute Section */}
//       <section className="py-20 px-4 bg-white">
//         <div className="max-w-3xl mx-auto">
//           <div className="animate-fade-in-up">
//             <h2 className="font-serif text-4xl font-bold text-stone-900 mb-8 text-center">
//               A Life Celebrated
//             </h2>

//             <div className="prose prose-stone max-w-none">
//               <p className="text-stone-700 text-lg leading-relaxed mb-6">
//                 With a heart full of love and memories that will last a
//                 lifetime, we gather to celebrate the remarkable life of John
//                 Michael Smith. Known for his unwavering kindness, infectious
//                 laughter, and genuine care for those around him, he touched
//                 countless lives with his warmth and wisdom.
//               </p>

//               <p className="text-stone-700 text-lg leading-relaxed">
//                 His legacy lives on in the values he instilled, the love he
//                 shared, and the positive impact he made on everyone fortunate
//                 enough to know him. We honor his memory and find comfort in the
//                 joy he brought to our lives.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Event Details */}
//       <section className="py-20 px-4 bg-stone-50">
//         <div className="max-w-4xl mx-auto">
//           <h2 className="font-serif text-4xl font-bold text-center text-stone-900 mb-16 animate-fade-in-up">
//             Service Details
//           </h2>

//           <div className="grid md:grid-cols-3 gap-8">
//             {/* Date Card */}
//             <Card
//               className="border-2 border-amber-200 bg-white hover:shadow-xl transition-shadow duration-300 animate-fade-in-up"
//               style={{ animationDelay: "0.1s" }}
//             >
//               <div className="p-8 text-center">
//                 <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
//                   <Calendar className="w-8 h-8 text-amber-700" />
//                 </div>
//                 <h3 className="font-serif text-xl font-semibold text-stone-900 mb-3">
//                   Date
//                 </h3>
//                 <p className="text-stone-600 font-light text-lg">
//                   Saturday, January 20, 2024
//                 </p>
//               </div>
//             </Card>

//             {/* Time Card */}
//             <Card
//               className="border-2 border-amber-200 bg-white hover:shadow-xl transition-shadow duration-300 animate-fade-in-up"
//               style={{ animationDelay: "0.2s" }}
//             >
//               <div className="p-8 text-center">
//                 <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
//                   <Clock className="w-8 h-8 text-amber-700" />
//                 </div>
//                 <h3 className="font-serif text-xl font-semibold text-stone-900 mb-3">
//                   Time
//                 </h3>
//                 <p className="text-stone-600 font-light text-lg">
//                   2:00 PM - 4:00 PM
//                 </p>
//               </div>
//             </Card>

//             {/* Location Card */}
//             <Card
//               className="border-2 border-amber-200 bg-white hover:shadow-xl transition-shadow duration-300 animate-fade-in-up"
//               style={{ animationDelay: "0.3s" }}
//             >
//               <div className="p-8 text-center">
//                 <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
//                   <MapPin className="w-8 h-8 text-amber-700" />
//                 </div>
//                 <h3 className="font-serif text-xl font-semibold text-stone-900 mb-3">
//                   Location
//                 </h3>
//                 <p className="text-stone-600 font-light text-lg">
//                   Grace Memorial Chapel
//                 </p>
//                 <p className="text-stone-500 text-sm mt-2">
//                   123 Peaceful Lane, Springfield
//                 </p>
//               </div>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* RSVP Form Section */}
//       <section className="py-20 px-4 bg-white">
//         <div className="max-w-2xl mx-auto">
//           <div className="text-center mb-12 animate-fade-in-up">
//             <h2 className="font-serif text-4xl font-bold text-stone-900 mb-4">
//               RSVP
//             </h2>
//             <p className="text-stone-600 text-lg">
//               Please let us know if you plan to attend
//             </p>
//           </div>

//           <Card className="border-2 border-amber-200 shadow-xl">
//             <div className="p-8">
//               <form
//                 onSubmit={handleSubmit}
//                 className="space-y-6 animate-fade-in-up"
//                 style={{ animationDelay: "0.2s" }}
//               >
//                 <div>
//                   <Label
//                     htmlFor="fullName"
//                     className="text-stone-700 font-semibold mb-2 block"
//                   >
//                     Full Name *
//                   </Label>
//                   <Input
//                     id="fullName"
//                     name="fullName"
//                     type="text"
//                     placeholder="Enter your full name"
//                     value={formData.fullName}
//                     onChange={handleChange}
//                     required
//                     className="border-amber-200 focus:border-amber-600 focus:ring-amber-200"
//                   />
//                 </div>

//                 <div className="grid md:grid-cols-2 gap-6">
//                   <div>
//                     <Label
//                       htmlFor="email"
//                       className="text-stone-700 font-semibold mb-2 block"
//                     >
//                       Email Address *
//                     </Label>
//                     <Input
//                       id="email"
//                       name="emailAddress"
//                       type="email"
//                       placeholder="your.email@example.com"
//                       value={formData.emailAddress}
//                       onChange={handleChange}
//                       required
//                       className="border-amber-200 focus:border-amber-600 focus:ring-amber-200"
//                     />
//                   </div>

//                   <div>
//                     <Label
//                       htmlFor="phone"
//                       className="text-stone-700 font-semibold mb-2 block"
//                     >
//                       Phone Number *
//                     </Label>
//                     <Input
//                       id="phone"
//                       name="phoneNumber"
//                       type="tel"
//                       placeholder="(555) 000-0000"
//                       value={formData.phoneNumber}
//                       onChange={handleChange}
//                       required
//                       className="border-amber-200 focus:border-amber-600 focus:ring-amber-200"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <Label
//                     htmlFor="sex"
//                     className="text-stone-700 font-semibold mb-2 block"
//                   >
//                     Gender (Optional)
//                   </Label>
//                   <Select
//                     value={formData.sex}
//                     onValueChange={handleSelectChange}
//                   >
//                     <SelectTrigger className="border-amber-200 focus:border-amber-600 focus:ring-amber-200">
//                       <SelectValue placeholder="Select an option" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="male">Male</SelectItem>
//                       <SelectItem value="female">Female</SelectItem>
//                       <SelectItem value="other">Other</SelectItem>
//                       <SelectItem value="prefer-not-to-say">
//                         Prefer not to say
//                       </SelectItem>
//                     </SelectContent>
//                   </Select>
//                 </div>

//                 <Button
//                   type="submit"
//                   className="w-full bg-gradient-to-r from-amber-700 to-amber-600 hover:from-amber-800 hover:to-amber-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:shadow-lg"
//                 >
//                   {isSubmitted
//                     ? "Thank you for your response"
//                     : "Confirm Attendance"}
//                 </Button>
//               </form>
//             </div>
//           </Card>
//         </div>
//       </section>

//       {/* Footer */}
//       <section className="py-16 px-4 bg-stone-900 text-center text-stone-200">
//         <div className="max-w-3xl mx-auto animate-fade-in">
//           <p className="text-lg mb-4 font-light">
//             Thank you for your prayers, love, and support during this time of
//             reflection.
//           </p>
//           <p className="text-stone-400 text-sm">
//             In cherished memory of a life that brought joy to all who knew him.
//           </p>
//         </div>
//       </section>
//     </main>
//   );
// }






// // const BRAND = {
// //   navy: "#1A24A0",
// //   gold: "#DD9637",
// // };
import { EVENT } from "@/lib/config";
import { Reveal } from "@/components/ui/reveal";
import { RSVPForm } from "@/components/ui/rsvp-form";
import { DonateCard } from "@/components/ui/donate-card";
import { CalendarDays, Clock3, MapPin, Sparkles, Heart } from "lucide-react";

const NAVY = "#1A24A0";
const GOLD = "#DD9637";

export default function Page() {
  const d = EVENT.details;

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
            <p className="text-xs text-white/55">
              RSVP • Service Details
            </p>
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
            <div className="mt-8 grid gap-3 rounded-3xl glass p-5 md:max-w-xl md:p-6">
              <DetailRow
                icon={<CalendarDays className="h-4 w-4" />}
                label="Date"
                value={d.date}
              />
              <DetailRow
                icon={<Clock3 className="h-4 w-4" />}
                label="Time"
                value={d.time}
              />
              <DetailRow
                icon={<MapPin className="h-4 w-4" />}
                label="Venue"
                value={d.venue}
              />
              <div className="pl-7 text-sm text-white/60">{d.address}</div>
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
