---
qid: ing_53b8741c18__fp__local
question: 'Explain: Zero downtime cut-over and fast rollback strategy'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 517
total_tokens: 687
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:02:54-05:00'
sources: []
---

**Zero‑downtime cut‑over + fast rollback for ML models**

*Fundamental problem*: An online service must keep serving predictions while a new model is evaluated. A naive switch (replacing the model file) causes a brief “cold‑start” pause and exposes the system to a potentially buggy model until humans can notice the failure.

**Why it works as described**

1. **Dual‑stack deployment** – Keep two identical inference pipelines side by side: *old* (stable) and *new* (candidate). Both run on separate containers or micro‑services, each with its own GPU/CPU pool.  
2. **Feature flag routing** – A lightweight load balancer (or service mesh) routes a small fraction of traffic to the new pipeline while the rest continues on the old one. Because the two pipelines share the same API contract, no client changes are needed.  
3. **Health‑checks + metrics** – The router monitors latency, error rates and domain‑specific KPIs from both streams. If any metric exceeds a threshold, traffic is automatically re‑oriented to the stable pipeline.  
4. **Atomic version switch** – Once all metrics are within tolerance, the flag flips for 100 % of traffic. The old instance is shut down only after the new one has processed a *warm‑up* batch (to fill caches and warm GPU kernels).  

**Fast rollback**

Because both pipelines were running in parallel, a rollback is just another flag flip back to the old version; no code changes or restarts are required. All stateful components (e.g., feature stores) are kept read‑only during cut‑over, so reverting does not corrupt data.

---

### Non‑obvious insight

The *critical* element is that **both pipelines must be fully isolated yet share the same deterministic inputs**. If the new model reads mutable external state (e.g., a live feature store), the old and new predictions can diverge even if the models themselves are identical. By enforcing immutability or snapshotting the feature set at cut‑over, you guarantee that any observed performance difference is truly due to the model change, not upstream drift. This subtle isolation turns what looks like a simple “blue/green” deployment into a statistically sound A/B test that can be rolled back with zero risk.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
