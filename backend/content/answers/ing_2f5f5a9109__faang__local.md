---
qid: ing_2f5f5a9109__faang__local
question: 'Explain: Design and build a webhook delivery system: your service must
  deliver events to customer-registered URLs reliably.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 523
total_tokens: 767
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:33:59-05:00'
sources: []
---

**Clarify**

> *What do we mean by “reliably”?*  
> 1️⃣ At least one successful HTTP call per event (idempotent).  
> 2️⃣ Retries on transient errors, back‑off, and eventual delivery guarantees.  
> 3️⃣ No data loss even if the webhook consumer is temporarily unreachable.  
> Assumptions: we can store events in a durable queue, have access to metrics/alerting, and customer URLs are HTTPS.

**Approach**

1. **Event ingestion** – publish each event to a distributed message broker (Kafka/RabbitMQ).  
2. **Delivery workers** – poll the topic, de‑duplicate by event ID, and schedule HTTP POSTs.  
3. **Retry policy** – exponential back‑off with jitter; cap retries at N = 5.  
4. **Circuit breaker** – pause deliveries to a URL after M consecutive failures.  
5. **Dead‑letter queue (DLQ)** – un‑delivered events go here for manual inspection.  
6. **Metrics & alerts** – track success rate, latency, and DLQ size.

**Depth**

*Code snippet (pseudo):*

```python
for event in consumer:
    url = registry.get(event.customer_id)
    try:
        resp = requests.post(url, json=event.payload, timeout=5)
        resp.raise_for_status()
        ack()  # commit offset
    except TransientError as e:
        retry_with_backoff(event, attempts+1)
    except PermanentError:
        dlq.publish(event)
```

*Complexities:*  
- **Throughput:** O(1) per event; horizontal scaling of workers.  
- **Consistency:** At‑least‑once guarantee via idempotent payloads or sequence numbers.

**Edge Cases**

- *Duplicate URLs*: dedupe in registry.  
- *High latency consumer*: timeout and fallback to DLQ.  
- *Unresponsive broker*: use a local buffer with persistence (e.g., disk queue).

**Optimize & Communicate**

- Add **sharding by customer ID** for parallelism while preserving order per client.  
- Implement **adaptive back‑off** based on observed latency trends.  
- Present the design in a diagram, walk through failure scenarios, and explain trade‑offs (latency vs. reliability). This shows structured thinking, depth, and clear communication—key FAANG signals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
