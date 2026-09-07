---
qid: ing_f956747c15__aws__local
question: 'Q55: Your RAG system works great on test data but fails in production.
  What do you check?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 509
total_tokens: 750
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:41:58-05:00'
sources: []
---

**Situation / Task**  
In production our Retrieval‑Augmented Generation (RAG) pipeline was delivering 40 % lower relevance scores than on the test set – customers were flagging answers as “unhelpful” in the chat widget.

**Action**  
1. **Dive Deep into Data & Retrieval** – Checked S3 ingestion logs, confirmed that new documents were being indexed into OpenSearch every 5 min; however, the document‑vector store (managed via SageMaker’s vector embeddings) was lagging by ~30 s due to throttled Lambda invocations.  
2. **Monitor Latency & Throughput** – CloudWatch metrics showed retrieval latency spiking from 200 ms (dev) to 1.4 s (prod) during peak traffic, exceeding the SLA.  
3. **Validate Model Drift** – Ran a quick drift test against the latest user queries; cosine‑similarity scores dropped from 0.92 to 0.68.  
4. **Fix & Scale** – Increased Lambda concurrency to 200, added an SQS buffer, and switched to Aurora Serverless for metadata lookup to reduce contention. Deployed a new SageMaker endpoint with updated embeddings.

**Result**  
- Retrieval latency dropped to <300 ms; relevance score improved from 70 % back to 91 %.  
- Customer support tickets fell by **45 %** in the first week post‑fix, and SLA compliance rose to 99.8 %.  

**Learning**  
Ownership: I proactively triaged across services, documented the issue, and closed it within 4 hrs. Dive Deep: I quantified latency, drift, and concurrency bottlenecks. Future builds will include automated health checks for vector freshness and a “canary” deployment to surface similar regressions early.

*Leadership Principles:* **Customer Obsession**, **Ownership**, **Dive Deep**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
