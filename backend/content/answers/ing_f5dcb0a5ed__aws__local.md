---
qid: ing_f5dcb0a5ed__aws__local
question: 'Explain: RAG vs. 2M Context (The "Hybrid Era") — Rag Fundamentals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 412
total_tokens: 650
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:32:45-05:00'
sources: []
---

**Situation & Task**  
I led a cross‑function AI team at a fintech startup to deliver real‑time credit‑risk scoring. Our models needed up‑to‑second context from millions of user transactions while staying within the 2 MB payload limit of our inference API.

**Action**  
1. **RAG (Retrieval‑Augmented Generation)** – I built an ElasticSearch cluster on AWS OpenSearch to index all transaction logs, enabling sub‑100 ms vector searches for relevant snippets.  
2. **Hybrid 2 M Context** – For the remaining context, I pre‑computed a “knowledge base” of summary embeddings (≈10 KB each) stored in DynamoDB with TTL, so the inference layer could pull only the top‑k summaries when the request payload was already near the limit.  
3. **AWS Services & Trade‑offs**  
   * OpenSearch (scalable, low‑latency) vs. SageMaker endpoint (higher cost but auto‑scale).  
   * DynamoDB for fast key‑value lookups; S3 for archival logs to keep costs down.  
4. **Result** – End‑to‑end latency dropped from 650 ms to 220 ms, while inference accuracy improved by 12% (AUC ↑ 0.04). We cut API cost by 35 % and maintained 99.9 % availability.

**Reflection**  
I owned the end‑to‑end pipeline, dove deep into latency traces, and iterated on the hybrid schema after a production failure that revealed stale embeddings. This demonstrates *Ownership*, *Dive Deep*, and *Deliver Results*—the very bar‑raiser traits Amazon looks for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
