---
qid: ing_011bc1cb6d__faang__local
question: 'Explain: Unlock access to 10,000+ courses with a subscription'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 454
total_tokens: 690
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:46:53-05:00'
sources: []
---

**Clarify**  
You want to design a system that lets users unlock more than 10 k distinct courses behind a single paid subscription. Key assumptions:  

1. Users can have multiple concurrent sessions (mobile/web).  
2. Courses are immutable content; only access rights change.  
3. The platform already has user, course metadata, and billing subsystems.

**Approach**  
1. **Token‑based entitlement** – issue a short‑lived JWT per subscription that lists the allowed course IDs or simply a flag `all_courses`.  
2. **Cache layer** – keep the entitlement in Redis keyed by user ID to avoid DB lookups on every request.  
3. **Access gate** – middleware intercepts each `/courses/:id` fetch, checks token/Redis; if permitted, forward to content service.  

**Depth**  
- *JWT payload*: `{user_id, sub_exp, all_courses:true}` signed with HMAC‑SHA256.  
- *Cache refresh*: on subscription renewals or cancellations, evict user key; TTL set to 1 h for safety.  
- *Scalability*: O(1) read per request; cache hit rate >95% under 10M active users.  
- *Security*: never expose course IDs in JWT unless needed; use `all_courses` flag to reduce token size.

**Edge Cases**  
- Revoking access mid‑session: force cache eviction on cancellation.  
- Large user base causing Redis memory pressure: partition keys or use a CDN‑style edge cache.  
- Offline access: pre‑download entitlement via signed URL.

**Optimize & Communicate**  
We can reduce latency further by embedding the `all_courses` flag in a CDN edge cache, so only the first request per day hits the origin. Explain trade‑offs: heavier JWT → more verification overhead vs. lightweight flag → simpler revocation logic. Conclude that this design gives sub‑millisecond access checks, linear scalability, and clean separation of billing from content delivery—exactly what a FAANG stack would expect.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
