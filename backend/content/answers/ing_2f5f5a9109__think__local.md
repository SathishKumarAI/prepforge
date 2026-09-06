---
qid: ing_2f5f5a9109__think__local
question: 'Explain: Design and build a webhook delivery system: your service must
  deliver events to customer-registered URLs reliably.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 200
output_tokens: 570
total_tokens: 770
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T05:48:10-05:00'
sources: []
---

**1️⃣ Clarify the problem & assumptions**  
- *What is a “webhook” here?* – an HTTP POST/GET to a user‑supplied URL whenever an event occurs.  
- *Reliability requirements*: at least once delivery, eventual consistency, no data loss, bounded latency.  
- *Scale*: how many events per second, number of customers, size of payloads.  
- *Failure modes*: network timeouts, 5xx responses, DNS failures, TLS cert errors, rate‑limits.  
- *Metrics to expose*: success/failure counts, retries, delivery latency.

**2️⃣ Mental model / architecture framework**  
Use a **publish‑subscribe + retry queue** pattern:  
- **Event source → Topic/Queue (e.g., Kafka, SQS)** – decouples producers from consumers.  
- **Worker pool** pulls events and pushes to the target URL.  
- **Retry policy** (exponential back‑off, max attempts).  
- **Dead‑letter queue** for permanently failed deliveries.  
Add a **monitoring layer** and an **admin API** for customers to register/edit URLs.

**3️⃣ Step‑by‑step reasoning**  
1. Customer registers URL → store in DB with metadata (auth token, headers, max retries).  
2. Event occurs → publish message to queue with payload + target list.  
3. Worker fetches message, iterates over targets:  
   - Send HTTP request with proper auth/headers.  
   - On success → mark as delivered.  
   - On transient error (5xx, timeout) → re‑queue with back‑off counter.  
4. If retry count exceeded → move to dead‑letter queue and alert customer.  
5. Provide webhook logs & status via API for customers.

**4️⃣ Common traps to avoid**  
- *Blocking workers on slow HTTP calls*: use async I/O or thread pools.  
- *Duplicate deliveries*: idempotency keys in payloads, dedupe logic.  
- *Ignoring TLS errors*: enforce strict cert validation; allow custom CA if needed.  
- *Under‑provisioning retry queue*: ensure enough consumer capacity for burst traffic.

**5️⃣ Sanity‑check & verbalize**  
- Verify that every failure path eventually leads to a visible outcome (success, retry, dead‑letter).  
- Explain how the system scales: “Adding more workers automatically increases throughput.”  
- Highlight observability: “We expose Prometheus metrics so you can monitor delivery rates and latencies.”  

By following this checklist, the candidate demonstrates clear understanding of requirements, architectural design, error handling, scalability, and operational concerns.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
