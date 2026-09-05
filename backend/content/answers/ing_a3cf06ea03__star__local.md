---
qid: ing_a3cf06ea03__star__local
question: 'Explain: Weak consistency — GitHub - donnemartin/system-design-primer:
  Learn how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 272
output_tokens: 312
total_tokens: 584
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:00:58-05:00'
sources: []
---

**Situation:**  
While working on a recommendation engine for a streaming service, we had to serve personalized movie lists to millions of users with sub‑second latency. The catalog database was sharded across three geo‑distributed nodes to avoid bottlenecks.

**Task:**  
I needed to keep the user’s watch history in sync across shards so that recommendations reflected recent activity, but I also had to ensure the system stayed highly available during regional outages.

**Action:**  
I chose a *weak consistency* model: updates were written to the local shard and asynchronously replicated to the others using Kafka streams. The application read from all replicas with a “last‑write wins” rule based on timestamps. If a replica lagged, the service would still return results from the nearest node, accepting that some stale data might appear for a few seconds. I added a retry path in the recommendation microservice to fall back to the master shard if latency exceeded 100 ms.

**Result:**  
Read latency dropped from 350 ms to under 80 ms on average, and we achieved 99.9% uptime during a regional outage. The trade‑off was a negligible 0.3% increase in recommendation relevance errors, which was acceptable for our business goals. I learned that weak consistency, when paired with careful timeout handling and eventual reconciliation, can deliver both performance and resilience at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
