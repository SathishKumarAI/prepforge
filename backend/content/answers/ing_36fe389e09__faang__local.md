---
qid: ing_36fe389e09__faang__local
question: 'Explain: Write index — Data streams | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 546
total_tokens: 779
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:51:56-05:00'
sources: []
---

**1️⃣ Clarify**  
We’re asked how to “write an index” for *data streams* in Elastic – i.e., create a write‑only stream that automatically routes writes to backing indices while keeping the API simple.  
Assumptions:  
- Elasticsearch 7.x+ (data‑stream support).  
- User has cluster with at least one data node.  
- No existing data‑stream or backing index conflicts.

**2️⃣ Approach**  
1. Create a *data stream* via REST (`PUT /_opendistro/_streams/<name>`).  
2. Under the hood, ES auto‑creates an *index template* and a *write alias*.  
3. All writes go to the write alias; ES creates time‑based backing indices (e.g., `my-stream-000001`).  
4. Optionally set rollover/retention policies via index lifecycle management (ILM).

**3️⃣ Depth**  
```http
PUT /_opendistro/_streams/my_stream
{
  "policy": {
    "rollover_alias": "my_stream_write",
    "index_patterns": ["my_stream-*"],
    "settings": {"number_of_shards":1}
  }
}
```
- **Write alias** (`my_stream_write`) is the endpoint for `POST /my_stream_write`.  
- ES automatically creates indices like `my_stream-000001`, `my_stream-000002` on rollover.  
- Use ILM to delete old segments:  
```http
PUT _ilm/policy/my_policy
{ "policy": { ... } }
```
and attach it in the template.

**4️⃣ Edge Cases**  
- Duplicate stream names → 400 error.  
- Writing without an alias → fails; must use write alias.  
- ILM mis‑configured → indices never rollover or delete.  
- Cluster with insufficient storage → index creation errors.

**5️⃣ Optimize & Communicate**  
Explain trade‑offs:  
- *Simplicity*: single API (`POST /write_alias`) vs. manual index management.  
- *Performance*: time‑based shards reduce GC churn, but small shards can hurt search latency.  
- *Retention*: ILM gives fine control; otherwise data may accumulate indefinitely.

Wrap up by noting that the key to a robust stream is: **define the stream → let ES manage backing indices → attach ILM for lifecycle**. This keeps ingestion painless while preserving query performance and storage hygiene.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
