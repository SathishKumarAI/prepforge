---
qid: ing_aae088cef7__fp__local
question: Why does continuous batching outperform static batching for LLM serving?
  What are the tradeoffs?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 504
total_tokens: 681
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:08:56-05:00'
sources: []
---

**Why continuous batching beats static batching in LLM serving**

The core problem is *throughput‑versus‑latency*. A transformer layer processes a token matrix \(X\in\mathbb{R}^{B\times T\times D}\) with a cost that grows roughly linearly in the batch size \(B\). In a static batch we fix \(B\) at request time: if only one user arrives, the GPU sits idle while waiting for the next request to fill the slot. Continuous batching (also called *dynamic* or *adaptive* batching) keeps a small queue of pending tokens and packs them into the largest possible batch that still satisfies latency budgets.

Formally, let \(L_{\max}\) be the maximum tolerable latency and \(\tau(B)\) the compute time per token for batch size \(B\). Continuous batching chooses \(B^\*\) solving  
\[
\tau(B^\*) \le L_{\max} - t_{\text{queue}},
\]
where \(t_{\text{queue}}\) is the time tokens have already waited. This greedy rule maximizes throughput while guaranteeing latency, because any larger batch would exceed \(L_{\max}\), and any smaller batch would under‑utilize the GPU.

**Tradeoffs**

| Aspect | Static batching | Continuous batching |
|--------|-----------------|---------------------|
| **Latency** | Fixed: all requests wait for a full batch. | Variable: early arrivals may wait longer, but the system adapts to load. |
| **Throughput** | Poor under low traffic; excellent at peak. | Near‑optimal across all loads. |
| **Complexity** | Simple scheduler. | Requires queue management and dynamic scheduling logic. |
| **Fairness** | All requests treated equally. | Late arrivals may be starved if the queue grows too long. |

**Non‑obvious insight**

Continuous batching *implicitly performs online convex optimization*: it continually adjusts \(B\) to stay on the Pareto frontier between latency and throughput, which is a manifestation of the *price of anarchy* in queuing systems. This view explains why naive heuristics (e.g., fixed “batch size 8”) often under‑perform: they ignore the convex trade‑off curve that continuous batching automatically follows.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
