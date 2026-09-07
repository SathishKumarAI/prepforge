---
qid: ing_3ab8f4417f__aws__local
question: How do you evaluate whether a pipeline change - parser, chunker, embedding
  model - made retrieval better or worse?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 413
total_tokens: 655
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:39:13-05:00'
sources: []
---

**Situation / Task**  
When I upgraded the document‑processing pipeline for our enterprise search product (parser → chunker → embedding model), my goal was to prove that the new configuration delivered *faster* and *more relevant* retrievals without increasing costs.

**Action**  
1. **Define Success Metrics** – Recall@10, Mean Reciprocal Rank (MRR), query latency, and compute cost per request.  
2. **A/B Test on Production** – Route 30 % of traffic to the new pipeline using an AWS App Mesh virtual router; keep the rest on the baseline.  
3. **Collect & Analyze Data** – Store logs in Amazon Kinesis Firehose → S3, run Athena queries for latency and MRR, and use CloudWatch metrics for CPU/Memory usage.  
4. **Statistical Significance** – Apply a two‑tailed t‑test (p < 0.01) to confirm differences are not due to noise.  
5. **Iterate on Feedback** – If latency spikes, switch the chunker back to a lighter tokenizer; if MRR drops, retrain embeddings with higher dimensionality.

**Result**  
- **Recall@10 increased from 0.68 to 0.74 (9% lift).**  
- **MRR rose from 0.42 to 0.48 (+14%).**  
- **Query latency stayed within 5 ms of baseline; compute cost fell by 12 % due to better parallelism on Amazon SageMaker endpoints.**  

**Reflection**  
I owned the end‑to‑end experiment, dove deep into telemetry to surface hidden bottlenecks, and turned data into actionable decisions—exactly what *Customer Obsession* and *Ownership* demand in Amazon.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
