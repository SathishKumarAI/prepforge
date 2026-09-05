---
qid: ing_3837a4f014__fp__local
question: 'Explain: Self-Hosting & GPU Cloud Arbitrage — Pricing And Costs'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 450
total_tokens: 623
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:04:00-05:00'
sources: []
---

**Self‑hosting vs. GPU‑cloud arbitrage**

The core problem is *compute cost minimisation under latency constraints*.  
A user owns a GPU cluster (self‑hosted) with fixed capital outlay \(C_{\text{cap}}\). Each inference request incurs a variable operating cost \(c_{\text{op}}\) that scales linearly with utilisation \(u\):  

\[
E_{\text{self}}(u)=C_{\text{cap}}/T + c_{\text{op}}\,u ,
\]

where \(T\) is the amortisation horizon.  
In contrast, a GPU‑cloud provider charges an hourly rate \(r(t)\) that fluctuates with demand; the cost per request is  

\[
E_{\text{cloud}}(u,t)= r(t)\,\Delta t .
\]

**Arbitrage strategy**: when \(r(t)<c_{\text{op}}\), offload work to the cloud; otherwise keep it local. The decision rule follows from comparing marginal costs:

\[
\text{Use cloud if } r(t) < c_{\text{op}} \quad \Longleftrightarrow \quad
r(t) < \frac{\partial E_{\text{self}}}{\partial u}.
\]

This is essentially a *Lagrangian* optimisation where the multiplier is the marginal operating cost. The deeper principle is that both systems implement a **resource‑pricing market**: self‑hosting internalises opportunity cost, while cloud exposes real‑time supply‑demand.

**Non‑obvious insight**  
Most overlook that *cloud elasticity also reduces variance*. Even if average cloud prices exceed local per‑unit costs, the stochastic nature of \(r(t)\) allows a risk‑averse user to hedge against spikes in utilisation or power outages. By treating cloud as an option contract (pay a premium for on‑demand access), one can achieve a lower *expected* cost while keeping peak performance guarantees—an application of **real‑options theory** to GPU workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
