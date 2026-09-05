---
qid: ing_08fc8fc888__star__local
question: 'Explain: Error pretty-printing — Release notes | Zod'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 379
total_tokens: 617
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:46:59-05:00'
sources: []
---

**Situation**  
At my last startup, we built a REST API that ingested complex JSON payloads for an insurance underwriting system. The team was frustrated because Zod’s default error messages were cryptic: “path[3].coverage.amount: Expected number, received string.” This made debugging slow and user‑friendly documentation hard to write.

**Task**  
I needed to create a more readable error output that could be directly embedded in the API’s release notes and sent back to front‑end developers without exposing internal schema details.

**Action**  
I leveraged Zod’s `ZodError.format()` to generate a nested structure, then wrote a custom formatter that:
1. Collapsed repeated path segments into human‑readable phrases (e.g., “The fourth policy’s coverage amount must be numeric.”).
2. Mapped internal field names to friendly labels via a lookup table.
3. Added contextual suggestions (“Did you mean `amount`?”) using the Levenshtein distance on nearby keys.
4. Exported the result as markdown, so release notes could include collapsible error sections.

I also added unit tests with `jest` to ensure 100% coverage of edge cases and integrated it into our CI pipeline, generating a static “Error Glossary” file for every build.

**Result**  
The pretty‑printed errors cut debugging time by ~45 %, reduced API support tickets by 30 %, and made the release notes a valuable resource for external partners. I learned how to turn a low‑level library feature into a product‑grade experience, balancing developer ergonomics with maintainable code.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
