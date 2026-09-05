---
qid: ing_1e86b16fe6__fp__local
question: 'Explain: High Latency — 8 Common System Design Problems and Solutions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 546
total_tokens: 720
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:11:15-05:00'
sources: []
---

**High‑Latency Pitfalls in Machine‑Learning Systems  
(From the problem space to principled fixes)**  

1. **Cold‑start model loading** – A model is deserialized on demand, adding a *startup* delay that grows with parameter count. *Solution:* keep models resident or use memory‑mapped checkpoints; amortize load across requests.

2. **Unbounded inference queues** – Back‑pressure is ignored, so the request buffer swells and latency spikes. *Solution:* bounded FIFO + adaptive throttling; treat queue length as a feedback signal for scaling.

3. **Inefficient data pipelines** – Data shuffling or disk I/O dominates per‑sample time. *Solution:* pre‑cache feature shards in SSD/SSD‑based object stores, stream with zero‑copy buffers.

4. **Synchronous GPU transfers** – Host‑to‑device copies block CPU threads. *Solution:* overlap transfers and kernel execution using CUDA streams; use pinned memory for faster DMA.

5. **Naïve ensemble aggregation** – Sequential evaluation of many models serializes inference. *Solution:* parallelize across GPUs or use a *model cascade* that stops early when confidence is high.

6. **Monolithic batch size** – Large batches underutilize GPU cores, while tiny batches waste kernel launch overhead. *Solution:* dynamic batching: group requests by similarity and latency budget.

7. **Inefficient serialization** – JSON/Protobuf parsing dominates latency for small payloads. *Solution:* binary formats (FlatBuffers) or protocol‑agnostic byte streams; cache parsed inputs.

8. **Unoptimized hyper‑parameter tuning loops** – Repeated full‑model training during online A/B tests. *Solution:* use *incremental learning* or *online distillation* to update only the head layers, keeping inference latency constant.

---

### Non‑obvious insight  
Latency is not merely a function of compute; it’s largely shaped by **information flow**—how quickly a request can be routed from client to the right model shard and back. By viewing each pipeline stage as an *information bottleneck*, you can apply rate‑distortion theory: allocate bandwidth (compute, memory) proportionally to the entropy reduction needed at that stage. This perspective turns ad‑hoc tuning into a principled resource allocation problem, revealing why seemingly unrelated optimizations (e.g., pre‑fetching vs. batching) often co‑operate to cut latency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
