---
qid: ing_38b68baa0c__faang__local
question: 'Explain: Endpoint: GET /analytics/{short_code} — Design URL Shortener |
  System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 462
total_tokens: 709
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:56:12-05:00'
sources: []
---

**Clarify**

You’re asked to design an endpoint `GET /analytics/{short_code}` that returns usage metrics for a short URL (click count, timestamps, referrers).  
Assumptions:  
* Short codes are unique alphanumerics of fixed length.  
* Analytics must be served with low latency (< 100 ms).  
* The system is read‑heavy; writes happen on `POST /shorten`.  
* We need to support millions of URLs and billions of clicks.

**Approach**

1. **Data model** – store a record per short code: `{code, url_id, click_count, last_click_ts}` in a fast key–value store (e.g., DynamoDB or Redis).  
2. **Append‑only log** – every redirect writes a lightweight event to an ingestion stream (Kafka/Cloud Pub/Sub).  
3. **Batch aggregation** – workers consume the stream and increment counters in the KV store; they also push raw events into a time‑series DB for detailed analytics.  
4. **Cache layer** – use a CDN or Redis cache for hot short codes, invalidated on each click.

**Depth**

*Read path*: `GET` looks up the code in the KV store (O(1)), returns JSON `{click_count, last_click_ts}`.  
*Write path*: redirect handler writes an event to Kafka; worker updates KV atomically (`ADD`).  
Complexities: O(1) read, O(log N) write to stream, O(1) counter update.  
Trade‑offs: eventual consistency for counters vs strict accuracy; choose based on SLA.

**Edge Cases**

*Non‑existent code → 404.*  
*Race condition on simultaneous clicks → use atomic increment or optimistic locking.*  
*Cache staleness → TTL of a few seconds.*

**Optimize & Communicate**

- Add sharding by prefix to distribute load.  
- Use exponential backoff for retries on write failures.  
- Log metrics and expose Prometheus endpoints for observability.  
Explain each trade‑off clearly, showing how latency, consistency, and scalability are balanced.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
