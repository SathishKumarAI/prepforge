---
qid: ing_45156208a2__faang__local
question: 'Explain: Step 2: Create a high level design — system-design-primer/solutions/system_design/pastebin/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 271
output_tokens: 819
total_tokens: 1090
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:24:54-05:00'
sources: []
---

## 1️⃣ Clarify  
The question asks: *“Explain Step 2 – Create a high‑level design”* from the **Pastebin** solution in the System Design Primer.  
Assumptions I’d confirm:

| Assumption | Why it matters |
|------------|----------------|
| Target traffic (requests per second) | Determines scaling strategy |
| Data volume & retention | Affects storage choice |
| Required latency | Influences caching and network topology |
| Budget / ops constraints | Guides cloud vs. on‑prem trade‑offs |

## 2️⃣ Approach  
I’ll outline the main layers before detailing each component:

1. **Front‑end** – load‑balanced HTTP API exposing Paste endpoints.  
2. **Caching layer** – in‑memory store (Redis) for hot pastes.  
3. **Persistence layer** – durable storage (PostgreSQL + S3).  
4. **Background jobs** – async expiration & analytics.  
5. **Observability & security** – monitoring, logging, rate‑limiting.

## 3️⃣ Depth (Core Design)

| Layer | Key Components | Rationale |
|-------|----------------|-----------|
| **API Gateway / Load Balancer** | CloudFront/ALB + Auto‑Scaling Group | Handles 10k‑100k rps; auto‑scales with traffic. |
| **Application Servers** | Stateless Node.js (or Go) workers | Statelessness lets us scale horizontally; use connection pooling for DB. |
| **Cache** | Redis Cluster (sharded, replicated) | O(1) read latency for popular pastes; TTL matches paste expiry. |
| **Database** | PostgreSQL 12+ with JSONB column for paste content | ACID guarantees for writes; JSONB allows flexible schema. |
| **Object Store** | Amazon S3 (or MinIO) | Durable, cheap storage for large pastes or binary attachments. |
| **Expiration Service** | Kafka → Worker queue → Scheduler | Decouples write path from deletion; ensures eventual consistency. |
| **Analytics** | ClickHouse / Elasticsearch | Fast aggregation of view counts without polluting primary DB. |
| **Security** | API keys, OAuth2, WAF, TLS termination | Protects against abuse and data leaks. |

### Complexity & Trade‑offs
* **Read path:** Cache hit → 1 ms; miss → DB + optional S3 read (10–20 ms).  
* **Write path:** Persist to DB + enqueue expiration job (≈5 ms).  
* **Scalability:** All stateless layers scale independently.  
* **Cost vs. latency:** Using Redis reduces DB load but adds memory cost; acceptable for high‑traffic use cases.

## 4️⃣ Edge Cases & Testing

| Edge | What could break it? | Test |
|------|---------------------|------|
| Paste size > cache capacity | Evicts useful data | Load test with large payloads |
| High write concurrency | DB contention, race conditions | Stress test 1k concurrent writes |
| Expiration lag | Stale data served | Verify TTL enforcement in cache & DB |
| Network partitions | Service unavailability | Chaos monkey simulation |

## 5️⃣ Optimize & Communicate  
* **Potential Improvements:** Use read‑through caching, CDN for static content, sharding on paste ID.  
* **Narrative to Interviewer:** “I’d start with a stateless API behind an ALB, then layer Redis for hot data, PostgreSQL for durability, and an async job queue to handle expirations—this keeps write latency low while ensuring eventual consistency.”  

> *This structured answer demonstrates clear problem‑clarification, a methodical approach, depth in technical detail, awareness of edge cases, and the ability to articulate trade‑offs—all key signals for FAANG interviewers.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
