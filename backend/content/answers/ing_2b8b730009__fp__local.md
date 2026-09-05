---
qid: ing_2b8b730009__fp__local
question: 'Explain: URL Mappings Table — Design URL Shortener | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 467
total_tokens: 646
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:37:10-05:00'
sources: []
---

### Why a dedicated *URL‑Mappings* table is essential

At its core, a short‑link service must **invert** a many‑to‑one mapping:  
`short_id → long_url`.  
The system’s latency budget (≈ 10 ms) and write throughput (tens of writes per second) force us to store this relation in a structure that supports:

1. **O(1) reads** – a user hits `/abc123`, we must retrieve the target instantly.
2. **O(1) writes with minimal contention** – each new short link is inserted once, no heavy re‑indexing.

A hash map satisfies both, but in a distributed environment we need persistence and durability. The *URL‑Mappings* table (e.g., a DynamoDB or Bigtable key–value store) gives us:

- **Primary key = `short_id`** – natural clustering for point reads.
- **Secondary index on `long_url`** – optional de‑duplication (`INSERT … ON DUPLICATE KEY UPDATE`).
- **Timestamp, TTL columns** – support analytics and garbage‑collect expired links.

### Deeper principle: locality of reference

Because most traffic is read‑heavy (users click existing links), we want the data to stay in hot memory. By choosing a *consistent hash* for `short_id`, we spread keys evenly across shards while keeping each shard’s keyspace contiguous, so cache warm‑up and prefetching work efficiently.

### Non‑obvious insight

**Treat the “short id” as an opaque identifier, not a numeric counter.**  
If you expose incremental IDs, attackers can enumerate all existing links (security risk) and predict future IDs. Using a cryptographically secure hash of the URL or a random UUID ensures:

- **Uniform distribution**, preventing hotspots.
- **One‑way mapping** – even if an attacker sees many `short_id`s, they cannot reverse‑engineer the original URLs.

Thus, the *URL‑Mappings* table is not just storage; it embodies the system’s performance guarantees and security posture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
