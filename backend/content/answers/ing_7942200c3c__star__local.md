---
qid: ing_7942200c3c__star__local
question: Design streaming chat for mobile. What breaks that doesn't break on web?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 360
total_tokens: 599
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:36:18-05:00'
sources: []
---

**Situation** – At my last company I was tasked with adding a real‑time messaging feature to our e‑commerce app. The desktop site already had a WebSocket‑based chat, but the mobile experience lagged behind, especially on low‑bandwidth networks.

**Task** – Build a lightweight streaming chat for iOS/Android that would deliver messages instantly while keeping battery and data usage minimal, without breaking the existing web implementation.

**Action** – I chose to use HTTP/2 server push combined with a small WebSocket fallback. On mobile we opened a single persistent connection per user session, but throttled it: if the device was on cellular, we limited message bursts to 5 per second and queued extras locally. We also implemented “message batching” so that UI updates were coalesced into a single frame, reducing CPU wake‑ups. For the web we kept the full duplex WebSocket flow because desktop browsers handle constant connections better. I added an adaptive bitrate layer: on mobile we sent lower‑resolution image thumbnails and compressed payloads with Brotli, while the web client received full media.

**Result** – Within two weeks, mobile message latency dropped from 1.8 s to 0.6 s under 2G conditions, and battery drain during chat sessions fell by 35%. The feature was rolled out in a single release without any regressions on the desktop site. I learned that connection strategy must be tuned to platform constraints—persistent connections are fine for desktops but need throttling and batching on mobile to preserve resources.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
