---
qid: ing_3c43c711b9__aws__local
question: 'Explain: Network Failures — Availability | System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 448
total_tokens: 677
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:42:15-05:00'
sources: []
---

**Situation & Task**  
While designing a real‑time recommendation engine for a global e‑commerce platform, we noticed that our inference cluster on **Amazon SageMaker** was hitting *network partition* outages during peak traffic (≈ 8 M requests/day). The goal: keep 99.9 % availability while minimizing latency and cost.

**Action – Design & AWS Services**  
1. **Multi‑AZ VPC + Transit Gateway** – replicated the SageMaker endpoint in two AZs; used a Transit Gateway with *Route Propagation* to avoid single‑point failures.  
2. **Elastic Load Balancer (ALB) + Global Accelerator** – routed traffic across AZs, providing health checks and automatic failover within 30 ms.  
3. **AWS App Mesh** – added service mesh for fine‑grained retries (max 3) and circuit breakers on downstream inference services.  
4. **Amazon CloudWatch & X-Ray** – instrumented latency metrics; set alarms for >5 % packet loss to trigger auto‑scale of the endpoint replicas.  
5. **Cost Control** – leveraged **Spot Instances** for non‑critical batch scoring, while keeping a small baseline on On‑Demand for low‑latency traffic.

**Result**  
- Reduced downtime from 12 min/incident to < 30 s (99.97 % uptime).  
- Latency dropped by 15 ms average, improving conversion rate by **3.2 %** (+$1.8 M annual revenue).  
- Cost decreased 18 % via Spot utilization without compromising SLA.

**Reflection & Learning**  
Ownership: I proactively re‑architected the network layer before any customer impact. Dive Deep: I traced packet loss to a misconfigured subnet route, learned to automate route propagation checks. Bar‑raiser focus: demonstrated measurable business impact and willingness to iterate on design under pressure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
