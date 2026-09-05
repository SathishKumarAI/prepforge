---
qid: ing_2f5f5a9109__fp__local
question: 'Explain: Design and build a webhook delivery system: your service must
  deliver events to customer-registered URLs reliably.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 452
total_tokens: 633
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:45:53-05:00'
sources: []
---

### From the problem to the solution

When a customer registers an endpoint `https://foo.com/webhook`, our system must guarantee that **every event** it receives from upstream services is eventually delivered to that URL *exactly once* and in order, even if the network drops packets or the customer’s server restarts.  

1. **Event source → durable queue**  
   The first principle is reliability: we cannot rely on a transient HTTP request to hold state. Persisting each event to an append‑only log (e.g., Kafka, S3 + DynamoDB) gives us *exactly‑once* semantics via idempotent keys and immutable storage.

2. **Delivery → exponential back‑off with jitter**  
   A naïve “retry until success” can overload the customer’s server and create thundering herd problems. The optimal strategy is to treat retries as a Poisson process: after each failure wait `min(max_backoff, base * 2^n) + random(0, jitter)` seconds. This keeps load spread while still guaranteeing eventual delivery.

3. **Concurrency → per‑customer sequencing**  
   To preserve order we run a single worker per customer URL. Workers poll the durable queue and push events to the endpoint. If a worker fails, another takes over using a lock (e.g., Redis `SETNX`) ensuring no two workers send the same event concurrently.

4. **Observability → metrics & alerts**  
   Every request outcome is logged with a correlation ID. Aggregating success/failure rates per customer triggers SLA alerts.

### Non‑obvious insight

Most designs treat retries as “retry until 200”. The deeper principle here is *time‑to‑first‑success* versus *total cost of ownership*. By modelling the retry interval as a random variable with bounded mean, we achieve a predictable **Mean Time to Recovery (MTTR)** while keeping the average request rate below the customer’s capacity. This probabilistic smoothing is often overlooked but dramatically reduces burst traffic that can cause cascading failures in both our system and the consumer’s infrastructure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
