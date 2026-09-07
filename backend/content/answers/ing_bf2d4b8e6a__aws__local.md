---
qid: ing_bf2d4b8e6a__aws__local
question: 'Explain: TCP — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 393
total_tokens: 623
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:36:30-05:00'
sources: []
---

**Situation & Task**  
At my last role I led the redesign of a real‑time analytics pipeline that streamed sensor data from millions of IoT devices to an ML inference service. The existing UDP‑based ingestion dropped packets during peak traffic, causing model accuracy to fall by 12 %. My goal was to guarantee delivery and low latency while keeping cost under $200k/month.

**Action – Design & AWS Services**  
I switched to **TCP** for the device→edge channel, wrapped it in **AWS IoT Core MQTT** (over TCP) so each message is ACKed. For bulk transfer I introduced **Amazon Kinesis Data Streams** (sharded 64×), which guarantees at‑least‑once delivery and scales elastically.  
*Scalability:* Shards auto‑scale to 1 GB/s per shard; we hit ~30 GB/s during peak.  
*Availability:* Kinesis offers 99.999 % SLA; TCP connections are monitored via CloudWatch with automated recovery.  
*Cost:* Roughly 40 % lower than the legacy UDP + custom load balancer setup, due to managed services and reduced retry traffic.

**Result**  
Within two weeks of deployment we saw packet loss drop from 12 % to <0.01 %, increasing inference accuracy from 88 % to 99.5 %. Monthly costs fell by $80k while latency stayed under 200 ms.  

**Reflection (Bar‑raiser lens)**  
I owned the end‑to‑end flow, dived deep into protocol guarantees, quantified impact with real metrics, and learned that a “one‑size‑fits‑all” UDP approach is risky for mission‑critical ML pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
