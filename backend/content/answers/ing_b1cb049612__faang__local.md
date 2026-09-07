---
qid: ing_b1cb049612__faang__local
question: 'Explain: You''re running an A/B test on a new model. Walk me through designing
  it, and tell me what you''d refuse to do once it''s live.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 517
total_tokens: 770
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:37:26-05:00'
sources: []
---

**Clarify**  
We’re comparing a new AI model (Model B) against the current production model (Model A). The goal is to measure business‑relevant metrics (e.g., conversion rate, revenue per user) while ensuring no negative impact on existing users or system stability. I’d confirm:  

- What metric(s) define success?  
- Target population and traffic split.  
- Data privacy constraints and A/B test governance policies.

**Approach**  
1. **Design** – Randomly assign incoming requests to A or B with a 50/50 split (or use stratified sampling if user segments differ).  
2. **Metrics & thresholds** – Define primary KPI, secondary metrics, and statistical significance level (α=0.05) plus power analysis to estimate required sample size.  
3. **Instrumentation** – Instrument both models to log predictions, latency, error rates, and any downstream business events.  
4. **Monitoring** – Set up dashboards for real‑time A/B performance, drift alerts, and anomaly detection on latency or failure rates.

**Depth**  
- Use a Bayesian online update to compute the probability that B > A for the primary metric; stop early if probability exceeds 0.99 or falls below 0.01.  
- Complexity: O(n) per request for routing; storage overhead linear in traffic split.  
- Trade‑offs: Larger splits yield faster conclusions but increase risk of exposing a subpar model to many users.

**Edge Cases**  
- Model B introduces higher latency → user churn.  
- Data leakage causing inflated metrics.  
- Unbalanced traffic due to routing bugs.  
Tests: simulate 10k synthetic requests, run A/B in staging, perform sanity checks on logs before live rollout.

**Optimize & Communicate**  
After a successful test, roll out B incrementally (e.g., 60/40 → 80/20) while continuously monitoring key metrics. I’d *refuse* to:  

1. **Force‑fully enable** Model B for all traffic if any latency or error metric degrades beyond acceptable thresholds.  
2. **Ignore statistical significance** and make business decisions on anecdotal observations.  
3. **Disable rollback capabilities**; always keep a hot‑standby of Model A to restore service quickly.

This structured plan balances rigorous evaluation with operational safety, aligning with FAANG expectations for data‑driven experimentation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
