---
qid: ing_9bfd274e33__faang__local
question: 'Explain: Back of the Envelope Calculations — Airbnb System Design - by
  Neo Kim and Hayk'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 501
total_tokens: 742
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:46:35-05:00'
sources: []
---

**Clarify**  
The interviewer asks for a *back‑of‑the‑envelope* estimate of the scale of an Airbnb‑style system (users, listings, traffic). I’ll assume: 10 M active users, 5 M listings, 1 billion daily pageviews, and 100 k concurrent requests.  

**Approach**  
1. Compute raw data volume per listing (≈50 KB for photos + metadata).  
2. Estimate storage: 5 M × 50 KB ≈ 250 GB (sharded across object stores).  
3. Traffic: 1 billion PV / 10 M users → 100 views/user/day. Each view ~200 B → 200 GB/day read bandwidth.  
4. Compute capacity for writes: 5 M listings × 12 edits/year ≈ 60 M writes/yr → ~2 k writes/s.  
5. Latency target < 150 ms; use CDN + edge caches to hit sub‑100 ms for static assets.

**Depth**  
- **Storage**: Use S3‑compatible object store (object size ~200 KB) with 10× replication → ≈2.5 TB raw.  
- **Database**: Partition listings by geography; use read replicas for hot regions.  
- **Caching**: Redis cluster for listing metadata, session store.  
- **Compute**: Autoscale micro‑services (Node/Go) behind a load balancer; 200 k RPS → ~500 vCPU instances.  
- **Cost**: Roughly $0.023 per GB/month for storage + $0.10 per million requests ≈ $30K/month.

**Edge Cases**  
- Sudden surge (e.g., holiday season) could spike to 5× traffic; require burst capacity and auto‑scaling thresholds.  
- Data consistency: eventual vs strong—trade‑off read latency for booking guarantees.  

**Optimize & Communicate**  
I’d iterate on the cache hit ratio, move more static assets to a CDN, and shard the database by city to reduce contention. I’d explain each trade‑off (e.g., replication factor vs cost) and show how the numbers guide capacity planning and budget.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
