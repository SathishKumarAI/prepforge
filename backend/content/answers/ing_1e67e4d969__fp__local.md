---
qid: ing_1e67e4d969__fp__local
question: 'Explain: IX. Disposability — The 12-Factor App'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 387
total_tokens: 561
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:11:05-05:00'
sources: []
---

### Why *disposability* matters for ML‑powered services

At the core of every production ML system is a **stateless request–response loop**: an incoming feature vector → model inference → output.  
If any component (model container, GPU driver, network stack) survives between requests, it can become stale or corrupt—caching a pre‑trained checkpoint in memory may hide a bug that only appears after a kernel update.  

The disposability principle says *“Every process should be replaceable on demand.”*  From an optimization viewpoint this guarantees **continuous re‑optimization**: the system can be rebuilt with newer hyper‑parameters, data pipelines, or hardware without downtime.  It also aligns with the *law of large numbers* in probability—by frequently resetting, you avoid drift and bias that accumulate over time.

#### Non‑obvious insight  
A disposable deployment is not just “kill it, start fresh”; it’s a **controlled perturbation** of the inference pipeline.  By deliberately restarting containers after each request batch (or at fixed intervals), you expose hidden race conditions in data preprocessing or model serialization that would otherwise stay latent in long‑running services.

In practice, this means:

1. **Container isolation** – no shared state across requests.  
2. **Immutable artifacts** – Docker images with pinned dependencies.  
3. **Fast restart times** – leverage pre‑warm caches (e.g., GPU tensor cores) so the cost of disposal is negligible.

Thus disposability transforms a fragile, monolithic ML service into an *optimizable* and *robust* system that self‑corrects through controlled, repeatable restarts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
