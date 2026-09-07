---
qid: ing_ae079e45f7__faang__local
question: 'Explain: Choose TCP When — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 422
total_tokens: 657
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:28:08-05:00'
sources: []
---

**Clarify**  
The interview asks why one would choose **TCP** over **UDP** in a machine‑learning system. Key assumptions: we need reliable, ordered data transfer (e.g., model parameters, gradients), latency tolerance is moderate, and the network may be lossy or congested.

**Approach**  
1. List TCP guarantees (reliability, ordering, flow control).  
2. Contrast with UDP’s lightweight nature.  
3. Map these to ML workloads: training data pipelines, parameter server updates, inference traffic.  
4. Discuss trade‑offs in throughput vs correctness.

**Depth**  
- **Reliability & Ordering** – TCP retransmits lost packets and guarantees delivery sequence; crucial when a single dropped gradient or checkpoint can corrupt model convergence.  
- **Flow Control & Congestion Avoidance** – prevents overwhelming nodes, which is vital for distributed training where many workers send large tensors simultaneously.  
- **Connection‑oriented State** – simplifies session management (e.g., checkpoint sync).  
- **UDP** shines for low‑latency streaming or when occasional packet loss can be tolerated (e.g., real‑time inference on edge devices), but in ML training we usually cannot afford “good enough.”  
Complexity: TCP’s handshake and retransmission add ~10–20 % overhead, acceptable given correctness gains.

**Edge Cases**  
- High packet loss (>5%) may still degrade performance; consider hybrid protocols (QUIC).  
- Small‑payload inference requests could use UDP for microsecond latency but risk data corruption.  

**Optimize & Communicate**  
Explain that in production ML pipelines we default to TCP, possibly with application‑level acknowledgments or gRPC, and only switch to UDP when profiling shows latency dominates and losses are negligible. Highlight the importance of monitoring retransmission rates as a health metric. This reasoning demonstrates structured thinking, clear trade‑offs, and depth expected from FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
