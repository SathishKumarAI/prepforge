---
qid: ing_5d356c8187__faang__local
question: 'Explain: So that is remote procedure calls. So — System Design BASICS:
  Horizontal vs. Vertical Scaling'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 485
total_tokens: 729
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:20:41-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise explanation of *remote procedure calls (RPC)* and how they relate to system‑design fundamentals, specifically the choice between **horizontal** and **vertical scaling**. I’ll assume we’re talking about distributed services communicating over RPC frameworks (gRPC/Thrift) and that the audience is familiar with basic scalability concepts.

**Approach**  
1. Define RPC in plain terms.  
2. Map its characteristics to scaling strategies.  
3. Contrast horizontal vs. vertical scaling with respect to RPC‑based microservices.  
4. Highlight trade‑offs and typical use cases.

**Depth**  

| Aspect | Horizontal Scaling | Vertical Scaling |
|--------|--------------------|------------------|
| **Definition** | Adding more identical nodes (servers) behind a load balancer. | Increasing resources (CPU, RAM, I/O) on a single node. |
| **RPC Impact** | Each RPC call can be routed to any node; requires statelessness or shared state via external store. | RPCs stay local to the process; simpler but limited by the machine’s capacity. |
| **Benefits** | Fault isolation, linear performance growth, easier roll‑outs, cloud elasticity (auto‑scale). | Lower latency for intra‑process calls, simpler consistency, no network overhead. |
| **Drawbacks** | Network hop cost, consistency complexity, higher ops cost. | Bottleneck at the single machine, difficult to recover from node failure. |

**Edge Cases**  
- *Stateful services*: RPCs must handle session stickiness or external state store (Redis).  
- *Mixed workloads*: CPU‑bound vs. I/O bound services may favor different scaling axes.  
- *Cost constraints*: Vertical scaling can be cheaper initially but caps growth.

**Optimize & Communicate**  
Explain that in a modern microservice stack, horizontal scaling is the default for RPC‑driven services because it aligns with statelessness and cloud auto‑scaling. However, for high‑performance compute kernels or legacy monoliths, vertical scaling may still be viable until a refactor to stateless components is possible. End by summarizing that choosing between them hinges on workload characteristics, failure tolerance, and operational cost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
