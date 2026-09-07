---
qid: ing_7a9605dcdf__faang__local
question: 'Explain: Zoom System Design | WhatsApp / FB Video Calling System Design
  | System Design Interview Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 486
total_tokens: 728
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:29:18-05:00'
sources: []
---

**Zoom / WhatsApp‑FB Video Call – System Design**

| Step | What I’ll do |
|------|--------------|
| **1️⃣ Clarify** | *Goal:* real‑time video/audio for up to 100 k concurrent users in a group call, with minimal latency (<200 ms). <br>*Assumptions:* 1 Gbps uplink per user, 30 fps HD video, 1 Mbps audio. |
| **2️⃣ Approach** | • Client → edge media server (SDP negotiation, DTLS‑SRTP)<br>• Media servers form a mesh for small groups; use SFU/MCU for >10 participants.<br>• Store call metadata in a distributed DB (Cassandra).<br>• Use CDN + low‑latency transport (WebRTC UDP). |
| **3️⃣ Depth** | *Media Flow:* Clients send RTP to nearest edge. Edge aggregates streams, forwards to SFU which redistributes only the needed streams (no decoding/encoding). <br>*Scalability:* Each SFU handles ~50 streams; we spin new instances horizontally. <br>*Fault tolerance:* Health‑check + auto‑restart; session affinity via consistent hashing. <br>Complexity: O(n) per stream for SFU, O(1) DB ops with eventual consistency. |
| **4️⃣ Edge Cases** | • Network jitter → packet loss recovery (FEC).<br>*Dropped edge* → fallback to another nearest node.<br>*Large group (>200)* → switch to MCU or hierarchical SFUs.<br>Test: Simulate 5 k concurrent users, 50 % packet loss. |
| **5️⃣ Optimize & Communicate** | • Use adaptive bitrate and dynamic stream re‑routing.<br>• Cache session info in Redis for quick lookup.<br>Explain trade‑offs: SFU saves bandwidth but requires more servers; MCU simplifies clients but adds CPU load. Summarize with a diagram and key metrics (latency, throughput). |

*This concise structure demonstrates clear problem framing, systematic planning, technical depth, edge‑case awareness, and communication—exactly what FAANG interviewers look for.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
