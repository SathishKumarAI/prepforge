---
qid: ing_fcf8b40519__faang__local
question: 'Explain: Strategy 1: Model Routing — Pricing And Costs'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 426
total_tokens: 660
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:28:02-05:00'
sources: []
---

**Clarify**  
We’re asked to explain *Model‑Routing* as a strategy for setting pricing and controlling costs in an AI platform. I’ll assume the context is a cloud‑based ML service where multiple models (e.g., different LLMs or vision nets) are available, users request inference, and we need to decide which model to route each request to while balancing revenue and operational spend.

**Approach**  
1. Define a cost‑per‑token/operation for each model (compute, storage, licensing).  
2. Assign a price point that reflects value (accuracy, latency) per model.  
3. Build a routing policy: high‑value users → premium models; low‑budget or latency‑sensitive requests → cheaper models.  
4. Continuously monitor utilization and cost, then adjust prices or reroute.

**Depth**  
- **Cost Model:** `C_i = α·CPU_i + β·GPU_i + γ·Storage_i` per request for model *i*.  
- **Revenue Model:** `R_i = P_i · Q_i`, where *P_i* is price and *Q_i* the volume.  
- **Optimization Goal:** Maximize Profit = Σ(R_i – C_i) subject to SLA constraints.  
- Use a linear program or reinforcement‑learning policy that learns the optimal mapping from request features (user tier, input size, latency tolerance) to model choice.

**Edge Cases**  
- Sudden spikes in demand could push a high‑cost model into oversubscription → trigger fallback routing.  
- Model drift: accuracy drops, price no longer justified → re‑evaluate.  
- Regulatory limits on data locality may force suboptimal routing.

**Optimize & Communicate**  
To improve, introduce tiered pricing bundles and dynamic discounting based on real‑time cost predictions. Explain to stakeholders that this approach aligns product value with operational economics, ensuring a scalable, profitable AI offering while maintaining user experience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
