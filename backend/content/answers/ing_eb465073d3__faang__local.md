---
qid: ing_eb465073d3__faang__local
question: 'Explain: Solution — Pattern: Database per service'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 408
total_tokens: 640
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:47:04-05:00'
sources: []
---

**Clarify**  
The interview asks for a *pattern* that recommends using a separate database for each micro‑service in an ML‑driven architecture. I’ll assume: (1) services are independently deployable, (2) data ownership is clear, and (3) latency/performance matters.

**Approach**  
Explain the rationale behind “Database per Service”—data encapsulation, scalability, fault isolation—and then map it to ML workflows (feature stores, model training, inference). Outline benefits, trade‑offs, and typical implementation steps.

**Depth**  
- **Encapsulation**: Each service owns its schema; changes don’t ripple across the stack.  
- **Scalability**: Scale storage/compute per workload (e.g., hot feature store vs. cold model registry).  
- **Resilience**: A failure in one DB doesn’t cascade to others, improving overall system availability.  
- **ML‑specific**: Feature stores can be tuned for read‑heavy inference workloads; training pipelines can use dedicated data warehouses without impacting serving latency.  
- **Implementation**: Use a lightweight SQL/NoSQL store per service (PostgreSQL, DynamoDB), expose a thin API layer, and leverage event‑driven replication for cross‑service joins when necessary.

**Edge Cases**  
- Cross‑cutting analytics that need global data require an additional shared warehouse.  
- Consistency: eventual consistency may break downstream ML pipelines if not handled.  
- Operational overhead of managing many DBs—requires automation tooling.

**Optimize & Communicate**  
Highlight cost trade‑offs (more DB instances vs. reduced contention) and suggest monitoring dashboards per service to surface performance issues early. Conclude that “Database per Service” is a proven pattern for ML systems needing low latency, high availability, and independent scaling while accepting the added operational complexity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
