---
qid: ing_7e1f0861be__fp__local
question: 'Explain: Billing — Cloud Computing without Containers | Cloudflare Blog'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 408
total_tokens: 579
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:33:47-05:00'
sources: []
---

**Billing in “Server‑less” Cloud Computing (no containers)**  

The fundamental problem is that customers want to pay *exactly* for the compute they use, not for a fixed VM or a pre‑provisioned container cluster.  
If we model each request as an independent computation **c** with duration \(t_c\) and resource demand \(r_c\), the total cost should be proportional to \(\sum r_c t_c\).  

Cloudflare’s approach eliminates containers by treating every function invocation as a *stateless micro‑service* that is instantiated on demand. The runtime supplies a minimal kernel, a lightweight “sandbox” and just enough libraries for the code to run. Because there are no persistent container images or orchestration layers, the *stateful* overhead—storage of image metadata, network overlay, scheduling queues—is removed from the billing equation.

Mathematically, the cost per request becomes:
\[
\text{Cost} = \alpha \cdot r_c t_c + \beta
\]
where \(\alpha\) is a per‑second rate for CPU/RAM and \(\beta\) is an ultra‑small fixed “cold start” fee.  
The key insight most overlook: **the cold‑start penalty can be amortized across millions of invocations if the runtime keeps a shared, pre‑warm pool of minimal runtimes**. This transforms the cost curve from step‑like (container warm‑up) to nearly linear, enabling true “pay‑for‑use” economics.

In practice, Cloudflare’s billing model mirrors this: they charge per million requests plus a small fee for total compute time, but not for idle container resources. Thus, the deeper principle is *elastic resource allocation guided by fine‑grained measurement*, which only becomes possible when the infrastructure layer itself is stripped down to its essentials.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
