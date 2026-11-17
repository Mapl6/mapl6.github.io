// Single source for site-wide copy until Sanity lands (plan Phase 2 step 4).
export const site = {
  name: "Mahdi",
  title: "Mahdi — Frontend Engineer (Motion & Performance)",
  description: "Frontend engineer building fast, accessible, motion-rich interfaces.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  city: "[City]",
  email: "hello@example.com", // TODO: real contact email
  socials: [
    { label: "GitHub", href: "https://github.com/" },
    { label: "LinkedIn", href: "https://linkedin.com/" },
  ],
};
