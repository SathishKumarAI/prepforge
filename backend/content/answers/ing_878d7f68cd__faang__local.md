---
qid: ing_878d7f68cd__faang__local
question: 'Explain: Domain name system — GitHub - donnemartin/system-design-primer:
  Learn how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 270
output_tokens: 520
total_tokens: 790
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:59:10-05:00'
sources: []
---

**Domain‑Name System (DNS) – Design Overview**

---

### 1️⃣ Clarify  
We’re asked to explain how DNS works and design a large‑scale, fault‑tolerant implementation (e.g., similar to what GitHub might use).  
Assumptions: *High read traffic (≈10⁶ queries/s), low write rate, global reach, strong consistency for updates, low latency (<20 ms).*  

### 2️⃣ Approach  
1. **Client → Recursive Resolver** – cache‑enabled stub resolver.  
2. **Resolver ↔ Root / TLD servers** – iterative lookups.  
3. **TLD → Authoritative zone** – final name resolution.  
4. **Caching strategy & TTL handling** – in‑memory, LRU eviction.  
5. **Replication & consistency** – multi‑region data stores with eventual sync; use Paxos/RAFT for authoritative zones.  

### 3️⃣ Depth (Core Design)  
- **Data model:** `Record(ID, Name, Type, Value, TTL)` stored in a distributed key‑value store (e.g., DynamoDB).  
- **Read path:** Client → local cache → recursive resolver → cached zone → authoritative server.  
- **Write path:** Admin UI → write to primary region → propagate via background replication.  
- **Consistency model:** Strong consistency for writes; eventual consistency for reads with a short “stale‑read” window.  
- **Latency targets:** 95th percentile <20 ms, achieved by edge caching (CDN) and query parallelism.  

### 4️⃣ Edge Cases  
- **TTL expiry & cache invalidation** – use soft TTL + refresh-on-expiry.  
- **Zone transfer failures** – fallback to secondary replicas.  
- **DNS amplification attacks** – rate‑limit per client IP, verify request size.  

### 5️⃣ Optimize & Communicate  
- **Horizontal scaling:** shard by domain hash; add more nodes as traffic grows.  
- **Cost control:** use spot instances for read replicas; keep write replicas minimal.  
- **Monitoring:** metrics (query latency, cache hit rate), alert on TTL miss rates.  

**Narrative to Interviewer:** “I’d start with a clear data model and then layer caching, replication, and security on top, ensuring each component meets the required SLAs while remaining cost‑effective.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
