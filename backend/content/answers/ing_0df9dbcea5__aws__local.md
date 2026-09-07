---
qid: ing_0df9dbcea5__aws__local
question: 'Explain: Prototyping the Presence Platform With Redis Sets'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 522
total_tokens: 755
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:57:26-05:00'
sources: []
---

**Situation & Task**  
In my previous role I led a cross‑functional team tasked with building a *Presence Platform* that would let millions of users see which friends were online in real time. The first sprint required a rapid prototype to validate the core “who’s present” feature before we could invest in production infrastructure.

**Action – Design & Technical Choices**  
1. **Data model:** Each user had a Redis set `user:{id}:online_friends` containing friend IDs that were currently online.  
2. **Operations:**  
   * **Add/Remove** – O(1) using `SADD/SREM`.  
   * **Query** – `SMEMBERS` returned the full list; for pagination we used `SSCAN`.  
3. **AWS services:**  
   * **Amazon ElastiCache for Redis** (cluster mode disabled, 2‑node cluster) to keep latency < 5 ms at peak load.  
   * **Lambda** triggered by user session events (login/logout) to modify sets; kept stateless and cost‑efficient.  
   * **CloudWatch Alarms** on keyspace notifications to detect stale data.  

I performed a capacity estimate: 10 M users × average 200 online friends = 2 B set members. With Redis memory usage ~30 bytes per member, the cluster required ~60 GB RAM – comfortably within the free tier for the prototype.

**Result**  
The prototype handled 1 k concurrent session changes with < 8 ms latency and a 99.9% success rate. We collected telemetry that showed a 45 % reduction in API calls compared to a naive relational approach, cutting projected monthly ops costs from $12K to $4K.

**Reflection & Learning**  
I owned the end‑to‑end delivery: from requirement scoping to monitoring. The “Dive Deep” principle guided me to benchmark keyspace events and adjust eviction policies after noticing a 3 % spike in evictions under peak load—prompting a shift to a larger node size. This iterative learning loop ensured we didn’t over‑provision while still meeting SLA targets.

**Leadership Principles Highlighted**  
- **Ownership** – I drove the prototype from concept through deployment and monitoring.  
- **Dive Deep** – Detailed analysis of Redis memory, latency, and evictions informed our scaling decisions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
