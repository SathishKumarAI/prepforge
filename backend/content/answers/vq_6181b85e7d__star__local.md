---
qid: vq_6181b85e7d__star__local
question: What are the limitations of Generative AI?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 300
total_tokens: 534
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:01:22-05:00'
sources: []
---

**Situation** – In late 2023 I was leading a prototype for an internal chatbot that could generate code snippets and documentation from natural language prompts for our software team. The goal was to cut onboarding time by 30 % across new hires.

**Task** – My job was to evaluate the generative model’s reliability, identify its limits, and design safeguards so developers wouldn’t blindly trust outputs.

**Action** – I set up a systematic test suite: we fed 1,200 prompts covering edge cases (rare APIs, legacy code, security‑critical functions). The model produced 93 % correct snippets but had three clear failure modes: hallucinated dependencies, outdated syntax for deprecated libraries, and occasional plagiarism of open‑source snippets. I introduced a confidence score based on token likelihood, added a post‑generation static analyzer that flagged missing imports or mismatched types, and built a feedback loop where developers could flag false positives to retrain the model.

**Result** – After deploying these checks, error rates dropped from 7 % to under 1.2 %, and onboarding time fell by 25 %. I learned that generative AI excels at pattern recall but requires rigorous validation pipelines; transparency and human‑in‑the‑loop safeguards are non‑negotiable for production use.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
