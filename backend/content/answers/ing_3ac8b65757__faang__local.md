---
qid: ing_3ac8b65757__faang__local
question: What is prefill/decode disaggregation, and why do large-scale deployments
  separate the two?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 532
total_tokens: 773
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:01:05-05:00'
sources: []
---

**Clarify**  
The question asks about *prefill* vs *decode* in transformer‑based language models and why production systems split them. I’ll assume we’re talking about autoregressive inference (e.g., GPT‑style) on a cloud or edge deployment.

**Approach**  
1. Define the two stages.  
2. Explain computational characteristics of each.  
3. Describe the motivations for separation in large‑scale deployments.

**Depth**  

| Stage | What it does | Compute profile | Typical use |
|-------|--------------|-----------------|-------------|
| **Prefill** | Runs the transformer once over all *input* tokens (prompt). Produces hidden states that will be reused. | Heavy, but one‑off; quadratic in prompt length due to self‑attention. | Needed before any generation starts. |
| **Decode** | Generates tokens one by one; each step feeds the new token back through a *decoder‑only* transformer block (often with caching). | Linear per generated token; can be batched across users. | Real‑time text completion, chat, etc. |

Large‑scale systems separate them because:

1. **Latency & throughput trade‑off** – Prefill is expensive but amortized over many generations; decoding is cheap and can be parallelized.
2. **Resource isolation** – The heavy prefill can run on GPU nodes optimized for batch inference; decode runs on lower‑cost, high‑throughput servers (or even CPUs with KV caching).
3. **Scalability** – Prefill requires the full model once per request, so it’s a bottleneck if many users start new sessions simultaneously. Decoding is linear and can be distributed.
4. **Cost control** – By decoupling, operators can provision GPU capacity for prefill only when needed (e.g., on demand) while keeping decoding on cheaper hardware.

**Edge cases**  
- Extremely long prompts: prefill cost dominates; batching mitigates but still expensive.  
- Few‑token generation: decoding overhead may outweigh benefits of caching; sometimes a full prefill is cheaper.

**Optimize & communicate**  
Explain that the split enables *elastic scaling*: launch a few GPU pods for prefill bursts, keep many CPU/TPU workers for decode streams. Mention that advanced schedulers can migrate partially decoded states to keep GPUs warm while freeing them when idle. Conclude by noting that this architecture is standard in production AI services (Meta’s GPT‑style APIs, Google Vertex AI, etc.).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
