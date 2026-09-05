---
qid: ing_1ffe0724c8__fp__local
question: 'Explain: Data flow at serving time — Multi Tenant Fine Tuning Platform'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 489
total_tokens: 662
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:14:01-05:00'
sources: []
---

### Why the flow matters

When a model is **fine‑tuned per tenant** we are no longer dealing with a single monolithic network.  
Each tenant’s parameters live in a distinct sub‑space of the full weight vector \(w\).  
At inference time we must select the right *sub‑model* for a request, *merge* it into a shared computation graph, and keep latency bounded.  

### The derivation

1. **Problem statement** – For every query \(q_i\) we need to evaluate  
   \[
   y_i = f_{\theta_{t(i)}}(q_i)
   \]
   where \(\theta_{t}\) is the fine‑tuned weight set for tenant \(t\).  
2. **Optimization constraint** – The total GPU memory budget \(M\) limits how many tenants’ weights can be resident simultaneously:  
   \[
   \sum_{t=1}^T |\theta_t| \le M
   \]
3. **Probabilistic scheduling** – Let \(p(t)\) be the request probability for tenant \(t\). Minimizing expected latency means solving a weighted caching problem:
   \[
   \min_{\mathcal{S}\subseteq T} \sum_{t\notin\mathcal{S}} p(t)\, L_{\text{cold}}
   \]
   where \(L_{\text{cold}}\) is the cost of loading \(\theta_t\) on demand.  
4. **Geometric embedding** – By compressing each \(\theta_t\) into a low‑rank factorization \(U_tV_t^\top\), we can share bases \(U\) across tenants, reducing memory to \(|U|+ \sum_t |V_t|\).  

### Non‑obvious insight

The *bottleneck* is not the size of individual tenant models but the **frequency of context switches** between them. A carefully designed *tenant‑aware cache eviction policy* that anticipates request bursts can cut latency by >30 % even when memory usage stays constant, because it avoids repeated re‑initialisation of shared layers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
