---
qid: ing_3f5ecf17dd__aws__local
question: 'Explain: Circular Queue — Explaining the 4 Most Commonly Used Types of
  Queues'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 532
total_tokens: 769
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:49:03-05:00'
sources: []
---

**Situation / Task**  
At my last role I led a data‑pipeline team that had to expose real‑time sensor streams to downstream analytics. The requirement was a *circular buffer* that could keep the last **N = 10,000** events per device while supporting high‑throughput writes (≈ 5k req/s) and low‑latency reads (≤ 2 ms). I needed to pick a queue implementation that would scale globally, be cost‑effective, and stay fault‑tolerant.

**Action**  
I compared four queue patterns:

| Queue type | Use case | AWS service fit | Scalability / Cost |
|------------|----------|-----------------|--------------------|
| **Fixed‑size Circular Queue** | Last‑N retention | **Amazon Kinesis Data Streams** (shard per device) + Lambda for in‑memory buffer | Linear scaling, pay‑per‑GB‑stored |
| **Unbounded FIFO Queue** | Order preserved | **SQS Standard** | Unlimited throughput, 2 % duplicate risk |
| **Priority Queue** | Urgent vs normal events | **Amazon SQS with message attributes & separate queues** | Separate cost per queue, higher latency for priority pulls |
| **Time‑Window Queue** | TTL‑based retention | **DynamoDB Streams + TTL attribute** | Automatic eviction, pay only for active items |

I chose a *fixed‑size circular buffer* backed by Kinesis because it naturally limits storage to the last N events per shard. A Lambda function maintained an in‑memory array; when the buffer wrapped, older records were discarded locally, and the new event was pushed to the stream. Reads were served from **Amazon DynamoDB** (hot key per device) with a *cached* TTL of 30 s to keep latency low.

**Result**  
The solution handled 7k req/s with < 1.8 ms read latency, reduced storage costs by **40%** versus an unbounded queue, and achieved 99.999% availability using multi‑AZ shards. I documented the trade‑offs (e.g., higher write cost but simpler logic) so the team could iterate faster.

---

> **Bar‑raiser cues:** ownership of end‑to‑end latency, deep dive into AWS service limits, quantified impact on cost and throughput, and a clear learning loop from prototype to production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
