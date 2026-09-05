---
qid: ing_eef8a95a1d__star__local
question: 'Explain: Real-Time Media — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 306
total_tokens: 544
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:26:15-05:00'
sources: []
---

**Situation**  
In my last role I led the redesign of a live video streaming service that served over 500 k concurrent users. The previous implementation used TCP for all media packets, which caused buffering spikes when network jitter increased during peak hours.

**Task**  
I had to build a new transport layer that preserved low latency and acceptable packet loss while ensuring key control messages (RTSP SETUP/PLAY) remained reliable.

**Action**  
I split the traffic: critical signaling stayed on TCP with a lightweight state machine, while RTP payloads moved to UDP. To mitigate packet loss I added forward error correction (FEC) blocks and implemented an adaptive jitter buffer that scaled between 20 ms and 60 ms based on network stats. I also introduced a simple congestion control loop that throttled send rates when the buffer exceeded thresholds, using Go’s `net` package for socket handling and a Redis cache to share state across nodes.

**Result**  
The new design cut average playback latency from 350 ms to 120 ms during peak load, reduced buffering events by 65%, and increased overall user engagement by 12 %. I learned that a hybrid TCP/UDP strategy, combined with lightweight congestion control, can deliver both reliability for control flow and the low‑latency needed for real‑time media.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
