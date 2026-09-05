---
qid: ing_3ab8f4417f__star__local
question: How do you evaluate whether a pipeline change - parser, chunker, embedding
  model - made retrieval better or worse?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 314
total_tokens: 562
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:26:02-05:00'
sources: []
---

**Situation** – In the summer of 2023 I was tasked with improving our question‑answering pipeline for a legal‑tech startup. The existing system used an older parser and a rule‑based chunker, producing embeddings that were often noisy and caused recall to dip below 70 % on our internal QA benchmark.

**Task** – My goal was to evaluate whether swapping in a new dependency‑parser (spaCy v3) and a transformer‑based chunker (BERT‑chunk) would actually raise retrieval precision without hurting latency or cost.

**Action** – I set up an A/B test harness: for each query I ran both pipelines on the same document corpus, generated embeddings with our standard Sentence‑Transformers model, and measured recall@k and mean reciprocal rank against a curated ground truth. I also logged GPU utilization and inference time to capture performance trade‑offs. After 48 hours of data collection, I plotted precision‑recall curves and performed a paired t‑test on the retrieval scores.

**Result** – The new pipeline increased recall@10 from 68 % to 82 % (p < 0.01) while keeping latency within 5 ms per query, and GPU usage rose only by 12 %. I learned that systematic A/B testing with statistical validation is essential for quantifying NLP pipeline changes, not just anecdotal improvements.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
