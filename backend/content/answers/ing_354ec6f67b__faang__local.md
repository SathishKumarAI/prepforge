---
qid: ing_354ec6f67b__faang__local
question: 'Explain: Time zone — How to Design a System for Internationalization'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 488
total_tokens: 724
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:47:58-05:00'
sources: []
---

**Clarify**  
We need a scalable system that handles user‑generated data across many time zones, ensuring correct scheduling, display, and storage of timestamps. Key assumptions:  

* Users can be in any UTC offset (including DST changes).  
* The system must support CRUD operations on events, reminders, and logs.  
* Latency for read/write should stay < 200 ms at peak traffic (~10M users).  

**Approach**  
1. **Normalize to UTC** – store all timestamps in UTC in the database.  
2. **User profile stores IANA zone ID** (`America/New_York`, `Asia/Tokyo`).  
3. **Client‑side conversion** – UI renders times by converting UTC → user’s zone (using JS or mobile SDK).  
4. **Server‑side rendering for APIs** – include both UTC and local fields in responses; cache zone offsets per request.  
5. **Background jobs** – recalc DST transitions monthly; keep a lookup table of offset changes.  

**Depth**  
* Database: PostgreSQL with `timestamptz` column (stores UTC).  
* API layer: FastAPI, return JSON `{ utc_ts, local_ts }`.  
* Caching: Redis store per user zone to avoid recomputing offsets on every request.  
* Complexity: O(1) per read/write; background job runs in O(Z) where Z = number of zones (~400).  

**Edge Cases**  
* DST jumps (e.g., 2 am → 3 am). Validate event creation against the zone’s transition table to avoid ambiguous times.  
* Users change time zones: re‑render existing events on client; optionally flag affected events.  
* Leap seconds: rely on system clock libraries that handle them.  

**Optimize & Communicate**  
- Use CDN‑cached static JS for conversion to offload work from the server.  
- Batch DB writes via write‑ahead logs for high throughput.  
- Explain trade‑off: storing only UTC simplifies persistence; duplicating local times aids performance but increases storage.  
- Narrate: “By normalizing to UTC and keeping zone metadata separate, we decouple data consistency from user experience, enabling linear scalability while respecting regional time semantics.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
