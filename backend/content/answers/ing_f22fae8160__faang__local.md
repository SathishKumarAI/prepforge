---
qid: ing_f22fae8160__faang__local
question: 'Explain: Q113: Your computer-use agent passes demos but fails 30% of real
  workflows in production. Walk through your reliability engineering plan.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 466
total_tokens: 717
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:02:43-05:00'
sources: []
---

**Clarify**  
We’re dealing with a computer‑use AI that *passes* all scripted demos but breaks on ~30 % of real workflows in production.  
Assumptions to confirm:  
1. The failure surface is reproducible (same inputs → same errors).  
2. We have access to logs, telemetry, and a staging environment that mirrors prod.  
3. Business impact: downtime or data loss?  

**Approach**  
1. **Root‑cause discovery** – instrument the agent, capture full state snapshots on failure.  
2. **Failure taxonomy** – classify errors (API limits, UI changes, auth drift, data‑quality).  
3. **Test amplification** – generate synthetic workflows that exercise edge cases.  
4. **Canary rollouts & observability** – deploy incremental changes with live monitoring and rollback hooks.  

**Depth**  
- Instrumentation: add structured logs (JSON) + metrics (Prometheus labels per action).  
- Failure replay: store input‑output pairs in a test harness; use property‑based testing to surface unseen combos.  
- Automated retraining loop: flag mispredictions, feed back into training data with human annotation.  
- Confidence calibration: use temperature scaling or Bayesian layers so the agent can *say “I’m unsure”* and defer to fallback scripts.  

Complexity: O(n) per workflow for logging; replay cost is linear in test set size but amortized across releases. Trade‑off: heavier instrumentation may slow the agent, mitigated by async log shipping.

**Edge Cases**  
- Race conditions in UI interactions.  
- Non‑deterministic third‑party APIs (rate limits).  
- Sudden schema drift in data sources.  
Test these with fuzzing and time‑based stress tests.

**Optimize & Communicate**  
Iterate on the confidence model, reduce false positives to lower manual triage load. Document findings in a post‑mortem wiki; present metrics dashboards so stakeholders see improvement over time. This structured plan shows clear problem framing, actionable steps, depth of technical handling, and continuous improvement—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
