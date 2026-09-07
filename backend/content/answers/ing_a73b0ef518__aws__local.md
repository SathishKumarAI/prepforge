---
qid: ing_a73b0ef518__aws__local
question: Isn't it common sense that RL should turn pass@ k into pass@1?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 382
total_tokens: 618
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:44:39-05:00'
sources: []
---

**Situation** – I was leading a team that built an RL‑based recommendation engine for a video‑streaming platform. The business KPI was *Pass@k* (the probability the user clicks any of the top‑k recommendations).  

**Task** – Stakeholders expected that “turning Pass@k into Pass@1” would be trivial, but we saw a 12 % drop in overall engagement when we pushed for a hard Pass@1 target. I had to justify why the RL objective needed a *soft* Pass@k loss and demonstrate measurable impact.

**Action** –  
- **Ownership & Dive Deep:** Ran a root‑cause analysis with A/B tests (n=2 M users) and discovered that optimizing strictly for Pass@1 over‑fits to high‑engagement “super‑clickers,” hurting long‑tail users.  
- Designed a *weighted* RL reward: `R = α·Pass@k + β·Diversity`, with α=0.7, β=0.3, tuned via Bayesian optimization on the same test set.  
- Implemented the policy in SageMaker Pipelines and deployed to CloudWatch for real‑time monitoring.  

**Result** – The new objective lifted overall Pass@k from 18 % to **23 %** (+28 %) while keeping Pass@1 within 0.8 % of baseline, translating to a $4M annual lift in ad revenue.  

**Bar‑raiser take‑away:** I owned the problem end‑to‑end, dove deep into data, quantified the trade‑off, and learned that “common sense” can be misleading when user behavior is non‑stationary.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
