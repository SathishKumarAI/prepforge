---
qid: ing_c8c784728a__fp__local
question: 'Explain: F6: Cost runaway in training plane — Multi Tenant Fine Tuning
  Platform'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 490
total_tokens: 666
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:07:54-05:00'
sources: []
---

### Why “cost‑runaway” happens in a multi‑tenant fine‑tuning platform

At its core, fine‑tuning a transformer is an **optimization problem**: we minimize loss \(L(\theta)\) over a dataset of size \(N\). Each gradient step requires a forward–backward pass that touches every token once.  
The **compute budget** for a tenant therefore scales as  

\[
C_{\text{tenant}} \;=\; N \times T \times G,
\]

where \(T\) is the number of tokens per example, and \(G\) the cost (in FLOPs or GPU‑hours) per token.  
In a shared platform tenants are scheduled on the same hardware; when one tenant submits an unusually large batch or long‑sequence job, \(N\) or \(T\) explodes. Because the scheduler is usually **fair‑share** (equal GPU time), that single job can monopolize the resource pool for hours, forcing other tenants to wait—hence a *cost runaway*.

The deeper principle at work is **resource contention under linear scaling**: compute cost grows linearly with data volume, but the platform’s billing model often charges per‑hour or per‑token without throttling. If we treat each tenant as an independent process \(p_i\), the total spend is

\[
C_{\text{total}} = \sum_i C_{p_i},
\]

and a single outlier can dominate this sum, making the system’s cost unpredictable.

**Non‑obvious insight:**  
Fine‑tuning is *data‑centric*, not model‑centric. A small increase in sequence length or batch size multiplies the FLOPs per step linearly, but also increases memory pressure and I/O bandwidth. Modern GPUs have a fixed memory budget; once it’s exceeded, the scheduler must either swap to host RAM (dramatically slower) or reject the job. This implicit “memory bottleneck” is often the hidden trigger that turns a moderate workload into a cost runaway.

**Mitigation:**  
Introduce *token‑budget quotas* per tenant and enforce them at scheduling time; this caps \(N \times T\) before GPU allocation, guaranteeing predictable billing and preventing runaway costs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
