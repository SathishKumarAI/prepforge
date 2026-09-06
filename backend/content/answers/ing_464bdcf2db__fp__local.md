---
qid: ing_464bdcf2db__fp__local
question: 'Explain: Latency — Latency vs Throughput vs Bandwidth | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 463
total_tokens: 639
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:35:06-05:00'
sources: []
---

**Latency, throughput and bandwidth are three faces of the same scheduling problem**  
— a queue‑ing system that must decide *when* to send data and *how fast* it can move it.

1. **Fundamental problem**: A network or compute device receives requests at rate λ (requests/s). Each request consumes an amount \(s\) of resources for time \(t_{\text{service}}\). The system’s goal is to keep the queue length bounded while satisfying service‑level objectives.  

2. **Latency** = expected waiting time + processing time per request. It depends on the *queue discipline* and *resource contention*. A single fast core can have low latency but, if λ exceeds capacity, queuing grows and latency explodes—this is the classic “Little’s Law” trade‑off.

3. **Throughput** = number of requests completed per second. It is limited by the *service rate* \(1/t_{\text{service}}\) times the number of parallel workers. Maximizing throughput ignores individual request delay; a system can achieve high throughput by batching, but latency rises linearly with batch size.

4. **Bandwidth** (data‑rate) is a physical channel property: how many bits per second can be transmitted. Bandwidth limits *throughput* only if the packet sizes are large enough that \(t_{\text{service}}\) is dominated by transmission time rather than computation.

5. **Non‑obvious insight**: In modern ML inference pipelines, *latency* is often bottlenecked not by raw bandwidth but by *serialization/deserialization* and *context switching*. Optimizing the *data layout* (e.g., using a contiguous tensor buffer) can reduce latency more than adding network links. Thus, bandwidth‑centric scaling may be ineffective unless accompanied by memory‑bandwidth and CPU‑vectorization optimizations.

**Bottom line**: Treat them as constraints in a single optimization objective—minimize expected queue length subject to capacity limits—rather than independent knobs. This perspective reveals why balancing batch size, thread count, and data layout is critical for real‑time ML systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
