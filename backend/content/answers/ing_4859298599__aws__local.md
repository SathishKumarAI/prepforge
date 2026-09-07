---
qid: ing_4859298599__aws__local
question: 'Explain: Advanced Queuing — Using the Publish-Subscribe Model for Applications'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 482
total_tokens: 716
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:09:02-05:00'
sources: []
---

**Situation & Task**  
While leading the data‑science platform for a global e‑commerce retailer, we needed to stream millions of click events in real time to multiple ML pipelines (fraud detection, recommendation, churn prediction). The existing batch pipeline caused 20‑minute latency and missed critical windows. I owned the redesign.

**Action – Technical Design**  
1. **Publish–Subscribe Backbone**: Used **Amazon SNS** as a fan‑out topic; each event producer publishes to SNS once per second.  
2. **Scalable Consumers**: Subscribed **SNS → Amazon SQS FIFO queues** (one per pipeline) so ordering is preserved where required, and each queue scales horizontally by auto‑scaling Lambda functions or EC2 spot workers.  
3. **Real‑time Feature Store**: Lambda pulls from SQS, enriches with DynamoDB Global Tables for user profiles, writes to an **Amazon Kinesis Data Stream** that feeds a **SageMaker Real‑Time Endpoint**.  
4. **Observability & Cost Control**: Integrated CloudWatch metrics and AWS X-Ray; set SNS message retention to 14 days, SQS dead‑letter queues for failures, and used Spot Instances for Lambda concurrency throttling.

**Result**  
- Reduced event latency from 20 min to < 2 s.  
- Throughput rose to 10 M events/second with 99.99% availability.  
- Cost dropped 35 % by eliminating on‑prem batch clusters and using Spot pricing.  

**Reflection & Learning**  
I discovered that naïve fan‑out can overload consumers; adding per‑pipeline SQS queues gave isolation and fine‑grained scaling. I also learned to monitor the “slowest” consumer as a bottleneck signal.

> **Leadership Principles:** *Ownership* (took full responsibility for end‑to‑end latency), *Dive Deep* (analyzed message flow, queue depth, and cost), *Bias for Action* (deployed in 3 days), *Deliver Results* (measurable performance gains).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
