---
qid: ing_926d652f0e__aws__local
question: 'Explain: Push — Pub/Sub | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 586
total_tokens: 815
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:57:11-05:00'
sources: []
---

**Situation (S)**  
While leading the data‑science team at my previous company, we needed a **real‑time ingestion pipeline** for model predictions that could scale to millions of events per second and guarantee *at least once* delivery without bottlenecks.

**Task (T)**  
Design a “Push – Pub/Sub” system that feeds downstream ML inference services while keeping latency < 50 ms, cost <$0.02/10k messages, and supporting a 3× traffic surge in 24 h.

**Action (A)**  

| Component | AWS Service | Design Choices |
|-----------|-------------|----------------|
| Publisher | **Amazon SNS** (topic) | Simple, low‑cost publish; supports fan‑out to many subscribers. |
| Subscriber Queue | **SQS FIFO** | Guarantees order and deduplication for critical inference jobs. |
| Processing | **AWS Lambda** + **ECS Fargate** | Lambda handles light workloads (<10 ms), Fargate runs heavy model inference; both autoscale. |
| Monitoring | CloudWatch Alarms, X-Ray traces | Capture latency spikes and back‑pressure events. |

*Scalability*: SNS can publish 1M msgs/s; SQS scales to 120k msgs/second per queue. Lambda concurrency auto‑scales up to 1000s of invocations; Fargate adjusts CPU/memory on demand.  
*Availability*: All services are multi‑AZ, with built‑in retries and dead‑letter queues (SQS DLQ) for failures.  
*Cost*: SNS ~ $1.00/1M msgs, SQS ~$0.40/1M msgs, Lambda ~$0.20 per 100k invocations; total < $0.02/10k msgs.

**Result (R)**  
After deployment, we saw **97 % success rate**, latency dropped from 120 ms to **42 ms avg**, and handled a 3× traffic spike without manual intervention—saving ~$15K/month in over‑provisioned servers.

---

### Leadership Principles Highlighted
- **Customer Obsession**: Delivered low‑latency predictions that directly impacted user experience.  
- **Ownership & Dive Deep**: I architected, tuned, and monitored every layer; iterated on failure logs to improve reliability.

*Bar‑raiser cues*: clear ownership, deep technical justification (service trade‑offs), measurable impact, and evidence of learning from early retries/failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
