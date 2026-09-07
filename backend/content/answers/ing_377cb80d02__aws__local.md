---
qid: ing_377cb80d02__aws__local
question: What safety evals and benchmarks should you know, and what are their limitations?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 434
total_tokens: 669
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:30:03-05:00'
sources: []
---

**Situation / Task**  
At my previous role I led the AI‑Safety squad for a recommendation engine that served 10 M daily users. The product team demanded *confidence* in model behavior before rollout, so I had to select safety benchmarks, run evaluations, and surface actionable insights.

**Action**  
I built a continuous evaluation pipeline on **AWS SageMaker Pipelines** + **Athena** for data aggregation. For each release we ran:  

| Benchmark | What it tests | AWS service | Key metric |
|-----------|---------------|-------------|------------|
| **OpenAI Safety Gym** | Adversarial prompts & policy compliance | SageMaker Inference | % of safe responses |
| **HumanEval‑Style Benchmarks** (code generation) | Logical correctness | CodeBuild + Lambda | Pass@1 rate |
| **Toxicity / Bias checks** (Perspective API) | Content moderation | Comprehend Custom | Toxicity score |

We also introduced a *Safety‑Score* = 0.7 × (1‑Adversarial Success Rate) + 0.3 × (1‑Bias Ratio).  
The pipeline ran nightly; results surfaced in **QuickSight** dashboards.

**Result**  
By deploying these checks, we reduced post‑deployment incidents from **12 per week** to **<2**, cut manual review time by **35%**, and increased user trust scores (NPS) from 68 to 82. The cost of the pipeline was $3k/month—well below the estimated $15k/incident savings.

**Reflection**  
I learned that *benchmarks are proxies*, not guarantees; we must combine them with real‑world monitoring. Future iterations will add *Human‑in‑the‑Loop* drift detection and explore **Amazon SageMaker Clarify** for bias transparency.  

> **Leadership Principles:** Customer Obsession, Ownership, Dive Deep, Deliver Results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
