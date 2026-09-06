---
qid: ing_ce39fb169d__fp__local
question: 'Explain: Routing tiers — Llm Gateway And Serving Platform'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 382
total_tokens: 552
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:19:02-05:00'
sources: []
---

**Routing tiers for large‑scale LLM inference**

The fundamental problem is *how to deliver a model’s predictions to millions of requests with minimal cost and latency*.  
1. **LLM Gateway (front‑end tier)**  
   - Acts as the *decision engine*: given a user query, it selects which model or sub‑model best fits the task (e.g., a fine‑tuned chat head vs. a general encoder).  
   - It implements *policy optimization*: the routing rule can be framed as minimizing expected latency + cost subject to accuracy constraints.  
   - By treating each request as an instance of a *bandit problem*, the gateway learns which path yields the best trade‑off, continually updating its policy.

2. **Serving Platform (back‑end tier)**  
   - Hosts one or many model replicas, often across heterogeneous hardware (GPU, TPU, CPU).  
   - Uses *probabilistic load balancing* to spread queries so that each instance’s queue length follows a predictable distribution (e.g., M/M/1), guaranteeing bounded tail latency.  
   - Implements *resource‑aware scaling*: it spins up or down replicas based on forecasted demand, leveraging convex optimization to minimize total energy consumption while respecting SLAs.

**Non‑obvious insight:**  
The gateway’s routing policy can be expressed as a *continuous relaxation* of the discrete assignment problem, allowing gradient‑based learning. This turns an inherently combinatorial decision into a smooth optimization that converges faster and exploits richer contextual signals (e.g., user embeddings) than simple threshold rules.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
