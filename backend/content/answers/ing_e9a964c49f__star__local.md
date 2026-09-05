---
qid: ing_e9a964c49f__star__local
question: 'Explain: Object Storage and Uploads — Checksums | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 316
total_tokens: 555
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:15:29-05:00'
sources: []
---

**Situation** – At my previous role, we were migrating our media service from a legacy on‑prem file server to an AWS S3‑based object store. The upload pipeline was hitting a 15 % data corruption rate because clients sometimes dropped packets during large video uploads.

**Task** – I had to design a fault‑tolerant upload system that guaranteed end‑to‑end integrity while keeping latency low for mobile users and cost reasonable for our storage tier.

**Action** – I introduced chunked multipart uploads with SHA‑256 checksums calculated client‑side. Each part’s hash was sent in the HTTP header; on S3 we used an S3 Object Lambda to recompute the checksum and compare it before assembly. If a mismatch occurred, the system automatically retried that specific chunk up to three times and logged the event for post‑mortem analysis. I also added a “checksum‑manifest” JSON file stored alongside the object, allowing downstream services (e.g., CDN edge nodes) to verify integrity without re‑downloading.

**Result** – After deployment, data corruption dropped from 15 % to <0.01 %. Upload success rate improved to 99.8 %, and our automated retry logic saved us roughly $1k/month in unnecessary bandwidth. I learned that coupling lightweight client checksums with server‑side verification can dramatically increase reliability without sacrificing performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
