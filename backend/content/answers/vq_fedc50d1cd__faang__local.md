---
qid: vq_fedc50d1cd__faang__local
question: What are the three different types of Error Handling?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 652
total_tokens: 885
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:44:16-05:00'
sources: []
---

**1️⃣ Clarify**

> *Question:* “What are the three different types of error handling?”  
> *Assumptions:*  
> – We’re talking about **runtime error‑handling patterns** in data pipelines (ETL/ELT).  
> – The interview expects a concise taxonomy that covers both system‑level and business‑logic errors.  

**2️⃣ Approach**

I’ll:  
1. Enumerate the three categories.  
2. Explain each with typical triggers, handling tactics, and tools.  
3. Touch on trade‑offs (latency vs reliability).  

**3️⃣ Depth**

| Category | Typical Triggers | Handling Strategy | Common Tools |
|----------|------------------|-------------------|--------------|
| **System‑Level Errors** | Network drops, disk full, DB connection failures | *Retry + Backoff* → idempotent ops; *Circuit Breaker* to prevent cascading failures. | AWS SQS DLQ, Kafka retry topics, Azure Event Hubs dead‑letter queues |
| **Data‑Quality / Validation Errors** | Schema mismatch, null in NOT NULL column, out‑of‑range values | *Schema enforcement*, *Sanitization*, *Masking*. If irrecoverable → route to a *Quarantine* table for manual review. | AWS Glue Crawler + Validator, Great Expectations, dbt tests |
| **Business‑Logic Errors** | Business rules violated (e.g., negative balance), cross‑table consistency | *Transactional rollback*, *Compensating actions* (e.g., publish compensating message). | Snowflake Streams & Tasks, Airflow XComs, Kafka Streams |

- **Complexity:**  
  - System retries: O(1) per event but can accumulate latency.  
  - Validation: linear scan over batch; cost proportional to size.  
  - Business rollback: may require multi‑step compensation—O(k) where *k* is number of dependent services.

**4️⃣ Edge Cases**

- *Infinite retry loops*: implement max attempts + alerting.  
- *Partial failures in a batch*: need per‑record error isolation (e.g., using Spark’s `foreachBatch` with try/except).  
- *Stateful vs stateless pipelines*: circuit breakers only make sense when state is maintained.

**5️⃣ Optimize & Communicate**

- **Observability:** expose metrics (`retry_count`, `dead_letter_rate`) to Grafana; set alerts for thresholds.  
- **Idempotency:** design write operations so retries don’t corrupt data (use upserts).  
- **Documentation:** maintain a living “Error‑Handling Playbook” so new engineers can pick up patterns quickly.

> *Narrative:* I’d explain that robust pipelines layer these three error types—system resilience, data integrity, and business correctness—each with distinct tooling and trade‑offs. This showcases structured thinking, depth in implementation choices, and an awareness of operational impact—all key for a FAANG interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
