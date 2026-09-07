---
qid: ing_0b3749a8d3__faang__local
question: 'Explain: Context — Pattern: Database per service'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 464
total_tokens: 696
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:10:22-05:00'
sources: []
---

**Clarify**  
You’re asking about the *“database per service”* pattern used in micro‑service architectures. The key question is: why give each service its own data store, and what are the trade‑offs? I’ll assume we’re dealing with a horizontally scalable, distributed system where services evolve independently.

**Approach**  
1. Describe the motivation (independent schema evolution, bounded context).  
2. Explain how isolation is achieved (private DB per service).  
3. Outline consistency and integration strategies (event sourcing, saga patterns).  
4. Touch on operational concerns (backup, migration, monitoring).

**Depth**  
- **Benefits**: Each service owns its data → schema changes don’t ripple; teams can pick the best‑fit storage (SQL vs NoSQL) per domain; failure isolation (a DB crash affects only one service).  
- **Cons**: Data duplication and eventual consistency become issues; cross‑service queries require orchestration or materialized views.  
- **Consistency**: Use *eventual consistency* via publish/subscribe; for transactional guarantees, implement *sagas* or *two‑phase commit* (rarely used due to complexity).  
- **Ops**: Automate migrations with tools like Flyway/Redgate per service; use monitoring dashboards per DB cluster.

**Edge Cases**  
- Tight coupling of services that need real‑time joins → leads to performance bottlenecks.  
- Data volume spikes in one service’s DB can starve others if sharing infrastructure.  
- Schema drift: if a service changes its model, downstream consumers must handle legacy data.

**Optimize & Communicate**  
To improve the pattern, consider *bounded‑context event sourcing* where services publish domain events; other services subscribe and maintain their own read models, reducing cross‑service reads. When narrating this to an interviewer, emphasize that “database per service” is not a silver bullet but a principled trade‑off between autonomy and consistency—exactly the kind of decision‑making FAANG teams need to master.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
