---
qid: ing_f0e3c3ac72__faang__local
question: 'Explain: Excluded — Highavailability'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 550
total_tokens: 779
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:59:36-05:00'
sources: []
---

**Clarify**  
The interview asks you to explain *why* certain AI deployments deliberately avoid a **high‑availability (HA)** architecture—i.e., they run as single‑point services rather than replicated, load‑balanced clusters. I’ll assume we’re talking about on‑prem or edge‑based inference workloads where latency and cost are critical.

**Approach**  
1. Identify the trade‑offs of HA (complexity, cost, consistency).  
2. Map those to AI use cases: batch vs real‑time, model size, data sensitivity.  
3. Illustrate with concrete scenarios (e.g., a single‑model inference API on a mobile device vs a cloud‑based recommendation engine).

**Depth**  
- **Cost & Resource Footprint**: HA requires duplicate compute nodes and networking; for small‑scale or edge inference this is prohibitive.  
- **Latency Sensitivity**: A replicated setup introduces inter‑node hops, which can add 1–5 ms—critical for real‑time vision on drones.  
- **Consistency & Model Versioning**: Maintaining identical weights across replicas demands heavy sync traffic; a single node eliminates stale‑weights bugs.  
- **Security & Compliance**: Fewer nodes mean fewer attack surfaces and simpler audit trails, important in regulated domains (healthcare, finance).  
- **Operational Complexity**: HA demands health checks, failover logic, and state replication—adding maintenance overhead that may outweigh the marginal uptime gains for short‑lived or non‑mission‑critical services.

**Edge Cases**  
- A model serving millions of requests per second *does* benefit from HA; here we’d test sharding vs. a single node’s saturation point.  
- If data is highly sensitive, even a single node must be hardened (e.g., using TPM), so the decision hinges on compliance requirements.

**Optimize & Communicate**  
I would emphasize that “excluded HA” isn’t a blanket rule; it’s a design choice based on *budget, latency budget, and risk tolerance*. In my narrative I’d present a quick decision matrix:  
| Factor | Single‑node | HA |
|--------|-------------|----|
| Cost   | Low         | High |
| Latency | <2 ms      | +1–5 ms |
| Consistency | Guaranteed | Requires sync |
| Security | Fewer surfaces | More complex |

By walking through this matrix, I demonstrate structured thinking, clear communication, and a deep grasp of both AI workloads and systems engineering.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
