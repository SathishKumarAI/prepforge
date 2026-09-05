---
qid: ing_21f61fb08c__star__local
question: How does the receiver subscribe to a specific live video?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 340
total_tokens: 578
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:37:22-05:00'
sources: []
---

**Situation** – At my last company we were launching an interactive sports‑analytics platform. The product had to stream live commentary videos to millions of users while letting each receiver pick a particular game’s feed in real time.

**Task** – I needed to design the subscription layer so that a client could subscribe to a specific match ID, receive low‑latency video, and automatically switch if the user changed games without reloading the page.

**Action** – I chose WebRTC for its peer‑to‑peer bandwidth efficiency. Each broadcast server ran an SFU (Selective Forwarding Unit) built on Janus. When a client opened a WebSocket connection, it sent a JSON message `{“action”: “subscribe”, “matchId”: “12345”}`. The backend matched the `matchId` to an existing media room and pushed the SDP offer back. I added a Redis pub/sub channel per match so that if multiple receivers joined, they all subscribed to the same SFU instance. To handle dynamic switching, I implemented a lightweight REST endpoint `/switch?to=67890` that updated the WebSocket session’s room membership on the fly.

**Result** – The system handled 15 k concurrent subscriptions with <200 ms end‑to‑end latency and dropped frames under 0.5%. User churn fell by 12% in the first month, and I learned how to balance SFU scaling with minimal signaling overhead.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
