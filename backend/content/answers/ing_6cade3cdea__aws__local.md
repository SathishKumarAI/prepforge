---
qid: ing_6cade3cdea__aws__local
question: 'Explain: Leaderboard database schema design — Leaderboard System Design
  - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 532
total_tokens: 768
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:29:30-05:00'
sources: []
---

**Situation & Task**  
In my last role I led the redesign of a real‑time leaderboard for a mobile game that served 3 M concurrent users during peak hours. The existing system lagged behind and couldn’t scale to the projected 10 M daily active players, so my goal was to deliver a highly available, cost‑efficient design that reduced latency below 50 ms while keeping operational overhead low.

**Action**  
1. **Requirements & Constraints** – I mapped out read/write patterns (≈70 % reads, 30 % writes), data freshness (<5 s) and global availability.  
2. **Schema & Storage** – Chose a *wide‑column* model in Amazon DynamoDB:  
   - `PK = GameID`  
   - `SK = Rank#` (e.g., “RANK#0001”)  
   - Attributes: `PlayerID, Score, LastUpdated`.  
   This allows O(1) reads for top‑N and efficient range scans for pagination.  
3. **Caching Layer** – Integrated Amazon ElastiCache Redis as a read‑through cache to absorb 80 % of leaderboard queries, reducing DynamoDB read capacity by ~60 %.  
4. **Write Path** – Used an AWS Lambda function triggered by Kinesis Data Streams (ingesting score updates) that performs batched `TransactWriteItems` to maintain atomicity across partitions.  
5. **Global Replication & Availability** – Enabled DynamoDB Global Tables across us-east-1 and eu-central-1 for multi‑region read latency < 20 ms.  
6. **Cost Controls** – Applied on-demand capacity with Auto Scaling, and reserved capacity for predictable peaks, cutting the monthly spend from $12k to $7.5k (−37 %).  

**Result**  
- Latency dropped from 120 ms to 35 ms (average) across regions.  
- Throughput scaled to 10 M daily active users with zero outages during a 4‑month beta test.  
- Operational cost reduced by 37 %, freeing $5k/month for R&D.

**Learning & Ownership**  
I held weekly “post‑mortem” sessions after each launch cycle, documenting what worked and where the cache hit ratio slipped. This continuous improvement loop ensured that every failure became a learning point—exactly the *Customer Obsession* and *Dive Deep* principles Amazon champions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
