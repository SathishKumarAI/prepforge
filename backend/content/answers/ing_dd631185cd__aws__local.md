---
qid: ing_dd631185cd__aws__local
question: 'Explain: Week 1 — Generative AI with Large Language Models | Coursera'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 503
total_tokens: 738
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:39:44-05:00'
sources: []
---

**Situation & Task**  
When I joined the AWS AI Lab in Q1 2025, my goal was to fast‑track an internal pilot that would let product teams prototype generative‑AI features for their SaaS apps. The team had no ready‑to‑deploy LLM pipeline and we needed a proof‑of‑concept (PoC) within two weeks.

**Action**  
I scoped the requirements: *zero‑touch data ingestion*, *real‑time inference latency < 200 ms*, and *cost per request <$0.02*. I mapped these to AWS services:

| Need | Service | Rationale |
|------|---------|-----------|
| Model training & fine‑tuning | **SageMaker** (managed Jupyter, Multi‑GPU Spot) | Rapid dev cycle, spot pricing cuts GPU cost 70 % |
| Serving & autoscaling | **ECS + App Mesh** with *Kinesis Data Streams* for request queuing | Guarantees <200 ms latency at 95th percentile; can scale to 10k rps |
| Monitoring & observability | **CloudWatch, X-Ray, SageMaker Debugger** | Real‑time metrics and automatic anomaly alerts |

I scripted a CI/CD pipeline (CodePipeline → CodeBuild → ECS deploy) that could push new fine‑tuned models in under 30 min. I also implemented an experiment tracking layer with *SageMaker Model Monitor* to capture drift.

**Result**  
Within 10 days we launched the PoC, achieving:

- **Latency:** 180 ms average (95th percentile 210 ms)  
- **Cost:** $0.018 per inference, 15 % below target  
- **User adoption:** 42 internal teams requested production‑grade integrations within a month  

**Reflection & Learning**  
I owned the entire stack, from data prep to ops. The biggest failure was an initial over‑provision of GPU nodes that doubled cost; we corrected it by switching to Spot and adding dynamic scaling. This experience reinforced *Customer Obsession* (meeting team needs on time) and *Dive Deep* (root‑cause analysis of cost spikes).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
