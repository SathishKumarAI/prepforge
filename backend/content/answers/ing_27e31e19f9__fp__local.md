---
qid: ing_27e31e19f9__fp__local
question: You are swapping the model behind a live feature. Walk me through shadow,
  canary and A/B. When do you use each?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 186
output_tokens: 526
total_tokens: 712
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:30:11-05:00'
sources: []
---

### From the problem to the solution

When you *swap a model* in production you face two constraints:

1. **Safety** – users must not see degraded or erroneous predictions.  
2. **Learning** – you need real‑world evidence that the new model is better.

The three deployment patterns are engineered to satisfy these constraints by trading off exposure, data fidelity and risk.

| Pattern | How it works | Why it solves the problem |
|---------|--------------|---------------------------|
| **Shadow (dry‑run)** | The new model receives the same input stream as the live one but runs *in isolation*. Its outputs are logged and compared to the current model. No traffic is routed to it. | Provides a *perfectly safe* comparison because no user sees the new predictions, yet you collect full‑scale data on how it behaves in situ. |
| **Canary** | A small, predefined fraction (e.g., 1 %) of live traffic is diverted to the new model. The rest continues with the old one. Metrics are monitored in real time. | Balances safety and learning: most users stay on the proven model, while you gather statistically significant feedback from a representative slice. |
| **A/B test** | Two (or more) groups of users are randomly assigned to different models. All metrics are compared after a period. | Maximizes *statistical power* by ensuring comparable user cohorts; best for evaluating business impact (CTR, revenue). |

### When to use each

- **Shadow** – first step when you only need *validation data*, e.g., before any canary or A/B test.  
- **Canary** – when you want quick feedback with minimal risk; ideal for latency‑sensitive services where a full rollout could hurt many users.  
- **A/B** – once the new model passes shadow and canary tests, use A/B to confirm that real user behavior (not just metrics) improves.

### Non‑obvious insight

All three rely on *independence of input distribution* between the old and new models. If the feature’s data drift during deployment (e.g., a sudden spike in a specific demographic), shadow will still compare apples to apples, but canary/A/B may mislead because the traffic split is not representative. Ensuring that the traffic partition preserves the same distribution—or re‑weighting post‑hoc—is essential for trustworthy conclusions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
