---
qid: ing_4d570c8868__faang__local
question: 'Explain: The Health Checker Component — Design Load Balancer | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 555
total_tokens: 797
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:44:14-05:00'
sources: []
---

**Clarify**  
We’re asked to design a *Health‑Checker* that sits in front of a load balancer and decides whether a backend instance is healthy enough to receive traffic.  
Assumptions I’d confirm:  

1. What metrics constitute “health” (latency, error rate, CPU, memory)?  
2. Frequency of checks vs. acceptable staleness.  
3. Scale – number of instances, regions.  
4. Failure modes we must tolerate (network partitions, back‑end crashes).  

**Approach**  
1. **Probe Scheduler** – a lightweight dispatcher that periodically sends health probes to each instance.  
2. **Probe Types** – simple TCP/HTTP GET for liveness; richer checks (memory dump, disk I/O) on a lower cadence.  
3. **Result Aggregator** – collects probe responses and maintains a sliding window of metrics per instance.  
4. **Decision Engine** – applies configurable thresholds (e.g., 5‑minute average latency > 200 ms → unhealthy).  
5. **API to LB** – exposes health status via a fast in‑memory cache or gRPC endpoint that the load balancer polls.

**Depth**  
- Use a *consistent hashing* ring for probe distribution so each worker handles a subset of instances, keeping probes O(1) per instance.  
- Store metrics in a time‑series DB (e.g., Prometheus TSDB) with retention policies; compute rolling averages via downsampling to keep memory bounded.  
- Complexity: probe scheduling O(N) per cycle, aggregation O(1) per response, decision engine O(M) where M = number of instances queried by LB.  

**Edge Cases**  
- **Network partition** – fallback to last‑known-good status for a grace period.  
- **Probe flapping** – apply hysteresis (e.g., require 3 consecutive failures before marking unhealthy).  
- **Burst traffic spikes** – ensure probes don’t overwhelm backends; throttle probe rate.

**Optimize & Communicate**  
- Cache health results to avoid per‑request DB hits, exposing a `/health` endpoint that the LB can query in <1 ms.  
- Log anomalies and expose alerts (PagerDuty) for ops visibility.  
- In my interview narrative I’d emphasize trade‑offs: higher probe frequency gives fresher data but increases load; richer checks improve accuracy at cost of latency. This structured plan shows clear problem framing, a pragmatic design, and awareness of scalability and failure modes—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
