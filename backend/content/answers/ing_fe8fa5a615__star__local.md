---
qid: ing_fe8fa5a615__star__local
question: 'Explain: Computer networking — Technical interviewing | Microsoft Careers'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 383
total_tokens: 619
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:57:45-05:00'
sources: []
---

**Situation:**  
During a recent internship at a fintech startup, our data‑science team was building an online fraud‑detection model that had to process transaction streams in real time across multiple regions. The latency between ingesting the stream and scoring it on the cloud exceeded our SLA of 150 ms.

**Task:**  
I was tasked with diagnosing the network bottlenecks, redesigning the data pipeline, and proving that we could meet the latency target without sacrificing throughput or model accuracy.

**Action:**  
First, I set up packet‑level monitoring with Wireshark and traceroute to map out round‑trip times between our edge nodes (Azure Front Door) and the GPU‑accelerated inference cluster. The analysis revealed high jitter on a few inter‑DC links. I then reconfigured Azure’s Virtual Network to use ExpressRoute peering, which reduced the 2–3 ms latency spikes by routing traffic over dedicated circuits. Next, I implemented a lightweight protobuf schema for feature serialization and switched from HTTP/1.1 to gRPC for service calls, cutting the payload size by ~30% and lowering header overhead. Finally, I introduced a small in‑memory cache at the edge that stored recent model predictions for identical transaction patterns, shaving off an additional 20 ms per request.

**Result:**  
After these changes, end‑to‑end latency dropped from 240 ms to 120 ms—well below our SLA—and throughput increased by 25% with no loss in prediction accuracy. I learned that a deep understanding of network protocols and careful profiling can yield dramatic performance gains in ML pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
