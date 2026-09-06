---
qid: ing_454d8ba657__fp__local
question: 'Explain: Redirection Service — Design URL Shortener | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 497
total_tokens: 675
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:32:59-05:00'
sources: []
---

**Why a URL shortener is needed**  
Users want a compact, memorable link that redirects to a long, often changing destination (e.g., marketing campaigns). The service must map *short* → *long* with **one‑to‑many** reads and rare writes, guaranteeing **idempotent creation** and **instant resolution**.

**Core invariant – deterministic mapping**  
Let `f(id)` be the short string. To avoid collisions we require a *bijection* between IDs and URLs for existing entries. This is an instance of **hash‑based lookup with collision avoidance**, a classic optimization: we pre‑allocate a monotonically increasing counter (or use a UUID) and encode it in base‑62, giving ~1.8 × 10⁶ unique IDs per 6 chars.

**Key components**

| Layer | Responsibility |
|-------|----------------|
| **API gateway** | Rate‑limit, auth, request routing |
| **Shortener service** | Generate ID → store mapping (`id ↦ url`) in a write‑through cache (e.g., Redis) + durable DB (Cassandra/Spanner). |
| **Redirector** | Pure read: lookup `id` in cache; if miss, fetch from DB and warm cache. |
| **Analytics collector** | Asynchronously logs hits to a stream (Kafka → BigQuery) for later aggregation. |

**Scalability tricks**

1. **Consistent hashing** on the ID space distributes reads across redirect nodes, preventing hot‑spots.
2. **Bloom filters** pre‑screen invalid IDs, cutting 90 % of cache misses before DB hit.
3. **Rate‑limit per IP** protects against abuse; using a sliding window counter stored in Redis.

**Non‑obvious insight**  
Because redirects are *read‑heavy*, the system can tolerate eventual consistency: we allow a short delay (≤ 50 ms) between writing a new mapping and it becoming visible on all redirect nodes. This relaxes coordination overhead, enabling linear scalability without compromising user experience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
