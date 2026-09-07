---
qid: ing_464bdcf2db__faang__local
question: 'Explain: Latency — Latency vs Throughput vs Bandwidth | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 562
total_tokens: 801
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:27:27-05:00'
sources: []
---

**Clarify**  
We’re asked to describe the trade‑offs between *latency*, *throughput* and *bandwidth* in a machine‑learning inference system (e.g., serving models at scale). Assume we control request routing, model caching, and network I/O; the goal is low end‑to‑end delay for real‑time predictions.

**Approach**  
1. Define each metric.  
2. Explain how they interact in a pipeline: input → pre‑process → GPU/CPU inference → post‑process → response.  
3. Map design knobs (batching, model placement, network protocol) to the three metrics.  

**Depth**  
| Metric | Definition | Impact on ML Serving |
|--------|------------|----------------------|
| **Latency** | Time from request arrival to response delivery (ms). Critical for real‑time apps. Influenced by queue depth, pre/post‑process cost, model inference time, and network RTT. |
| **Throughput** | Number of inferences per second. Maximized by batching inputs, parallel workers, or multi‑GPU setups. Higher throughput can increase average latency if batch size grows. |
| **Bandwidth** | Data rate (bytes/s) across the network. For large models or feature vectors, bandwidth limits how fast a request can be sent/received; it is orthogonal to CPU/GPU compute. |

- **Batching**: Increases throughput but adds queuing latency.  
- **Model placement**: Edge devices reduce network latency but may limit GPU capacity (bandwidth‑bound).  
- **Compression / quantization**: Lowers bandwidth cost at a slight accuracy penalty, improving overall latency.

**Edge cases**  
- *Burst traffic*: queue overflows → latency spikes; need dynamic scaling.  
- *Cold starts* in serverless environments: high initial latency regardless of throughput.  
- *Model size > memory*: paging causes bandwidth‑to‑compute mismatch.

**Optimize & communicate**  
1. **Profile** each stage to identify bottlenecks.  
2. **Auto‑batching** with a max wait threshold keeps latency bounded while boosting throughput.  
3. Deploy **model shards** close to data sources to cut RTT.  
4. Use **gRPC + protobuf** for efficient serialization, minimizing bandwidth.  

When explaining to interviewers, emphasize that in ML serving we often *prioritize* latency over raw throughput because user experience degrades more visibly with delays, but we must still design for scalable throughput by batching and parallelism while respecting bandwidth limits through compression or edge deployment. This balanced view demonstrates deep system‑design insight.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
