---
qid: ing_93cd948877__fp__local
question: 'Explain: Scale Estimation — Design Notification Service | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 487
total_tokens: 664
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:19:28-05:00'
sources: []
---

**Scale Estimation – Notification Service**

The core problem is to guarantee *latency* \(L\) and *throughput* \(\lambda\) while keeping the system cost \(C\) bounded.  
Let a user’s request generate an event that must be delivered to \(k\) devices (push, email, SMS). Each delivery requires a round‑trip to an external provider with mean service time \(t_p\) and variance \(\sigma^2_p\).  

1. **Workload model** – The arrival of user events is Poisson with rate \(\lambda_u\); the total number of deliveries per second is  
   \[
   \lambda = k\,\lambda_u .
   \]
2. **Queueing bound** – Treat each provider as an M/M/1 queue. For a required 99th‑percentile latency \(L_{0.99}\), the server utilization must satisfy  
   \[
   \rho < 1 - \frac{t_p}{L_{0.99}}\quad\Longrightarrow\quad
   N_{\text{servers}} > \frac{\lambda\,t_p}{1-\rho} .
   \]
3. **Elasticity** – Because \(\lambda\) scales linearly with active users, auto‑scaling policies can be derived analytically:  
   \[
   N(t)=\left\lceil \frac{k\,\lambda_u(t)\,t_p}{1-\rho_{\text{target}}}\right\rceil .
   \]
4. **Cost** – With on‑demand instances priced \(c\) per hour, the expected cost is  
   \[
   C = c \times N_{\text{avg}}\times 24.
   \]

*Non‑obvious insight*: **Batching across users reduces \(k\) effectively.** By aggregating identical notifications (e.g., “friend request” to many friends), the service can send a single multicast packet, shrinking \(\lambda\) and thus \(N_{\text{servers}}\). This geometric reduction in arrivals is often overlooked but yields linear cost savings while preserving per‑user latency guarantees.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
