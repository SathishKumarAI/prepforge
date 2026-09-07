---
qid: ing_d894f00a63__aws__local
question: 'Q: If you had to build a system that works across OpenAI, Anthropic, and
  local Llama models, how would you architect it?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 557
total_tokens: 806
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:29:15-05:00'
sources: []
---

**S – Situation**  
While leading the AI‑ops team at my previous company, we were asked to expose a single endpoint that could route inference requests to OpenAI, Anthropic or an on‑prem Llama model, depending on cost and data‑privacy rules.

**T – Task**  
Design a highly available, low‑latency system that supports dynamic model selection, auditability, and automated scaling—all while staying within the $0.05 per request budget.

**A – Action**  

| Component | AWS Service | Design Rationale |
|-----------|-------------|------------------|
| API Gateway + Lambda@Edge | **API Gateway**, **Lambda@Edge** | Global edge routing for <50 ms latency; serverless to avoid over‑provisioning. |
| Orchestration | **Step Functions** | State machine decides target model, applies policy rules (e.g., GDPR), and retries on failure. |
| Execution | **ECS Fargate** + **SageMaker Edge Manager** for Llama; **Lambda** for OpenAI/Anthropic calls. | Containerized local inference keeps data on‑prem; serverless for cloud APIs reduces idle cost. |
| Monitoring | **CloudWatch**, **X-Ray** | End‑to‑end tracing, custom metrics (latency, error rate). |
| Cost control | **AWS Budgets** + Lambda auto‑scaling | Scale ECS tasks based on queue depth; stop unused containers after 5 min idle. |

**R – Result**  
Within two weeks of deployment we achieved:  

* **99.9% availability** (no outages during 30 k requests/day).  
* Average **latency 180 ms** (≤200 ms target).  
* Cost savings of **32%** compared to a single‑model baseline, with an estimated $3 k/month reduction.

**Leadership Principles Highlighted**

1. **Ownership** – I drove the end‑to‑end solution and maintained SLA guarantees.  
2. **Dive Deep** – Continuous profiling revealed that the Lambda@Edge cache hit rate was 95%, allowing us to cut cold start costs by 40%.  

*Bar‑raiser takeaways:* clear ownership, data‑driven metrics, deep system understanding, and learning from a brief failure when an initial Fargate cluster misconfigured CPU limits.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
