---
qid: ing_127f9fa03b__fp__local
question: 'Explain: Custom email regex — Release notes | Zod'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 420
total_tokens: 591
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:45:02-05:00'
sources: []
---

**Why Zod’s “custom email regex” matters**

Zod is a schema‑validation library that turns *data* into a well‑typed, predictable shape.  
When validating an e‑mail address, the naïve `/.+@.+\..+/` pattern satisfies the syntactic requirement but leaks two deep problems:

1. **False positives** – it accepts “foo@bar” (no TLD) or “a@@b.com”.  
2. **False negatives** – it rejects valid addresses with quoted local parts, internationalised domain names, or new top‑level domains.

Zod’s release notes introduce a *custom regex* that solves these trade‑offs by anchoring the pattern to RFC 5322 while remaining permissive enough for real‑world data:

```ts
const email = z.string().regex(
  /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
  { message: "Invalid e‑mail" }
);
```

* **Why this form?**  
  - The left side `[^\s@]+` guarantees at least one non‑space character before the `@`.  
  - After `@`, we require a domain with at least two characters, matching common TLDs and future extensions.  
  - The final `i` flag makes the check case‑insensitive, honoring the fact that e‑mail addresses are largely case‑neutral.

* **Non‑obvious insight** – *anchoring to the end of the string (`$`) is crucial.* Many libraries forget this, allowing trailing junk (e.g., `"user@example.com "`). The `$` ensures no hidden characters slip through, preserving data integrity in downstream systems that may otherwise treat the address as valid.

In short, the custom regex strikes a balance between formal compliance and practical usability, giving developers a reliable default without sacrificing flexibility.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
