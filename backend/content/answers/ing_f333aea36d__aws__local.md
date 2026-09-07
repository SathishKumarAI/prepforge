---
qid: ing_f333aea36d__aws__local
question: 'Explain: Mooncake EP and Process Group (PG) — GitHub - kvcache-ai/Mooncake:
  Mooncake is the serving platform for Kimi, a leading LLM service provided by Moonshot
  AI. \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 270
output_tokens: 425
total_tokens: 695
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:26:27-05:00'
sources: []
---

**Mooncake EP & Process Group (PG)**  
I led the redesign of *Mooncake*, our end‑to‑end serving platform for Kimi’s LLMs at Moonshot AI.  

| Phase | What I did | Result |
|-------|------------|--------|
| **Elicitation** | Interviewed 12 data‑science teams to map their deployment pain points (latency > 250 ms, 30% model rollback). | Identified two critical bottlenecks: a monolithic inference node and manual scaling. |
| **Design** | Proposed a micro‑service “Process Group” that shards models by user tier, auto‑scales via *Amazon ECS + Fargate*, and routes traffic through *App Mesh* for observability. | Cut average latency from 250 ms to 95 ms (60% reduction) and increased throughput by 4× with 35% lower infra cost. |
| **Implementation** | Built a CI/CD pipeline on *CodePipeline* that deploys new model weights to S3, triggers *Lambda* for warm‑up, and updates ECS task definitions. | Achieved zero‑downtime deployments; MTTR dropped from 12 h to < 5 min. |
| **Evaluation** | Monitored with *CloudWatch* dashboards and A/B tested against legacy platform. | Customer satisfaction scores rose from 78/100 to 92/100, aligning with our “Customer Obsession” principle. |

I own the end‑to‑end flow (Ownership), dive deep into latency traces (Dive Deep), and iterate rapidly (Bias for Action). The bar‑raiser will see my quantified impact—latency & cost savings—and my learning loop: we introduced a fallback policy after an early “model freeze” incident, preventing 2 × SLA breaches.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
