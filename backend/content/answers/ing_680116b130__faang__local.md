---
qid: ing_680116b130__faang__local
question: 'Explain: Publisher-Subscriber — Top 6 Cloud Messaging Patterns'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 514
total_tokens: 749
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:45:46-05:00'
sources: []
---

**Publisher‑Subscriber in the cloud – top 6 messaging patterns**

| # | Pattern | What it solves | Typical cloud services |
|---|---------|----------------|------------------------|
| 1 | **Basic Pub/Sub** | One publisher → many subscribers, fire‑and‑forget. | Cloud Pub/Sub (GCP), SNS + SQS (AWS), Event Grid (Azure) |
| 2 | **Topic/Channel filtering** | Subscribers receive only messages matching tags or attributes. | Attributes in GCP Pub/Sub, Message Attributes in AWS SNS |
| 3 | **Fan‑out with dead‑letter queues** | Guarantees delivery; undeliverable messages go to a DLQ for later inspection. | DLQs in SQS/SNS, DeadLetterTopic in GCP |
| 4 | **Message sequencing / ordering** | Preserve order per key or globally. | Ordering keys (GCP), FIFO queues (AWS) |
| 5 | **Request‑Response (RPC over Pub/Sub)** | Enables synchronous patterns via correlation IDs and temporary topics. | Lambda + SNS, Cloud Functions + Pub/Sub |
| 6 | **Hybrid/Composite** | Combine pub/sub with request/reply or fan‑out+filter for complex workflows. | Cloud Tasks + Pub/Sub, EventBridge rules |

---

### How to choose

1. **Throughput & latency** – FIFO/Fan‑out → higher latency; simple Pub/Sub → low latency.  
2. **Reliability** – DLQ and retries are mandatory if 99.9 % delivery is required.  
3. **Ordering needs** – use ordering keys or dedicated FIFO queues.  
4. **Cost & scaling** – serverless topics scale automatically, but may cost more per message than managed queues.

---

### Edge‑case checklist

| Scenario | What to test |
|----------|--------------|
| Back‑pressure | Verify retries don’t flood the subscriber. |
| Message size limits | Ensure payloads stay below service caps (e.g., 10 MB in Pub/Sub). |
| Idempotency | Subscribers should handle duplicate messages gracefully. |

---

### Takeaway

Pick the pattern that matches your **throughput, ordering, and fault‑tolerance** needs; combine them if you need multi‑step workflows. This structured approach keeps design clear, testable, and aligned with cloud best practices.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
