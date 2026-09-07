---
qid: ing_5e8060b330__aws__local
question: 'Explain: Durability Settings Matter — ACID Transactions | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 578
total_tokens: 811
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:59:16-05:00'
sources: []
---

**Situation**

I was hired by an e‑commerce startup to build a recommendation engine that persisted user interactions in a transactional data store. The client’s SLA required *exactly* 99.999% durability for every click, view or purchase event because downstream ML pipelines used these events to train models in near real time.

**Task**

Design the ingestion layer so that it supports ACID transactions while remaining cost‑effective and scalable across multiple regions.

**Action**

1. **Requirement clarification**  
   * Durability: 99.999% (single‑digit loss per million records).  
   * Transactionality: each event must be stored atomically with its metadata.  
   * Scale: ~10 M events/day, burstable to 50 M during flash sales.

2. **Design**  
   * Use **Amazon DynamoDB** as the primary store because it offers ACID transactions at scale and automatic multi‑AZ replication.  
   * Enable **DynamoDB Streams** to push changes into an **SQS FIFO queue**, guaranteeing ordered delivery of events to downstream ML services.  
   * Wrap each write in a **transactional batch (TransactWriteItems)** so that the event and its audit log are committed together or rolled back.  
   * For cost control, configure **On‑Demand capacity** for burst periods and **Reserved Capacity** for baseline traffic.

3. **Scalability & Availability**  
   * DynamoDB automatically scales throughput; we set a **minimum of 20 WCU/RCU** per shard to absorb spikes.  
   * Multi‑AZ replication ensures durability even if an AZ fails.  
   * SQS FIFO guarantees at most once delivery, preventing duplicate ML training.

4. **Trade‑offs**  
   * DynamoDB’s higher write cost vs. relational DBs; but it eliminates lock contention and simplifies scaling.  
   * Using Streams adds a slight latency (~200 ms) but is acceptable for near real‑time pipelines.

5. **Result & Metrics**  
   * Post‑deployment, event loss dropped from 0.02% (pre‑design) to <0.00001%, meeting the SLA.  
   * The system handled a 7× traffic spike during a sale with no timeouts.  
   * Operational cost increased by only 12 % due to reserved capacity savings.

**Learning**

I realized that durability is not just about replication; transaction boundaries and stream integration are critical for end‑to‑end data integrity in ML pipelines.

---

*Leadership Principles:* **Ownership** (owning the entire ingestion pipeline), **Dive Deep** (analyzing failure modes, cost trade‑offs), and **Deliver Results** (meeting SLA with measurable metrics).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
