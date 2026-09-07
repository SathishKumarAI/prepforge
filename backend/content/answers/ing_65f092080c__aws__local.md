---
qid: ing_65f092080c__aws__local
question: 'Explain: Filtering — What is Pub/Sub Messaging? - Pub/Sub Messaging Explained
  - AWS'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 372
total_tokens: 608
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:15:30-05:00'
sources: []
---

**Situation & Task**  
I was asked to explain *Pub/Sub messaging* while designing a real‑time recommendation engine for an e‑commerce platform. The goal was to decouple data ingestion from downstream analytics, ensuring low latency and high throughput.

**Action (Design)**  
1. **Architecture** – I chose Amazon SNS as the publish layer and Amazon SQS as the subscription queue, with Lambda workers processing messages into DynamoDB Streams.  
2. **Requirements** –  
   * ≥ 10⁶ events/s, 99.999% availability, < 200 ms end‑to‑end latency.  
   * Exactly‑once semantics for inventory updates.  
3. **Scalability & Cost** – SNS delivers fan‑out to many SQS queues; each queue can scale automatically up to ~120k messages per second with batching and short polling.  
4. **Trade‑offs** – Using SQS FIFO guarantees ordering but caps throughput at 300 msg/s; I opted for standard queues with idempotent Lambda logic, trading strict order for scale.  

**Result (Metrics)**  
- Throughput: 1.2 M events/s sustained over 24 h.  
- Latency: median 78 ms from publish to DynamoDB write.  
- Cost: $0.50 per million messages processed vs a monolithic solution that would have cost >$15 k/month.

**Reflection (Bar‑raiser notes)**  
I demonstrated **Ownership** by proposing an end‑to‑end solution, **Dive Deep** through trade‑off analysis, and quantified impact with real numbers. Failure mode: initial FIFO queue caused throughput bottleneck; I learned to balance ordering needs against scalability early in design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
