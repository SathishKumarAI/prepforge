---
qid: ing_908bf80abf__faang__local
question: 'Explain: Latency — Client-Server Architecture | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 470
total_tokens: 705
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:20:22-05:00'
sources: []
---

**Clarify**  
The interviewer asks how latency is affected in a typical client‑server ML system (e.g., image classification API). Key assumptions: *single round‑trip*, *fixed model size*, *network bandwidth known*, and *client & server are in the same data center*.

**Approach**  
1. Identify all latency contributors: network transfer, request parsing, queueing, inference, response packing, and return trip.  
2. Model each component as a deterministic or stochastic delay.  
3. Compute end‑to‑end latency = Σ delays + queuing overhead.  
4. Discuss mitigation (model compression, batching, caching) and trade‑offs.

**Depth**  
- **Client → Server**: data size *S* bytes, bandwidth *B*, so transfer ≈ S/B.  
- **Server**: request parsing (~0.1 ms), queue wait ~ E[queue length]/throughput, inference time = model ops × latency per op (e.g., 10 ms for a ResNet).  
- **Server → Client**: response size *R*, transfer ≈ R/B.  
Total latency ≈ S/B + parse + queue + infer + R/B.  
For 1 MB payload at 100 Mbps, transfer ≈ 80 ms; inference ~10 ms → 90 ms total.  
**Optimizations**: compress input, use quantized models, async batching, keep‑alive connections, edge inference.

**Edge Cases**  
- High queueing during traffic spikes (queueing delay dominates).  
- Variable network jitter (transfer time variance).  
- Model size exceeding memory → swapping → large latency spike.  
Test with synthetic load, simulate packet loss, and use profiling to pinpoint bottlenecks.

**Optimize & Communicate**  
Explain that reducing *S* or *R* via compression yields linear gains; batching can amortize inference cost but adds queuing delay—trade‑off depends on SLA. Conclude by recommending a monitoring dashboard (latency percentiles) and adaptive batching to maintain target latency under load.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
