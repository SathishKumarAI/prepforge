---
qid: ing_46e093d26f__star__local
question: 'Explain: New Components for Offline Handling — Design WhatsApp | System
  Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 334
total_tokens: 579
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:50:24-05:00'
sources: []
---

**Situation:** While working on the next version of a messaging platform similar to WhatsApp, we discovered that users in rural areas with intermittent connectivity were losing messages and experiencing high latency when they finally came online. The existing push‑to‑server model couldn’t guarantee delivery or preserve message order.

**Task:** I was tasked with designing new offline‑handling components that would allow seamless message queuing, reliable delivery once the device reconnects, and minimal battery impact for mobile clients.

**Action:** I introduced a hybrid approach: on the client side, a lightweight SQLite store buffered outgoing messages locally with sequence IDs; an “offline sync daemon” ran in the background, polling a low‑power Wi‑Fi hotspot or cellular data only when the network was available. On the server, we added a per‑user “message backlog queue” in Redis, capped at 10 000 items, and used a Kafka topic to trigger batch acknowledgments once the client re‑established a session. We also implemented delta compression for media attachments and prioritized text messages so that critical alerts were sent first.

**Result:** After beta testing with 15,000 users, message loss dropped from 12% to <0.1%, average sync time after reconnection fell below 2 seconds, and battery usage increased by only 3%. The team learned the importance of balancing local persistence, server‑side queuing, and adaptive network use for robust offline messaging.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
