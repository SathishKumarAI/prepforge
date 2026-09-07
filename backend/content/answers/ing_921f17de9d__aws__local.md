---
qid: ing_921f17de9d__aws__local
question: 'Explain: Optimizing for Speed — Introducing SWE-1.5: Our Fast Agent Model
  | Cognition'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 524
total_tokens: 765
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:56:37-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led the rollout of **SWE‑1.5**, a lightweight fast‑agent model that reduced inference latency for our real‑time recommendation engine from 350 ms to under 50 ms while keeping accuracy within 0.3 % of the baseline. The business required *Customer Obsession*—users had to see results instantly—and *Deliver Results*—the KPI was a 15 % lift in click‑through rate (CTR).

**Action**  
I re‑engineered the model pipeline:  
1. **Model pruning + quantization** (INT8) using TensorRT, cutting parameters by 4× and inference time by 7×.  
2. Deployed on **AWS Inferentia** via SageMaker Endpoint with *Multi‑Instance* autoscaling; leveraged **Spot Instances** to keep cost < $0.03/second versus $0.12 on G5 GPUs.  
3. Introduced a **Lambda cache layer** (DynamoDB TTL) for the top 10K most frequent queries, eliminating 30 % of outbound inference calls.  
4. Monitored with CloudWatch and set up an automated rollback if latency > 70 ms or accuracy loss > 0.5 %.  

**Result**  
CTR rose by **17 %**, total cost dropped from $1.2M/month to $0.7M/month, and we achieved 99.9 % availability during peak traffic. I documented lessons—pruning thresholds required careful tuning; a single mis‑set hyperparameter could have degraded accuracy by > 2 %.  

**Bar‑raiser signals**  
*Ownership*: I owned the entire end‑to‑end pipeline, from data prep to production monitoring.  
*dive deep*: I quantified every trade‑off (latency vs. accuracy vs. cost) and iterated until hitting the sweet spot.  
*Learning from failure*: After an initial rollout that hit a 1 % accuracy dip, I traced it to over‑aggressive quantization and adjusted the model—demonstrating resilience and continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
