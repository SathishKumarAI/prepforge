---
qid: ing_4916dff539__aws__local
question: 'Explain: Best Practices — Message Queues | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 407
total_tokens: 638
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:10:48-05:00'
sources: []
---

**Situation / Task**  
At my previous company we built a real‑time recommendation engine that ingested clickstream data from millions of users per day. The existing batch pipeline caused 30 % latency spikes during peak hours, hurting user experience (Page‑view conversion dropped from 12 % to 9 %). I was tasked with redesigning the ingestion layer to be *event‑driven* and *scalable*.

**Action**  
I chose **Amazon SQS FIFO** for guaranteed ordering of user events and **Amazon Kinesis Data Streams** for high‑throughput buffering. The pipeline:  

1. Front‑end pushes events to an API Gateway → Lambda → SQS.  
2. A fleet of ECS tasks (auto‑scaled by CloudWatch) polls SQS, writes batch records into DynamoDB *and* streams them to Kinesis.  
3. Another set of Lambdas consume from Kinesis, run ML inference on SageMaker endpoints, and write predictions back to DynamoDB.

I applied **Dive Deep**: instrumented each component with X-Ray, identified a 200 ms latency bottleneck in the Lambda‑to‑SQS path, and reduced it by increasing batch size from 10 → 100 messages (cost per invocation dropped 25 %). I also used **Cost Explorer** to keep the monthly spend under $5k.

**Result**  
Latency during peak hours fell from 2.8 s to < 500 ms, boosting conversion rate to 13 % (+1 pp). The system handled a 4× traffic surge with zero downtime, proving *Ownership* and *Deliver Results*. I documented the design in Confluence, trained three teammates on “Message‑Queue‑first” patterns, and logged lessons learned for future infra reviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
