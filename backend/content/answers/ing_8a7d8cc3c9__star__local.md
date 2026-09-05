---
qid: ing_8a7d8cc3c9__star__local
question: 'Explain: Blob Storage — Spotify System Design - by Neo Kim and Hayk'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 372
total_tokens: 613
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:09:26-05:00'
sources: []
---

**Situation**  
At a product‑launch sprint for our streaming app, we hit a spike in user uploads: over 2 M new audio files per day during the campaign. Our existing CDN cache couldn’t scale to store all raw blobs, and latency on playback was creeping past 300 ms.

**Task**  
I needed to design an inexpensive, highly available blob storage layer that could ingest millions of files daily, serve them with sub‑100 ms read latency, and keep costs under the $1M budget for the quarter.

**Action**  
I mapped Spotify’s public architecture: a multi‑region object store (Azure Blob / S3) fronted by an edge CDN. I chose Azure Blob because of its lifecycle tiers; hot tier for recent uploads, cool tier for 30–90 day history, and archive tier for long‑term retention. I added geo‑replication across three regions to hit our RTO/RPO targets and implemented a serverless ingestion pipeline with Azure Functions that auto‑tag files with metadata (artist ID, upload timestamp) and trigger transcoding jobs in parallel. For caching, I deployed an edge CDN (Azure Front Door) that invalidated on new uploads and used signed URLs for secure access.

**Result**  
The system handled 2.5 M uploads/day with a 99.99% availability SLA and reduced playback latency to 80 ms on average. Storage costs dropped by 22 % thanks to tiering, and the architecture scaled without code changes as traffic grew during subsequent releases. I learned how to balance cost, performance, and durability by leveraging cloud-native object storage features and edge caching.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
