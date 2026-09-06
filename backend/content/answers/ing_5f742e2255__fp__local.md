---
qid: ing_5f742e2255__fp__local
question: 'Explain: So let’s add another 16 bytes. So — FAANG System Design Interview:
  Design A Location Based Service (Yelp, Google Places)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 578
total_tokens: 769
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:28:45-05:00'
sources: []
---

**Why add 16 bytes and how it changes the design**

When you prototype a location‑based service (LBS) you usually keep only the *geohash* of a place, its primary key, and maybe a popularity score. That’s roughly 8–12 bytes per record.  
Adding **another 16 bytes** gives you room for two extra fields that unlock richer features:

| Field | Typical size | Why it matters |
|-------|--------------|----------------|
| `user_id` (64‑bit) | 8 B | Enables “user‑specific” ratings, reviews, or personalized recommendations. |
| `timestamp` (Unix epoch, 64‑bit) | 8 B | Allows time‑aware queries (e.g., trending places in the last hour). |

From a systems perspective:

1. **Indexing**  
   *Geohash* is already indexable via a B‑tree or a prefix tree. Adding `user_id` and `timestamp` lets you build composite indexes (`(geohash, user_id)`, `(geohash, timestamp)`), turning ad‑hoc scans into point queries that hit only the relevant leaf nodes.

2. **Cache locality**  
   Storing these two fields inline keeps them in the same cache line as the geohash, reducing miss rates when a client asks for “my recent visits near here”.

3. **Compression & storage cost**  
   16 bytes per record is trivial compared to disk or SSD costs; the *benefit* of richer semantics far outweighs the overhead.

4. **Analytics pipeline**  
   The `timestamp` field feeds into a time‑series engine (e.g., InfluxDB, Druid) without needing an ETL step, enabling real‑time trend dashboards.

---

### Non‑obvious insight

Most designers stop at “add a geohash” and forget that **temporal locality is the next frontier**. By allocating 16 bytes for `timestamp` you can:

- **Detect heat waves**: a place suddenly receives many check‑ins in a short span.
- **Support recency‑based ranking**: blend popularity with freshness automatically.

This small payload turns a static map lookup into a dynamic, user‑centric recommendation engine—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
