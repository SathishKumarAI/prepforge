---
qid: ing_9af107b466__think__local
question: 'Explain: Active-Active policy — Availabilitypatterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 187
output_tokens: 379
total_tokens: 566
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T11:19:27-05:00'
sources: []
---

**1. Clarify the request & assumptions**  
- Confirm that “Active‑Active policy” refers to a high‑availability design where *two* or more nodes are simultaneously online and can handle traffic.  
- Assume the audience knows basic HA concepts (failover, redundancy) but may not know specific patterns.

**2. Choose a mental framework**  
- Use the classic **Availability Pattern taxonomy**: *Active‑Passive*, *Active‑Active*, *Multi‑Region*.  
- Map each pattern to its key characteristics (load balancing, failover latency, data consistency).

**3. Step‑by‑step reasoning**  
a) Define “active” vs “passive.”  
b) Explain why Active‑Active eliminates single‑point failure.  
c) Discuss trade‑offs: increased complexity, need for state synchronization, possible split‑brain scenarios.  
d) Provide typical use cases (web front‑ends, databases with read/write replicas).  
e) Mention supporting technologies (load balancers, clustering software, distributed consensus).

**4. Common traps to avoid**  
- Mixing up *active‑active* with *active‑passive*.  
- Overlooking the cost of synchronizing state or dealing with eventual consistency.  
- Ignoring split‑brain prevention mechanisms.

**5. Sanity‑check & communicate**  
- Rephrase the core idea in one sentence: “Active‑Active keeps all nodes live, so traffic is routed to any healthy node and failure of one doesn’t drop service.”  
- Use a simple diagram or example (e.g., two web servers behind a load balancer) to illustrate.  

This structure ensures clarity, covers benefits & pitfalls, and lets the candidate apply the same pattern‑analysis approach elsewhere.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
