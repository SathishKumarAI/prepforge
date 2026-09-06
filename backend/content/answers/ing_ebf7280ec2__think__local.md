---
qid: ing_ebf7280ec2__think__local
question: 'Explain: How it provides high availability: — Availability | System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 446
total_tokens: 637
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T16:36:25-05:00'
sources: []
---

**1️⃣ Clarify the scope and assumptions**  
   * Ask whether “high availability” refers to uptime percentages (e.g., 99.9 %) or to fault‑tolerance in a distributed AI service.  
   * Assume the system is cloud‑native, uses microservices, and can scale horizontally.  

**2️⃣ Adopt a layered mental model**  
   * **Infrastructure layer:** load balancers, auto‑scaling groups, multi‑AZ deployments.  
   * **Service layer:** stateless API endpoints, circuit breakers, retries.  
   * **Data layer:** replicated databases or distributed file stores with eventual consistency.  

**3️⃣ Step‑by‑step reasoning**  
   1. **Redundancy:** place identical instances in multiple availability zones; traffic is split by a global load balancer.  
   2. **Health checks & graceful degradation:** unhealthy nodes are removed automatically; fallback mechanisms (e.g., cached model predictions) keep the service alive.  
   3. **Auto‑scaling & self‑healing:** metrics trigger new instances when load spikes or failures occur, ensuring capacity never drops below a safe threshold.  
   4. **Statelessness + external state stores:** stateless services can be restarted without loss of session data; state is kept in highly available storage (e.g., DynamoDB, Cassandra).  

**4️⃣ Common traps to avoid**  
   * Over‑reliance on single‑point load balancers—use global routing with failover.  
   * Ignoring data consistency needs; eventual consistency may not suit real‑time AI inference.  
   * Forgetting to monitor “latency” as a key availability metric, not just uptime.

**5️⃣ Sanity‑check & communicate**  
   * Verify that every failure path (node crash, AZ outage, database lag) is covered by redundancy or graceful fallback.  
   * Present the design in layers: *infrastructure → service → data*, emphasizing how each layer contributes to overall uptime.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
