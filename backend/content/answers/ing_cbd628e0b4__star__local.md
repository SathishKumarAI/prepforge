---
qid: ing_cbd628e0b4__star__local
question: 'Explain: Redundancy — How to Prepare for System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 366
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:16:25-05:00'
sources: []
---

**Situation**  
During my senior internship at a fintech startup, we were tasked with building a real‑time fraud detection pipeline that had to process millions of transactions per day with < 1 % latency loss. The product manager warned that any downtime would cost us $10K per hour in lost revenue and regulatory penalties.

**Task**  
I was responsible for designing the system’s redundancy strategy so we could guarantee 99.95% uptime while keeping costs under our $5000/month budget.

**Action**  
First, I mapped out all critical components (data ingestion, feature store, model inference, result storage) and identified single‑point failures. I chose a multi‑region deployment on AWS using Auto Scaling Groups with health checks, coupled with Route 53 weighted routing for traffic splitting. For stateful parts I implemented DynamoDB Global Tables to replicate data across regions and used SQS FIFO queues for fault‑tolerant message delivery. To reduce costs, I leveraged spot instances for non‑critical worker nodes and set up CloudWatch alarms to trigger scaling events only when latency exceeded 200 ms. Finally, I built a lightweight monitoring dashboard in Grafana that visualized regional health metrics and automated rollback scripts.

**Result**  
The system achieved 99.97% uptime during the next six months, cutting potential downtime costs by $60K. Latency stayed below 150 ms on average, and our redundancy plan was praised as a key factor in meeting regulatory compliance. I learned that balancing architectural resilience with cost requires tight integration of monitoring, automation, and cross‑region replication.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
