---
qid: ing_632df42191__faang__local
question: 'Explain: A colleague wants to move the semantic layer to the cloud so you
  can use a much bigger model. Walk me through the latency budget.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 526
total_tokens: 777
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:34:01-05:00'
sources: []
---

**Clarify**  
We’re shifting the *semantic layer*—the component that maps user queries to underlying data—to a cloud‑hosted large language model (LLM). The goal is lower latency for end users while leveraging the model’s size. Key assumptions:  

- User traffic ≈ 5k QPS, burstable to 10k.  
- Desired response time < 200 ms per query.  
- Current on‑prem model takes ~400 ms (CPU).  
- Cloud offers GPU instances with 4× faster throughput.

**Approach**  
1. **Baseline measurement** – capture current latency distribution and tail percentiles.  
2. **Model sizing & placement** – choose a cloud region minimizing egress distance to data lake.  
3. **Endpoint architecture** – use a lightweight inference server (e.g., Triton) behind an HTTP/REST gateway with connection pooling.  
4. **Caching & batching** – cache frequent semantic transforms; batch parallel requests where possible.  
5. **Monitoring** – instrument latency, error rates, and cost per request.

**Depth**  
- *Latency budget*:  
  - Network egress (client → cloud): ~10 ms (latency‑optimal region).  
  - Ingress + routing: ~15 ms (API gateway).  
  - Server warm‑up: <5 ms with pre‑loaded GPU.  
  - Inference: ~80 ms on a single V100 for the larger model.  
  - Post‑processing & serialization: ~10 ms.  
- Total ≈ 120 ms, comfortably under 200 ms target.  
- Complexity O(1) per request; batching can reduce GPU idle time but adds ~5–10 ms overhead.

**Edge Cases**  
- Sudden traffic spikes → auto‑scale to additional GPUs (cost trade‑off).  
- Model cold start → keep a pool of warm instances.  
- Network partitions → fallback to on‑prem lightweight model.

**Optimize & Communicate**  
Iterate by tightening the network path (e.g., using Cloud CDN), profiling inference kernels, and experimenting with quantized weights for lower latency. Explain trade‑offs clearly: higher GPU count reduces latency but increases cost; batching improves throughput but can increase tail latency. This structured plan satisfies FAANG interview expectations—clear assumptions, systematic design, depth of analysis, edge‑case awareness, and a concise narrative.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
