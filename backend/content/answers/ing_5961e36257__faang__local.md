---
qid: ing_5961e36257__faang__local
question: 'Explain: Room Type APIs (Admin) — Airbnb System Design - by Neo Kim and
  Hayk'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 504
total_tokens: 745
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:11:38-05:00'
sources: []
---

**Clarify**  
The interview asks to design the *Room‑Type* admin API for a platform like Airbnb—think CRUD on room categories (e.g., “Entire home”, “Private room”) that hosts can manage. We’ll assume:  

1. **Single tenant per host** – each host owns a set of rooms and their types.  
2. **High read traffic** – listing room types is frequent; writes are rare.  
3. **Consistency** – a type change must be visible immediately to all users.  

**Approach**  
1. *Data model*: `RoomType(id, hostId, name, description, metadata)`.  
2. *API surface*:  
   - `GET /hosts/{hostId}/roomtypes` → list (cached).  
   - `POST /hosts/{hostId}/roomtypes` → create.  
   - `PUT /rooms/types/{id}` → update.  
   - `DELETE /rooms/types/{id}` → delete (soft delete to preserve history).  
3. *Storage*: Primary table in a relational DB for ACID, plus a read‑optimized cache (Redis) keyed by hostId.  

**Depth**  
- **Consistency model**: Use optimistic locking (`version` field) on updates; reject conflicting edits with 409.  
- **Cache strategy**: On create/update/delete, invalidate or update the Redis key to keep reads fast.  
- **Security**: JWT auth scopes enforce host ownership; rate‑limit admin endpoints.  
- **Complexity**: CRUD ops O(1) DB + O(1) cache. Cache misses hit DB and warm cache.  

**Edge Cases**  
- Deleting a type used by existing rooms → cascade or prevent until reassigned.  
- Concurrent updates → optimistic lock failure handling.  
- Cache staleness during network partitions → fallback to DB read.  

**Optimize & Communicate**  
We can batch admin requests (e.g., bulk update) and use event sourcing for audit trails. In the interview, I’d narrate: “First, we model room types; then we expose safe REST endpoints with proper auth. We keep reads fast via cache but ensure writes hit the DB first for durability.” This demonstrates clear structure, depth, and awareness of trade‑offs—key to a top‑tier FAANG score.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
