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

"use client";

import type React from "react";

import { useState } from "react";
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
import { MapPin, Calendar, Clock } from "lucide-react";

interface RSVPFormData {
  fullName: string;
  emailAddress: string;
  phoneNumber: string;
  sex: string;
  eventId: string;
}

export default function MemorialPage() {
  const [formData, setFormData] = useState<RSVPFormData>({
    fullName: "",
    emailAddress: "",
    phoneNumber: "",
    sex: "",
    eventId: "memorial-2024",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange = (value: string) => {
    setFormData({
      ...formData,
      sex: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-secondary to-background">
        <div
          className="absolute top-32 right-20 w-96 h-96 rounded-full opacity-5 blur-3xl animate-float"
          style={{
            background: "radial-gradient(circle, #DD9637, transparent)",
          }}
        />
        <div
          className="absolute bottom-32 left-20 w-80 h-80 rounded-full opacity-5 blur-3xl animate-float"
          style={{
            background: "radial-gradient(circle, #1A24A0, transparent)",
            animationDelay: "2s",
          }}
        />

        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          {/* Decorative top ornament */}
          <div
            className="mb-12 animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="text-5xl text-accent opacity-40">✦</div>
          </div>

          {/* Photo frame with premium styling */}
          <div
            className="mb-12 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-accent opacity-0 blur-2xl rounded-3xl animate-pulse-light" />
              <div className="relative w-68 h-78 rounded-3xl border-4 border-accent overflow-hidden shadow-2xl bg-secondary">
                <img
                  src="/images/iyomere.png"
                  alt="In loving memory"
                  className="w-full h-full object-cover top"
                />
              </div>
            </div>
          </div>

          {/* Main heading */}
          <h1
            className="font-serif text-7xl md:text-8xl font-bold text-primary mb-6 animate-fade-in-up text-balance leading-tight"
            style={{ animationDelay: "0.3s" }}
          >
            In Loving Memory
          </h1>

          {/* Premium divider */}
          <div
            className="divider-gold mb-8 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          />

          {/* Deceased name */}
          <p
            className="text-2xl md:text-3xl font-serif font-semibold text-primary mb-2 animate-fade-in-up"
            style={{ animationDelay: "0.5s" }}
          >
            John Michael Smith
          </p>

          {/* Dates */}
          <p
            className="text-lg text-muted-foreground font-light animate-fade-in-up mb-8"
            style={{ animationDelay: "0.6s" }}
          >
            <span className="text-accent font-semibold">January 15, 1950</span>{" "}
            — <span className="text-accent font-semibold">January 8, 2024</span>
          </p>

          {/* Quote */}
          <p
            className="text-lg md:text-xl font-serif italic text-foreground leading-relaxed animate-fade-in-up max-w-xl mx-auto"
            style={{ animationDelay: "0.7s" }}
          >
            "A life well-lived is a precious gift of hope to those who loved
            you."
          </p>

          {/* Scroll indicator */}
          <div
            className="mt-16 animate-bounce"
            style={{ animationDelay: "1s" }}
          >
            <p className="text-sm text-muted-foreground font-light">
              Scroll to Continue
            </p>
          </div>
        </div>
      </section>

      {/* Tribute Section */}
      <section className="py-32 px-4 bg-card">
        <div className="max-w-3xl mx-auto">
          <div className="animate-fade-in-up">
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-4 text-center">
              A Life Celebrated
            </h2>

            <div className="divider-gold mb-12" />

            <div className="space-y-6">
              <p className="text-lg text-foreground leading-relaxed font-light">
                With a heart full of love and memories that will last a
                lifetime, we gather to celebrate the remarkable life of John
                Michael Smith. Known for his unwavering kindness, infectious
                laughter, and genuine care for those around him, he touched
                countless lives with his warmth and wisdom.
              </p>

              <p className="text-lg text-foreground leading-relaxed font-light">
                His legacy lives on in the values he instilled, the love he
                shared, and the positive impact he made on everyone fortunate
                enough to know him. We honor his memory and find comfort in the
                joy he brought to our lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details Section */}
      <section className="py-32 px-4 bg-background">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-center text-primary mb-8 animate-fade-in-up">
            Service Details
          </h2>

          <div className="divider-gold mb-16 animate-fade-in-up" />

          <div className="grid md:grid-cols-3 gap-8">
            {/* Date Card */}
            <div
              className="card-premium rounded-xl p-8 text-center animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-accent to-accent/80 rounded-full mb-6 shadow-lg">
                <Calendar className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-primary mb-4">
                Date
              </h3>
              <p className="text-foreground font-light text-lg">
                Saturday, January 20, 2024
              </p>
            </div>

            {/* Time Card */}
            <div
              className="card-premium rounded-xl p-8 text-center animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-accent to-accent/80 rounded-full mb-6 shadow-lg">
                <Clock className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-primary mb-4">
                Time
              </h3>
              <p className="text-foreground font-light text-lg">
                2:00 PM - 4:00 PM
              </p>
            </div>

            {/* Location Card */}
            <div
              className="card-premium rounded-xl p-8 text-center animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-accent to-accent/80 rounded-full mb-6 shadow-lg">
                <MapPin className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-primary mb-4">
                Location
              </h3>
              <p className="text-foreground font-light text-lg">
                Grace Memorial Chapel
              </p>
              <p className="text-muted-foreground text-sm mt-2">
                123 Peaceful Lane, Springfield
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RSVP Form Section */}
      <section className="py-32 px-4 bg-card relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent opacity-3 rounded-full blur-3xl" />

        <div className="max-w-2xl mx-auto relative z-10">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-4">
              RSVP
            </h2>
            <p className="text-lg text-muted-foreground font-light">
              Please let us know if you plan to attend
            </p>
          </div>

          <div className="card-premium rounded-2xl p-12 shadow-xl">
            <form
              onSubmit={handleSubmit}
              className="space-y-8 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div>
                <Label
                  htmlFor="fullName"
                  className="text-foreground font-serif text-lg font-semibold mb-3 block"
                >
                  Full Name <span className="text-accent">*</span>
                </Label>
                <Input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="border-border focus:border-accent focus:ring-accent/30 text-base"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <Label
                    htmlFor="email"
                    className="text-foreground font-serif text-lg font-semibold mb-3 block"
                  >
                    Email Address <span className="text-accent">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="emailAddress"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.emailAddress}
                    onChange={handleChange}
                    required
                    className="border-border focus:border-accent focus:ring-accent/30 text-base"
                  />
                </div>

                <div>
                  <Label
                    htmlFor="phone"
                    className="text-foreground font-serif text-lg font-semibold mb-3 block"
                  >
                    Phone Number <span className="text-accent">*</span>
                  </Label>
                  <Input
                    id="phone"
                    name="phoneNumber"
                    type="tel"
                    placeholder="(555) 000-0000"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                    className="border-border focus:border-accent focus:ring-accent/30 text-base"
                  />
                </div>
              </div>

              <div>
                <Label
                  htmlFor="sex"
                  className="text-foreground font-serif text-lg font-semibold mb-3 block"
                >
                  Gender (Optional)
                </Label>
                <Select value={formData.sex} onValueChange={handleSelectChange}>
                  <SelectTrigger className="border-border focus:border-accent focus:ring-accent/30 text-base">
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
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-serif text-lg font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:shadow-lg shadow-md"
              >
                {isSubmitted
                  ? "Thank you for your response"
                  : "Confirm Attendance"}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="py-20 px-4 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-accent rounded-full blur-3xl" />
        </div>

        <div className="max-w-3xl mx-auto text-center relative z-10 animate-fade-in">
          <p className="text-lg mb-4 font-light leading-relaxed">
            Thank you for your prayers, love, and support during this time of
            reflection.
          </p>
          <p className="text-primary-foreground/70 text-sm font-light">
            In cherished memory of a life that brought joy to all who knew him.
          </p>
        </div>
      </section>
    </main>
  );
}




