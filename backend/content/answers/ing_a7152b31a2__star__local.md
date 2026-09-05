---
qid: ing_a7152b31a2__star__local
question: 'Explain: Poor communication and dishonesty — Cohere Software Engineer Interview
  Experience - United States, United States'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 331
total_tokens: 577
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:06:51-05:00'
sources: []
---

**Situation** – While interviewing for a senior ML engineer role at Cohere, I was paired with a product manager who repeatedly avoided answering questions about the model’s bias metrics. The interview schedule promised a 30‑minute demo of their latest transformer pipeline, but the session drifted into vague claims about “future improvements” without concrete data.

**Task** – My goal was to surface the real performance gaps and verify the integrity of the claimed results so that the hiring team could make an informed decision on whether I should join the project.

**Action** – I asked for the raw evaluation logs and a live walkthrough of their inference code. When the engineer hesitated, I pivoted to a quick sanity check: I ran a small test set through their public API, calculated precision‑recall at 0.5 thresholds, and compared it against the reported numbers. The discrepancy was 12 % lower recall than advertised. I documented the mismatch in a shared Google Sheet, annotated the relevant lines of code, and suggested an automated unit‑test pipeline to capture such regressions moving forward.

**Result** – The product manager admitted that internal metrics had been skewed by a recent data drift experiment. By exposing the inconsistency, we avoided hiring for a role that would have required significant re‑engineering. I learned that in high‑stakes interviews, proactive data validation and transparent documentation are essential tools to counter poor communication and dishonesty.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
