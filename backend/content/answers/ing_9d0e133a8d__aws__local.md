---
qid: ing_9d0e133a8d__aws__local
question: Your service consumes structured JSON from an LLM. How do you make that
  reliable?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 493
total_tokens: 729
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:20:03-05:00'
sources: []
---

**Situation (S)** – In a recent project we built an *AI‑generated data ingestion* pipeline that accepted structured JSON from an LLM for downstream analytics. The team noticed intermittent schema drift and occasional corrupt payloads, which risked breaking downstream services.

**Task (T)** – I was charged with making the ingestion **reliable**, ensuring every record met our contract before it hit production tables, while keeping latency < 200 ms and cost under $0.05 per request.

**Action (A)**  
1. **Schema validation layer** – Added a *JSON‑schema* validator in an API Gateway + Lambda integration; any payload failing the schema is rejected with detailed error logs.  
2. **Idempotency & deduplication** – Stored a SHA‑256 hash of each payload in DynamoDB (partition key = hash) to guard against duplicate LLM retries.  
3. **Retry strategy** – Leveraged SQS “dead‑letter” queues for malformed messages; Lambda auto‑retries 2× with exponential backoff, feeding back into the same queue for visibility.  
4. **Observability** – CloudWatch metrics (`validation_failures`, `duplicate_requests`) trigger SNS alerts and feed a Step Function that rolls back downstream writes if validation fails after 3 attempts.  

**Result (R)** – Within two weeks we reduced downstream data errors by **97 %**, cut SLA violations from 12 % to <0.1 %, and kept the per‑request cost at $0.04. The pipeline handled >10k requests/sec with 99.9 % availability.

**Leadership Principles Highlighted**  
- *Customer Obsession* – Deliver clean data for our analytics customers.  
- *Ownership* – Designed end‑to‑end fault tolerance, not just a patch.  

Bar‑raisers look for **ownership**, deep dive into failure modes, quantified impact, and lessons learned (e.g., we now auto‑regenerate schemas when drift is detected).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
