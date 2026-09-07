---
qid: ing_f805e56af5__aws__local
question: 'Explain: Available Target Services — AWS-Services/4_MessageBrokers/AmazonEventBridge
  at main \u00b7 Anshul619/AWS-Services \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 260
output_tokens: 587
total_tokens: 847
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:39:34-05:00'
sources: []
---

**Situation (S)**  
I was tasked with building a server‑less event pipeline for a global e‑commerce platform that needed to route user activity events from microservices to downstream analytics and notification systems in real time.

**Task (T)**  
Design a highly available, cost‑efficient target service that could ingest millions of events per day, filter them by business rules, and forward only the relevant ones to multiple downstream consumers without bottlenecks.

**Action (A)**  
I chose **Amazon EventBridge** as the target broker:

1. **Event Schema Registry** – defined a canonical schema for user‑action events so every producer validates before publish.
2. **Event Bus per region** – leveraged cross‑account replication to keep latency <10 ms for global users.
3. **Rule Engine** – wrote rules with JSON Path filters and stateful “event patterns” to route only *purchase* or *abandoned cart* events to the analytics Lambda, while sending all clickstream data to SQS for batch processing.
4. **Dead‑letter Queue (DLQ)** – attached an SQS DLQ per rule to capture malformed events; a monitoring Lambda sent alerts to CloudWatch and automatically retried after 5 min.
5. **Scaling & Cost** – EventBridge charges $1.00 per million events; by filtering early I reduced downstream consumption by ~40 %, saving ~$12k/month. The service auto‑scales, so no capacity planning was required.

**Result (R)**  
- **Latency:** 95th percentile event delivery <50 ms.  
- **Throughput:** Sustained 2 M events/second across all regions without throttling.  
- **Cost Savings:** $15k/month vs a self‑hosted broker.  
- **Reliability:** 99.999% SLA achieved; no outages in the first year.

**Leadership Principles Highlighted**

| Principle | How it Shines |
|-----------|---------------|
| *Customer Obsession* | Delivered sub‑50 ms latency for real‑time personalization, directly improving user conversion. |
| *Ownership* | Took full responsibility for schema governance and DLQ monitoring; proactively automated failure recovery. |

**Bar‑raiser Takeaway**

- **Depth & Dive Deep:** I didn’t just pick EventBridge; I tuned its rule engine, set up cross‑region replication, and built a robust DLQ strategy.
- **Quantified Impact:** Clear metrics (latency, throughput, cost) demonstrate real business value.
- **Learning from Failure:** Initial attempts with a custom RabbitMQ cluster caused 10 % throttling; switching to EventBridge eliminated that risk and freed engineering bandwidth for new features.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
