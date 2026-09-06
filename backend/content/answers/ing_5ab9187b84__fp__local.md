---
qid: ing_5ab9187b84__fp__local
question: 'Explain: III. Config — The 12-Factor App'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 362
total_tokens: 534
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:17:04-05:00'
sources: []
---

### Why the 12‑Factor **Config** rule matters for ML workloads

In a production machine‑learning pipeline the *only* thing that should change between environments (dev, test, prod) is the data and the hyper‑parameters—everything else must be deterministic.  
If you embed secrets or host‑specific URLs directly in code, each deployment becomes a new “version” that can’t be replicated, leading to drift and security gaps.

**Fundamental principle:** *configuration = environment‑dependent state*; the application logic is pure.  
By externalising all such state into key/value pairs (env vars, config files, secret stores), you:

1. **Decouple code from infrastructure** – the same binary runs everywhere.
2. **Enable immutability and versioning** – changes are tracked as configuration objects, not code commits.
3. **Facilitate continuous delivery** – a new config can be rolled out without rebuilding images.

In ML this means you can toggle model versions, dataset paths, or GPU quotas simply by changing an env var, while the inference container remains unchanged.  

**Non‑obvious insight:** Treating configuration as *first‑class data* turns deployment into a *stateless service* that is automatically compatible with blue‑green or canary rollouts. Because the code never reads hard‑coded values, you can safely run multiple model variants side‑by‑side, each with its own config, without interference—an essential property for A/B testing and gradual feature release in ML systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
