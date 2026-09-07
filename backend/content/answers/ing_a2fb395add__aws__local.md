---
qid: ing_a2fb395add__aws__local
question: 'Explain: Why the multiple A record solution doesn’t work with GSLB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 429
total_tokens: 664
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:33:42-05:00'
sources: []
---

**Situation & Task**  
At a prior e‑commerce startup I was tasked to expose a global API that needed low latency and high availability across North America and Europe. The product owner suggested simply adding multiple A records for the same DNS name so every region would resolve to its local IP.  

**Action**  
I explained that Global Server Load Balancing (GSLB) in AWS relies on *routing policies* (Latency, Geo‑Location, Weighted, Failover). Multiple A records without a routing policy are treated as “simple” records: Route 53 will return all addresses in a single response. Browsers and clients then perform their own round‑robin or least‑connection logic, **not** the intelligent latency‑aware selection that GSLB offers.  
To achieve true global load balancing I proposed:
- A single `A` record with *Latency* routing pointing to two ELBs (us‑east‑1 & eu‑west‑1).  
- Health checks on each ELB to automatically remove failed endpoints.  
- Optional Weighted policy for traffic splitting during canary releases.  

**Result**  
After implementing the latency‑based policy, we saw a 30 % reduction in average response time and a 25 % drop in cross‑region retries—metrics verified by CloudWatch metrics and synthetic monitoring.  

**Reflection**  
*Ownership*: I owned the end‑to‑end solution from DNS to ELB health checks.  
*Dive Deep*: I dissected Route 53 behavior, simulated traffic patterns, and validated with real telemetry.  
*Learning*: The failure of the naive A‑record approach taught me that even small misconfigurations can cascade into customer experience issues—prompting us to adopt a formal DNS change review process.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
