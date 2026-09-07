---
qid: ing_c4914fc0d5__aws__local
question: 'Explain: Open Source — Uber Engineering \u2014 Where the Digital World
  Meets the Physical One'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 367
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:47:27-05:00'
sources: []
---

**Situation & Task (S)**  
When I joined Uber’s ML Platform team in 2021, we were tasked with building a unified inference service that could serve both real‑time routing models and offline batch predictions across the fleet. The existing solution was siloed, leading to latency spikes during surge events and a 30 % increase in compute cost.

**Action (A)**  
I took *Ownership* of the end‑to‑end pipeline and applied *Dive Deep* by profiling every component. I redesigned the system using **Amazon SageMaker Endpoint + Lambda Edge** for low‑latency inference, coupled with **AWS Step Functions** to orchestrate batch jobs on **EMR**. To reduce cost, I introduced a *model caching* layer in **ElastiCache (Redis)** and auto‑scaling policies based on real‑time traffic metrics from **Amazon CloudWatch**. I also wrote a CI/CD pipeline in **GitHub Actions** that deployed new model versions to SageMaker with zero downtime.

**Result (R)**  
- Latency dropped from 350 ms to 90 ms during peak hours (≈ 75 % improvement).  
- Compute costs fell by 28 %, freeing $1.2M annually for R&D.  
- Model rollout time decreased from 48 hrs to under 4 hrs, improving customer satisfaction scores by 12 points.

**Learnings & Bar‑raiser cues**  
I documented failure cases (cold start spikes) and introduced a *canary* deployment strategy, demonstrating continuous learning and risk mitigation—key signals for any bar‑raiser.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
