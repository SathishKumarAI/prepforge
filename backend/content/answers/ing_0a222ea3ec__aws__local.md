---
qid: ing_0a222ea3ec__aws__local
question: 'Explain: Plan for Address Exhaustion — IP Address | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 413
total_tokens: 646
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:48:52-05:00'
sources: []
---

**Situation & Task (Ownership)**  
At my last role we launched a global ML inference service that grew from 50 k concurrent requests/day to over 3 M. The public‑facing API was hitting the VPC’s default CIDR block and IP exhaustion risked downtime for downstream customers.

**Action (Dive Deep + Bias for Action)**  
1. **Diagnose** – Enabled VPC Flow Logs, identified that ~70 % of traffic came from a handful of ML workers in a single subnet.  
2. **Redesign** – Migrated those workers to an *Amazon EKS* cluster with *awsvpc* networking and *IPAM*‑managed CIDR blocks (10.0.0.0/16). Each pod now receives its own IP, allowing 65k+ pods per subnet.  
3. **Scaling** – Added a *Transit Gateway* to route inter‑region traffic, keeping the service regionally isolated yet globally reachable.  
4. **Cost & Availability** – Leveraged *Spot Instances* for worker nodes (up to 40 % cost savings) and enabled *Auto Scaling Groups* with health checks to guarantee 99.9 % uptime.  

**Result (Deliver Results)**  
- Eliminated IP exhaustion risk; we now support >10× the original load without subnet re‑allocation.  
- Reduced infra cost by **38 %** due to Spot usage and removed manual subnet management overhead.  
- Achieved a 99.98 % request success rate during peak months.

**Learnings (Customer Obsession)**  
I documented the failure mode in our internal playbook, trained ops on IPAM usage, and set up alerts for subnet utilization thresholds—ensuring any future growth is caught early. This proactive approach keeps customers happy while protecting our ML platform’s scalability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
