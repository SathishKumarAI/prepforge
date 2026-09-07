---
qid: ing_cdb8900652__aws__local
question: How to view the top 10 players on the leaderboard?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 449
total_tokens: 681
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:06:04-05:00'
sources: []
---

**Situation & Task**  
I was tasked to add a “Top 10 Players” widget for a live‑gaming platform that serves 12 M concurrent users. The leaderboard had to update in real time while keeping latency < 200 ms and cost under $5k/month.

**Action – Technical Design**  
1. **Data ingestion** – Player scores are streamed via Amazon Kinesis Data Streams (10 MB/s) to a Lambda that writes to an append‑only DynamoDB table (`ScoreTable`) with `PlayerID, Score, Timestamp`.  
2. **Real‑time ranking** – A second Lambda triggers on every write, pushes the score into Redis‑compatible Amazon ElastiCache for fast in‑memory sorting. The Lambda updates a sorted set (`LeaderboardTop10`).  
3. **API layer** – An API Gateway endpoint `/leaderboard/top10` calls a read‑only Lambda that retrieves the 10 entries from ElastiCache and returns JSON.  
4. **Cold‑start & scaling** – Lambda provisioned concurrency of 2 for burst traffic; ElastiCache cluster is multi‑AZ with read replicas to guarantee 99.999 % availability.  
5. **Cost control** – Kinesis shards at 1 shard, DynamoDB on-demand (≈$3k/month), ElastiCache single node ($1.5k). Total < $6k, below target.

**Result**  
Latency averaged 35 ms; peak traffic handled without throttling. User engagement rose 12% within a week of launch, and the feature was used in 87% of game sessions.  

> **Leadership Principles:** *Customer Obsession* (delivered instant gratification for players), *Ownership* (took end‑to‑end responsibility from ingestion to UI).  
> **Bar‑raiser focus:** I quantified latency & cost, demonstrated deep dive into AWS services, and iterated after a 3‑hour spike test that revealed a memory leak in Lambda—fixed by switching to Node 14.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
