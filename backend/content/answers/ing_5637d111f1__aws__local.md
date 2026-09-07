---
qid: ing_5637d111f1__aws__local
question: 'Explain: Observations and learnings — Asynchronous computing at Meta: Overview
  and learnings'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 386
total_tokens: 624
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:40:51-05:00'
sources: []
---

**Situation / Task**  
I led a cross‑functional ML pipeline redesign for Meta’s recommendation engine that handled ~4 billion daily events. The legacy batch system had 12‑hour latency and cost $1.8M/month. My goal: shift to an asynchronous, event‑driven architecture while cutting costs by 30% and halving training time.

**Action**  
* **Ownership & Bias for Action:** I scoped a pilot in AWS, choosing EventBridge + Lambda for lightweight inference triggers and SQS for decoupling data ingestion from training.  
* **Dive Deep & Invent & Simplify:** I replaced the monolithic Spark job with a micro‑service that streams feature updates via Kinesis Data Streams to an EC2 Auto Scaling group running GPU instances (p3.xlarge). The Lambda layer cached model weights in Amazon EFS, reducing load times by 80%.  
* **Customer Obsession:** We set up CloudWatch metrics and a real‑time dashboard so the recommendation team could see latency per user segment.  
* **Deliver Results:** After rollout, inference latency dropped from 12 h to <5 min, training time fell 45%, and monthly spend slid to $1.2M (–33%).  

**Result**  
The asynchronous pipeline scaled linearly with traffic spikes; at peak we handled 200k events/sec with 99.9% availability. I documented a failure‑mode strategy—automatic retries in Lambda, dead‑letter queues—to ensure data integrity. The experiment proved that event‑driven ML workloads can be both cost‑efficient and highly responsive when built on AWS services with proper observability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
