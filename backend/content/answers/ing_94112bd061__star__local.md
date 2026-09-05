---
qid: ing_94112bd061__star__local
question: 'Explain: How Health Checking Works — Design Load Balancer | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 367
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:29:11-05:00'
sources: []
---

**Situation:**  
At my last role I was tasked with revamping the internal load balancing layer for our real‑time analytics platform, which served ~10 M requests/day across three microservices. The existing health checks were a simple ping every 30 seconds that missed transient failures and caused traffic to be routed to unhealthy nodes.

**Task:**  
I needed to design a robust health‑checking mechanism that could detect service degradation in seconds, avoid flapping, and expose metrics for observability, all while keeping latency under 5 ms per request.

**Action:**  
I introduced three layers of checks:  
1. **Liveness probes** using an HTTP HEAD on `/healthz` that returned a 200 only when the service had processed a recent batch (≤ 2 s ago).  
2. **Readiness probes** with a lightweight gRPC call (`CheckReady`) that verified DB connectivity and cache warm‑up, running every 10 seconds but cached locally to keep per‑request overhead negligible.  
3. **Active probing** from the load balancer itself: it sent a synthetic “heartbeat” request to each backend on a hidden health port; if > 2 consecutive heartbeats failed, the node was marked unhealthy. I used Prometheus for metrics and Grafana dashboards, adding circuit‑breaker logic that backed off retries after 3 failures.

**Result:**  
The new scheme cut service downtime by 85%, reduced false positives from 15% to < 1%, and lowered average latency by 0.8 ms. I learned the value of layered checks and how observability can be built into health‑checking without impacting user traffic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
