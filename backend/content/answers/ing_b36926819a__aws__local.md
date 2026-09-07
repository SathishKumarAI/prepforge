---
qid: ing_b36926819a__aws__local
question: 'Explain: List and describe the different load balancing methods and their
  algorithms'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 522
total_tokens: 755
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:10:33-05:00'
sources: []
---

**Situation / Task**  
At my previous role I led a team that had to expose an ML inference service with >10 k QPS and <50 ms latency while keeping costs <$0.02/req. The challenge was choosing the right load‑balancing strategy for our GPU cluster.

**Action**  
I mapped three core algorithms—Round‑Robin, Least‑Connections, and Weighted‑Targeted (based on inference latency)—to AWS services:

| Method | Algorithm | Typical Use | AWS Service |
|--------|-----------|-------------|------------|
| **Round‑Robin** | Cycles requests evenly | Stateless, low variance | Classic ELB, ALB |
| **Least‑Connections** | Sends to host with fewest active sessions | Variable session length | ALB (HTTP/HTTPS) |
| **Weighted Targeted** | Prioritizes nodes by a custom metric (e.g., GPU utilization or latency) | Heterogeneous resources | NLB + Lambda@Edge / CloudWatch Alarms |

I implemented *Least‑Connections* for the first 8 k QPS, then switched to *Weighted Targeted* when GPU spikes appeared. Using CloudWatch metrics I set a target of <10 ms per inference; if latency exceeded 20 ms, a Lambda adjusted weights in real time.

**Result**  
The hybrid strategy cut average latency from **70 ms → 42 ms** (≈40% improvement) and reduced GPU idle time by **25%**, saving ~$1.2k/month. The system stayed within the SLA 99.9% uptime, proving both scalability and cost‑efficiency.

---

### What a bar‑raiser looks for
* **Ownership** – I drove end‑to‑end optimization, not just config tweaks.  
* **Dive Deep** – I correlated CloudWatch metrics with GPU load to tune weights.  
* **Quantified Impact** – 40% latency reduction and $1.2k/month savings.  
* **Learning from Failure** – Initial round‑robin caused hotspots; switching algorithms fixed it, teaching us that static balancing isn’t enough for ML workloads.

This showcases customer obsession (low latency), ownership, dive deep, and deliver results—all Amazon leadership principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
