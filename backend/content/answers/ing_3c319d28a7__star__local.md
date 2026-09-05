---
qid: ing_3c319d28a7__star__local
question: 'Explain: TL;DR — Harvey'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 400
total_tokens: 632
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:28:42-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup, we had a growing archive of regulatory filings and compliance documents that our legal team struggled to sift through; each file averaged 12 pages, and the average review cycle was two weeks.

**Task** – I was tasked with building an AI‑driven summarizer—“Harvey”—to generate concise TL;DRs so lawyers could quickly assess relevance before diving in. The goal was a 30% reduction in review time while maintaining at least 90 % factual accuracy.

**Action** – I started by collecting a labeled corpus of 4,000 filings with human‑written summaries. Using Hugging Face’s transformers library, I fine‑tuned a pre‑trained BART model on this data, adding a custom loss that penalized omission of key compliance terms. To keep latency low, I deployed the model on AWS Lambda with SageMaker for inference, caching results in Redis. For evaluation, I measured ROUGE‑L and performed manual spot checks against legal experts.

**Result** – Harvey produced TL;DRs in under 0.8 seconds per document, and our pilot test cut the average review time from 14 days to 9 days—a 36% improvement. Accuracy remained above 92 %, and the team reported higher confidence in decision‑making. I learned that balancing model complexity with operational constraints is crucial, and that involving domain experts early speeds adoption.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
