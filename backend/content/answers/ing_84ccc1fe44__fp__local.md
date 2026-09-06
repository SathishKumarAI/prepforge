---
qid: ing_84ccc1fe44__fp__local
question: 'Explain: ML System Design Questions (2025-2026) — Ml Interview Prep'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 375
total_tokens: 552
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:47:35-05:00'
sources: []
---

**ML System Design: The 2025‑26 “Interview” Blueprint**

The core engineering problem is *scalable inference*: given a model \(f_\theta(x)\) trained offline, how do we expose it as a service that delivers low latency, high throughput, and robust reliability to millions of users?  
1. **Latency vs. Throughput Trade‑off** – A single GPU can process only \(N\) requests per second; scaling horizontally introduces *stale parameter* issues. The solution is *model partitioning*: split the network into stages (feature extractor + head), each served on a different node, and pipeline inputs to keep all GPUs busy.  
2. **Consistency & Drift** – Production data diverges from training distribution. Deploy an online learner that continuously estimates the KL‑divergence between current batch \(p_{\text{prod}}\) and training \(p_{\text{train}}\); trigger a retrain if divergence exceeds \(\epsilon\).  
3. **Observability & Failure Isolation** – Wrap each stage in a *canary* container; use distributed tracing (e.g., OpenTelemetry) to attribute latency spikes to specific tensors or sub‑models.  

A non‑obvious insight: **Model compression is not merely size reduction but a *policy for resource allocation***. By quantizing layers that contribute least to the decision boundary, we free GPU memory, allowing us to increase batch size and thus throughput without sacrificing accuracy. This aligns with the principle of *information bottleneck*: keep only the bits most relevant to the label.

Designing an ML system is therefore a disciplined exercise in *balancing statistical fidelity against operational constraints*, guided by quantifiable metrics rather than intuition alone.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
