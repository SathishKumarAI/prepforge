---
qid: ing_3cde41f0e6__think__local
question: 'Explain: 2.2 Bandwidth Estimates — Design Load Balancer | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 201
output_tokens: 481
total_tokens: 682
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:48:40-05:00'
sources: []
---

**1️⃣ Clarify the ask & assumptions**  
   - *What* exactly is “Bandwidth Estimates” in a load‑balancer context?  
   - Assume we’re designing a horizontal‑scale web service (e.g., HTTP API) that needs to route traffic evenly while respecting per‑node bandwidth limits.  
   - Assume metrics are available via monitoring (bytes/sec, packet count).  

**2️⃣ Mental model / framework**  
   - Treat the load balancer as a *bandwidth‑aware scheduler*: each backend has a capacity weight = `max_bandwidth – current_usage`.  
   - Use an online algorithm that updates weights every interval (e.g., 1 s) and selects nodes probabilistically or via weighted round‑robin.  

**3️⃣ Step‑by‑step reasoning**  
   1. Gather per‑node bandwidth usage (`U_i`) from telemetry.  
   2. Compute residual capacity `C_i = B_i – U_i`.  
   3. Convert capacities to weights `w_i = max(C_i, ε)` (ε prevents zero).  
   4. Normalize weights and use them in the routing decision (e.g., pick node with probability ∝ `w_i`).  
   5. Periodically refresh; if a node’s bandwidth is saturated, its weight drops to near zero, reducing traffic sent there.  

**4️⃣ Common traps to avoid**  
   - *Ignoring latency*: bandwidth alone may overload a node that is already slow.  
   - *Stale metrics*: using delayed data can cause oscillations.  
   - *Over‑aggressive throttling*: setting ε too high keeps underutilized nodes idle.  

**5️⃣ Sanity‑check & verbalize**  
   - Verify edge cases: all nodes saturated → fallback to round‑robin or error; one node free → it absorbs traffic.  
   - Explain the algorithm in plain terms: “We continuously ask each server how busy it is, then give more of the incoming requests to the less busy ones.”  
   - Highlight trade‑offs: simplicity vs. optimality, update frequency vs. overhead.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
