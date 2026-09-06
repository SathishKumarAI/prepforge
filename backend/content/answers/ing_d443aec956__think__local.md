---
qid: ing_d443aec956__think__local
question: 'Explain: Load Balancing — Reliability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 540
total_tokens: 729
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T14:57:14-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
   - *What is “load balancing” in this context?* Assume a typical stateless web‑service cluster behind a reverse proxy or DNS round‑robin.  
   - *Reliability focus*: we care about fail‑over, graceful degradation, and minimal downtime, not just throughput.  
   - *Audience level*: design interviewers expect you to discuss trade‑offs, metrics, and concrete patterns.

**2️⃣ Pick a mental model / framework**  
   - Use the **CAPACITY–LATENCY–RELIABILITY triangle**: how each dimension shifts as we add load balancers.  
   - Layer the architecture: *client → LB (layer 1) → application nodes (layer 2)*.  
   - Map reliability concerns to each layer (e.g., health checks, retries, circuit breakers).

**3️⃣ Step‑by‑step reasoning**  
   1. Identify failure modes: node crash, network partition, overload.  
   2. Choose LB strategy: round‑robin, least‑connections, weighted hashing, or consistent hashing for sticky sessions.  
   3. Add health‑check probes (TCP/HTTP) and graceful draining to avoid routing traffic to unhealthy nodes.  
   4. Implement retries with exponential backoff at the client or proxy level; optionally use a circuit breaker to cut off failing services.  
   5. Monitor key metrics: request latency, error rate, node availability; feed into auto‑scaling loops.

**4️⃣ Common traps & how to avoid them**  
   - *Assuming LB is “just a router”*: neglect stateful sessions or cache locality.  
   - *Over‑retrying*: can amplify traffic and mask real failures.  
   - *Single point of failure at the LB itself*: use multiple LBs with DNS round‑robin or active‑active HA setups.  

**5️⃣ Sanity‑check & verbalize**  
   - Verify that every failure mode is covered by a mitigation (health checks, retries, circuit breakers).  
   - Quantify impact: e.g., “If one node dies, the LB will redirect traffic within X ms and keep error rate below Y%.”  
   - End with a brief recap: “We use health‑checked round‑robin LB + graceful draining + client‑side retries to achieve 99.9% availability under sudden node failures.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
