---
qid: ing_adec08b5be__star__local
question: 'Explain: Business Service — Proximity Service'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 338
total_tokens: 572
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:19:57-05:00'
sources: []
---

**Situation** – In my last role at a regional retailer, we had an online store that was struggling with cart abandonment rates above 40 %. The analytics team identified that customers who saw product recommendations within a few minutes of searching were twice as likely to complete a purchase.

**Task** – I was tasked with designing a real‑time proximity service: a micro‑service that would ingest the user’s search query, match it against a catalog of high‑margin items, and push personalized recommendations back to the front end within 200 ms. The goal was to reduce abandonment by at least 15 % over three months.

**Action** – I built the service in Go for low latency, using Redis Streams to queue incoming search events. For matching, I trained a lightweight cosine‑similarity model on TF‑IDF vectors of product titles and metadata, served via TensorFlow Lite on an edge node. The service throttled requests based on user session depth and applied a simple A/B test harness with Optimizely to capture impact. We also integrated an S3 bucket for nightly model updates without downtime.

**Result** – Within two months, the abandonment rate dropped from 40 % to 28 %, a 30 % relative improvement. Revenue per visitor increased by $0.12 on average, translating to roughly $1.5 M extra in quarterly sales. I learned that coupling low‑latency infrastructure with incremental ML model updates can deliver measurable business gains without overhauling existing platforms.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
