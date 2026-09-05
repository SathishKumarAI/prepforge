---
qid: ing_d82df3e1eb__star__local
question: 'Explain: Cons — Availability | System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 329
total_tokens: 562
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:41:21-05:00'
sources: []
---

**Situation**  
When my team launched a real‑time inventory dashboard for an e‑commerce client, the initial architecture was designed to be highly available with active‑active clusters across three regions. The load balancer and DNS failover made it look perfect, but during a 24‑hour stress test the latency spiked to 350 ms and some requests timed out.

**Task**  
I had to reduce the latency while keeping the system resilient enough for 99.95% uptime, without blowing the budget or adding a full second data center.

**Action**  
First I introduced regional read replicas with local caching (Redis) so that most reads served from the nearest region. Then I switched to an eventual consistency model for stock updates: writes went to a write‑through cache and were asynchronously replicated to the primary DB using Kafka, which cut write latency by 60 %. Finally, I added circuit breakers in the microservices layer to avoid cascading failures when a region was briefly unavailable.

**Result**  
Latency dropped from 350 ms to 80 ms under peak load, and uptime stayed at 99.96% for the first month post‑deployment. The trade‑off of eventual consistency was acceptable because the business could tolerate a few seconds delay in inventory visibility. I learned that availability can be achieved efficiently by combining caching, asynchronous replication, and smart failure handling rather than relying solely on synchronous, fully replicated clusters.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
