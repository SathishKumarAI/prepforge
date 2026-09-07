---
qid: ing_7b78398733__aws__local
question: 'Explain: How Message Queues Work — Message Queues | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 470
total_tokens: 704
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:04:42-05:00'
sources: []
---

**Situation / Task**  
I led the redesign of a real‑time recommendation engine for our e‑commerce platform. The existing monolith could not keep up during flash sales—request latency spiked to 800 ms and error rates hit 12%. I needed a decoupled, fault‑tolerant pipeline that could scale to millions of events per second.

**Action (Technical Design)**  
1. **Decouple producers and consumers** – Introduced Amazon SQS FIFO queues so each user action is reliably persisted before downstream ML inference.  
2. **Scalable processing** – Spawned an Auto Scaling group of AWS Lambda functions triggered by the queue, each invoking a SageMaker endpoint for feature extraction.  
3. **Batching & Back‑pressure** – Implemented a “batch‑to‑SQS” microservice that aggregates 1 000 events every 200 ms, reducing cold starts and network hops.  
4. **Monitoring & Retry** – Configured CloudWatch Alarms on `ApproximateAgeOfOldestMessage` (>5 s) to auto‑spin up extra workers; used SQS DLQ for persistent failures.

**Result**  
- Latency dropped from 800 ms to <120 ms during peak events (30× improvement).  
- Throughput increased from 10 k/s to >1.2 M/s with zero data loss.  
- Cost decreased by 18% because Lambda’s pay‑per‑invoke model replaced a constantly running EC2 fleet.

**Leadership Principles**  
- **Customer Obsession**: Delivered sub‑100 ms responses, enhancing checkout UX.  
- **Ownership & Dive Deep**: Built the entire queue–lambda pipeline from scratch, profiled bottlenecks and iterated on batch size.  

**Bar‑raiser notes** – I demonstrated ownership by handling every layer (queue, compute, ML), dove deep into metrics to justify trade‑offs, quantified impact with real numbers, and learned that batching reduces cold starts but must be balanced against freshness requirements.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
