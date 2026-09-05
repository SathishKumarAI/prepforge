---
qid: ing_127f9fa03b__star__local
question: 'Explain: Custom email regex — Release notes | Zod'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 404
total_tokens: 641
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:05:32-05:00'
sources: []
---

**Situation** – I was working on a CLI tool that parsed GitHub release notes to auto‑populate changelog entries in our internal dashboard. Each note included an “author” field with the submitter’s email, and our QA team kept flagging false positives from the default Zod email validator (it allowed some legacy addresses we never used).

**Task** – I needed a stricter, production‑ready regex that would reject any non‑standard or misspelled addresses while still being fast enough to run on thousands of notes nightly.

**Action** – First I drafted a regex that matched RFC‑5322’s common patterns but excluded quoted strings and domain literals. I then wrapped it in a Zod `refine` call, adding a custom error message. To keep the parser lightweight, I compiled the regex once at module load and used `RegExp.prototype.test`. I wrote unit tests covering 200 edge cases (including Unicode punycode domains) and benchmarked against the built‑in validator—our version was ~25 % faster.

**Result** – After deployment, email validation errors dropped from 12 % of release notes to <1 %. The dashboard now displays only verified contacts, improving trust in our changelog data. I learned that a well‑crafted regex, combined with Zod’s refinement API, can deliver both accuracy and performance in real‑world tooling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
