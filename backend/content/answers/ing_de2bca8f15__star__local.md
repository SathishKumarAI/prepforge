---
qid: ing_de2bca8f15__star__local
question: What Is the Real-Time Presence Platform?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 326
total_tokens: 560
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:52:51-05:00'
sources: []
---

**Situation:**  
At my last company we had a live‑streaming app with millions of users, but our “online” indicator was always stale—users could appear online even after they’d quit the app for hours. The product team demanded real‑time presence to improve chat engagement and billing accuracy.

**Task:**  
I needed to design a low‑latency presence service that could ingest millions of heartbeat events per second, keep state in sync across data centers, and expose a REST/WS API with sub‑second freshness.

**Action:**  
I chose Redis Streams for ingestion, using consumer groups to distribute messages. The stream entries were batched into 50 ms windows; a Go microservice parsed them, updated a sharded Redis Hash keyed by user ID, and published presence changes to an MQTT broker for downstream services. To handle scale I added a fallback Kafka topic for durability, and used Lua scripts to atomically set TTLs so users dropped offline after 5 min of silence. The API was built with FastAPI, returning the cached state with a “last‑updated” timestamp.

**Result:**  
Latency dropped from ~2 s to <200 ms, and the false‑positive online rate fell from 18% to 0.4%. User engagement in chat rose 12%, and billing errors reduced by 30%. I learned how to balance real‑time freshness with fault tolerance using Redis Streams and Lua scripting.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
