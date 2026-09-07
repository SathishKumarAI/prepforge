---
qid: ing_65784035b1__aws__local
question: 'Explain: Delayed or Scheduled Queue — Message Queues | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 448
total_tokens: 682
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:14:28-05:00'
sources: []
---

**Situation & Task**  
At my last role I led the redesign of a global order‑processing pipeline that required *exactly‑once* delivery of events with up to 30 s latency guarantees. Existing SQS couldn’t schedule messages, so we risked missed promotions and revenue loss.

**Action – Design**  
I architected a **delayed queue service** using:
1. **Amazon SQS Standard** for the primary buffer (high throughput, at‑least‑once).  
2. A **“Delay Scheduler” Lambda** triggered by CloudWatch Events every minute; it pulls from DynamoDB table (`MessageId, Payload, TargetTime`).  
3. When `TargetTime <= now`, Lambda publishes to a *delivery SQS* via **SQS FIFO** (exactly‑once).  

The scheduler scales with the number of messages: each batch processes 10 k items per run, and the DynamoDB table auto‑scales on read/write units.  
Cost: ~\$0.40 per million scheduled deliveries versus \$1.20 for a full‑fledged SNS + CloudWatch Alarm solution.  

**Result**  
Within two weeks we saw **99.9% delivery accuracy**, cutting revenue leakage from missed promotions by **12 %** and reducing infra cost by **30 %**.

**Leadership Principles & Bar‑raiser cues**  
- *Customer Obsession*: guaranteed timely promotions → higher conversion.  
- *Ownership & Dive Deep*: I owned the end‑to‑end latency metrics, tuned DynamoDB read capacity, and logged every failure to a CloudWatch dashboard.  
Bar‑raisers focus on my quantitative impact, the depth of my trade‑off analysis (cost vs. availability), and lessons learned when a batch hit the 30 s window and required throttling adjustments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
