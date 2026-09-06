---
qid: ing_8d7d4417e7__think__local
question: 'Explain: Clarifying Requirements — Design Load Balancer | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 197
output_tokens: 517
total_tokens: 714
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T10:24:34-05:00'
sources: []
---

**1️⃣ Clarify the Scope & Constraints**  
- *What is the load balancer for?* (web, API, micro‑services?)  
- *Traffic profile:* peak QPS, latency tolerance, data center locations.  
- *Reliability needs:* failover, redundancy, health checks.  
- *Deployment model:* on‑prem vs cloud, static IPs vs DNS round‑robin.  
State any assumptions (e.g., “Assume a single datacenter, no TLS termination”).

**2️⃣ Adopt a System‑Design Framework**  
Use the classic **(Context → Requirements → Design → Trade‑offs)** flow.  
- Context: users hit an entry point; requests must be routed efficiently.  
- Functional reqs (routing logic, stickiness, health checks).  
- Non‑functional: scalability, cost, observability.

**3️⃣ Build a Step‑by‑Step Reasoning Path**  
1. **Define the routing algorithm** (round‑robin, least‑connections, consistent hashing).  
2. **Decide on state management** for stickiness (cookies vs IP hash).  
3. **Health check mechanism**: passive vs active probes, thresholds.  
4. **Scaling strategy**: horizontal scaling of LB nodes, use of DNS or a dedicated front‑end like Nginx/HAProxy.  
5. **Failover & redundancy**: dual LBs behind an external DNS or cloud load balancer.  
6. **Monitoring & metrics**: latency, error rates, queue lengths.

**4️⃣ Avoid Common Pitfalls**  
- *Over‑engineering*: don’t add fancy features (e.g., dynamic routing) before proving basic reliability.  
- *Ignoring observability*: a well‑designed LB is useless if you can’t see why it’s failing.  
- *Underestimating state*: stickiness without proper eviction logic causes uneven load.

**5️⃣ Sanity‑Check & Communicate Clearly**  
- Run a mental “what if” test: simulate 10× traffic, node failure, or sudden latency spikes.  
- Summarize the design in bullet points: components, data flow, key decisions.  
- End with trade‑offs (e.g., round‑robin is simple but may not handle varying instance capacities).  

This structured thought process keeps your answer focused, covers critical aspects, and demonstrates a methodical approach to system design interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
