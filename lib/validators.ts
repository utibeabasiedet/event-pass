import { z } from "zod";

export const rsvpSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  emailAddress: z.string().email("Enter a valid email"),
  phoneNumber: z.string().min(7, "Enter a valid phone number"),
  sex: z.string().optional().or(z.literal("")),
  eventId: z.string().min(1),
});

export type RSVPInput = z.infer<typeof rsvpSchema>;
