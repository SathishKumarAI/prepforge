---
qid: ing_d7d07c9f3d__fp__local
question: How would you A/B test a prompt change safely in production?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 451
total_tokens: 623
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:39:18-05:00'
sources: []
---

**A/B‑testing a prompt change in production**

The core problem is *causal attribution*: we want to know whether the new wording improves user experience, not just correlate with it.  
1. **Define a precise hypothesis** (e.g., “Prompt B increases satisfaction scores by ≥5 %”).  
2. **Randomize at the request level**—each incoming query is independently assigned to A or B via a hash of the session ID. This guarantees exchangeability and eliminates confounding variables such as time, device, or user profile.  
3. **Select orthogonal metrics**: primary (e.g., click‑through), secondary (latency, token count). Use *Pareto‑optimal* trade‑offs to avoid cherry‑picking.  
4. **Apply a sequential test** (α‑level 0.05) with early stopping for superiority or futility. This keeps the experiment short and reduces exposure risk.  
5. **Safety net**: route a small fraction of traffic through a *shadow* mode that records outputs but never serves them; if anomalous behavior is detected, roll back instantly.  
6. **Post‑hoc causal inference**: compute an *average treatment effect (ATE)* using inverse probability weighting to correct for any residual imbalance.  

**Non‑obvious insight**: Treat the prompt as a *policy* and evaluate its impact via *counterfactual simulation*. By feeding the same user context into both prompts offline, you can estimate expected differences without exposing users at all—useful when the new prompt might trigger regulatory or safety concerns. This approach bridges online experimentation with rigorous causal analysis, ensuring that any deployment change is backed by statistically sound evidence.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
