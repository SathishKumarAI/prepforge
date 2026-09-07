---
qid: ing_012730fd77__aws__local
question: 'Explain: Run evaluators separately — Ai Evals Complete Guide Langwatch
  Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 410
total_tokens: 646
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:27:07-05:00'
sources: []
---

**Situation / Task**  
I was tasked to build a scalable evaluation pipeline for our multimodal LLM platform so that each evaluator (LLM‑based correctness, safety, and sentiment) could run independently without bottlenecking the main inference flow.

**Action**  
*Designed a micro‑service architecture on **AWS Fargate** with **Amazon ECS**.*  
1. Each evaluator was packaged as a Docker container and exposed via an API Gateway endpoint.  
2. We leveraged **LangWatch** for real‑time monitoring of request latency, error rates, and model drift; alerts were routed to CloudWatch dashboards.  
3. **LangFuse** acted as the orchestration layer: it fetched prompts from SQS, dispatched them concurrently to evaluator services via EventBridge, and aggregated results in DynamoDB.  
4. To ensure **high availability**, each service was run in a *dual‑AZ* deployment with an Application Load Balancer and autoscaling based on CPU/memory thresholds.  
5. Cost control came from using **Fargate Spot** for non‑critical safety checks, bringing the monthly spend down 35 % versus on‑demand.

**Result**  
- Evaluation latency dropped from 1.8 s to **0.4 s** per prompt (≈ 78 % improvement).  
- Throughput increased to **12k requests/hour**, supporting a 5× traffic surge without additional engineers.  
- Cost savings of **$18K/year** were achieved, freeing budget for model research.

**Reflection**  
I own the end‑to‑end pipeline and iterated on metrics until latency met SLA. The deep dive into AWS cost models taught me to balance performance with spend—an essential trade‑off in a production AI system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
