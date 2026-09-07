---
qid: ing_ebb09a1694__faang__local
question: 'Explain: Connection Setup — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 566
total_tokens: 800
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:48:22-05:00'
sources: []
---

**Clarify**  
The interviewer wants the trade‑offs between using **TCP** (reliable, connection‑oriented) and **UDP** (unreliable, datagram) for a machine‑learning system that must stream data (e.g., sensor logs or model inference results). I’ll assume:  

* Latency is critical.  
* Some packets can be dropped without catastrophic loss.  
* The network may be lossy or high‑Jitter.

**Approach**  
1. List key properties of TCP vs UDP relevant to ML pipelines.  
2. Map those properties to typical ML workloads (training, inference).  
3. Quantify impact on throughput/latency.  
4. Suggest hybrid patterns if needed.

**Depth**  

| Property | TCP | UDP |
|----------|-----|-----|
| Reliability | Guarantees in‑order delivery; retransmits lost packets. | No guarantees; out‑of‑order allowed. |
| Overhead | 3‑way handshake, ACKs, congestion control. | Minimal header (8 bytes), no handshakes. |
| Latency | Higher start‑up + per‑packet ack delay. | Lower per‑packet latency. |
| Throughput on lossy links | Congestion control backs off → lower throughput. | Can sustain higher raw bandwidth but may drop packets. |

**ML Fit**

* **Training data ingestion**: If the model can tolerate occasional missing samples (e.g., large batch sizes), UDP is attractive for low‑latency streaming from edge devices.  
* **Inference response**: For safety‑critical inference, TCP’s reliability ensures no lost predictions.  
* **Hybrid**: Use UDP with application‑level sequence numbers and selective ACKs to recover only critical packets.

Complexity: UDP → O(1) per packet; TCP → O(log N) for congestion control overhead. Trade‑off is between *speed* (UDP) and *guaranteed correctness* (TCP).

**Edge Cases**

* Packet bursts → UDP may overflow buffers → consider flow control.  
* High loss → UDP packets drop → need application‑level FEC or retransmit logic.  
* Security: TCP offers built‑in TLS; UDP requires DTLS.

**Optimize & Communicate**  

Explain that the choice hinges on *data importance* vs *latency budget*. Propose a microbenchmark to measure end‑to‑end latency and loss for both protocols under realistic traffic patterns, then iterate. Highlight that in many ML pipelines, a **custom reliability layer over UDP** (e.g., QUIC) often delivers the best of both worlds.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
