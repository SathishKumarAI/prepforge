---
qid: ing_50336128a8__aws__local
question: 'Explain: Fan-out-on-write (Push Model) for Normal Users'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 704
total_tokens: 937
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:26:40-05:00'
sources: []
---

**Behavioral (STAR)**  
*Situation*: While leading a product team for a social‑media app, we noticed that real‑time notifications for normal users were lagging during peak traffic (~10 M writes/day).  
*Task*: Design an architecture to push updates instantly without overloading the write path.  
*Action*: I championed a **fan‑out‑on‑write (push) model** using DynamoDB + Streams, Lambda, SNS, and SQS. Every user update triggers a stream event; a single Lambda decodes the payload and publishes it to an SNS topic that fans out to each target user’s dedicated FIFO queue (SQS).  
*Result*: Latency dropped from 2 s to <200 ms for 95 % of events, while cost grew only 12 % versus our previous pull‑based poller. User engagement increased by 18 %, and we achieved 99.9 % availability during traffic spikes.

---

**Technical Design**

| Layer | AWS Service | Role |
|-------|-------------|------|
| **Write API** | Amazon DynamoDB (global table) | Stores user actions; write‑through latency <10 ms. |
| **Event Capture** | DynamoDB Streams | Captures every insert/update as a stream record. |
| **Fan‑out Engine** | AWS Lambda (dedicated function per partition) | Processes stream records, normalizes payload, and publishes to SNS. |
| **Push Distribution** | Amazon SNS Topic + SQS FIFO queues | One queue per user; guarantees ordered delivery and deduplication. |
| **Consumer** | User app polling local cache or long‑polling SQS | Receives push events instantly. |

*Scalability*: DynamoDB auto‑scales throughput; Lambda scales with concurrent stream shards (1 k concurrency → 10 M writes). SNS fan‑out is serverless and elastic.  
*Availability*: All services are multi‑AZ; DynamoDB global tables provide cross‑region replication. SQS FIFO queues guarantee at‑least‑once delivery with ordering.  
*Cost Trade‑offs*: Lambda invocations (~$0.20/1 M) + SNS publish (~$3.50/1 B) + SQS storage ($0.40/GB‑month). Compared to a polling design, we avoid idle reads and reduce read capacity units by ~70 %.  

---

**Bar‑raiser Signals**

- **Ownership**: Took full responsibility for the end‑to‑end pipeline and drove cross‑team collaboration.  
- **Dive Deep**: Quantified latency improvements per component; analyzed stream lag and Lambda timeout metrics.  
- **Quantified Impact**: 18 % lift in engagement, 12 % cost increase—clear ROI.  
- **Learning from Failure**: Initial design over‑provisioned SNS topic limits; we refactored to partition topics by user segment after reviewing CloudWatch alarms.

This architecture exemplifies *Customer Obsession* (instant feedback) and *Ownership* (complete delivery).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
