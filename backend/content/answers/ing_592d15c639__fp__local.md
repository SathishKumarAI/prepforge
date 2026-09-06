---
qid: ing_592d15c639__fp__local
question: 'Explain: Q116: Design cost-aware multi-provider routing for June 2026 prices:
  Fable 5 at $10/$50, Opus 4.8 at $5/$25, GPT-5.5 at $5/$30, Sonnet 4.6 at $3/$15,
  DeepSeek V4 Flash at $0.14/$0.28.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 835
total_tokens: 1072
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:14:09-05:00'
sources: []
---

### From the problem to a principled solution

We have **five AI‑model providers** whose *per‑token* costs differ for **prompt** (input) and **completion** (output).  
For any request we know in advance:

| Provider | Prompt cost | Completion cost |
|----------|-------------|-----------------|
| Fable 5      | $10/50   | $10/50          |
| Opus 4.8     | $5/25    | $5/25           |
| GPT‑5.5      | $5/30    | $5/30           |
| Sonnet 4.6   | $3/15    | $3/15           |
| DeepSeek V4 Flash | $0.14/0.28 | $0.14/0.28 |

The **objective** is to route a batch of requests so that the *total monetary cost* is minimized, subject to service‑level constraints (latency, reliability, etc.).

---

#### 1. Cost as an additive linear function

For a request with \(p\) prompt tokens and \(c\) completion tokens, provider \(i\) charges  

\[
C_i(p,c)=p\,a_i + c\,b_i ,
\]

where \((a_i,b_i)\) are the per‑token costs from the table.  
The total cost of a batch is simply the sum of these linear terms; no hidden interaction exists, so **linear programming** is appropriate.

---

#### 2. Formulating the routing problem

Let \(x_{ij}\in\{0,1\}\) indicate whether request \(j\) uses provider \(i\).  
Constraints:

* **Assignment**: \(\sum_i x_{ij}=1\) (every request gets one provider).
* **Capacity / SLA**: For each provider \(i\), the aggregate expected latency and throughput must stay below thresholds; these can be expressed as linear inequalities on \(\sum_j x_{ij}\).

Objective:

\[
\min_{\{x_{ij}\}}\;\sum_{j}\sum_i x_{ij}\bigl(p_j a_i + c_j b_i\bigr).
\]

This is a classic **integer linear program (ILP)**. Because the cost matrix is sparse and the constraints are simple, we can solve it efficiently with a commercial solver or a custom branch‑and‑bound routine.

---

#### 3. Why this works

* **Additivity** guarantees that splitting a request across providers never reduces cost; each token’s price is fixed.
* The ILP ensures that every request is routed to the *cheapest feasible provider* while respecting SLA caps.
* If provider prices change (e.g., June 2026 discounts), we simply update \((a_i,b_i)\) and re‑solve—no redesign needed.

---

#### 4. Non‑obvious insight

> **The bottleneck is not the cheapest per‑token price but the *ratio* of prompt to completion tokens.**  
> A provider with a very low completion cost may still be suboptimal if a request has a large prompt component and that provider’s prompt rate is higher (or its capacity lower). Therefore, a simple “pick the lowest total” rule fails; the ILP automatically balances this trade‑off by weighting \(p_j\) and \(c_j\).

---

#### 5. Practical implementation

* **Pre‑compute** the per‑token cost vector for each provider.
* Use a *lazy evaluation* of the ILP: solve once per batch, then adjust only if prices change or SLA violations occur.
* Cache the routing decisions to avoid repeated solves on identical request patterns.

With this design, the system remains **cost‑optimal**, respects service constraints, and adapts instantly to any price shift—exactly what June 2026’s dynamic market demands.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
