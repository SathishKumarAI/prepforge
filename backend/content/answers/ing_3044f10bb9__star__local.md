---
qid: ing_3044f10bb9__star__local
question: 'Explain: Object Storage — Design Spotify | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 387
total_tokens: 628
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:04:56-05:00'
sources: []
---

**Situation:**  
When I joined the backend team at a music streaming startup, we were handling 3 TB of user‑generated content per month—cover art, podcasts, and user‑uploaded clips. Our existing flat file system was hitting latency spikes during peak hours (4–5 pm), causing playback delays for ~15% of users.

**Task:**  
I needed to architect an object storage solution that could scale horizontally, provide low‑latency reads/writes, guarantee durability across regions, and integrate with our CDN for global delivery—all while staying under the $1.2M annual budget.

**Action:**  
I designed a sharded S3‑compatible store using MinIO on Kubernetes. Each bucket was partitioned by hash of object key to distribute load; we added an async replication pipeline to a secondary region for DR. To reduce read latency, I implemented a two‑level caching layer: an in‑memory Redis cluster for hot objects and a CDN edge cache (Cloudflare) with signed URLs. We also introduced versioning and lifecycle policies that archived infrequently accessed objects to Glacier after 90 days, cutting storage costs by 35%. Monitoring was built into Prometheus/Grafana dashboards that alerted on replication lag or cache miss spikes.

**Result:**  
Post‑deployment, read latency dropped from 250 ms to 60 ms on average during peak traffic, and the 15% playback delay vanished. Storage costs fell by 28%, and we achieved 99.999% durability with a single outage in the last year. I learned that combining sharding, async replication, and intelligent caching is key for high‑scale media object storage—principles I now apply to any large‑data service design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
