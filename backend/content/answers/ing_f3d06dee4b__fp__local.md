---
qid: ing_f3d06dee4b__fp__local
question: 'Explain: Delay service — Asynchronous computing at Meta: Overview and learnings'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 401
total_tokens: 576
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:37:07-05:00'
sources: []
---

### Why “delay” is a *service*  
In a distributed ML pipeline the costliest step is often **model inference**: every request must wait for a GPU or TPUE to finish, which introduces latency spikes that ripple through the system. The fundamental problem Meta solves is *decoupling user‑visible latency from compute availability*. By treating delay as a first‑class service, they turn an unavoidable compute bottleneck into a controllable resource.

### How it works from ground up  
1. **Task queue + priority** – Every inference request is wrapped in a lightweight job and queued. Jobs are tagged with *time‑to‑live* (TTL) and expected compute cost.  
2. **Back‑pressure via credit system** – Workers advertise available credits; the scheduler issues jobs only when enough credits exist, preventing overload.  
3. **Dynamic scaling** – The service monitors queue depth and tail latency; if a surge occurs, it spins up additional workers (containers or spot VMs) on demand, guided by a *stochastic optimization* that balances cost vs. SLA probability.  
4. **Result caching & early‑exit** – Frequently requested patterns are cached; for long‑running jobs the system can return an approximate answer and refine it asynchronously.

### Non‑obvious insight  
The key is treating latency as a *probabilistic resource* rather than a deterministic one. By modeling tail latency as a distribution, Meta can allocate just enough compute to keep the 99th percentile below a target while keeping idle resources minimal—something traditional queueing theory would miss because it assumes fixed service times.

### Take‑away  
Delay Service turns inference into an *elastic, probabilistically bounded* computation layer, allowing ML workloads to scale cost‑effectively without compromising user experience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
