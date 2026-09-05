---
qid: ing_e11fe5fe7e__star__local
question: 'Explain: HTTP Headers — Rest'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 340
total_tokens: 572
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:59:02-05:00'
sources: []
---

**Situation** – In my last role I was leading the migration of our legacy SOAP service to a new RESTful API for the mobile app. The client reported high latency on image‑heavy endpoints, and QA found that the server returned 200KB payloads even when the device only needed thumbnails.

**Task** – My goal was to reduce bandwidth usage by 40% and cut average response time below 150 ms without breaking backward compatibility or increasing server load.

**Action** – I introduced a set of custom HTTP headers:  
- `Accept-Encoding` to enable gzip/deflate for large JSON payloads; implemented middleware in Node.js that conditionally compressed responses.  
- `Cache-Control` and `ETag` to let browsers cache thumbnails, adding logic to invalidate when image dimensions changed.  
- `X-Image-Size` (a custom header) so the client could request a specific resolution via query parameters (`?size=thumb`). I also added `If-None-Match` handling to avoid re‑sending unchanged images. All changes were logged and monitored through Prometheus.

**Result** – Payload sizes dropped from 200 KB to ~45 KB for thumbnails, cutting bandwidth by 78%. Response times improved to an average of 110 ms, surpassing the target. I learned that thoughtful header design can dramatically improve API efficiency while keeping client code simple and forward‑compatible.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
