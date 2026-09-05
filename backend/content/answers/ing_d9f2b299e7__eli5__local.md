---
qid: ing_d9f2b299e7__eli5__local
question: 'Explain: Pattern 2: Active-Active — Design Load Balancer | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 257
total_tokens: 427
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:19:37-05:00'
sources: []
---

**Pattern 2 – “Active‑Active” (Load‑Balancer Style)**  
Think of a busy highway that splits into two lanes, each lane having its own traffic light. When cars arrive, the lights let a car through from either lane so the road stays clear and fast. In computing this is an *active‑active* setup: several servers are running at the same time (the “lanes”), and a *load balancer* (the traffic‑light controller) decides which server will handle each user request.  

**Key terms:**  
- **Server** – a computer that runs your app.  
- **Load balancer** – software or hardware that distributes incoming requests among servers, keeping the load even.  
- **Active‑active** – all listed servers are on and ready; no “stand‑by” server is idle.

Because every request can go to any active server, the system stays fast, can absorb traffic spikes, and if one server fails, the others keep serving users with no interruption. This pattern powers many popular web services that need instant responsiveness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
