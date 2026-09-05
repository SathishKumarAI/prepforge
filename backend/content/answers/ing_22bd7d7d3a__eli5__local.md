---
qid: ing_22bd7d7d3a__eli5__local
question: 'Explain: High-Level Design — Design Load Balancer | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 243
total_tokens: 409
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:31:24-05:00'
sources: []
---

Think of a busy coffee shop that serves many customers (incoming requests). The **load balancer** is the friendly barista who decides which espresso machine each customer should use so nobody waits too long.  

*High‑level design steps:*  
1. **Identify the traffic pattern** – how many orders come in per minute?  
2. **Choose a balancing rule** – “round‑robin” (evenly spread), “least‑connections” (pick the machine with the fewest active orders), or “resource‑aware” (send the heaviest orders to the strongest machines).  
3. **Add health checks** – if an espresso machine breaks, the barista stops sending orders there until it’s fixed.  
4. **Scale out** – when demand spikes, add more machines and let the barista route new customers to them automatically.  

By treating the load balancer like a smart barista, you keep all parts of your machine‑learning service humming smoothly without any one component getting overloaded.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
