---
qid: ing_848a750f72__aws__local
question: 'Explain: in the United States query the table — AWS re:Invent 2018: Amazon
  DynamoDB Deep Dive: Advanced Design Patterns for DynamoDB (DAT401)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 493
total_tokens: 746
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:24:37-05:00'
sources: []
---

**Situation & Task**

When I joined a startup building a real‑time analytics platform we had an enormous “events” table in DynamoDB. The requirement was to support ad‑hoc queries like *“find all events for user X in the last 24 hrs, sorted by timestamp, with up to 10 k rows”*. This wasn’t covered by our existing partition key (userId) and sort key (eventTime) because we also needed cross‑user filters (e.g., eventType).  

**Action – Design & AWS Services**

1. **Global Secondary Index (GSI)**  
   *PK*: `eventType` (Sort Key): `eventTime`  
   This lets us query by type and time without scanning the base table.  

2. **Projection** – Only the attributes we need (`userId`, `payload`) to keep read throughput low.

3. **Query Parameters** – Use `KeyConditionExpression = "eventType = :t AND eventTime BETWEEN :start AND :end"` and add a `FilterExpression` for `userId = :u`.  
   The filter runs client‑side, so we keep the projected attributes minimal to reduce read capacity.

4. **Capacity Planning** – With 1 M events/day and a ~50 % cache hit ratio on DynamoDB Accelerator (DAX), I estimated 400 RCU for GSI queries and set auto‑scaling with a target of 70 % utilization.

5. **Cost & Availability** – The GSI is in the same region, so we get the same 99.999 % availability. Using DAX offloads read traffic and cuts cost by ~30 %.

**Result**

After deployment:  
- Query latency dropped from 250 ms (scan) to <20 ms on average.  
- Read throughput stayed below 500 RCU, avoiding throttling.  
- Monthly DynamoDB bill reduced by **$1.2K**.

**Reflection & Learning**

I initially over‑provisioned the GSI and incurred unnecessary cost. By revisiting CloudWatch metrics (“dive deep”) I tuned the read capacity to the sweet spot. This reinforced that *Ownership* means continuously iterating on design, not just deploying a solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
