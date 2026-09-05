---
qid: ing_70ed3d0eac__star__local
question: 'Explain: Real-World Examples — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 298
total_tokens: 537
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:13:12-05:00'
sources: []
---

**Situation** – While leading the redesign of our live‑streaming platform, we were experiencing jitter and dropped frames for users on unstable mobile networks. The video analytics team reported a 12 % increase in buffering events during peak hours.

**Task** – I had to choose an appropriate transport protocol that balanced reliability with low latency, and design a fallback mechanism for varying network conditions, all while keeping our CDN architecture simple.

**Action** – I mapped out the data flow: keyframe packets needed guaranteed delivery (TCP), whereas inter‑frame delta updates could tolerate loss (UDP). I introduced QUIC as a unified layer, but kept a legacy TCP stream for browsers that didn't support it. On the server side, I implemented an adaptive bitrate controller that switched between UDP and TCP based on real‑time packet loss metrics collected via RTCP reports. I also added congestion control knobs in our media encoder to throttle UDP bursts during high load.

**Result** – Buffering dropped from 12 % to 3 %, and end‑to‑end latency fell by 25 ms on average. The team learned that a hybrid transport strategy, coupled with real‑time metrics, can deliver both reliability for critical packets and low latency for smooth playback.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
