---
qid: ing_91ea7f7e72__fp__local
question: How would you serve a large mixture-of-experts model on a statically scheduled
  fabric when expert selection is data-dependent?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 483
total_tokens: 666
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:15:30-05:00'
sources: []
---

**Serving a Data‑Dependent Mixture‑of‑Experts (MoE) on a Static Fabric**

The core problem is *dynamic load balancing*: each input token selects a subset of experts, but the fabric’s routing graph is fixed at compile time. To guarantee determinism we treat the **routing decision** as part of the forward pass and encode it into a *static schedule* that can be evaluated in parallel.

1. **Formulate as a bipartite assignment**  
   Let \(X\) be the set of tokens, \(E\) the experts, and \(A_{xe}\in\{0,1\}\) indicate whether token \(x\) is routed to expert \(e\). The objective is to minimize the *worst‑case* load on any expert while satisfying \(\sum_e A_{xe}=k\) (each token uses \(k\) experts).

2. **Static schedule as a pre‑computed bipartite graph**  
   We solve the assignment offline using integer programming or greedy heuristics, yielding a *static adjacency matrix*. Each edge is a dedicated compute lane; no dynamic reconfiguration occurs during inference.

3. **Dynamic routing via a lightweight selector**  
   At runtime the selector computes \(A_{xe}\) on‑the‑fly (e.g., top‑\(k\) softmax over gating logits). Because the schedule already contains all possible edges, the selector merely activates or deactivates lanes without incurring scheduling overhead.

4. **Load balancing by *over‑provisioning* and *sparsity regularization***  
   By adding a small penalty \(\lambda\sum_{x,e}A_{xe}\) during training we encourage uniform expert usage, which translates into smoother static schedules and fewer idle lanes.

**Non‑obvious insight:**  
The key is that the *static graph need not be minimal*; deliberately inserting extra redundant edges (over‑provisioning) allows the selector to choose any subset without violating the fabric’s constraints. This “excess capacity” turns a rigid scheduler into an implicit load balancer, preserving throughput while still exploiting data‑dependent expert selection.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
