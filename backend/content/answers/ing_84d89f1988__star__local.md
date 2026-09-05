---
qid: ing_84d89f1988__star__local
question: 'Explain: Aggregate a group by tag — Cassandra Vs MongoDB Comparison | MongoDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 382
total_tokens: 624
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:59:00-05:00'
sources: []
---

**Situation** – At my last job we had a real‑time analytics dashboard for an e‑commerce site that needed daily counts of product tags sold across regions. The data lived in both Cassandra (our OLTP store) and MongoDB (used for ad hoc reporting).  

**Task** – I was asked to compare how each database handled a “group by tag” query: `SELECT tag, COUNT(*) FROM sales GROUP BY tag` and recommend the best approach for our 10‑million‑row daily feed.  

**Action** – In Cassandra I modeled the data with a wide‑row key of `tag#date`, storing counts per day and using an ALLOW FILTERING query with a pre‑aggregated column family to avoid full table scans. I then wrote a lightweight Java driver job that streamed results, applied a client‑side aggregation, and persisted totals in a secondary materialized view.  
In MongoDB I leveraged the Aggregation Framework: `db.sales.aggregate([{ $group: { _id:"$tag", total:{ $sum:1 }}}])`. I added a compound index on `{ tag: 1 }` to keep the cursor scan efficient, and used `allowDiskUse:true` for larger data sets.  

**Result** – The Cassandra approach gave sub‑second responses but required ~200 MB of RAM per node for the in‑memory aggregation map; MongoDB returned results in ~150 ms with only 50 MB heap usage, and the query plan showed a single index scan. I learned that while Cassandra excels at write throughput, MongoDB’s built‑in aggregation pipeline is far simpler to implement for group‑by analytics, especially when memory overhead must be low.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
