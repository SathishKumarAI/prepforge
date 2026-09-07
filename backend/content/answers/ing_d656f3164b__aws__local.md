---
qid: ing_d656f3164b__aws__local
question: 'Explain: About Glean MCP server'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 421
total_tokens: 648
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:24:03-05:00'
sources: []
---

**Situation & Task**  
At my last role I led the migration of our on‑prem ML model catalog (Glean MCP) to AWS so that data scientists could spin up experiments in minutes instead of hours. The goal was to reduce inference latency from ~350 ms to <100 ms while keeping costs under $5K/month.

**Action – Design & Implementation**  
I scoped the requirements: stateless inference, autoscaling, and secure model access.  
- **Architecture**: EC2 Spot + SageMaker Endpoint (multimodal) with an API Gateway front‑end.  
- **Services**:  
  - *SageMaker* for real‑time inference (GPU p3.xlarge).  
  - *EFS* for shared model storage, encrypted at rest.  
  - *CloudWatch* + *X-Ray* for observability.  
  - *AWS IAM* with least‑privilege roles per team.  
- **Scalability**: Configured SageMaker’s autoscaling policy (min 1, max 8 endpoints) based on CPU utilization thresholds (70% → scale out).  
- **Cost Optimisation**: Leveraged Spot instances and scheduled shutdowns during low‑usage windows; overall spend dropped 35%.

**Result**  
Inference latency fell from 350 ms to 78 ms (≈78% improvement). Model deployment time shrank from 3 hrs to <10 min. Team adoption increased by 120%, and we saved $12K annually on infrastructure.

**Reflection**  
I owned the full lifecycle, dug deep into performance metrics, and iterated quickly after a failed first rollout that hit the SLA. The experience reinforced *Customer Obsession* (delivering low‑latency APIs for data scientists) and *Dive Deep* (continuous monitoring & rapid iteration).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
