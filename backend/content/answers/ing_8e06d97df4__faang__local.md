---
qid: ing_8e06d97df4__faang__local
question: 'Explain: Step 1: Register an Endpoint — Webhooks | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 501
total_tokens: 739
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:14:31-05:00'
sources: []
---

**Clarify**  
You’re asked to design a system that registers web‑hook endpoints for downstream services.  
Assumptions:  
* Each client can register multiple URLs (one per event type).  
* Registrations are idempotent and may be updated or revoked.  
* The system must scale to millions of clients, high write/read throughput, and provide low latency delivery.  

**Approach**  
1. **API layer** – REST/GRPC endpoint that validates the URL, authenticates the caller, and writes a record to persistent storage.  
2. **Storage** – use a sharded key‑value store (e.g., DynamoDB or Cloud Bigtable) keyed by `{client_id,event_type}` with fields `url`, `secret`, `created_at`.  
3. **Caching** – an LRU cache in a distributed in‑memory layer (Redis/Memcached) to accelerate lookups for the most active clients.  
4. **Event bus** – publish registration changes to Kafka/Cloud Pub/Sub so downstream services can react asynchronously.  

**Depth**  
* Write path: API → auth → validate URL → put into DB + cache + publish event. Latency < 50 ms.  
* Read path: service reads from cache; on miss, fetches from DB and warms the cache.  
* Consistency: eventual consistency is acceptable for delivery; strong consistency can be achieved with transactional writes if needed.  
* Security: enforce HTTPS, sign payloads, rotate secrets via a key‑management system.

**Edge Cases**  
* Duplicate registrations → idempotent PUT semantics.  
* Invalid URLs or unreachable endpoints → return 4xx and optionally schedule health checks.  
* Cache evictions → ensure DB read is still fast; use read‑through pattern.

**Optimize & Communicate**  
- **Scalability:** Partition by client_id hash to avoid hot spots.  
- **Latency:** Keep cache warm for top 10 % of clients (cache hit ratio >95%).  
- **Observability:** Instrument with metrics (request latency, cache miss rate) and alerts on failed health checks.  

Explain this flow clearly, emphasize trade‑offs between consistency vs. speed, and show how the design meets FAANG expectations for reliability, scalability, and maintainability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
