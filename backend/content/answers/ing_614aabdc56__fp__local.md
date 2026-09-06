---
qid: ing_614aabdc56__fp__local
question: 'Explain: Back-of-the-Envelope Estimation — Design Load Balancer | System
  Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 472
total_tokens: 654
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:32:14-05:00'
sources: []
---

**Back‑of‑the‑Envelope Load‑Balancer Design**

The core problem is *scaling request traffic* while keeping latency low and avoiding hotspots.  
We start by bounding the **maximum throughput** of a single server:  

```
T₁ = (CPU cycles per second) / (cycles per request)
```

If we know the target **service‑level objective**—say 95 % of requests must finish < 200 ms—and that traffic follows a Poisson process, the *probability* of exceeding this latency is driven by the tail of the sum of independent service times. By treating each server as an M/M/1 queue, we can write the average response time:

```
E[R] = 1 / (µ – λ)
```

where µ = T₁ and λ = arrival rate per server. Rearranging gives us the **minimum number of servers** needed to keep E[R] below 200 ms:

```
N_min ≈ ceil( λ_total / (µ – 1/E[R_target]) )
```

The *load balancer* itself must have a **capacity** at least equal to the aggregate incoming rate, plus a safety margin for bursts. If we assume each LB instance can handle L requests/sec, then:

```
LB_instances ≈ ceil( λ_total / L ) + 1   // one spare
```

A key, often overlooked insight: **the load balancer’s own latency is a function of the number of downstream servers**—each request must be routed, possibly via consistent hashing or round‑robin. Therefore, we should *size the LB* not just for throughput but also to keep its routing overhead negligible compared to server processing time; otherwise the whole system collapses into a new bottleneck.

In short: estimate µ from hardware specs, solve the M/M/1 inequality for N, then size the LB with L and add redundancy. This yields an order‑of‑magnitude design that satisfies latency targets while remaining robust to traffic spikes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
