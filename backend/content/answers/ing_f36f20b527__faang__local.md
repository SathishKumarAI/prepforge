---
qid: ing_f36f20b527__faang__local
question: 'Explain: Problem — Pattern: Database per service'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 491
total_tokens: 723
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:05:25-05:00'
sources: []
---

**Clarify**  
You’re asking why a micro‑service architecture often uses *one database per service* rather than a shared schema.  I’ll assume we’re dealing with stateless services that expose REST/GRPC APIs, and the goal is to isolate data concerns for scalability, reliability, and evolution.

**Approach**  
1. List the key benefits (data encapsulation, independent scaling, fault isolation).  
2. Contrast with the drawbacks of a shared database (tight coupling, schema migrations, contention).  
3. Illustrate typical trade‑offs: consistency vs. availability, operational overhead, query complexity.  

**Depth**  
*Benefits:*  
- **Encapsulation:** Each service owns its data model; changes don’t ripple through others.  
- **Independent scaling & sharding:** Hot services can grow without affecting peers.  
- **Fault isolation:** A DB outage or corruption in one service doesn’t cascade.  
- **Polyglot persistence:** Services choose the right store (SQL, NoSQL, graph) for their domain.  

*Drawbacks:*  
- **Data duplication & consistency challenges**—requires eventual‑sync patterns (Kafka, change data capture).  
- **Cross‑service queries become expensive**; you need an API gateway or CQRS/Read models.  
- **Operational overhead:** More DB instances to monitor, backup, and patch.  

*Trade‑offs:*  
- *CAP theorem*: We favor consistency for the owning service, accepting eventual consistency across services.  
- *Latency vs. cost*: Replicating data adds latency but reduces lock contention in a monolith.

**Edge cases**  
- High read‑write traffic on a single service → shard that DB; other services still fine.  
- Tight business constraints requiring joins across domains → design a shared read model or use an event‑driven “materialized view.”  
- Regulatory data residency requirements → enforce per‑service compliance.

**Optimize & Communicate**  
Explain that the pattern isn’t rigid: start with a single DB if the domain is small, then split as services grow. Use CQRS and event sourcing to keep write models isolated while offering shared read views. Highlight that this design aligns with FAANG’s emphasis on resilience and scalability—each service can evolve independently without breaking the whole system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
