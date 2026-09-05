---
qid: ing_4c62f94e4d__star__local
question: 'Explain: 👋 Stay Connected — Ai System Design Guide'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 334
total_tokens: 570
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:00:59-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup, we were building an AI‑driven fraud detection platform that needed to ingest transaction data from multiple banking APIs and send real‑time alerts to our mobile app. The system had to stay connected across unreliable mobile networks while keeping latency below 200 ms for high‑value transactions.

**Task** – I was tasked with designing the connectivity layer so that it could gracefully handle intermittent network conditions, maintain message ordering, and guarantee at‑least‑once delivery without overwhelming the backend services.

**Action** – I introduced a hybrid approach: (1) a lightweight MQTT broker on edge devices for low‑latency publish/subscribe; (2) an optimistic concurrency control mechanism that tags each event with a monotonically increasing sequence number; (3) a retry queue backed by Redis Streams to buffer messages during outages, capped at 5 minutes of backlog; and (4) a health‑check microservice that continuously probes upstream APIs and switches to a secondary gateway if latency exceeds 150 ms. I also added exponential backoff for reconnections and used WebSocket fallback for browsers.

**Result** – The system maintained 99.8% uptime during peak load, reduced alert delivery time from 350 ms to 180 ms on average, and cut data loss incidents by 92%. I learned that coupling lightweight protocols with a robust retry layer is key to keeping AI pipelines reliably connected in real‑world conditions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
