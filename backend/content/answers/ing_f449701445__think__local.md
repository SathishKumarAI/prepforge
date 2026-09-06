---
qid: ing_f449701445__think__local
question: 'Explain: Storage (5 Years) — Design URL Shortener | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 199
output_tokens: 506
total_tokens: 705
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T17:07:19-05:00'
sources: []
---

**1. Clarify the problem & scope**  
   - Confirm that we’re designing a *URL‑shortener* service and must keep data for **5 years**.  
   - Identify core requirements: high write/read throughput, idempotent shorten, redirection, analytics, 5‑year retention, eventual consistency, scaling, fault tolerance.

**2. Adopt a layered mental model**  
   - *Domain layer*: URL mapping logic (generate short key, collision handling).  
   - *Persistence layer*: Choose storage that guarantees 5‑year durability and cost‑efficiency (e.g., hot tier for recent traffic + cold archive).  
   - *Infrastructure layer*: CDN cache, load balancer, auto‑scaling.  
   - *Observability layer*: metrics, logs, alerts.

**3. Step‑by‑step reasoning**  
   1. **Key generation** → base‑62 counter or hash with collision checks.  
   2. **Write path**: Validate URL → store mapping in hot DB (e.g., Redis + write‑through to relational DB).  
   3. **Read path**: Cache hit → redirect; miss → fetch from DB, update cache.  
   4. **Retention policy**: TTL of 5 years on primary store, trigger background job to move older rows to cold storage (object store) and delete from hot tier.  
   5. **Scalability**: Partition by key prefix; use consistent hashing for distributed DBs.  
   6. **Fault tolerance**: Replicate across zones, failover routing.

**4. Common pitfalls to avoid**  
   - Forgetting that the short key must be unique *across all time*, not just current data.  
   - Assuming a single monolithic DB can scale; instead use sharding and caching.  
   - Neglecting eventual consistency between cache and primary store during TTL roll‑over.

**5. Sanity checks & verbalization**  
   - Verify that the 5‑year requirement is met by the chosen storage tier (e.g., S3 Glacier).  
   - Explain how reads are served from CDN to reduce load on origin.  
   - Summarize trade‑offs: cost vs latency, consistency vs availability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
