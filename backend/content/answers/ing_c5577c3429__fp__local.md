---
qid: ing_c5577c3429__fp__local
question: 'Q: How do you handle "Noisy Neighbors" in a multi-tenant LLM cluster?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 398
total_tokens: 578
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:01:18-05:00'
sources: []
---

**Handling “Noisy Neighbors” in a Multi‑Tenant LLM Cluster**

When several large language models (LLMs) share the same GPU or CPU resources, each inference job behaves like a *queueing system* with random service times: token latency is the service time, and the request queue is the buffer. A “noisy neighbor” appears when one tenant’s workload suddenly spikes—perhaps due to a burst of long prompts or an adversarial test—causing its requests to occupy GPU memory and compute for a disproportionate amount of time.  

The fundamental problem is *fairness under stochastic demand*: we want every tenant’s latency distribution to stay within a target percentile, regardless of others’ bursts. This is an instance of the **max‑min fairness** principle in network scheduling, but here the resource (GPU memory) is *non‑divisible* and the service time is *contention‑dependent*.  

A principled solution is to model each tenant’s workload as a Poisson process with unknown rate λᵢ. We allocate a **virtual queue weight wᵢ = 1/λ̂ᵢ** (where λ̂ᵢ is an online estimate). The scheduler then dispatches tokens according to *Weighted Fair Queueing* (WFQ), ensuring that over any interval the fraction of GPU time each tenant receives ≈ wᵢ / Σwⱼ.  

**Non‑obvious insight:** Instead of throttling tenants after a spike, proactively *predict* λ̂ᵢ using exponential smoothing on recent request rates and adjust wᵢ in real time. This anticipatory reweighting smooths latency spikes before they manifest, turning the cluster into a self‑healing system that satisfies fairness by design rather than by reactive throttling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
