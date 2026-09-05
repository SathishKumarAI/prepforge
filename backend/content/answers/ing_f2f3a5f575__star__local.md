---
qid: ing_f2f3a5f575__star__local
question: You don't have an eval team. How do you know your feature actually works
  - and keeps working?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 317
total_tokens: 562
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:33:52-05:00'
sources: []
---

**Situation:**  
When I built the real‑time sentiment scoring engine for a streaming media platform, we had no dedicated QA or evaluation team because the product was launched in an agile sprint cycle.

**Task:**  
I needed to guarantee that the sentiment model produced accurate scores and remained stable as new content types were added, all while staying within our 10 ms inference budget.

**Action:**  
First, I set up a lightweight data pipeline that ingested user‑generated captions, automatically tagged them with gold labels from an existing human moderation queue. Using this stream, I built a continuous integration test harness in Python that ran the model on each batch and calculated precision/recall every hour. I then implemented a rolling window of 7 days for drift detection: if the F1‑score dropped below 0.85 or the mean absolute error increased by more than 15%, an alert was sent to the dev channel. To keep performance, I profiled the inference code with PyTorch’s JIT and replaced a slow attention layer with a fused kernel, cutting latency from 12 ms to 9 ms.

**Result:**  
Within two weeks of deployment, the model maintained an average F1 of 0.92 over a month, and we caught a drift event caused by a new slang trend before it impacted user experience. The automated pipeline reduced manual QA effort by 80% and gave us confidence that the feature kept working without a formal evaluation team.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
