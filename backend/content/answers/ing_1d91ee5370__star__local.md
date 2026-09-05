---
qid: ing_1d91ee5370__star__local
question: 'Explain: Graceful Degradation — Reliability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 290
total_tokens: 527
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:28:43-05:00'
sources: []
---

**Situation**  
At my last role I was building a real‑time recommendation engine for a streaming platform that served millions of requests per second. One day a surge in traffic from a marketing campaign pushed our inference cluster to its limits and latency started creeping above the SLA.

**Task**  
I needed to keep the service available, maintain acceptable latency, and avoid a full outage while we scaled up resources.

**Action**  
First I added a lightweight “fallback” model that ran on CPU and served only 10 % of requests. I rewrote the request router to bias traffic toward the fallback when GPU queues exceeded 200ms. Then I instrumented a health‑check endpoint that exposed queue depth, GPU utilisation, and inference latency, feeding this into an autoscaling policy. Finally, I introduced a “feature flag” that allowed us to selectively disable non‑critical recommendation features during high load.

**Result**  
During the spike we kept 99.5 % of traffic within SLA, with average latency dropping from 650ms to 420ms. The fallback handled the excess load without impacting user experience. I learned that graceful degradation is not just about failing fast—it’s a proactive routing and scaling strategy that keeps critical paths alive while gracefully reducing feature richness under pressure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
