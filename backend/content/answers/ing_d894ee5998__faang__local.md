---
qid: ing_d894ee5998__faang__local
question: 'Q49: How do you optimize latency for real-time LLM applications?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 541
total_tokens: 778
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:03:08-05:00'
sources: []
---

**Clarify**  
We need to reduce end‑to‑end time from user query to model response in a production LLM service that serves many concurrent requests. Assumptions: (1) the model is pre‑trained and can be fine‑tuned, (2) inference runs on GPUs/TPUs with batch support, (3) latency budget is < 200 ms for 90 % of traffic, (4) we have control over data pipeline, routing, and scaling.

**Approach**  
1. Profile the current pipeline: tokenization → model → post‑processing.  
2. Identify bottlenecks (CPU queue, GPU kernel stalls, network hops).  
3. Apply layer‑wise optimizations: mixed‑precision, tensor core usage, kernel fusion.  
4. Scale horizontally with request sharding and auto‑scaling; use a low‑latency load balancer.  
5. Cache frequent prompts or embeddings (e.g., KV cache reuse) to avoid recomputation.

**Depth**  
- **Tokenization & Batching:** Use async tokenizers, keep batch size ≈ 1 for latency‑sensitive traffic while accumulating small batches for throughput bursts.  
- **Model Execution:** Convert the model to FP16/INT8 with quantization-aware training; fuse attention and feed‑forward kernels to reduce kernel launch overhead.  
- **KV Cache Reuse:** For streaming APIs, maintain a per‑session cache so subsequent tokens reuse past key/value tensors—cuts ~30 % of compute.  
- **Hardware Utilization:** Deploy on GPUs with NVLink or multi‑GPU setups; use Triton Inference Server for automatic tensor core scheduling.  
- **Networking:** Place inference nodes in the same region as API gateways; use gRPC with HTTP/2 multiplexing.

**Edge Cases**  
- Sudden traffic spikes → cold start latency. Mitigate by pre‑warming a pool of warmed instances.  
- Long prompts → tokenization becomes dominant; fallback to smaller model or truncate.  
- Model size > GPU memory → shard layers across GPUs (pipeline parallelism).

**Optimize & Communicate**  
I’d present a latency budget diagram, show A/B test results from each optimization, and explain trade‑offs: e.g., INT8 reduces precision slightly but < 1 % accuracy loss vs. 2× speedup. I’d conclude that combining mixed‑precision inference, KV cache reuse, and autoscaling yields sub‑200 ms latency while maintaining throughput.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
