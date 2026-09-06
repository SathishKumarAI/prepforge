---
qid: ing_5bd2c43ab6__fp__local
question: 'Explain: to start with perfect um yeah so — Amazon System Design Interview:
  Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 388
total_tokens: 566
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:19:21-05:00'
sources: []
---

**Designing a Smart Parking‑Garage System**

The core problem is *maximising throughput while minimising customer wait* under physical constraints (space, entry/exit gates, payment).  
1. **State space & decision variables** – Each bay can be in one of two states: occupied or free. The system’s state vector \(S(t)\) evolves as cars enter and leave.  
2. **Objective function** – Minimise expected waiting time \(\mathbb{E}[W]\) while keeping occupancy below a safety threshold (e.g., 90 %). This is an *online optimisation* problem: we must decide, in real time, which bay to assign to each arriving vehicle and whether to redirect it.  
3. **Information‑theoretic view** – The only observable is the current occupancy map; the future arrival process is uncertain. We can model arrivals as a Poisson process with rate \(\lambda\). The optimal policy balances *exploitation* (using the most efficient bay) and *exploration* (learning \(\lambda\)).  
4. **Geometric simplification** – Treat each level as a 2‑D grid; shortest‑path routing to free bays reduces to a weighted bipartite matching problem, solvable in \(O(n^3)\).  
5. **Non‑obvious insight** – *Pre‑allocation* of “buffer zones” (small empty bays at the exit) dramatically cuts exit congestion even when overall occupancy is high; this is analogous to buffer stock in queuing theory.  

Thus, a scalable design uses: real‑time occupancy maps, an online matching engine, Poisson‑based arrival estimation, and strategic buffer zones—yielding minimal wait times while respecting physical limits.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
