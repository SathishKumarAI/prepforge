---
qid: ing_b93ec45768__faang__local
question: 'Explain: Expected actions — Ratelimiting'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 453
total_tokens: 685
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:53:46-05:00'
sources: []
---

**Clarify**  
The interviewer wants you to outline the concrete steps you’d take once a machine‑learning system is exposed to traffic that may exceed its capacity—i.e., *rate limiting*.  
Assumptions: we’re dealing with an online inference API, latency‑sensitive, and the back‑end can be throttled by a front‑door gateway or service mesh.  

**Approach**  
1. **Define limits** – per‑user, per‑IP, and global QPS thresholds.  
2. **Instrumentation** – add counters and timers (Prometheus/Datadog).  
3. **Enforcement** – implement token bucket / leaky bucket at the edge (Envoy, NGINX).  
4. **Graceful degradation** – return a cached prediction or a “retry‑later” response instead of hard 429s.  
5. **Monitoring & alerts** – spike detection, SLA impact, and auto‑scaling triggers.  

**Depth**  
- *Token bucket*: allows bursty traffic; maintain `tokens = min(capacity, tokens + rate*Δt)`.  
- Complexity: O(1) per request, memory O(#entities).  
- Trade‑offs: stricter limits reduce latency variance but may hurt user experience; softer limits risk model overload.  

**Edge Cases**  
- Sudden traffic spikes (DDoS): enforce hard caps and blackhole IPs.  
- Legitimate bursty patterns (e.g., batch inference jobs): allow configurable burst size per job type.  
- Clock skew: use NTP‑synced timestamps for token refill.  

**Optimize & Communicate**  
Iterate limits based on real‑world traffic; employ A/B tests to balance throughput vs. latency. Explain that rate limiting protects the model’s integrity, preserves SLA guarantees, and enables predictable scaling—all key concerns in a FAANG ML platform.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
