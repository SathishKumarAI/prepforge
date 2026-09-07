---
qid: ing_c189cbcbbf__faang__local
question: 'Explain: How Uber evaluates AI agents at production scale'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 490
total_tokens: 722
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:11:00-05:00'
sources: []
---

**Clarify**  
You’re asking how a company like Uber, with millions of rides per day, validates that an AI agent (e.g., driver‑matching, ETA prediction) is safe and profitable before it touches real users.  
Assumptions: the model runs in production on Kubernetes/TF‑Serving, metrics are observable, and we have A/B testing infrastructure.

**Approach**  
1. **Offline validation** – train‑test split + cross‑validation on historic trip data.  
2. **Simulation layer** – run the agent against a replayed traffic simulator to catch edge‑case failures.  
3. **Shadow deployment** – let the model make decisions in parallel with the live system, logging actions but not acting.  
4. **A/B testing** – expose a small percentage of users to the new policy and monitor key metrics (surge accuracy, passenger wait time, driver earnings).  
5. **Real‑time monitoring** – dashboards, alerting on drift or performance drops.

**Depth**  
- Use *online learning* to update the agent in real time; however, weight updates are batched to avoid instability.  
- For safety, enforce hard constraints (e.g., max detour distance) via a rule‑based layer that overrides the neural network when violated.  
- Compute *counterfactual regret minimization* to estimate what would have happened if the model had acted differently; this informs bias detection.  
- Complexity: inference latency < 50 ms, batch size 1k requests/second.  
- Trade‑off: tighter constraints reduce exploration but improve user trust.

**Edge Cases**  
- Sudden traffic pattern shifts (holidays, accidents).  
- Model drift due to seasonal demand changes.  
- Data poisoning attacks on the training set.  
Tests include synthetic anomalies and adversarial perturbations.

**Optimize & Communicate**  
- Introduce *continuous integration* of new data pipelines to reduce retraining cycles.  
- Use feature importance heatmaps to explain decisions to regulators.  
- Narrate: “We first make sure the agent performs well offline, then we let it shadow real traffic, and finally we expose a small user base while monitoring for any metric degradation. If thresholds are breached, rollback is automatic.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
