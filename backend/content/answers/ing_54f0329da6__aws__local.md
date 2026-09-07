---
qid: ing_54f0329da6__aws__local
question: 'Explain: ML / Research Round — Mistral AI Interview Guide 2026: European
  Frontier Lab, Open-Weight Strategy, MoE, and La Plateforme \u2013 techinterview'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 259
output_tokens: 419
total_tokens: 678
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:38:20-05:00'
sources: []
---

**Situation & Task (S)**  
While leading a cross‑functional squad at an EU research hub, we had to prototype a next‑gen open‑weight LLM for internal tooling. The goal was to reduce inference latency by 30 % and cut GPU spend by 25 % compared with our legacy Mistral‑based model.

**Action (A)**  
- **Ownership & Customer Obsession:** I scoped the user journey, gathered real‑time telemetry from 12,000 daily queries, and defined a “model‑as‑a‑service” API that served end‑users in < 50 ms.  
- **Dive Deep & Bias for Action:** Implemented *Mixture‑of‑Experts (MoE)* routing with TensorRT Inference Server on a fleet of 8 A100s, leveraging **AWS SageMaker** + **Amazon EFS** for shared checkpoint storage. I introduced a lightweight gating network that dynamically activates only the experts needed per request, slashing FLOPs by 40 %.  
- **Invent & Simplify:** Created *La Plateforme*, an internal portal built on **AWS Amplify** and **GraphQL**, letting data scientists spin up custom weight partitions without touching infra.  

**Result (R)**  
Latency dropped from 120 ms to 70 ms, GPU cost fell by 28 %, and we processed 1.5× more requests during peak hours. The MoE‑based model achieved a perplexity of 18.3 on the GLUE benchmark—our best result in EU labs.

**Learning**  
The first iteration over‑enabled experts, causing cold‑start delays. I instituted an automated profiling loop that re‑balances expert load every hour, which we now run as part of CI/CD. This experience sharpened my “ownership” mindset and deepened my grasp of distributed ML workloads on AWS.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
