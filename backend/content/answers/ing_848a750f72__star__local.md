---
qid: ing_848a750f72__star__local
question: 'Explain: in the United States query the table — AWS re:Invent 2018: Amazon
  DynamoDB Deep Dive: Advanced Design Patterns for DynamoDB (DAT401)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 259
output_tokens: 368
total_tokens: 627
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:58:16-05:00'
sources: []
---

**Situation:**  
While leading a data‑engineering sprint for our multi‑region e‑commerce platform, we hit a performance bottleneck on the US‑East (N. Virginia) DynamoDB table that stored user session logs. The read throughput was spiking during flash sales, and our queries were returning stale data because of eventual consistency.

**Task:**  
I needed to redesign the query pattern so that the US region could serve 90 % of the traffic with sub‑200 ms latency while keeping costs under the quarterly budget.

**Action:**  
Using insights from AWS re:Invent 2018’s “Amazon DynamoDB Deep Dive” (DAT401), I applied a composite primary key with a **partition key** `userId` and a **sort key** `timestamp`. I added a Global Secondary Index (GSI) on `sessionType#startTime` to enable efficient range queries for active sessions. Leveraging the session’s “Query with FilterExpression” technique, I pulled only the last 24 hours of logs and applied a `begins_with` filter on `status = 'ACTIVE'`. To reduce read capacity usage, I switched from eventually consistent reads to strongly consistent where necessary and implemented pagination.

**Result:**  
The query latency dropped from ~1.2 s to <150 ms for 95 % of requests, and the US‑East region’s read capacity units fell by 35 %. The team learned that carefully crafted partition keys plus targeted GSIs can dramatically improve performance without inflating costs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
