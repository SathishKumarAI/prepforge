---
qid: ing_a71e0c8a10__fp__local
question: 'Explain: 2.1 Traffic Estimates — Design Load Balancer | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 562
total_tokens: 743
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:00:40-05:00'
sources: []
---

### Why a **traffic‑estimate** matters for a load balancer

When you build a distributed service, the load balancer is the first decision point that routes every request. If it receives more traffic than the backend can sustain, latency spikes; if it underestimates, you waste resources. Thus we need to know *how many requests per second* (RPS) and *how large each request* will be, so we can size:

1. **Pool size** – number of instances that can concurrently handle the load.
2. **Bandwidth** – network capacity needed between balancer and backends.
3. **Cache/queue depth** – to absorb bursty traffic.

### From first principles

Let \(R\) be the expected RPS, \(S\) the average request size (bytes), and \(C_i\) the CPU‑bound processing time per request on instance *i*.  
A single instance can handle at most \(\frac{1}{C_i}\) requests per second. If we deploy \(N\) identical instances behind a balancer, the theoretical capacity is

\[
\text{Capacity}(N)=N \times \frac{1}{C_{\max}},
\]

where \(C_{\max}\) is the slowest instance (the bottleneck).  
The *traffic‑estimate* must satisfy:

\[
R \leq \text{Capacity}(N).
\]

Thus we solve for \(N\):

\[
N \geq R \times C_{\max}.
\]

Similarly, bandwidth requirement follows from \(B = R \times S\).

### Deeper insight

This is an instance of **queueing theory**: a load balancer behaves like a dispatcher in an M/M/1 queue. The key non‑obvious fact many overlook is that *variance* matters as much as the mean. Even if \(R=1000\) RPS on average, a 99th percentile burst of \(3000\) RPS can overwhelm a naïvely sized pool. Therefore you should estimate not only the mean but also the **tail distribution** (e.g., using historical logs or synthetic load tests).  

### Bottom line

A traffic estimate is simply an application‑of‑queueing principle: measure average processing time, request size, and burstiness; then compute the minimal number of instances and bandwidth to keep the system stable. Neglecting tail behavior is the most common design flaw in real deployments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
