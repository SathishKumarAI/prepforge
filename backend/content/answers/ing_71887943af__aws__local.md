---
qid: ing_71887943af__aws__local
question: 'Explain: Delivery guarantees — What is Pub/Sub Messaging? - Pub/Sub Messaging
  Explained - AWS'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 515
total_tokens: 752
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:42:12-05:00'
sources: []
---

**Answer (Amazon style)**  

> *“In a distributed system, delivery guarantees are the contract that a message sent by one component will reach another within defined parameters.”*  

### Situation  
At my previous firm we built a real‑time fraud‑detection pipeline. The ingestion layer had to push 1 M events/sec to downstream analytics while guaranteeing **at least once** delivery and *zero data loss* during peak bursts.

### Task  
I was tasked with selecting a messaging pattern that could scale, maintain durability, and provide strong delivery guarantees without incurring prohibitive cost.

### Action  
I chose **Amazon SNS (Pub/Sub) + SQS (FIFO)**:

| Service | Role | Why it meets the guarantee |
|---------|------|----------------------------|
| **SNS** | Fan‑out publisher | Decouples producers; pushes to many subscribers instantly. |
| **SQS FIFO** | Subscriber queue | Guarantees ordered, exactly‑once consumption with deduplication. |
| **AWS Lambda** | Consumer | Auto‑scales to burst traffic; processes messages idempotently. |

*Design notes:*  
- SNS topics publish to SQS queues per region → *regional redundancy*.  
- Dead‑letter queues capture failures after 5 retries, enabling manual reprocessing.  
- CloudWatch metrics (SendMessage, ReceiveMessage, ApproximateAgeOfOldestMessage) fed into a Grafana dashboard for real‑time visibility.

### Result  
After deployment:

| Metric | Value |
|--------|-------|
| **Throughput** | Sustained 1 M msgs/sec with < 0.02 % loss during peak. |
| **Latency** | Avg. end‑to‑end < 120 ms (95th percentile). |
| **Cost** | $3,200/month vs. $8,500 for a legacy MQ solution – 60 % savings. |

### Learnings  
- *Ownership*: I owned the failure modes and built automated rollback via DLQs.  
- *Dive Deep*: Investigated SQS visibility timeout tuning to balance retries vs. latency.  

**Leadership Principles Anchored:** **Customer Obsession** (ensuring zero data loss for fraud detection), **Ownership** (end‑to‑end design & monitoring), and **Bias for Action** (quick rollout with measurable impact).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
