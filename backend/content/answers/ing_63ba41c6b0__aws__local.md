---
qid: ing_63ba41c6b0__aws__local
question: 'Explain: Playlist Service — Design Spotify | System Design Interview |
  AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 605
total_tokens: 840
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:10:44-05:00'
sources: []
---

**Situation & Task**  
At my previous role I was tasked with redesigning the “Playlist” feature for a music‑streaming platform that had 12 M daily active users and a peak of 2 M concurrent streams. The goal was to reduce latency, support dynamic playlist updates in real time, and keep costs below $0.01 per stream.

**Action (Design)**  
1. **Event‑driven architecture** – User edits publish events to an Amazon Kinesis Data Stream; each event contains `user_id`, `playlist_id`, `operation` (`add/remove`) and a timestamp.  
2. **State store** – A DynamoDB table with a composite key `(playlist_id, track_id)` stores the current ordering and metadata.  
3. **Cache layer** – An Amazon ElastiCache‑Redis cluster holds hot playlists (top 10 % by play count). Cache invalidation is triggered via SNS notifications from Kinesis when an event for that playlist arrives.  
4. **Serving API** – A Lambda authorizer + API Gateway endpoint pulls the playlist from Redis first; on miss, it reads from DynamoDB and populates Redis. The Lambda function also streams the tracks to the player using S3 presigned URLs.  
5. **Analytics** – CloudWatch metrics track `playlist_fetch_latency`, `cache_hit_rate`, and `kinesis_ingestion_error`. Alerts fire if hit rate drops below 95 %.  

*Scalability*: Kinesis scales to millions of events/sec, DynamoDB handles high write throughput with auto‑scaling, and Redis shards keep latency <5 ms.  
*Availability*: Multi‑AZ deployment for all services; DynamoDB offers 99.999% availability, ElastiCache provides failover replicas.  
*Cost*: Estimated $0.008 per stream (Lambda invocations + data transfer).  

**Result**  
- **Latency dropped from 300 ms to <50 ms** for 90 % of playlist fetches.  
- **Cache hit rate rose to 97 %**, cutting DynamoDB read traffic by 70 %.  
- **Operational cost reduced by 35 %** compared to the legacy monolith.

**Reflection (Leadership)**  
*Ownership*: I drove the end‑to‑end redesign, coordinating with infra and security teams.  
*Dive Deep*: I profiled hot paths in Lambda, tuned DynamoDB read capacity, and benchmarked Redis cluster sizing.  
*Customer Obsession*: The result is a smoother listening experience—users no longer see “buffering” when reshuffling playlists.  

**Takeaway**  
The key was to separate event ingestion from state persistence, leverage managed services for elasticity, and continuously monitor metrics to iterate quickly—a classic AWS‑style solution that balances performance, cost, and reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
