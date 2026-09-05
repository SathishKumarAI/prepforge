---
qid: ing_5aa8c5464b__star__local
question: 'Explain: Q: Memory tier selection: where would you put each of these and
  why? (a) the user''s API rate limit, (b) the steps to deploy our service, (c) the
  agent''s last failed attempt at this task, (d) today''s stock price.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 282
output_tokens: 352
total_tokens: 634
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:28:52-05:00'
sources: []
---

**Situation:**  
When redesigning our AI‑assisted trading platform, we had to decide where to store four critical pieces of data: user API limits, deployment steps, an agent’s last failed attempt, and today’s stock price. The goal was to balance latency, cost, and durability while ensuring fast access for real‑time decisions.

**Task:**  
I needed to map each datum to the appropriate memory tier (in‑memory cache, short‑term persistent store, long‑term database) and justify the choices so the system could scale to thousands of concurrent users without exceeding budget.

**Action:**  
1. **User API rate limit** – Placed in a Redis cluster (RAM only). It’s read/write every request, needs sub‑millisecond latency, and can be evicted when idle.  
2. **Deployment steps** – Stored in an S3 bucket with versioning; these are rarely accessed once the deployment is triggered but must survive failures and allow rollback.  
3. **Agent’s last failed attempt** – Kept in a local SQLite cache on each edge node, because it’s only needed for retry logic during that session; persistence beyond a single run isn’t required.  
4. **Today’s stock price** – Cached in Redis with a 5‑minute TTL; fresh enough for trading decisions yet inexpensive to keep in memory.

**Result:**  
Latency dropped from 120 ms average to 35 ms, cost savings of ~15% by using tiered storage, and no data loss during node restarts. Learned that matching access patterns to the right tier dramatically improves both performance and budget control.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
