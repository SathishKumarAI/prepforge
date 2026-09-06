---
qid: ing_482d7ccd40__fp__local
question: 'Explain: Request Volume — Design Load Balancer | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 430
total_tokens: 607
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:38:57-05:00'
sources: []
---

**Request Volume – the “traffic pressure” a load‑balancer must absorb**

When we ask *“how many requests can this system handle?”* we’re really asking how the **arrival process** (Poisson, bursty, diurnal) maps onto the **service capacity** of the backend pool.  
The fundamental equation is

\[
\rho = \frac{\lambda}{C}\quad\text{with}\quad C=\sum_{i=1}^{n} c_i ,
\]

where  

* \( \lambda \) – mean request rate (requests/second),  
* \( c_i \) – per‑instance service rate,  
* \( n \) – number of instances behind the balancer.

If \( \rho < 1 \) each request finds a free server; if \( \rho \ge 1 \) queues grow exponentially (Little’s Law).  

**Why this must hold**

1. **Work‑conservation:** The total work arriving per second cannot exceed what can be processed, else backlog grows unboundedly.  
2. **Stability criterion of queuing theory:** In an M/M/1 queue, the expected waiting time is \( \frac{1}{c - \lambda} \); as \( \rho\to 1 \), delay blows up.  

**Non‑obvious insight**

Most designs focus on *capacity* (number of instances) but ignore **arrival variability**. A balanced system with \( \rho = 0.8 \) under a Poisson load can still fail during bursts if the variance is high. Introducing *traffic shaping* or *adaptive scaling* that monitors not just mean but also the second moment of \( \lambda \) yields far better resilience than simply adding more instances.

In short, request volume is a queuing‑theoretic pressure; keeping \( \rho < 1 \) while accounting for burstiness guarantees low latency and high availability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
