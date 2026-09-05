---
qid: ing_7a9605dcdf__star__local
question: 'Explain: Zoom System Design | WhatsApp / FB Video Calling System Design
  | System Design Interview Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 331
total_tokens: 576
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:39:11-05:00'
sources: []
---

**Situation**  
I was tasked with redesigning our video‑calling feature for a product that had just hit 5 million concurrent users during peak hours, yet the call quality dropped to 30 % packet loss and latency spiked over 400 ms.

**Task**  
Reduce end‑to‑end latency below 200 ms, keep jitter under 10 ms, and support at least 10 k simultaneous group calls without scaling the backend monolith.

**Action**  
I broke the system into three layers: a WebRTC front‑end for NAT traversal, a microservice mesh (Istio) to route media streams via edge servers, and a distributed TURN/STUN pool backed by Redis for fallback. I added adaptive bitrate control using VP9/AV1 codecs and implemented per‑session congestion feedback loops with RTCPeerConnection stats. For scaling, I deployed the edge nodes on Kubernetes autoscaling pods, each exposing an HTTP/2 gateway to minimize head‑of‑line blocking. Finally, I instrumented latency dashboards in Grafana and set up canary releases for codec upgrades.

**Result**  
Latency dropped from 400 ms to 140 ms, packet loss fell below 1 %, and we handled 12 k concurrent calls during a live event with zero outages. The team learned that decoupling media routing from application logic dramatically improves resilience, and that real‑time telemetry is essential for proactive tuning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
