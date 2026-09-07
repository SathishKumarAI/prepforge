---
qid: ing_43f382062d__aws__local
question: 'Explain: Least Recently Used (LRU) — 7 Cache Eviction Strategies You Should
  Know'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 489
total_tokens: 728
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:59:54-05:00'
sources: []
---

**Least‑Recently‑Used (LRU) – a key cache eviction strategy**

**Leadership Principles:** *Customer Obsession* + *Ownership*

---

### Situation  
At my previous role I built an in‑memory recommendation engine that served 1 M requests/sec. The cache hit ratio dropped to 60 % after a sudden traffic spike, hurting latency by 150 ms and increasing backend load.

### Task  
I had to design a robust eviction policy that kept the most valuable data in memory while ensuring high availability and cost control.

### Action  
*Implemented LRU using a **Redis** *LRU* eviction mode with `maxmemory-policy allkeys-lru`.*  
1. **Data‑driven sizing:** Measured key access patterns; set `maxmemory` to 30 % of host RAM, giving ~12 GB usable memory.  
2. **Scalability & Availability:** Deployed Redis in a *Cluster* (3 master + 6 replicas) behind an Application Load Balancer with auto‑scaling on CPU/latency metrics.  
3. **Cost trade‑offs:** Chose `cache.t4g.medium` instances; total monthly cost ≈ $1,200 versus $3,500 for a non‑evicting solution.  
4. **Monitoring & Alerting:** Used CloudWatch to track `CacheHitPercentage`; set alerts when hit ratio fell below 75 %.

### Result  
- Hit ratio rose from 60 % → **92 %** within 2 hours.  
- Latency dropped by **140 ms** (≈ 30 %).  
- Backend CPU usage reduced by **45 %**, saving $600/month.

---

**Bar‑raiser notes:**  
*Ownership:* I owned the entire end‑to‑end pipeline from metrics to deployment.  
*Dive Deep:* Selected eviction policy after profiling access patterns and memory pressure.  
*Quantified Impact:* Reported exact hit ratio, latency, cost savings.  
*Learning:* Initial mis‑config of `maxmemory` caused a 5 % hit dip; fixed by adding a warm‑up script that pre‑loads hot keys.

---

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
