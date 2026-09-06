---
qid: ing_7a9605dcdf__fp__local
question: 'Explain: Zoom System Design | WhatsApp / FB Video Calling System Design
  | System Design Interview Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 586
total_tokens: 765
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:25:32-05:00'
sources: []
---

### Zoom‑style Video Call in a Social App: A First‑Principles Design  

1. **Problem** – deliver low‑latency, high‑quality audio/video to *N* peers over heterogeneous networks while preserving privacy and scalability.  
2. **Core Idea** – treat the call as a *directed graph of media flows*. Each peer is a node; edges carry RTP streams. Two design patterns emerge:  
   - **Peer‑to‑Peer (P2P)** for 2–3 participants, minimizing server load but vulnerable to NAT/firewall and asymmetric bandwidth.  
   - **Selective Forwarding Unit (SFU)** for >4 peers: each client sends one stream to the SFU; the SFU forwards it to all others, preserving source quality and enabling adaptive bitrate per receiver.  

3. **Why an SFU?**  
   - *Optimization*: The server’s bandwidth is proportional to \(\sum_{i} B_i\) rather than \(N^2\).  
   - *Information Theory*: Each client only needs the streams it can decode; redundant data isn’t sent, reducing mutual information overhead.  

4. **Key Components**  
   | Layer | Responsibility |
   |-------|----------------|
   | Signaling (WebRTC/ICE) | NAT traversal, SDP exchange, peer discovery |
   | SFU | RTP ingestion, selective forwarding, bandwidth adaptation |
   | Media Storage (optional) | Post‑call recording, transcription |
   | CDN / Edge caching | Low‑latency delivery for large audiences |
   | Security | DTLS/SRTP encryption, token auth |

5. **Non‑obvious Insight** – *Adaptive Forwarding*  
   The SFU can *drop* packets of low‑priority codecs (e.g., background video) for bandwidth‑constrained clients without affecting the main stream. This is a direct application of **rate–distortion theory**: you sacrifice perceptible detail only where it matters.

6. **Scalability Trick** – *Clustered SFUs with State Replication*  
   Each SFU handles a subset of rooms; a lightweight state‑replica (e.g., via Raft) keeps track of room membership, enabling seamless failover without re‑handshake overhead.

7. **Security & Privacy** – end‑to‑end encryption is preserved by having the SFU forward encrypted RTP; it never decodes payloads, satisfying compliance mandates.

In short, a P2P + SFU hybrid, driven by bandwidth‑optimal routing and rate–distortion principles, yields a robust, scalable video call system for social platforms.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
