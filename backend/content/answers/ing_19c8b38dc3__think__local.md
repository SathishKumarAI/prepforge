---
qid: ing_19c8b38dc3__think__local
question: 'Explain: Load Balancer — Spotify System Design - by Neo Kim and Hayk'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 404
total_tokens: 599
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T04:26:31-05:00'
sources: []
---

**1. Clarify the scope & assumptions**  
   *What exactly is “Load Balancer” in this context?* Assume it refers to the component that distributes traffic across Spotify’s micro‑service instances (e.g., user‑session, music‑streaming). Note any constraints: high availability, low latency, and scale‑up/down.

**2. Adopt a system‑design mental model**  
   *Layered architecture:* client → edge load balancer → regional/zone balancers → application servers.  
   *Key properties to evaluate:* routing strategy (round‑robin, least‑connections, consistent hashing), health‑checks, session stickiness, failover.

**3. Step‑by‑step reasoning**  
   1. Identify traffic patterns: bursty user logins vs steady streaming.  
   2. Choose a suitable load‑balancing algorithm per pattern.  
   3. Design health‑check probes (HTTP/HTTPS or custom metrics).  
   4. Plan for graceful draining during scale‑down.  
   5. Consider caching of routing decisions to reduce latency.

**4. Common traps to avoid**  
   - *Assuming a single global balancer:* leads to bottlenecks and a single point of failure.  
   - *Ignoring sticky sessions in stateless services:* can cause cache misses or data inconsistency.  
   - *Over‑engineering with too many layers:* increases complexity without proportional benefit.

**5. Sanity‑check & verbalize**  
   • Verify that the design meets SLAs: < 50 ms latency, ≥99.999% uptime.  
   • Explain how the balancer reacts to a node failure (e.g., automatic health‑check removal).  
   • Re‑iterate the trade‑offs between consistency and availability in routing decisions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
