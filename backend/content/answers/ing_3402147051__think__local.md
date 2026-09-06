---
qid: ing_3402147051__think__local
question: What is load balancing? — Grokking-System-Design-Interview-Quizzes/Quizzes/Load
  Balancer.org at master \u00b7 ema2159/Grokking-System-Design-Interview-Quizzes \u00b7
  GitHub
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 537
total_tokens: 769
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T05:52:46-05:00'
sources: []
---

### 1️⃣ Clarify & Assumptions  
* **What “load balancing” means here?**  
  - In the context of system‑design interviews, it’s usually about distributing incoming traffic (HTTP requests, connections, etc.) across multiple backend servers to avoid overloading any single node.  
* **Assume** we’re dealing with stateless HTTP services in a data‑center or cloud environment.  

### 2️⃣ Mental Model / Framework  
Use the classic “Load Balancer → Backend Pool” diagram:  
1. Client ↔️ Load Balancer (LB)  
2. LB ↔️ Set of Servers (Pool)  
Key dimensions to think about:  
* **Routing algorithm** (Round‑Robin, Least‑Connections, IP Hash, etc.)  
* **Health checks & failover**  
* **Session persistence (sticky sessions)**  
* **Scalability / elasticity**  
* **Performance metrics** (latency, throughput)  

### 3️⃣ Step‑by‑Step Reasoning  
1. **Define the problem:** Clients hit a single endpoint; we need to spread load evenly so no server becomes a bottleneck.  
2. **Choose routing strategy:** Start with Round‑Robin for simplicity → consider Least‑Connections if traffic is bursty.  
3. **Add health checks:** Periodically ping each backend; remove from pool if unhealthy.  
4. **Handle session stickiness:** If stateful, use cookie or IP hash to keep a client on the same server.  
5. **Consider scaling:** Auto‑scale the backend pool based on CPU/memory thresholds → LB automatically includes new nodes once health checks pass.  

### 4️⃣ Common Traps to Avoid  
* Assuming all requests are stateless – forget sticky sessions.  
* Ignoring failure scenarios: a single unhealthy node can bring down traffic if not properly removed.  
* Over‑optimizing routing at the expense of simplicity; start simple, iterate.  

### 5️⃣ Sanity Check & Communicate Out Loud  
* **Ask** “Does this meet latency goals?” → If yes, good.  
* **Explain** to interviewer: “We’ll use a Round‑Robin LB with health checks and sticky sessions for stateful traffic. Auto‑scaling will add nodes as CPU > 70%.”  
* **Verify** that the explanation covers routing logic, failover, scaling, and performance.  

By following this checklist you can quickly articulate a robust load‑balancing strategy in any system‑design interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
