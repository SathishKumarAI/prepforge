---
qid: ing_abfe347b16__fp__local
question: 'Q: What determines TTFT vs TPS? — Inference Pipeline'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 707
total_tokens: 879
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:10:39-05:00'
sources: []
---

**TTFT vs TPS in an inference pipeline**

*Fundamental problem.*  
A generative model produces a stream of tokens at speed \(s\) (tokens/s). Two useful performance metrics are  

1. **TTFT – Time‑to‑First‑Token**: the latency from request to the first token, and  
2. **TPS – Tokens‑Per‑Second**: the sustained throughput after warm‑up.

The pipeline that implements the model is a *queueing system* with service time \(t_{\text{serv}}\) per token (model forward pass + I/O). The key insight is that the **service discipline**—how tokens are scheduled and batched—controls both metrics, but in different ways.

| What determines | TTFT | TPS |
|-----------------|------|-----|
| **Service time \(t_{\text{serv}}\)** | Directly: \( \text{TTFT} = t_{\text{serv}} + \text{queue delay}\). Faster hardware or smaller model → lower TTFT. | Indirectly: faster \(t_{\text{serv}}\) increases the maximum achievable TPS, but not its steady‑state value if the queue is saturated. |
| **Batch size (B)** | Larger batches increase \(t_{\text{serv}}\) per token (more computation), *raising* TTFT; they also lower per‑token overhead (e.g., GPU launch). | As B grows, each batch’s amortized cost drops, raising TPS up to a hardware‑saturation point. |
| **Beam width / sampling strategy** | More beams mean more parallel forward passes → higher \(t_{\text{serv}}\), thus higher TTFT. | Same effect: more tokens processed per second, but only until the GPU memory or compute limit is hit. |
| **Pre‑fetching / pipelining depth** | A deeper pipeline hides queue delay, lowering TTFT; if pre‑fetching fails, TTFT rises. | Pipelining keeps GPUs busy, pushing TPS toward its asymptote. |
| **Cache / KV‑cache reuse** | Reusing key/value tensors for the same context reduces \(t_{\text{serv}}\), cutting TTFT. | Same cache benefit applies to TPS when many requests share prefixes. |

**Non‑obvious insight:**  
*The bottleneck that limits TTFT is often **queueing delay**, not raw compute.* Even with a fast GPU, a request can be delayed by earlier tokens from other requests if the scheduler uses a first‑come‑first‑served policy. By switching to a *token‑aware priority queue*—giving new requests higher priority—the pipeline reduces TTFT without changing hardware or batch size. This trick is invisible in simple throughput plots but dramatically improves perceived latency.

In short, **TTFT** is governed by per‑request service time plus scheduling delay; **TPS** depends on the same service time but also on how well the system keeps all resources saturated. Optimizing one metric usually hurts the other unless you carefully balance batch size, prefetch depth, and scheduling policy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
