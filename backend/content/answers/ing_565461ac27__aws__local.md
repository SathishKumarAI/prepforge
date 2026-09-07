---
qid: ing_565461ac27__aws__local
question: 'Explain: New York Times — How do we incorporate Event Sourcing into systems?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 439
total_tokens: 675
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:41:11-05:00'
sources: []
---

**Customer Obsession & Dive Deep**

*Situation*: At my previous role I led the redesign of a news‑delivery platform that served ~3 M daily readers. The product team wanted to add **event sourcing** so every article edit or comment could be replayed for audit and personalization, but we were stuck on a monolith with opaque logs.

*Task*: Build an event‑driven microservice architecture that captures all user actions (publish, edit, comment) as immutable events while keeping latency < 200 ms for the front‑end.

*Action*:  
1. **Event Store**: Deployed Amazon Kinesis Data Streams to ingest raw events and Amazon DynamoDB Streams to trigger downstream processing.  
2. **Processing Layer**: Lambda functions (stateless, 128 MB) consume stream records, transform them into domain events, and write to an Amazon EventBridge bus.  
3. **Read Model**: For the article feed, I used a DynamoDB Global Secondary Index keyed by `article_id` + `timestamp`, refreshed by another Lambda that aggregates events into a projection table.  
4. **Audit & Replay**: Stored raw event payloads in S3 (object lifecycle to Glacier after 90 days) and built an Athena query surface for compliance audits.

*Result*: Event‑driven reads cut the article load time from **350 ms → 180 ms** (30% improvement). The replay pipeline processed a full day’s worth of events in **15 min**, enabling rapid rollbacks. Cost stayed under **$3k/month** by using on‑demand Lambda and DynamoDB provisioned throughput tuned to peak traffic.

*Learning*: Early prototypes over‑provisioned Kinesis shards; after profiling, I reduced shard count by 40% without latency loss, saving $1.2k/month. This reinforced the principle of *Bias for Action*—fast iterations with continuous metrics feedback.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
