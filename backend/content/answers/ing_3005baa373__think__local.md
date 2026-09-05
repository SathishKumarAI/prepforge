---
qid: ing_3005baa373__think__local
question: 'Explain: Trade-offs and Failure Modes — Message Queues | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 486
total_tokens: 679
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:20:16-05:00'
sources: []
---

**1. Clarify the scope & assumptions**  
   - What kind of ML pipeline? (batch inference, online prediction, feature store).  
   - Which queue techs are in play (Kafka, RabbitMQ, SQS)?  
   - Are we talking about data ingestion, task distribution, or result aggregation?  

**2. Adopt a system‑design mental model**  
   - View the queue as an *asynchronous buffer* that decouples producers from consumers.  
   - Map the ML workflow to stages: source → queue → worker (pre‑processing / inference) → sink.  
   - Identify key quality attributes: latency, throughput, reliability, ordering.

**3. Reason step‑by‑step through trade‑offs & failure modes**  
   - **Throughput vs. Latency:** higher partitions → more parallelism but harder to guarantee order; batching reduces per‑message cost but adds delay.  
   - **Durability vs. Speed:** persistent logs (Kafka) give replayability, at the cost of write amplification; in‑memory queues are faster but lose data on crash.  
   - **Scalability vs. Consistency:** sharded queues let you scale workers, yet they may violate strict ordering or cause duplicate processing if consumers misbehave.  
   - **Failure modes:** consumer crashes → message redelivery (duplicate work); broker outages → back‑pressure; partition rebalancing → temporary throughput drops.

**4. Common traps to avoid**  
   - Assuming “at least once” guarantees mean no duplicates—implement idempotent workers or deduplication logic.  
   - Over‑optimizing for low latency while ignoring batch sizing can starve workers.  
   - Neglecting back‑pressure handling; let the queue grow unchecked and risk OOM on consumers.

**5. Sanity‑check & articulate**  
   - Rephrase: “We’re choosing a queue that balances durability with speed, accepting duplicate processing as a cost of scalability.”  
   - Validate against real metrics (e.g., 99th percentile latency vs. message size).  
   - Communicate the trade‑offs clearly to stakeholders so they understand why certain failure modes are acceptable and how we’ll monitor/mitigate them.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
