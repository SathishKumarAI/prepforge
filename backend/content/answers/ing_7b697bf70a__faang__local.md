---
qid: ing_7b697bf70a__faang__local
question: 'Explain: Live Video Streaming — Top 4 Most Popular Use Cases for UDP'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 471
total_tokens: 709
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:31:12-05:00'
sources: []
---

**Clarify**  
The question asks: *“What are the four most popular use‑cases of UDP in live video streaming?”*  
Assumptions: we’re talking about real‑time, low‑latency delivery (e.g., gaming, sports), not on‑demand video. We need to focus on why UDP is chosen over TCP and which application scenarios benefit most.

**Approach**  
1. List the use‑cases.  
2. For each, explain the core requirement (low latency, tolerance for loss).  
3. Highlight how UDP satisfies that requirement.  

**Depth**  
| Use‑case | Why it needs UDP | Key UDP features used |
|----------|-----------------|-----------------------|
| **Live sports & e‑sports streaming** | Viewer must see action with < 200 ms delay; occasional packet loss is acceptable if the stream continues. | Fast, no handshake → minimal latency; small header for high bandwidth efficiency. |
| **Real‑time video conferencing (e.g., telehealth)** | Bidirectional low‑latency audio/video; jitter buffers can absorb minor losses. | UDP keeps packets in order of arrival and allows application‑level retransmission only if critical. |
| **Live broadcasting from mobile devices** | High mobility → frequent handovers, packet loss common. | UDP’s statelessness avoids costly reconnections; protocols like QUIC/UDP‑based RTSP can handle NAT traversal quickly. |
| **IoT video sensors (e.g., drones, surveillance)** | Continuous stream with limited bandwidth and energy constraints. | Minimal overhead lets devices push data continuously; loss is mitigated by application‑level FEC or selective retransmission. |

**Edge cases**  
- In congested networks, packet loss can degrade quality; need adaptive bitrate or FEC.  
- Firewalls may block UDP—use DTLS/QUIC to traverse.  

**Optimize & communicate**  
I’d mention that modern streaming stacks often layer application‑level protocols (e.g., WebRTC) on top of UDP, providing congestion control and security while preserving low latency. This explanation shows structured thinking, clear communication, and technical depth suitable for a FAANG interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
