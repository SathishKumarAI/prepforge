---
qid: ing_e658746ad0__think__local
question: 'Explain: These changes don''t need to appear in — FAANG System Design Interview:
  Design A Location Based Service (Yelp, Google Places)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 207
output_tokens: 499
total_tokens: 706
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T16:12:06-05:00'
sources: []
---

**Answer**

In a location‑based service (LBS) such as Yelp or Google Places, the system must keep track of millions of places and user reviews while serving instant search results.  
When we say **“These changes don’t need to appear in”**, we’re usually talking about *updates that can be processed asynchronously*—they do not have to show up immediately in every client view or in the next query result.

---

### Why this is useful

| Component | Typical Latency Requirement |
|-----------|-----------------------------|
| **Search / Query** | < 100 ms (real‑time response) |
| **Write/Update** | 1–5 s (background sync acceptable) |

If every write had to be propagated instantly to all replicas and indexed before the next read, the system would suffer:

* **Higher latency** for users searching right after a review is posted.  
* **More coordination overhead**, hurting scalability.

Instead we can decouple writes from reads:

1. **Accept the write** (e.g., new review) into a write‑optimized store or queue.
2. **Update a read‑optimized index** asynchronously (batch, eventual consistency).
3. **Serve reads** from the current index; the new data will surface in the next batch.

Thus “these changes don’t need to appear” refers to updates that can be delayed until the next indexing cycle without breaking user experience or system correctness.

---

### Practical implementation

* **Write‑ahead logs / Kafka topics** for change events.  
* **Background workers** consume the log, update materialized views or search indexes (e.g., Elasticsearch).  
* **Cache invalidation policies** that tolerate a short staleness window (e.g., 5 s).

---

### Bottom line

By letting certain updates be *eventually consistent*, we keep read paths ultra‑fast and scale the write side independently. The phrase “don’t need to appear in” simply signals that immediate visibility is not mandatory for those particular changes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
