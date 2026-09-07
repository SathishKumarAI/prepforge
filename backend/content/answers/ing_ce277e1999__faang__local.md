---
qid: ing_ce277e1999__faang__local
question: What Went Wrong? — Prime Video Microservices - by Neo Kim
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 509
total_tokens: 745
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:39:59-05:00'
sources: []
---

**Clarify**  
The interview asks: *“What went wrong in the Prime Video micro‑service architecture?”*  
I’ll assume we’re talking about a recent incident where a cascade of failures led to a large portion of streaming traffic being unavailable, and that the root cause was an issue with one or more services (e.g., recommendation, catalog, DRM). I’d confirm:  

- Which services were affected?  
- What was the observed latency/throughput drop?  
- Were there any error logs or metrics spikes prior to the outage?

**Approach**  
1. Identify the failure point(s) via monitoring dashboards.  
2. Trace request paths with distributed tracing (e.g., OpenTelemetry).  
3. Correlate service‑level metrics, logs, and external dependencies (DB, CDN).  
4. Reproduce in a staging environment if possible.  

**Depth**  
A typical culprit is *hot‑spot* traffic hitting a single instance of the catalog microservice that was under‑provisioned or had a memory leak. In our case, the service had an unbounded cache growth because we forgot to set a TTL on the LRU eviction policy, causing OOM crashes after 3 hrs of sustained load. The crash propagated through circuit breakers, leading to fallback logic that returned stale data and increased latency downstream (DRM, transcoder).  

- **Complexity**: The detection loop was \(O(n)\) over services; tracing added a constant overhead per request.  
- **Trade‑offs**: Aggressive caching improves read throughput but risks memory blow‑up if not bounded.

**Edge Cases**  
- Sudden traffic spike (e.g., new release) that bypasses rate limits.  
- External dependency failures (DB replicas going offline).  
- Misconfigured health checks causing false positives and unnecessary restarts.

**Optimize & Communicate**  
Fix the cache policy, add a guard on memory usage, and enable autoscaling with tighter thresholds. Instrument per‑instance metrics to detect runaway growth early. In a post‑mortem I’d present:

1. Timeline of events (with timestamps).  
2. Root cause diagram.  
3. Mitigation steps + preventive controls (e.g., TTL enforcement, automated alerts).  

This demonstrates structured problem solving, clear communication, and deep technical insight—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
