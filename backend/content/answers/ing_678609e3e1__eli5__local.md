---
qid: ing_678609e3e1__eli5__local
question: 'Explain: Top-level string formats — Release notes | Zod'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 307
total_tokens: 467
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:20:10-05:00'
sources: []
---

Imagine you’re packing a suitcase before a trip.  
Each **top‑level string format** is like a label on the suitcase that tells everyone exactly what’s inside—whether it’s a passport, a phone charger, or a set of clothes. In Zod (a JavaScript/TypeScript validation library), those labels are the *built‑in formats* you can attach to a string field so the library knows how to check it.

| Format | What it checks | Analogy |
|--------|----------------|---------|
| `email` | Looks like “user@domain.com” | A passport with a valid visa stamp |
| `url`   | Starts with http/https and looks like a web address | A phone charger that plugs into the correct outlet |
| `uuid`  | Follows the 8‑4‑4‑4‑12 hex digit pattern | A luggage tag that matches your reservation number |

When you add one of these formats to a Zod schema, it’s as if you’re attaching a clear label: “This string must be an email.” If someone tries to put a non‑email string in there, Zod will flag it, just like a travel agent would stop a passport that doesn’t match the required format. This keeps your data clean and predictable without writing extra code.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
