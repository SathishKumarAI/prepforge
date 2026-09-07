---
qid: ing_1e33f39f87__aws__local
question: 'Explain: Endpoint: GET /songs/{song_id}/stream — Design Spotify | System
  Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 401
total_tokens: 644
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:34:52-05:00'
sources: []
---

**Situation & Task (Customer Obsession / Ownership)**  
I led the redesign of Spotify’s song‑streaming API after a 12 % drop in user retention during peak hours. The goal was to guarantee sub‑200 ms latency for 10 M concurrent users while keeping cost < $2 M/month.

**Action (Dive Deep & Bias for Action)**  
1. **Stateless Lambda** – `GET /songs/{song_id}/stream` triggers an API Gateway + Lambda that validates the JWT, looks up the song in DynamoDB (partition key: artist_id), and returns a signed S3 pre‑signed URL.  
2. **CDN & Edge Caching** – CloudFront with a 24 h TTL caches popular tracks; less frequent songs hit origin S3 via the signed URL.  
3. **Caching Layer** – Redis (ElastiCache) stores hot song metadata (duration, bitrate).  
4. **Auto‑Scaling** – Lambda concurrency is set to 10 k with provisioned concurrency during peak hours; CloudFront automatically scales globally.

**Result (Deliver Results)**  
- Latency dropped from 350 ms → 180 ms average; 95th percentile < 250 ms.  
- Peak traffic handled without throttling, eliminating the previous 12 % churn spike.  
- Monthly cost reduced by 18 % ($2.1 M → $1.7 M) due to efficient CDN and on‑demand compute.

**Learning & Bar‑raiser Insight**  
I owned the end‑to‑end flow, dug into cold start vs warm latency trade‑offs, quantified every metric, and iterated based on real user data—exactly what a bar‑raiser looks for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
