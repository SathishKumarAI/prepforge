---
qid: ing_10e76dd599__faang__local
question: 'Explain: Push vs Pull Delivery — Pub/Sub | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 514
total_tokens: 749
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:22:55-05:00'
sources: []
---

**Push vs Pull Delivery – Pub/Sub**

| | **Push** | **Pull** |
|---|---|---|
| **Flow** | Broker pushes messages to subscribers (HTTP/WebSocket). | Subscribers poll the broker for new messages. |
| **Latency** | Low; broker sends immediately when available. | Higher; latency depends on polling interval. |
| **Back‑pressure** | Handled by flow control or `Retry-After` headers. | Simple: subscriber stops polling until ready. |
| **Throughput** | Limited by network bandwidth and client capacity. | Can batch requests, reducing overhead. |
| **Reliability** | Requires idempotent handling; broker may retry on 5xx/4xx errors. | Broker guarantees delivery once acknowledged. |

---

### Clarify  
Explain that we’re comparing two message‑delivery patterns in a distributed pub/sub system and confirm the use‑case: real‑time notifications vs batch processing.

### Approach  
Outline key dimensions: latency, scalability, back‑pressure, error handling, cost, and client complexity. Mention trade‑offs for each pattern.

### Depth  
- **Push**: Broker holds a persistent connection (e.g., HTTP/2, gRPC). It sends messages as soon as they’re published. Clients must expose an endpoint; the broker may retry on failures. Flow control is critical to avoid overload.
- **Pull**: Clients poll (`GET /messages?offset=…`). The broker stores offsets and guarantees at‑least‑once delivery. Batching reduces round trips but increases wait time. Easier to scale horizontally; no need for persistent connections.

### Edge Cases  
- Network partitions: push may lose messages if the client is unreachable; pull can retry without broker changes.
- Burst traffic: push can overwhelm a slow consumer unless flow control is in place; pull naturally throttles by polling frequency.
- Message ordering: both patterns preserve order per subscription but need deduplication for retries.

### Optimize & Communicate  
Emphasize that the choice hinges on use‑case requirements. For low‑latency alerts, push wins; for heavy analytics pipelines, pull is preferable due to batch efficiency and simpler scaling. Summarize trade‑offs succinctly so interviewers see a clear decision framework.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
