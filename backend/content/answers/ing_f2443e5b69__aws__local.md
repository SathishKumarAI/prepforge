---
qid: ing_f2443e5b69__aws__local
question: 'Explain: Examples — Pattern: Server-side service discovery'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 406
total_tokens: 636
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:24:40-05:00'
sources: []
---

**Situation / Task**  
At my last role I was tasked to replace a legacy “service‑registry” that our ML inference microservices used for dynamic routing. The registry was a single‑node ZooKeeper instance; it had 99 % latency spikes during model rollouts and caused a 12 % drop in request throughput.

**Action**  
I owned the redesign, following **Customer Obsession** (our data scientists needed 0.5 ms lookup) and **Ownership** (I led the migration). I scoped requirements: *discoverability*, *high availability*, *low latency* and *cost control*.  
- **Design:** I proposed a server‑side service discovery pattern using **AWS Cloud Map** with a lightweight in‑memory cache (Redis) per inference container.  
- **Implementation:** Each container registered its endpoint to Cloud Map on startup; the cache was refreshed every 30 s via a scheduled Lambda.  
- **Scalability/Availability:** Cloud Map’s global namespace guarantees sub‑ms resolution, and Redis Multi‑AZ clusters provide HA with <0.1 % outage risk.  
- **Cost & Trade‑offs:** Eliminated ZooKeeper (~$500/month) while adding ~5 % of EC2 compute for cache nodes; we gained a 3× latency reduction.

**Result**  
After deployment, request throughput rose from 8k to 23k RPS (192 % increase), and the 99th‑percentile latency dropped from 12 ms to 4.5 ms. The new pattern also reduced ops alerts by 87 %.  

**Reflection** – I learned that a “simple” cache can outperform complex registries if you *dive deep* into service patterns, and I now routinely audit legacy components for such opportunities.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
