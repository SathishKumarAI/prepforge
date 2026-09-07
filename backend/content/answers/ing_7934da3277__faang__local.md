---
qid: ing_7934da3277__faang__local
question: 'Explain: Latency vs Throughput vs Bandwidth | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 551
total_tokens: 787
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:25:37-05:00'
sources: []
---

**Clarify**  
We’re asked to compare *latency*, *throughput*, and *bandwidth* in the context of a ML system (e.g., inference serving).  
Assumptions:  
- Data flows from client → edge → cloud or between micro‑services.  
- We care about real‑time inference, batch training, and network I/O.

**Approach**  
1. Define each metric.  
2. Show how they interrelate (e.g., bandwidth limits throughput).  
3. Provide concrete ML examples: single‑sample latency vs batch size.  
4. Highlight trade‑offs and tuning knobs.

**Depth**  

| Metric | Definition | Relevance to ML | Typical Units |
|--------|------------|-----------------|---------------|
| **Latency** | Time from request arrival to response ready. | Determines user experience for online inference; critical in RL or real‑time analytics. | ms / µs |
| **Throughput** | Number of requests processed per unit time. | Throughput of a training pipeline (samples/sec) or serving cluster (inferences/sec). | req/s, samples/s |
| **Bandwidth** | Maximum data rate the network can sustain. | Limits how fast large tensors (model weights, feature vectors) move between nodes. | MB/s, Gbps |

*Relationships*:  
- **Throughput ≤ Bandwidth / Packet Size** – if network is saturated, adding more workers won’t help.  
- **Latency ≈ Round‑trip + Processing Time** – even with high bandwidth, a long queue (high latency) can kill throughput.

**Edge Cases**  
- *Burst traffic*: latency spikes while throughput stays average.  
- *Skewed batch sizes*: large batches improve throughput but increase latency for the first sample.  
- *Network jitter*: Bandwidth fluctuates; ML inference may time‑out if not buffered.

**Optimize & Communicate**  
1. **Profile**: measure per‑stage latency (data I/O, GPU compute).  
2. **Batching**: use dynamic batching to trade off latency for throughput while keeping latency below SLA.  
3. **Model sharding**: split large models across GPUs to reduce per‑GPU bandwidth and improve parallelism.  
4. **Edge caching**: keep frequently used embeddings locally to cut network hops, boosting both latency and throughput.  

Explain to interviewers how you’d instrument metrics, set SLAs (e.g., 95th percentile latency < 50 ms), and iterate—showing a clear grasp of the trade‑offs that drive ML system design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
