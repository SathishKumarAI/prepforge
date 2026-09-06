---
qid: ing_8e23b25c9b__fp__local
question: 'Explain: Types of Health Checks — Design Load Balancer | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 368
total_tokens: 547
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:07:21-05:00'
sources: []
---

In a distributed web service the *load balancer* is the first line that decides whether an incoming request should be forwarded to a backend instance.  
The **fundamental problem** it solves is two‑fold:

1. **Availability** – avoid routing traffic to machines that are dead or stuck.  
2. **Performance** – keep latency low by only sending requests to instances that can respond quickly.

These goals translate into *health checks*—periodic probes that estimate the state of a backend.  They must be cheap (to minimise load on the instance) yet informative (to prevent false positives/negatives).

| Check | What it measures | Why it works |
|-------|-----------------|--------------|
| **TCP connect** | Network stack is up, port open | Minimal overhead; guarantees at least a network‑level heartbeat. |
| **HTTP GET** | Web server listening & serving static content | Adds application‑layer validation without heavy payloads. |
| **Application‑specific endpoint** (e.g., `/healthz`) | Business logic running, DB reachable, cache healthy | Captures deeper invariants; prevents “phantom” health where the web stack is up but the service cannot process real requests. |

A *non‑obvious insight*: **probe frequency and timeout should be adaptive to traffic patterns**. During peak load, a longer timeout reduces churn (instances oscillate between healthy/unhealthy), whereas in low‑traffic periods shorter probes catch transient failures faster. This dynamic tuning balances *stability* against *responsiveness*, a subtle trade‑off that interviewers often overlook.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
