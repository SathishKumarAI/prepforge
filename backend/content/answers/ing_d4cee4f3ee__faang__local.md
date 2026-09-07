---
qid: ing_d4cee4f3ee__faang__local
question: 'Explain: Throughput vs Bandwidth — Latency vs Throughput vs Bandwidth |
  System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 511
total_tokens: 753
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:54:32-05:00'
sources: []
---

**Clarify**  
You’re asking how *latency*, *throughput* and *bandwidth* differ in a system‑design context—e.g., networking or ML pipelines. I’ll assume we’re talking about data movement (bytes per second) rather than CPU cycles, and that “throughput” is the rate of completed operations, not raw transfer speed.

**Approach**  
1. Define each term clearly.  
2. Explain how they interact in a pipeline: bandwidth → latency → throughput.  
3. Give an ML‑specific example (e.g., model inference).  
4. Highlight trade‑offs and when you optimize for one vs another.

**Depth**  

| Metric | Definition | Typical Units |
|--------|------------|---------------|
| **Bandwidth** | Maximum data rate a link can sustain, e.g., 10 Gbps on Ethernet. | bits/second |
| **Latency** | Time to complete a single request: round‑trip time (RTT) + processing delay. | milliseconds / microseconds |
| **Throughput** | Number of requests or operations completed per unit time, often bounded by latency and bandwidth. | ops/sec |

In an ML inference service:

* The network link has 10 Gbps bandwidth.  
* Each request takes 5 ms latency (network + GPU compute).  
* Max throughput ≈ `bandwidth / payload_size` *but* capped by `1/latency`.  

If the model is small, latency dominates; adding more GPUs improves throughput until network bandwidth becomes the bottleneck.

**Edge Cases**  
* **Burst traffic:** Bandwidth may be high enough for a burst, but long‑term throughput drops.  
* **Variable payloads:** Larger inputs lower theoretical throughput even if bandwidth stays constant.  
* **CPU vs GPU limits:** Even with infinite bandwidth, compute latency can cap throughput.

**Optimize & Communicate**  
- Reduce *latency* by batching requests or using faster interconnects (NVLink).  
- Increase *bandwidth* via higher‑speed NICs or RDMA.  
- Maximize *throughput* by balancing the two: e.g., auto‑scale nodes when latency exceeds a threshold.

When explaining, start with intuitive analogies (“traffic on a highway”), then layer in equations, and finish with concrete ML pipeline numbers to ground the concepts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
