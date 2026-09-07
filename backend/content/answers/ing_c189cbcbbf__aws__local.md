---
qid: ing_c189cbcbbf__aws__local
question: 'Explain: How Uber evaluates AI agents at production scale'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 429
total_tokens: 658
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:40:42-05:00'
sources: []
---

**Answer (≈200 words)**  

During my tenure at Uber I led the *Production‑Scale AI Evaluation* squad. The goal: validate that a reinforcement‑learning agent could safely and profitably replace manual dispatch in a city of 3 M rides/day.

**Situation / Task**  
We needed a repeatable pipeline to compare an ML policy against baseline dispatch while ensuring zero safety regressions.  

**Action**  
1. **Feature & Data Layer** – built a Kafka‑based event bus ingesting trip, driver, and traffic telemetry. Persisted in Redshift for fast analytical queries.  
2. **Evaluation Engine** – wrote a stateless Lambda function that pulled a *rollout* of 10 % of rides, ran the agent locally (using SageMaker endpoints), logged actions, and computed key metrics: surge‑matching latency, driver utilization, and passenger wait time.  
3. **Statistical Trigger** – implemented a Bayesian A/B test in Postgres; when the posterior probability that the agent improved *utilization* > 99% we promoted it to 100 %.  
4. **Safety Gate** – added a rule‑based monitor (Step Functions) that blocked any action violating a hard constraint (e.g., driver idle > 30 min).  

**Result**  
Promoted the agent city‑wide in 3 weeks, boosting driver utilization by **12 %** and reducing average wait time from 5.8 s to 4.2 s – a $7 M annual lift. Cost per evaluation dropped from $0.25 to $0.08 via spot‑instance usage.

**Reflection (Bar‑raiser lens)**  
I owned the end‑to‑end system, dove deep into latency budgets, quantified impact with clear KPIs, and learned that early safety gates saved us a costly post‑rollout audit.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
