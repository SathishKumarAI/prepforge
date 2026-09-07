---
qid: ing_0f0f7fdb1f__aws__local
question: 'Explain: Push delivery — What is Pub/Sub Messaging? - Pub/Sub Messaging
  Explained - AWS'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 464
total_tokens: 701
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:59:34-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Leadership Principles:** *Customer Obsession* – we must give customers a fast, reliable message flow; *Ownership* – I own the end‑to‑end messaging stack.

### Situation
I was tasked to replace an on‑premises queue that throttled downstream AI inference jobs. The goal: 10× throughput and sub‑second latency for millions of events per day.

### Task
Design a publish/subscribe (pub/sub) system that decouples producers from consumers, scales elastically, and guarantees at‑least‑once delivery without code changes to existing services.

### Action
I chose **Amazon SNS** as the publisher endpoint and **Amazon SQS** for each consumer’s subscription.  
* **SNS** broadcasts events (topic → many queues) in milliseconds; it supports fan‑out to multiple protocols (HTTP, Lambda).  
* **SQS FIFO queues** preserve order for AI pipelines that require deterministic processing.  
I added a **DLQ** per consumer and CloudWatch metrics (`ApproximateNumberOfMessagesVisible`, `ApproximateAgeOfOldestMessage`) to auto‑scale with an SQS‑based scaling policy.

The architecture is highly available: SNS is regional, SQS replicates across AZs; consumers run in separate ECS services with spot instances for cost control.  

### Result
Throughput rose from 2 k msg/s to 25 k msg/s (12×). Latency dropped to <150 ms average. Cost fell by 35% because we eliminated idle queue servers and leveraged spot capacity.

**Bar‑raiser takeaways:**  
*Ownership* – I drove the entire redesign, documented SLAs, and created an incident playbook.  
*Dive Deep* – I measured every metric, tuned batch sizes, and iterated on DLQ retention to reduce failures.  
*Quantified Impact* – 12× throughput, 35% cost savings.  
*Learning from Failure* – Initial test with standard SQS caused message reorder; switching to FIFO resolved downstream AI state bugs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
