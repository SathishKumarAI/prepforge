---
qid: ing_4507e8d1be__aws__local
question: 'Explain: Producer — Message Queues | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 527
total_tokens: 757
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:02:04-05:00'
sources: []
---

**Situation (S)**  
While leading the ML pipeline for our recommendation engine at a fast‑growing e‑commerce platform, we hit a bottleneck: model training jobs stalled because data ingestion from clickstreams was inconsistent and delayed.

**Task (T)**  
I had to design a producer–message queue system that guarantees **exactly‑once** delivery of user event streams into the ML training pipeline, while keeping latency < 200 ms and cost under $2k/month.

**Action (A)**  
1. **Requirements & Architecture** – Adopt **Amazon Kinesis Data Streams** for low‑latency ingestion; each shard handles 5 MB/s.  
2. **Producer** – Use a stateless Lambda that pulls from our existing SQS and pushes to Kinesis, ensuring idempotent writes via a deterministic partition key (user ID).  
3. **Consumer** – A fleet of ECS Fargate tasks reads shards in parallel, aggregates events per user, and writes batches to Amazon S3 for training.  
4. **Scalability & Availability** – Shard count auto‑scales with Kinesis Auto Scaling; consumer group uses **Kinesis Client Library (KCL)** to balance load across tasks.  
5. **Cost & Trade‑offs** – Kinesis costs $0.015 per shard hour + $0.045/GB data ingested; we cap shards at 20, yielding ~$1,800/month vs. an on‑prem Kafka cluster (~$10k). The trade‑off is a slight increase in latency (≈ 150 ms) but with full managed reliability.

**Result (R)**  
Within two weeks, training jobs ran **3× faster**, and model accuracy improved by 4% (measured via AUC). The system processed > 10M events/day with < 1% loss. I documented the design in a whiteboard session; reviewers praised the ownership of cost & reliability.

**Leadership Principles**  
- **Customer Obsession**: Delivered faster, more accurate recommendations to end users.  
- **Ownership**: Took full responsibility for the entire data pipeline, from ingestion to training.  

Bar‑raisers will note my deep dive into Kinesis limits, quantified impact on latency and accuracy, and learning loop that led to a production‑ready, cost‑efficient solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
