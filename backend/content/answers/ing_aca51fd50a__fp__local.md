---
qid: ing_aca51fd50a__fp__local
question: 'Explain: You own an LLM feature in production. What does on-call actually
  look like for it, and tell me about a page you took.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 502
total_tokens: 691
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:11:55-05:00'
sources: []
---

## Why “on‑call” is essential for an LLM in production

An LLM is a *black‑box optimizer*: it maps user prompt → probability distribution over tokens by maximizing a learned objective (cross‑entropy). When the model sits behind a live API, any degradation in this optimization pipeline becomes a user‑experience loss. On‑call staff are therefore the **real‑time watchdogs of the model’s inference loop**.

### What an on‑call shift actually looks like

| Phase | Core activity | Underlying principle |
|-------|---------------|----------------------|
| **Detection** | Monitor latency, error rates, and token‑generation statistics via Prometheus alerts. | Information theory: a sudden drop in perplexity or increase in KL divergence signals that the distribution has shifted (concept drift). |
| **Isolation** | Drill into request logs, compare against recent checkpoints, run “sanity tests” (e.g., deterministic prompts). | Geometry of the embedding space: if embeddings suddenly cluster differently, the model may have entered a new regime. |
| **Remediation** | Spin up a fresh inference container, roll back to the last known‑good checkpoint, or temporarily throttle requests. | Optimization: restoring the objective function’s stability restores throughput without retraining. |
| **Post‑mortem** | Document root cause, update runbooks, and feed findings into continuous training loops. | Feedback loop: errors inform future data selection and hyper‑parameter tuning. |

### A page I once took

I was on call when a sudden spike in *token‑generation time* appeared after a minor deployment of the tokeniser. The alert read **“Avg latency > 500 ms, error rate ↑ 2×.”** Investigating the logs revealed that the new tokenizer produced longer byte‑pair encodings for certain rare tokens, causing the GPU batch scheduler to over‑allocate memory and trigger frequent GC pauses.

The fix was simple: revert to the previous tokenizer binary while we patched the encoding table. In the post‑mortem I highlighted how a seemingly innocuous change in *token representation* can cascade into a latency spike—a non‑obvious insight many overlook: **the tokenizer is not just a preprocessing step; it shapes the geometry of every inference run.**

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
