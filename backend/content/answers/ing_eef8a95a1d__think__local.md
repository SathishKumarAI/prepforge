---
qid: ing_eef8a95a1d__think__local
question: 'Explain: Real-Time Media — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 449
total_tokens: 640
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T16:47:37-05:00'
sources: []
---

**1. Clarify the scope and assumptions**  
- Identify what “real‑time media” means (audio/video streaming, VoIP, gaming).  
- Decide whether we’re discussing *client‑to‑server* or *peer‑to‑peer*.  
- Assume typical network constraints: variable latency, packet loss, bandwidth limits.  

**2. Adopt a layered mental model**  
- **Transport layer choice:** TCP vs UDP.  
- **Application layer protocols:** RTP/RTCP for media, RTSP/HLS/DASH for streaming.  
- **QoS mechanisms:** congestion control, prioritization, buffer sizing.  

**3. Step‑by‑step reasoning**  
a. List TCP guarantees (reliable, in‑order, flow‑control).  
b. Map those guarantees to media needs: latency vs loss tolerance.  
c. Enumerate UDP benefits (no handshake, minimal overhead) and downsides (unreliability).  
d. Show how RTP over UDP compensates for loss with sequence numbers & jitter buffers.  
e. Discuss adaptive bitrate / forward error correction as mitigations when using UDP.  

**4. Common traps to avoid**  
- Assuming “TCP is always better” because it’s reliable; forget latency spikes from retransmissions.  
- Overlooking that UDP packets can be dropped at the network stack, not just lost in transit.  
- Ignoring that many modern media stacks use *hybrid* approaches (e.g., QUIC).  

**5. Sanity‑check & verbalize**  
- Verify that the explanation aligns with real‑world protocols: VoIP uses UDP+RTP; HTTP Live Streaming uses TCP for control, but HLS segments are often served over CDN (TCP) yet playback tolerates buffering.  
- Speak it out loud: “If we need every byte, use TCP; if we can afford occasional loss to keep latency low, UDP + RTP is the standard.”  
- End with a concise recommendation based on application requirements.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
