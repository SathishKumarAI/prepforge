---
qid: vq_5bfae2a974__aws__local
question: PLAYER_BAT_STAT table is online?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 460
total_tokens: 688
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:52:59-05:00'
sources: []
---

**Situation & Task**  
While revamping the cricket analytics platform, I was asked whether the `PLAYER_BAT_STAT` table should be kept online (always available) or archived for cost savings. The business needed real‑time insights for live commentary and a 30 % reduction in storage costs.

**Action**  
I scoped the read/write patterns: ~5 k reads/second during matches, <10 writes/second. I compared DynamoDB (online) vs S3 with Athena (offline).  

1. **Design** – Create two tables:  
   * `PlayerBatStatLive` in DynamoDB for instant lookups (latency ≤ 2 ms).  
   * `PlayerBatStatArchive` in S3, partitioned by year/season, queried via Athena.  

2. **AWS services** – DynamoDB (on‑demand), S3 (Standard‑IA for archived data), Athena, Lambda for nightly sync, CloudWatch for metrics.

3. **Scalability & Availability** – DynamoDB handles burst traffic with auto‑scaling; S3 offers 99.999999999 % durability.  
4. **Cost trade‑off** – Live table: $0.25/GB/month; Archive: $0.0125/GB/month. With 200 GB of live data and 1 TB archived, projected savings ≈$250/month.

5. **Validation** – Implemented a pilot on 3 matches; query latency stayed <1 ms, cost dropped by 28 %.

**Result**  
Achieved real‑time analytics with SLA ≤2 ms, reduced storage spend by $300/month (30 % target), and maintained compliance by keeping all historical data searchable.  

> **Leadership Principles:** *Ownership* – I drove the end‑to‑end solution; *Dive Deep* – I benchmarked latency & cost across services.  
> **Bar‑raiser focus:** Clear ownership, quantified impact (latency, cost), deep technical justification, and a learning loop (pilot validation).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
