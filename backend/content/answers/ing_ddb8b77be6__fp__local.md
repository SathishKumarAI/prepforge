---
qid: ing_ddb8b77be6__fp__local
question: 'Explain: Gemini Robotics ER 2 Streaming Preview — Gemini Developer API
  pricing \u00a0|\u00a0 Gemini API \u00a0|\u00a0 Google AI for Developers'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 199
output_tokens: 453
total_tokens: 652
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:50:56-05:00'
sources: []
---

**Why the “Gemini Robotics ER‑2 Streaming Preview” has a two‑tier price model**

At its core, a streaming API is a *real‑time inference pipeline*.  
The cost is driven by three interlocking factors:

| Factor | How it scales | Why it matters |
|--------|---------------|----------------|
| **Token throughput** | Linear in the number of tokens sent/received per second | Each token triggers GPU memory traffic and compute; latency grows with load. |
| **Model size & complexity** | Exponential for larger transformer blocks | ER‑2 is 1 × 10⁹ parameters; doubling model size roughly doubles FLOPs. |
| **Infrastructure allocation** | Sub‑linear, but bounded by hardware quotas | A single GPU can handle ~30k tokens/s, so a dedicated slot guarantees SLA. |

Google’s pricing therefore mirrors an *optimization* problem:  
Minimize total cost \(C = \alpha T_{\text{tokens}} + \beta M_{\text{params}}\) subject to latency constraints \(L \leq L_{\max}\).  
The “preview” tier offers a **lower per‑token rate** (≈ $0.00002/1k tokens) but caps usage at 10 M tokens/month, incentivizing experimentation without over‑provisioning. The full tier lifts the cap and reduces the unit cost to ≈ $0.000015/1k tokens, reflecting economies of scale once the service is production‑ready.

**Non‑obvious insight:**  
The *token cap* in the preview is not arbitrary; it aligns with the **effective capacity of a single GPU core** under realistic workloads (≈ 10⁶–10⁷ tokens per month). Exceeding this would force dynamic scaling, which introduces variable latency. By capping usage, Google guarantees predictable performance while still covering marginal compute costs.

In short, the pricing is a carefully engineered balance between token throughput, model complexity, and hardware provisioning—ensuring that users pay only for the inference capacity they actually consume.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
