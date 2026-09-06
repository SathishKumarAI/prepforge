---
qid: ing_7a9605dcdf__think__local
question: 'Explain: Zoom System Design | WhatsApp / FB Video Calling System Design
  | System Design Interview Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 198
output_tokens: 495
total_tokens: 693
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T09:08:01-05:00'
sources: []
---

**1️⃣ Clarify the scope and assumptions**  
- Decide which platform (Zoom, WhatsApp, FB) we’re modeling; each has different scale/feature priorities.  
- Assume a distributed, multi‑region architecture with millions of concurrent users.  
- Focus on core video‑call flows: signaling, media transport, scaling, latency, and reliability.

**2️⃣ Adopt a layered system‑design framework**  
1. **Client layer** – mobile/web apps handling UI, local capture, codec selection.  
2. **Signaling layer** – session initiation, SDP exchange, NAT traversal (STUN/TURN).  
3. **Media transport layer** – RTP/RTCP over UDP, adaptive bitrate, congestion control.  
4. **Backend services** – matchmaking, room management, recording, analytics.  
5. **Infrastructure** – CDNs, edge servers, auto‑scaling groups, data centers.

**3️⃣ Step‑by‑step reasoning**  
- *Session initiation*: Client sends SDP to signaling server → server routes to peers or media gateway.  
- *Media path*: Direct P2P where possible; otherwise route through media relay (TURN) with low latency edges.  
- *Scaling*: Use stateless load balancers, sharded session stores, and event‑driven microservices.  
- *Reliability*: Fallback to lower bandwidth codecs, redundant data channels, graceful degradation.  
- *Security & compliance*: End‑to‑end encryption, key exchange via signaling, GDPR/CCPA considerations.

**4️⃣ Common pitfalls to avoid**  
- Ignoring NAT/firewall traversal; assume all peers can peer‑to‑peer.  
- Over‑optimizing for latency at the expense of reliability (e.g., dropping packet loss handling).  
- Underestimating bandwidth heterogeneity—design for mobile, low‑bandwidth links.  

**5️⃣ Sanity checks & verbal communication**  
- Verify that each layer handles its responsibilities without leaking state.  
- Explain how a single failure point (e.g., TURN server outage) is mitigated by redundancy.  
- Present trade‑offs: “We choose WebRTC for P2P but fall back to our media servers when NAT prevents direct connectivity.”  

This structured approach lets you articulate a robust, scalable video‑calling system suitable for interview discussions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
