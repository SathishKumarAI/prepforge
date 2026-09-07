---
qid: ing_924a857303__faang__local
question: 'Explain: Example — Pattern: Database per service'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 437
total_tokens: 669
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:24:42-05:00'
sources: []
---

**Clarify**  
You’re asking why a *pattern* called “Database Per Service” is useful in a micro‑service architecture, and what trade‑offs it introduces. I’ll assume we’re dealing with stateless services that need persistent state, and the audience wants an architectural justification rather than code.

**Approach**  
1. Define the pattern.  
2. Explain its benefits (independence, scalability, fault isolation).  
3. Highlight downsides (data duplication, consistency challenges).  
4. Offer mitigation strategies (CQRS, event sourcing).  

**Depth**  
*Definition*: Each micro‑service owns a dedicated database schema or instance; services never share tables. This gives each service full control over its data model and lifecycle.  
*Benefits*:  
- **Loose coupling** – no direct SQL dependencies between services.  
- **Independent scaling** – can shard or replicate per‑service DBs as needed.  
- **Fault isolation** – a DB crash affects only one service.  
- **Polyglot persistence** – each service chooses the best DB type (SQL, NoSQL).  
*Drawbacks*:  
- **Data duplication** – common entities may be replicated across services.  
- **Consistency** – no ACID guarantees across services; requires eventual consistency patterns.  
- **Operational overhead** – more databases to monitor and backup.  

**Edge cases**  
- *Read‑heavy analytics*: a service might need global joins that are expensive if data is siloed.  
- *Cross‑cutting concerns*: user identity or audit logs become duplicated unless centralized.

**Optimize & Communicate**  
To mitigate duplication, use **CQRS + event sourcing**: services publish events to an event bus; downstream services update read models locally. This keeps writes isolated but lets reads be aggregated without cross‑DB joins. Explain that while the pattern increases operational complexity, it scales better for large teams and continuous delivery pipelines typical at FAANG companies.  

*Word count*: ~210 words.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
