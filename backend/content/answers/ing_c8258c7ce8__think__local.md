---
qid: ing_c8258c7ce8__think__local
question: 'Explain: Requirements Gathering — Design Notification Service | System
  Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 485
total_tokens: 680
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T14:11:14-05:00'
sources: []
---

**1️⃣ Clarify Scope & Constraints**  
   - Identify the business goal (e.g., alert users of new content).  
   - Ask about volume, latency, reliability, and data sources.  
   - Note assumptions: single‑tenant vs multi‑tenant, real‑time vs batch, cost limits.

**2️⃣ Adopt a System‑Design Framework**  
   - *Requirements*: functional (send email/SMS), non‑functional (scalability, fault tolerance).  
   - *High‑level components*: ingestion pipeline, message broker, worker pool, notification dispatcher, persistence layer.  
   - *Data flow diagram* to visualize end‑to‑end.

**3️⃣ Reason Through Each Layer**  
   1. **Ingestion** – event source (e.g., user action). Use lightweight API or webhook.  
   2. **Queueing** – Kafka/Redis Streams for decoupling; explain partitioning for ordering.  
   3. **Processing** – stateless workers that enrich events, decide channel, apply rate‑limits.  
   4. **Dispatch** – integrate with email/SMS APIs, handle retries/backoff, idempotency.  
   5. **Storage** – store sent logs in a write‑optimized DB (Cassandra) and analytics in OLAP (Redshift).  
   6. **Monitoring** – metrics (throughput, error rates), alerts, dashboards.

**4️⃣ Avoid Common Traps**  
   - Don’t ignore *exactly‑once* semantics for notifications; use idempotent keys.  
   - Skip over *data consistency* between queue and DB; explain eventual consistency model.  
   - Forget to discuss *security* (encryption in transit, API auth).  
   - Over‑engineer: keep the design simple yet extensible.

**5️⃣ Sanity‑Check & Communicate**  
   - Verify each requirement is addressed.  
   - Walk through a sample notification path, highlighting where bottlenecks could appear.  
   - Summarize trade‑offs (e.g., Kafka vs SQS).  
   - End with an open question: “How would you handle a sudden spike in traffic?” to demonstrate depth and engagement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
