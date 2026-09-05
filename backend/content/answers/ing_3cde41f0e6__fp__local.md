---
qid: ing_3cde41f0e6__fp__local
question: 'Explain: 2.2 Bandwidth Estimates — Design Load Balancer | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 515
total_tokens: 697
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:13:47-05:00'
sources: []
---

**Bandwidth Estimation for a Load‑Balancer**

The *fundamental problem* is to keep each backend server within its safe operating region (CPU, memory, I/O) while satisfying the incoming request rate.  
Let  

* \(R\) = total request arrival rate (req/s).  
* \(S_i\) = steady‑state service time on instance \(i\) (s/req).  
* \(C_i\) = capacity of instance \(i\) measured in *requests per second*, i.e. \(C_i = 1/S_i\).

The load balancer must route requests so that no instance’s utilization exceeds a target \(\rho_{\max}\) (often 0.7–0.8).  
Thus for each instance  

\[
\rho_i=\frac{R_i}{C_i}\le\rho_{\max}\quad\Rightarrow\quad R_i\le\rho_{\max} C_i .
\]

Summing over all \(n\) instances gives the *bandwidth requirement*:

\[
R \;\le\; \rho_{\max}\sum_{i=1}^{n}C_i .
\]

If we know or can estimate each \(C_i\), we solve for the minimal \(n\):

\[
n \ge \left\lceil \frac{R}{\rho_{\max}\,\bar C}\right\rceil ,
\quad
\bar C = \frac{1}{n}\sum_{i=1}^{n}C_i .
\]

**Why this works**  
It is an instance of *resource pooling*: the total capacity is simply the sum of individual capacities, because requests are independent. The inequality guarantees that even in steady state, queues do not grow unbounded—an application of **Little’s Law** and stability criteria for M/M/1 queues.

**Non‑obvious insight**  
Bandwidth estimation should be *dynamic*. A static \(C_i\) ignores bursty traffic or evolving workloads. By continuously measuring per‑instance latency and back‑propagating the derived \(S_i\), a load balancer can adjust \(n\) on the fly, keeping \(\rho_{\max}\) near target while minimizing over‑provisioning—essential for cost‑effective autoscaling in cloud deployments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
