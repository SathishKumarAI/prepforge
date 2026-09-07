---
qid: ing_e097f2d674__aws__local
question: 'Explain: [Applause] here. So when applications are deployed'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 486
total_tokens: 720
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:47:15-05:00'
sources: []
---

**Situation / Task**  
At my last role I led the migration of a real‑time fraud detection service from an on‑prem cluster to a fully managed AWS stack. The model had to score every transaction in under 50 ms and support 1M TPS during peak hours.

**Action**  
I scoped requirements, then designed a serverless pipeline:

| Step | AWS Service | Why |
|------|-------------|-----|
| **Model training** | SageMaker Studio & Processing Jobs | Managed GPU instances reduce dev‑ops overhead |
| **Model packaging** | ECR + Lambda layers | Immutable artifacts guarantee reproducibility |
| **Inference** | SageMaker Real‑Time Endpoint (Multi‑Model) behind an Application Load Balancer | Auto‑scales to 2k concurrent invocations, 99.99 % availability |
| **Feature store** | DynamoDB + Kinesis Data Streams | Low‑latency read/write, built‑in TTL for stale data |
| **Monitoring** | CloudWatch + SageMaker Model Monitor | Detect drift; alerts trigger auto‑retraining |

I added a *canary* deployment using CodePipeline and Lambda to roll out new models to 5% of traffic before full exposure. The entire pipeline costs ~\$12k/month versus the previous \$28k, and latency dropped from 120 ms to 35 ms.

**Result**  
- **Accuracy** improved by 4.7 % (F1‑score).  
- **Throughput** handled 1.2M TPS with <0.1 % error rate.  
- **Cost savings**: 57 % reduction in infra spend, freeing $200k for R&D.

**Learning**  
I realized that *ownership* means owning the entire lifecycle—training, deployment, monitoring, and rollback. The biggest failure was an initial over‑scaling decision that spiked costs; we fixed it by integrating real‑time metrics into autoscaling policies—a classic *bias for action* lesson.

> **Bar‑raiser focus**: depth of AWS service choices, quantified impact (latency, cost), ownership across phases, and a clear learning loop.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
