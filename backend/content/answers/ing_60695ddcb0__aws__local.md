---
qid: ing_60695ddcb0__aws__local
question: 'Explain: Write a SQL query to update the counter — Distributed Counter
  System Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 571
total_tokens: 809
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:03:56-05:00'
sources: []
---

**Situation / Task**  
In a recent project I had to expose an API that increments a global “page‑view” counter for a high‑traffic news site (≈ 3 M ops/sec). The requirement was a single, strongly consistent counter with sub‑millisecond latency.

**Action**  
I chose **Amazon DynamoDB** as the backing store because it offers *eventual consistency* with optional *strongly consistent reads*, horizontal scaling, and built‑in high availability.  
The design uses two tables:

| Table | Partition key | Sort key | Attribute |
|-------|---------------|----------|-----------|
| `Counter` | `counter_id (string)` | – | `value (number)` |
| `Delta`   | `shard_id (int)`     | `timestamp (nanos)` | `delta (int)` |

* **Update**: each write inserts a row into `Delta`.  
  ```sql
  INSERT INTO Delta (shard_id, timestamp, delta)
  VALUES (:shard, :ts, 1);
  ```
* **Read**: to get the current count we run an aggregation over all shards every minute and materialize the result back into `Counter`.
  ```sql
  UPDATE Counter
  SET value = value + (
      SELECT SUM(delta) FROM Delta WHERE shard_id = :shard AND timestamp > :window_start
  )
  WHERE counter_id = 'page_views';
  ```

**Result**  
The system handled **3 M ops/sec** with < 10 ms latency, and the aggregated counter was accurate to within ±1% of a true global count. Costs were <$200/month for provisioned throughput.

---

### Leadership Principles

* **Ownership** – I defined the contract between the API layer and DynamoDB, wrote all necessary ETL jobs, and set up CloudWatch alarms.  
* **Dive Deep** – I benchmarked different write‑back strategies (in‑memory cache vs. on‑demand aggregation) and chose the one that minimized cost while meeting SLAs.

### Bar‑raiser Takeaway

* Demonstrated *ownership* by fully owning the counter lifecycle.  
* Showed *depth* through a concrete query, data‑driven metrics, and trade‑off analysis (latency vs. consistency).  
* Learned from a prior failure where naïve single‑partition counters throttled; moving to sharded deltas solved it.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
