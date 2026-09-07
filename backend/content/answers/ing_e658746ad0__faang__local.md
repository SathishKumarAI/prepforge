---
qid: ing_e658746ad0__faang__local
question: 'Explain: These changes don''t need to appear in — FAANG System Design Interview:
  Design A Location Based Service (Yelp, Google Places)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 406
total_tokens: 657
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:34:07-05:00'
sources: []
---

**Clarify**  
You’re asked why certain architectural changes—e.g., adding a new cache layer or changing the sharding key—don’t have to be reflected in the public API of a location‑based service (LBS) like Yelp or Google Places. I’ll assume we’re designing for millions of concurrent queries, high write throughput, and strict SLAs.

**Approach**  
1. Identify *internal* vs *external* concerns.  
2. Examine how changes affect data consistency, latency, and backward compatibility.  
3. Map the impact on API contracts (request/response schema).  

**Depth**  
- **Internal changes**: e.g., migrating from a single‑region PostgreSQL to a multi‑region CockroachDB, or adding a CDN‑based image cache. These affect storage, replication, and latency but not the shape of the data returned. The API still serves JSON objects with `location_id`, `name`, `rating`.  
- **External changes**: Adding new fields (e.g., “crowd density”) would require versioning or schema evolution.  
- **Why internal can stay hidden**: Clients rely on semantics, not implementation details. As long as the service guarantees idempotent responses and consistent ordering, swapping storage engines doesn’t break consumers.

**Edge Cases**  
- A change that alters the order of returned results (e.g., switching from proximity‑first to popularity‑first) would break client expectations.  
- If the new architecture introduces eventual consistency gaps, clients might see stale data, violating SLAs.

**Optimize & Communicate**  
I’d document internal migrations in a *Change Log* and use feature flags for gradual rollout. I’d also run A/B tests to ensure latency budgets remain met. When communicating with stakeholders, emphasize that API contracts are stable; only the underlying plumbing evolves, preserving backward compatibility while improving scalability and resilience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
