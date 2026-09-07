---
qid: ing_d93dca9002__aws__local
question: 'Explain: The Retrieval Architecture Spectrum — Late Interaction Colbert'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 399
total_tokens: 629
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:30:15-05:00'
sources: []
---

**Situation / Task**  
While leading the AI Search team at a fintech startup, we had to improve our recommendation engine’s latency from ~350 ms to <100 ms for 10 M daily users while keeping accuracy high.

**Action**  
I introduced the **Retrieval‑Architecture Spectrum** and chose a *late‑interaction* model inspired by Colbert.  
1. **Pre‑indexing**: Store tokenized embeddings in an S3‑backed Parquet lake, refreshed nightly via Glue.  
2. **Real‑time retrieval**: Use Amazon Kendra for semantic search to fetch top‑k candidate items (k=50) in ~20 ms.  
3. **Late interaction scoring**: Batch the candidates into a Lambda@Edge function that runs a lightweight BERT fine‑tuned on user logs, scoring each against the query context.  
4. **Caching & scaling**: Cache top 10 k results per popular query in Amazon ElastiCache (Redis) with TTL=30 s; autoscale Lambda concurrency via CloudWatch.

**Result**  
Latency dropped to **78 ms** (−77 %), click‑through rate rose by **12 %**, and cost per request fell from $0.005 to $0.003 by leveraging spot instances for the inference step. The system now handles 5× traffic with 99.9 % availability.

**Reflection**  
I took *Ownership* of end‑to‑end performance, applied *Dive Deep* into embedding and inference trade‑offs, and used data (latency, CTR) to iterate quickly—an example of *Bias for Action* that a bar‑raiser would applaud.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
