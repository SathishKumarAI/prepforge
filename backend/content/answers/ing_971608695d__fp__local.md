---
qid: ing_971608695d__fp__local
question: 'Explain: Least response time method — What is Load Balancing?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 414
total_tokens: 587
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:26:51-05:00'
sources: []
---

**Load balancing by the “least‑response‑time” rule**

When a cluster of servers receives requests, each request must be routed so that no single server becomes a bottleneck.  
The *load* on a machine is not just the number of queued jobs; it is the **expected response time** \(T_i\) that a new request would incur if sent to node \(i\).  

---

### Why expected response time matters

1. **Queuing theory**: For an M/M/1 queue, \(T_i = \frac{1}{\mu_i-\lambda_i}\), where \(\mu_i\) is the service rate and \(\lambda_i\) the current arrival rate.  
2. **Optimization principle**: Minimising the *maximum* expected response time across all nodes minimises the overall latency (min‑max fairness).  

Thus, to achieve optimal throughput, each incoming job should be dispatched to the node with the smallest \(T_i\).

---

### The algorithm

1. Every server periodically reports its current queue length and service speed.  
2. A dispatcher computes \(T_i = \frac{L_i+1}{\mu_i}\) (adding 1 for the new request).  
3. The job is sent to the node with minimal \(T_i\).

---

### Non‑obvious insight

Because \(T_i\) depends on *both* queue length and service speed, a fast server with a slightly longer queue can still beat a slower but emptier one. Therefore, naïve “least‑queue” policies can be suboptimal when servers differ in capability—exactly what the least‑response‑time rule captures.

---

**In short:** Least‑response‑time load balancing routes each request to the server that would finish it quickest, derived from queuing theory and min‑max latency optimisation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
