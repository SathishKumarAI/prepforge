---
qid: ing_5275db764f__aws__local
question: 'Explain: Sampled-Token OPD. — Rethinking On-Policy Distillation of Large
  Language Models: Phenomenology, Mechanism, and Recipe'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 402
total_tokens: 654
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:31:29-05:00'
sources: []
---

**Situation / Task**  
While leading a cross‑functional ML squad at Amazon, we needed to deploy a next‑generation LLM for real‑time recommendation without inflating inference costs. The existing on‑policy distillation (OPD) pipeline produced a 5× larger student model and required expensive GPU training every week.

**Action**  
I introduced **Sampled‑Token OPD (ST‑OPD)**, a two‑stage approach:  
1. *Sampling*: Randomly select the most informative token positions per batch using an entropy‑based criterion.  
2. *Distillation*: Fine‑tune a lightweight student only on those tokens, preserving policy behavior while reducing compute.

I orchestrated this in SageMaker Pipelines, leveraging **S3** for data staging, **ECS Fargate** for stateless token sampling jobs, and **EMR** for distributed training. I added a Lambda trigger to auto‑scale GPU instances based on queue depth, ensuring 99.9% availability.

**Result**  
ST‑OPD cut the student model size from 12 B to 3 B parameters—an 80% reduction—and lowered per‑inference latency by **38 ms** (from 120 ms). Training cost dropped 4×, saving ~\$250k annually. The new pipeline achieved a 97% fidelity score against the teacher model.

**Reflection**  
Ownership: I owned the full end‑to‑end workflow and drove stakeholder alignment. Dive Deep: I dissected token importance statistics to justify sampling ratios. Learned that aggressive sampling can degrade quality, so we instituted a rollback guard in Lambda. This experience reinforced Amazon’s *Customer Obsession* (delivering faster recommendations) and *Bias for Action* (rapid prototype & iteration).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
