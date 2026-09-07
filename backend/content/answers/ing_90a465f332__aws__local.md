---
qid: ing_90a465f332__aws__local
question: 'Explain: What is TPS, what is QPS, and what is the difference? _ Internet'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 417
total_tokens: 656
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:53:03-05:00'
sources: []
---

**Answer (Amazon Style)**  

**Leadership Principles:** *Customer Obsession* – we measure performance that matters to users; *Dive Deep* – understand the exact meaning of each metric.

**Situation / Task**  
I led a project to migrate our real‑time recommendation engine from an on‑prem cluster to Amazon EC2 + Elastic Load Balancer. The client demanded “no single point of failure” and “sub‑millisecond latency.” I had to explain how we would monitor throughput and decide when to scale.

**Action**  
I clarified that **TPS (Transactions Per Second)** counts *complete, state‑changing operations* (e.g., a purchase or model inference that writes to the DB). **QPS (Queries Per Second)** counts *stateless read requests*, such as feature lookups for a prediction. I designed an Amazon CloudWatch dashboard with two metrics:  
- `PredictionRequests` (QPS) fed by API Gateway, scaled by Lambda concurrency.  
- `InferenceWrites` (TPS) reported from DynamoDB streams and backed by an Aurora Serverless cluster.  

Both metrics were tied to Auto Scaling policies on the ALB. I also added a 5‑minute moving average to avoid flapping.

**Result**  
After deployment, we reduced latency from 320 ms to **145 ms** (45% improvement) and maintained 99.9% availability during a traffic spike of 12× baseline. The clear distinction between TPS and QPS helped the ops team tune autoscaling without over‑provisioning, saving ~30% on EC2 costs.

**Bar‑raiser takeaway** – I owned the end‑to‑end monitoring solution, dived deep into metric semantics, quantified impact with real numbers, and learned that a single aggregated throughput metric can mask critical differences between read/write workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
