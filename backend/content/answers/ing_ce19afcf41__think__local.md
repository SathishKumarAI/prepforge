---
qid: ing_ce19afcf41__think__local
question: 'Explain: Step 3: Design core components — system-design-primer/solutions/system_design/twitter/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 223
output_tokens: 548
total_tokens: 771
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T14:34:26-05:00'
sources: []
---

**1️⃣ Clarify the ask & assumptions**  
- The user wants an explanation of *Step 3: Design core components* from the “Twitter” system‑design example in the System‑Design‑Primer repo.  
- Assume they know what a system design interview is, but may not be familiar with this specific README’s structure.  
- We’ll summarize the key points and illustrate why each component matters.

**2️⃣ Mental model to use**  
Treat the Twitter design as a classic **high‑throughput microservice architecture**:  
1. *User interaction layer* → APIs & load balancer.  
2. *Business logic services* (tweeting, timeline, notifications).  
3. *Data stores* that match access patterns (relational for users, key‑value for timelines, time‑series for analytics).  
4. *Auxiliary services* (caching, search, queueing).  

**3️⃣ Step‑by‑step reasoning**  
- **Identify core user stories**: tweet posting, feed reading, following/unfollowing.  
- **Map each story to a service**: Tweet Service, Follow Service, Feed Service, Notification Service.  
- **Choose data stores per access pattern**:  
  * Users → RDBMS (ACID).  
  * Tweets → Append‑only log + KV store for quick ID look‑ups.  
  * Followers → Graph DB or inverted index in a key‑value store.  
  * Feed → Pre‑computed timeline in Redis/ElasticSearch.  
- **Add supporting layers**:  
  * Load balancer (horizontal scaling).  
  * Cache layer to reduce read latency.  
  * Message queue for eventual consistency (e.g., Kafka).  
  * Search index for tweet content.  

**4️⃣ Common traps to avoid**  
- *Over‑engineering*: Don’t add services that aren’t justified by a user story.  
- *Ignoring data consistency*: Be clear when eventual vs strong consistency is acceptable.  
- *Neglecting failure modes*: Assume network partitions and design idempotent APIs.  

**5️⃣ Sanity check & verbalize**  
- Re‑read the original README to ensure no component is omitted.  
- Verify that each service has a clear responsibility and that data stores align with read/write patterns.  
- Summarize: “Step 3 lays out the microservices, their responsibilities, and the matching storage solutions so that Twitter can handle millions of writes/reads per second while keeping latency low.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
