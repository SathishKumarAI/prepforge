---
qid: ing_af3eba2db6__think__local
question: 'Explain: State assumptions — system-design-primer/solutions/system_design/twitter/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 218
output_tokens: 513
total_tokens: 731
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T12:32:21-05:00'
sources: []
---

**1. Clarify the question and set assumptions**  
   - Identify what “state” refers to (e.g., application state, user session data, cache).  
   - Assume a typical Twitter‑like microblogging service with millions of users and real‑time feeds.  
   - Decide on the scope: only the *system design* part, not the codebase itself.

**2. Adopt a mental model / framework**  
   - Use the classic **CAP + AIOps** lens: Consistency vs Availability for state, coupled with monitoring/alerting.  
   - Break down “state” into *write‑heavy*, *read‑heavy*, and *real‑time* categories.  

**3. Step‑by‑step reasoning toward an answer**  
   1. **Identify data sources**: user profiles, tweets, follower graph, likes, retweets.  
   2. **Determine write patterns**: high volume of tweet posts, low latency for posting.  
   3. **Map read patterns**: timeline feeds, search queries, trending lists.  
   4. **Choose storage per pattern**: RDBMS for relational data, NoSQL (Cassandra/Redis) for feed materialization, graph DB for follow edges.  
   5. **Define state consistency needs**: eventual vs strong; use Kafka or change‑feed to propagate updates.  
   6. **Plan caching and eviction**: LRU caches per user session, CDN edge for static assets.  

**4. Common traps & wrong turns**  
   - *Assuming a single database* will satisfy all workloads → leads to bottlenecks.  
   - *Neglecting cache invalidation*: stale timelines if not refreshed.  
   - *Over‑optimizing consistency*: forcing strong guarantees where eventual is sufficient, hurting latency.  

**5. Sanity‑check & articulate**  
   - Verify that each state type (write‑heavy, read‑heavy, real‑time) has an appropriate storage solution.  
   - Re‑explain the trade‑offs: e.g., “We use a write‑through cache for tweets to keep posting fast, but accept eventual consistency on followers so the timeline can be served from pre‑computed feeds.”  
   - Summarize in a diagram or table if possible to make the architecture clear.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
