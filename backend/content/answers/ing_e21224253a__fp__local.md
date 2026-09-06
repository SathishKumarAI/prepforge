---
qid: ing_e21224253a__fp__local
question: 'Explain: The First Architectural Decision: Docker Before Kestra'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 303
total_tokens: 474
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:00:30-05:00'
sources: []
---

**Why Docker first, then Kestra?**

When you build a production‑grade ML pipeline, the *first* obstacle is reproducibility: every run must see the exact same code, libraries, and environment that produced the training data. The only way to guarantee this at scale is to **containerise** the whole stack—Python, CUDA drivers, model artefacts, and any custom utilities. Docker gives you a deterministic image that can be pulled on any host, eliminating “it works on my machine” bugs.

Once the runtime is fixed, the real optimisation problem becomes *workflow orchestration*. Kestra shines here because it treats jobs as **stateless containers**: each task simply pulls the pre‑built Docker image and runs. This decouples the scheduler from the application logic; you can swap models or preprocessing steps without touching the orchestrator code.

A non‑obvious insight is that this separation turns *resource allocation* into a linear optimisation problem. Since every container has the same interface, Kestra’s scheduler can treat each task as an identical job with a known resource footprint, allowing it to solve for minimal total latency under cluster constraints analytically rather than heuristically.

In short: Docker guarantees reproducibility; Kestra turns that reproducible unit into an optimisable scheduling problem, giving you both reliability and efficiency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
