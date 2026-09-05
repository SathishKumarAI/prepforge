---
qid: ing_190fbf77cd__fp__local
question: 'Explain: 5.2 Database Schema — Design URL Shortener | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 502
total_tokens: 683
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:59:25-05:00'
sources: []
---

### From the Problem to the Schema

The core requirement of a URL‑shortening service is **bijection**:  
1. *Create* → generate a unique key that maps one long URL to one short URL.  
2. *Redirect* → look up the key and return the original URL.

Thus our data model must support **fast writes** (key generation) and **ultra‑fast reads** (lookup). The natural choice is a single table with an indexed primary key:

| `short_id` | `original_url` | `created_at` | `ttl` |
|------------|----------------|--------------|-------|

- **Primary Key (`short_id`)** – guarantees uniqueness and O(1) lookup.  
- **URL Field** – stored as a VARCHAR; we can add an index on it for reverse‑lookup or analytics.  
- **Timestamp / TTL** – allows expiration policies (e.g., auto‑delete after 90 days).  

### Why This Works

* **Space vs. Speed Trade‑off**: Storing the full URL in each row keeps reads simple; we avoid a join or hash lookup that would otherwise add latency.  
* **Simplicity of Scaling**: The table can be sharded on `short_id` (e.g., consistent hashing) because keys are uniformly distributed after base‑62 encoding.  
* **Atomicity**: Inserting a row is an atomic operation; we never need to lock or check for duplicates—just rely on the primary key constraint.

### Non‑Obvious Insight

Many designs ignore **TTL (time‑to‑live)** as a first‑class column. By embedding `ttl` in the schema, we can let the database engine (e.g., PostgreSQL’s `pg_partman`, DynamoDB TTL) automatically purge stale keys without application logic. This turns what would be a costly background job into an O(1) maintenance operation, dramatically reducing operational overhead and ensuring consistent read performance even as the table grows.

In short, a single‑row schema with a unique key, URL payload, timestamp, and TTL captures the problem’s essence while aligning with database optimization principles—indexing for speed, sharding for scale, and built‑in expiry for hygiene.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
