---
qid: ing_614aabdc56__faang__local
question: 'Explain: Back-of-the-Envelope Estimation — Design Load Balancer | System
  Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 536
total_tokens: 781
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:30:06-05:00'
sources: []
---

**Clarify**  
The interviewer asks you to sketch a *back‑of‑the‑envelope* estimate for a load balancer that will sit in front of a web service. We need the expected traffic, capacity, cost and key design knobs. I’d confirm:  

- Target request rate (RPS) or peak traffic (e.g., 1 M RPS).  
- Average response time / payload size.  
- Desired availability (99.9 % vs. 99.99 %).  
- Geographic distribution of users.  
- Budget constraints and SLAs.

**Approach**  
1. **Compute baseline throughput**: `T = RPS × avg_response_time`.  
2. **Determine instance sizing**: pick a VM type (e.g., m5.large, 8 vCPU, 32 GiB). Benchmark a single instance to see its max QPS.  
3. **Calculate # instances**: `N = T / (max_QPS_per_instance * safety_margin)`.  
4. **Add redundancy**: one extra node per AZ for fail‑over.  
5. **Estimate cost**: hourly rate × N × 24 h × 30 days + network egress.  
6. **Sketch scaling policy**: CPU/queue depth thresholds, auto‑scale by ±20 %.  

**Depth**  
- *Throughput*: If RPS = 1 M and avg latency = 200 ms → `T ≈ 200k req/s`.  
- *Benchmark*: One m5.large handles ~50k QPS → need `N ≈ 4` + 2 spare.  
- *Cost*: $0.10/hr × 6 × 720h ≈ $432/month; add $100 for load balancer service and egress.

**Edge Cases**  
- Sudden traffic spikes (flash crowds) → horizontal scaling lag.  
- Single‑point failures if not multi‑AZ.  
- Network bottlenecks: ensure egress bandwidth matches peak traffic.  

**Optimize & Communicate**  
Explain trade‑offs: more instances lower per‑instance load but increase cost; higher safety margin reduces SLA risk but inflates spend. Suggest using managed LB (e.g., AWS ELB) to offload health checks and SSL termination, which cuts infra complexity by ~30 %. Conclude with a quick sanity check against the budget and SLAs, then hand off to implementation details.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
