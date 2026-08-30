import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  id,
  tone = "ivory",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "ivory" | "sand" | "charcoal" | "dawn";
}) {
  const tones = {
    ivory: "bg-background",
    sand: "bg-secondary",
    charcoal: "bg-charcoal text-ivory",
    dawn: "dawn",
  } as const;

  return (
    <section id={id} className={cn("px-6 py-24 sm:px-10 md:py-32", tones[tone], className)}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

export function Display({
  children,
  className,
  as: Tag = "h2",
}: {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <Tag
      className={cn(
        "mt-5 text-4xl leading-[1.08] sm:text-5xl md:text-6xl",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

export function Lede({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn("mt-6 max-w-2xl text-base leading-[1.9] text-muted-foreground sm:text-lg", className)}>
      {children}
    </p>
  );
}

type ButtonTone = "solid" | "outline" | "gold" | "light";

const buttonBase =
  "inline-flex items-center justify-center px-8 py-4 text-[0.7rem] tracking-[0.26em] uppercase transition-all duration-500 rounded-xs";

const buttonTones: Record<ButtonTone, string> = {
  solid: "bg-charcoal text-ivory hover:bg-charcoal/85",
  outline: "border border-charcoal/30 text-charcoal hover:border-charcoal hover:bg-charcoal hover:text-ivory",
  gold: "bg-gold text-charcoal hover:bg-gold/85",
  light: "border border-ivory/40 text-ivory hover:bg-ivory hover:text-charcoal",
};

export function BookButton({
  label = "Book a Session",
  to = "/book",
  tone = "solid",
  className,
}: {
  label?: string;
  to?: string;
  tone?: ButtonTone;
  className?: string;
}) {
  return (
    <Link to={to} className={cn(buttonBase, buttonTones[tone], className)}>
      {label}
    </Link>
  );
}

export function LinkButton({
  children,
  to,
  hash,
  tone = "outline",
  className,
}: {
  children: ReactNode;
  to: string;
  hash?: string;
  tone?: ButtonTone;
  className?: string;
}) {
  return (
    <Link
      to={to}
      {...(hash ? { hash } : {})}
      className={cn(buttonBase, buttonTones[tone], className)}
    >
      {children}
    </Link>
  );
}

export function GoldRule({ className }: { className?: string }) {
  return <div aria-hidden className={cn("rule-gold my-10", className)} />;
}
