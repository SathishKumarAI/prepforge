---
qid: ing_34e6567de5__think__local
question: 'Explain: High Availability Patterns — Availability | System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 570
total_tokens: 758
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:31:02-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
   - Confirm we’re talking about *software‑centric* HA (not just data center redundancy).  
   - Assume a typical web‑app stack: stateless services, replicated DBs, and cloud infra.  
   - Note that “availability” here means *service uptime*, not performance.

**2️⃣ Adopt a mental model: the 3‑layer architecture**  
   - **Front‑end layer** (load balancers, CDNs) → distributes traffic.  
   - **Application layer** (stateless microservices) → can spin up new instances instantly.  
   - **Data layer** (replicated databases, distributed caches) → keeps data accessible even if a node dies.

**3️⃣ Reason step‑by‑step through common patterns**  

| Pattern | How it works | When to use |
|---------|--------------|-------------|
| *Active‑Active* | Multiple identical nodes in different AZs/regions; traffic split via LB. | High throughput, zero single point of failure. |
| *Active‑Standby* | One live node + hot standby that takes over on failure (via health checks). | When stateful services need quick failover but can tolerate a small lag. |
| *Circuit Breaker* | Detects failing downstream calls and short‑circuits them, returning fallback responses. | Prevent cascading failures in microservice meshes. |
| *Graceful Degradation* | Disable non‑critical features when resources are low, keeping core service alive. | In budget or capacity constrained scenarios. |

**4️⃣ Watch for common traps**  
   - **Ignoring statefulness**: Replicating a stateless pattern on a stateful DB without proper sync leads to data loss.  
   - **Single LB point**: A single load balancer can become the HA weak spot if not itself redundant.  
   - **Over‑optimistic failover timing**: Assuming instant failover ignores DNS propagation or session stickiness delays.

**5️⃣ Sanity‑check & articulate clearly**  
   - Verify that each layer has at least *two* independent instances in separate failure domains.  
   - Confirm health‑checks are *active* (not passive) and propagate status to the LB.  
   - When explaining, use a concrete example: “Our API runs 4 stateless pods behind an AWS ALB spread across two AZs; if one pod dies, the ALB redirects traffic instantly while our Redis cluster uses automatic failover.”  

By walking through these steps—clarify, model, pattern‑match, avoid pitfalls, and validate—you’ll produce a robust, comprehensible HA design explanation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
