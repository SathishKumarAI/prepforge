---
qid: ing_338e89f636__fp__local
question: 'Explain: 4.4 Putting It All Together — Design Load Balancer | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 696
total_tokens: 879
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:54:37-05:00'
sources: []
---

**Why a Load Balancer?**  
A web service receives a stream of requests that arrive at unpredictable times and may vary in size and processing cost. If every request is routed to a single server, the queue length grows linearly with traffic; latency explodes once the arrival rate exceeds the service rate (Little’s Law). A load balancer distributes work so that each backend processes only a fraction of the total demand, keeping queues short and response times bounded.

**Fundamental Design Principle – Queueing Theory + Fair‑Share Optimization**  
Let λ be the aggregate arrival rate and μ the service rate per server. With *n* identical servers, the effective service capacity is nμ. Stability requires λ < nμ. The load balancer’s objective is to minimize the maximum utilization \(U_{\max}\) across servers while respecting constraints (e.g., session affinity). This turns into a classic **min‑max allocation** problem:  
\[
\min_{x_{ij}} \max_j \frac{\sum_i x_{ij} \lambda_i}{n_j \mu}
\]
where \(x_{ij}\) indicates whether request i goes to server j. Greedy “least‑congested” routing is a near‑optimal heuristic because the objective function is convex in each \(x_{ij}\).

**Key Algorithms & Their Trade‑offs**

| Strategy | Core Idea | Latency Impact | Fault Tolerance |
|----------|-----------|----------------|-----------------|
| **Round‑Robin** | Cyclic assignment | Low variance if traffic homogeneous | No state, but blind to server health |
| **Least‑Connections** | Assign to server with fewest active requests | Adapts to bursty workloads | Requires shared counter or gossip |
| **Hash‑Based (Consistent Hashing)** | Map request key to bucket → server | Guarantees session stickiness | Handles dynamic scaling gracefully |

**Non‑Obvious Insight:**  
Most designers focus on *how* to distribute load, but overlook the **feedback loop** from backend health to routing decisions. A healthy balancer must query or learn each server’s current queue length or error rate in real time; otherwise, it may keep sending traffic to a saturated node (“hot‑spotting”). Implementing a lightweight probe (e.g., HTTP GET `/health`) and using exponential backoff for failed nodes turns the balancer into an *adaptive optimizer* rather than a static dispatcher.

**Putting It Together**

1. **Metric Collection:** Poll or push server metrics (queue depth, error rate).  
2. **Decision Engine:** Use least‑connections with a decay factor to smooth transient spikes.  
3. **Failure Handling:** Mark servers as down after consecutive probe failures; re‑route immediately.  
4. **Scaling Policy:** When average utilization > 70 % over 5 min, spin up a new instance; when < 30 % for 10 min, decommission one.

By grounding the design in queueing theory and embedding real‑time health feedback, the load balancer guarantees bounded latency, graceful scaling, and resilience—exactly what interviewers expect.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
