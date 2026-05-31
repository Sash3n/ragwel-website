"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/components/ui/use-toast";
import { CONTACT } from "@/lib/constants";

const schema = z.object({
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  phone: z.string().optional(),
  email: z.string().min(1, "Email is required").email("Enter a valid email"),
  message: z.string().min(1, "Message is required"),
  preferredContact: z.enum(["phone", "email", "other"]).default("email"),
});

type FormValues = z.infer<typeof schema>;

// Static site: posts to Formspree when NEXT_PUBLIC_FORMSPREE_ID is set,
// otherwise falls back to a prefilled mailto: link.
const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID;

export function ContactForm() {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { preferredContact: "email" },
  });

  const preferred = watch("preferredContact");

  async function onSubmit(values: FormValues) {
    if (FORMSPREE_ID) {
      try {
        const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
          method: "POST",
          headers: { Accept: "application/json", "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });
        if (!res.ok) throw new Error("Request failed");
        toast({ title: "Message sent", description: "We'll be in touch shortly." });
        reset();
      } catch {
        toast({
          title: "Something went wrong",
          description: "Please email us directly at " + CONTACT.emailPrimary,
        });
      }
    } else {
      // mailto fallback for static hosting without Formspree configured.
      const body = encodeURIComponent(
        `Name: ${values.firstName ?? ""} ${values.lastName ?? ""}\n` +
          `Phone: ${values.phone ?? ""}\n` +
          `Preferred contact: ${values.preferredContact}\n\n${values.message}`
      );
      window.location.href = `mailto:${CONTACT.emailPrimary}?subject=${encodeURIComponent(
        "Website enquiry"
      )}&body=${body}`;
      toast({ title: "Opening your email client", description: "Complete the send to reach us." });
    }
  }

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
      noValidate
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name</Label>
          <Input id="firstName" {...register("firstName")} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name</Label>
          <Input id="lastName" {...register("lastName")} />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone</Label>
        <Input id="phone" type="tel" {...register("phone")} />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email *</Label>
        <Input
          id="email"
          type="email"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          {...register("email")}
        />
        {errors.email && (
          <p id="email-error" className="text-xs text-gold-bright">
            {errors.email.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message *</Label>
        <Textarea
          id="message"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          {...register("message")}
        />
        {errors.message && (
          <p id="message-error" className="text-xs text-gold-bright">
            {errors.message.message}
          </p>
        )}
      </div>

      <fieldset className="space-y-3">
        <legend className="micro-label text-white-dim">Preferred Contact</legend>
        <RadioGroup
          value={preferred}
          onValueChange={(v) =>
            setValue("preferredContact", v as FormValues["preferredContact"])
          }
          className="flex gap-6"
        >
          {(["phone", "email", "other"] as const).map((opt) => (
            <div key={opt} className="flex items-center gap-2">
              <RadioGroupItem value={opt} id={`contact-${opt}`} />
              <Label htmlFor={`contact-${opt}`} className="capitalize text-white">
                {opt}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </fieldset>

      <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
        {isSubmitting ? "Sending…" : "Send Message"}
      </Button>
    </motion.form>
  );
}
