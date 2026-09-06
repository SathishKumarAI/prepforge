---
qid: ing_b9dd9039f9__fp__local
question: 'Explain: VI. Processes — The 12-Factor App'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 361
total_tokens: 533
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:39:00-05:00'
sources: []
---

### Why the 12‑Factor “VI. Processes” rule matters

At its core, a web service is **stateless**: each request must be processed independently of any previous one.  
If an application stores state in memory or on disk, that state can become corrupted when the process dies, gets restarted by a load balancer, or scales horizontally.  
Thus we treat every deployment unit as a **process**—a single, isolated execution environment.

1. **Immutability** – A new build is deployed only by launching fresh processes; old ones are killed. This guarantees that any code or configuration changes take effect immediately without “hot‑patch” inconsistencies.  
2. **Isolation** – Processes do not share mutable state; they communicate via stateless channels (HTTP, queues). This aligns with the *principle of least privilege* in security and reduces race conditions—essentially a direct application of the *law of large numbers*: more independent copies average out noise.  
3. **Horizontal scaling** – Adding or removing processes is trivial: the orchestrator just spins up or terminates containers. Because each process is stateless, any instance can handle any request, enabling true elasticity.

#### Non‑obvious insight
Treating a deployment as a *set of immutable processes* turns the whole system into a *stateless hash table*.  
Hash tables have O(1) lookup; similarly, with stateless processes you get O(1) routing to an instance. This perspective explains why the 12‑factor rule is not just a best practice but a mathematical guarantee of scalability and resilience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
