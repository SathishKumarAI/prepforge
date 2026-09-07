---
qid: ing_81cc0315c0__aws__local
question: 'Explain: RAD-O: Retrieval Augmented Decoding — Kv Cache And Context Caching'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 416
total_tokens: 652
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:18:21-05:00'
sources: []
---

**Situation / Task**  
When I joined the generative‑AI team at AWS, we were asked to reduce latency for a global chatbot that served millions of requests per day while keeping token‑level inference costs under $0.01/10k tokens. The existing model was too slow because every request triggered a full transformer forward pass.

**Action**  
I introduced **RAD‑O (Retrieval Augmented Decoding)** with two key caching layers:

1. **Key–Value (KV) Cache** – we pre‑compute the attention KV pairs for each document chunk in S3 and load them into an Elasticache Redis cluster per region. During decoding, the transformer reuses these KV tensors instead of recomputing them, cutting GPU FLOPs by ~70 %.  
2. **Context Caching** – we store frequently used prompts and partial responses in a DynamoDB table with TTL. For repeat queries, the system fetches the cached context, bypassing the encoder entirely.

I orchestrated this with SageMaker Pipelines, using Lambda to trigger cache refreshes on S3 updates, and CloudWatch metrics to auto‑scale Redis nodes based on request volume.

**Result**  
Latency dropped from 650 ms to **250 ms** (60 % improvement) while inference cost fell from $0.012 to **$0.008 per 10k tokens**—a 33 % cost saving. We also achieved 99.9 % availability by distributing Redis across AZs.

**Reflection (Bar‑raiser)**  
I owned the end‑to‑end pipeline, dived deep into transformer internals to identify KV reuse opportunities, and quantified impact with real metrics. The biggest learning was that aggressive cache invalidation caused stale responses; we added a versioning scheme to mitigate this, turning a potential failure into an incremental improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
