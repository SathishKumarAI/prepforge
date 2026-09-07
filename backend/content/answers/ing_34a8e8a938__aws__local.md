---
qid: ing_34a8e8a938__aws__local
question: 'Explain: Global Reservations as an assignment problem'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 510
total_tokens: 738
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:23:54-05:00'
sources: []
---

**Situation & Task**  
In my last role I led a cross‑functional team to build *Global Reservations*—a real‑time seat allocation engine for an international airline. The core challenge was solving the **assignment problem**: assigning passenger requests to seats while maximizing revenue and minimizing conflicts, all under strict latency constraints (≤ 200 ms per request).

**Action**  
1. **Modeling** – I formalized it as a bipartite graph where passengers are vertices on one side and available seats on the other. Edge weights represented expected revenue plus penalty scores for overbooking or missed connections.  
2. **Algorithm** – We used the *Hungarian algorithm* (O(n³)) but tuned it with *pruning heuristics* to drop low‑value edges, reducing runtime to ~O(n²).  
3. **AWS Architecture** –  
   - **Amazon ECS Fargate** for stateless microservices handling requests.  
   - **ElastiCache Redis** as a shared lock store to serialize seat updates and avoid race conditions.  
   - **Amazon Kinesis Data Streams** for real‑time telemetry (latency, success rates).  
4. **Scalability & Availability** – Auto‑scaling groups on ECS ensured 99.9 % uptime during peak booking windows; Redis replicated across AZs protected against single‑point failures.  
5. **Cost Control** – Spot instances for batch rebalancing jobs and reserved instances for baseline traffic cut costs by 18 %.

**Result**  
The system handled a 25 % surge in global traffic with 0.1 % booking errors, boosting revenue by **$4.2M annually** (30 % lift vs the legacy rule‑based engine).  

---

### Leadership Principles Highlighted
- **Ownership** – Took end‑to‑end responsibility for design, implementation, and post‑launch monitoring.  
- **Dive Deep** – Quantified algorithmic complexity, latency budgets, and cost models to drive data‑driven decisions.

### Bar‑raiser Takeaways
- Clear ownership signals initiative.  
- Demonstrating *dive deep* (complexity analysis + trade‑offs) shows technical depth.  
- Quantified revenue impact proves business value.  
- Acknowledging post‑launch telemetry and iterative optimization demonstrates continuous learning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
