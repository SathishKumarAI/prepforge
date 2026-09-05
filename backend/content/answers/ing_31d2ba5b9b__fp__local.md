---
qid: ing_31d2ba5b9b__fp__local
question: 'Explain: L4, L7, and GSLB load balancers, explained'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 540
total_tokens: 717
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:50:38-05:00'
sources: []
---

### From the problem to the solution

A distributed web service receives a stream of requests that must be routed to one of many servers.  
The **objective** is to minimise the *expected* response time while keeping every server’s utilisation below its capacity.  
Mathematically we wish to solve  

\[
\min_{\text{routing}} \; \mathbb E[T] \quad
\text{s.t.}\;\; U_i \le C_i,\; i=1\ldots n .
\]

The simplest routing rule—**L4 (Layer‑4) load balancing**—treats every request as a packet, only looking at the 5‑tuple (IP, port).  
It implements a *hash* or *round‑robin* policy that guarantees **statelessness** and **zero‑overhead**.  
Because it cannot see higher‑level semantics, it solves the problem by distributing traffic uniformly; this is optimal when all servers are identical and requests are homogeneous.

When application logic matters—e.g., user accounts or session affinity—**L7 (Layer‑7) load balancing** inspects HTTP headers or cookies to route to a specific server.  
Here we solve a *multi‑objective* problem: keep session stickiness while still respecting capacity constraints.  
The cost function becomes  

\[
\mathbb E[T] + \lambda\,\text{(stickiness penalty)},
\]

and the optimal policy is a weighted combination of round‑robin and sticky routing.

**GSLB (Global Server Load Balancing)** extends this to multiple geographic regions, adding latency as an explicit term.  
The objective turns into a *min‑cost flow* problem where each edge weight is a function of distance, congestion, and cost:

\[
\min \sum_{i,j} w_{ij}\,x_{ij},\quad
w_{ij}= \alpha\,d_{ij}+\beta\,C_j^{-1},
\]

with \(x_{ij}\) the fraction of traffic from region \(i\) to server \(j\).  
The non‑obvious insight: **GSLB naturally solves a multi‑criteria optimisation that simultaneously balances latency, load, and cost—something L4/L7 cannot achieve without additional layers.**  

Thus each level is not merely a feature set but an *optimization layer* that matches the granularity of information available to the routing algorithm.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
