---
qid: ing_0d27233bed__star__local
question: 'Explain: User Online Status Indicator — Real Time Presence Platform System
  Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 302
total_tokens: 544
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:54:56-05:00'
sources: []
---

**Situation** – In my last role I was tasked with revamping our internal chat system where users could see if teammates were online or idle. The previous implementation used polling every 30 seconds, causing latency spikes and a 25% increase in server CPU during peak hours.

**Task** – Build a scalable real‑time presence platform that delivers sub‑second status updates to millions of concurrent users while keeping infrastructure costs under the existing budget.

**Action** – I designed a hybrid architecture using WebSocket connections for active clients, backed by Redis Streams to queue state changes. Each client sends a lightweight “heartbeat” every 5 seconds; if no heartbeat is received within 12 seconds we mark the user as offline. To reduce load, we partition users across shards and use a publish/subscribe pattern so that status updates are broadcast only to interested channels (e.g., team chats). I also implemented an exponential backoff for reconnects to handle network jitter and added a fallback REST endpoint for clients on flaky connections.

**Result** – The new system cut average latency from 3 seconds to under 200 ms, reduced server CPU usage by 35%, and supported 10× more concurrent users without additional hardware. I learned that combining WebSockets with stream‑based state queues can deliver real‑time features at scale while keeping operational complexity manageable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
