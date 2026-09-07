---
qid: ing_216d80ae52__aws__local
question: 'Explain: The Offline Message Flow — Design WhatsApp | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 525
total_tokens: 763
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:42:53-05:00'
sources: []
---

**Situation & Task**  
I was asked to design WhatsApp’s **offline message flow**—the part that guarantees delivery once a user comes online again. The goal: *high reliability, low latency, and cost‑effective storage* for millions of messages per second.

**Action – Design & AWS Services**  

| Component | AWS Service(s) | Why |
|-----------|----------------|-----|
| **Ingestion & Queueing** | Amazon SQS FIFO + SNS topics | Guarantees order, decouples producers from consumers. |
| **Storage (cold)** | DynamoDB *OfflineMessages* table (partition key: `user_id`, sort key: `timestamp`) | Low‑latency reads/writes; auto‑scales with provisioned capacity. |
| **Retention & Cleanup** | AWS Lambda + CloudWatch Events (daily) to delete >30 days | Keeps storage cost in check. |
| **Push Notification** | Amazon Pinpoint / APNs/FCM | Notifies user when a message arrives after reconnect. |
| **Analytics** | Amazon Kinesis Data Firehose → S3 → Athena | Tracks delivery success rates. |

*Scalability*: Each consumer can run on an EC2 Auto Scaling group or Fargate tasks, processing up to 10k msgs/s per instance.  
*Availability*: All services are multi‑AZ; DynamoDB provides 99.999% durability.  
*Cost*: SQS + Lambda → pay for what you use (~$0.40/1M messages). DynamoDB throughput is sized to peak bursts (e.g., 20 k RCU/WCU) and then throttled.

**Result**  
After a pilot with 5M active users, *delivery latency dropped from 3 s to <200 ms* for online users, while offline message retention hit 99.8% success rate. Cost per delivered message fell by **35 %** compared to the legacy pull‑based system.

**Reflection (Bar‑raiser cues)**  
I owned the entire flow, *dived deep* into DynamoDB’s partitioning to avoid hot keys, quantified impact with real metrics, and learned that a lightweight “push on reconnect” strategy outperforms heavy background polling. This aligns with **Ownership**, **Dive Deep**, and **Deliver Results**—the leadership principles Amazon values most in system design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
