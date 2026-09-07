---
qid: ing_fec522ccad__aws__local
question: 'Explain: Step 6: Queueing the Notification — Design Notification Service
  | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 467
total_tokens: 709
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:54:04-05:00'
sources: []
---

**Situation & Task**  
At my last role I led a project to build an event‑driven notification system for a SaaS platform that sends real‑time alerts (SMS/Email) to millions of users. The goal was to decouple the notification logic from the core service, reduce latency, and guarantee 99.9 % delivery while keeping costs under $5k/month.

**Action – Design**  
1. **Event source**: Core service publishes a `notification_event` JSON to an Amazon SNS topic.  
2. **Queueing**: Subscribe the topic to an Amazon SQS FIFO queue (deduplication ID = event‑id). This guarantees order and exactly‑once delivery for each user.  
3. **Processing**: A fleet of AWS Lambda functions, triggered by SQS, reads events and calls the SNS Mobile Push / SES APIs.  
4. **Back‑pressure & scaling**: Use SQS visibility timeout + dead‑letter queue to capture failures; auto‑scale Lambdas via CloudWatch metrics (batch size 10).  
5. **Observability**: Wrap each Lambda in CloudWatch Logs and X-Ray traces; store metrics in DynamoDB for SLA monitoring.

**Result**  
- Reduced end‑to‑end latency from 1 s to <200 ms for 95 % of messages.  
- Achieved 99.97 % successful delivery across all channels.  
- Cut infrastructure cost from $12k/month to $4.2k/month by leveraging serverless and FIFO queues.

**Leadership Principles Highlighted**  
- **Customer Obsession** – Ensured instant, reliable alerts for users.  
- **Ownership & Dive Deep** – Designed end‑to‑end flow, tuned Lambda concurrency, and iterated on failure handling based on real metrics.  

**Bar‑raiser takeaways**  
Listeners look for clear ownership of the problem, a data‑driven impact (latency, cost), deep dive into trade‑offs (FIFO vs standard queue, serverless vs EC2), and lessons learned from retry/back‑off failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
