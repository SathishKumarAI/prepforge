---
qid: ing_0dd40a9650__faang__local
question: 'Explain: Bandwidth — Latency vs Throughput vs Bandwidth | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 609
total_tokens: 848
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:15:57-05:00'
sources: []
---

## Clarify  
The question asks how *latency*, *throughput*, and *bandwidth* relate to each other in the context of system design, especially for machine‑learning workloads that move large tensors across a network or between devices.

### Assumptions
- “Bandwidth” refers to the **maximum data rate** (bits/second) the channel can sustain.  
- Latency is the **time delay** before the first bit arrives.  
- Throughput is the **effective sustained rate** after accounting for protocol overhead, contention, and application behavior.

## Approach  
1. Define each metric mathematically.  
2. Show how they interact in a typical ML pipeline (e.g., distributed training).  
3. Discuss trade‑offs when optimizing one at the expense of others.

## Depth  

| Metric | Definition | Impact on ML |
|--------|------------|--------------|
| **Bandwidth** | `BW = max data rate` (e.g., 10 Gbps). Determines how fast a large batch can be transmitted once the transfer starts. | Limits size of model checkpoints or gradient shards that can be moved per second. |
| **Latency** | `L = time from request to first byte received`. Includes propagation, serialization, and queueing delays. | Affects *iteration* time in synchronous SGD; high latency forces more idle GPU cycles. |
| **Throughput** | `TP = (size of data transmitted) / total elapsed time`. Reflects real‑world performance after protocol overhead. | Governs the overall wall‑clock training speed; depends on both BW and L. |

**Interaction:**  
- With very high bandwidth but high latency, the first gradient arrives late → GPUs stall until the whole batch is ready (low TP).  
- Low bandwidth but low latency can still give decent TP if workload sizes are small or pipelined.

## Edge Cases  

1. **Burst traffic**: Network buffers overflow → packet loss → retransmission → higher effective latency.  
2. **Protocol overhead**: RPC framing, TLS handshake inflates data size → reduces TP even with high BW.  
3. **Non‑uniform workloads**: Some workers produce larger gradients → bandwidth contention.

## Optimize & Communicate  

- **Minimize latency** by coalescing requests, using RDMA or gRPC with zero‑copy buffers.  
- **Maximize throughput** via compression (e.g., 8‑bit quantization), pipelining multiple batches, and adjusting batch size to match bandwidth.  
- **Balance trade‑offs**: For small models, prioritize latency; for huge checkpoints, focus on bandwidth.

*In summary,* latency determines how quickly a system can start processing, bandwidth sets the ceiling for data movement, and throughput is what ultimately governs end‑to‑end performance. Optimizing ML systems requires tuning all three while respecting their interdependence.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
