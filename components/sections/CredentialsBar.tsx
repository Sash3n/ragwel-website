import { CREDENTIAL_ACRONYMS } from "@/lib/constants";

export function CredentialsBar() {
  return (
    <section className="border-y border-white-faint bg-black py-10">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="micro-label text-white/40">
          Registered with{" "}
          <span className="text-gold">
            {CREDENTIAL_ACRONYMS.join(" · ")}
          </span>
        </p>
      </div>
    </section>
  );
}
