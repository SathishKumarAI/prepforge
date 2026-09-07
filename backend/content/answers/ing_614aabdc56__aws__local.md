---
qid: ing_614aabdc56__aws__local
question: 'Explain: Back-of-the-Envelope Estimation — Design Load Balancer | System
  Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 483
total_tokens: 725
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:05:32-05:00'
sources: []
---

**Situation & Task**  
When I joined the ML infra team at a fast‑growing fintech, we had to expose a new model inference API to 10 k concurrent users during peak hours. The challenge: design a cost‑effective load balancer that could handle burst traffic while keeping latency under 200 ms.

**Action (Technical & Behavioral)**  
1. **Dive Deep into Traffic Patterns** – I collected 72 h of request logs, discovering a 5× spike at 4 pm local time.  
2. **Design Choice** – AWS Application Load Balancer (ALB) + Auto Scaling Group (ASG) for EC2 inference workers.  
3. **Back‑of‑the‑Envelope Estimate** – Each worker handles ~200 RPS; with a target of 10 k RPS, we need 50 workers. Adding 20 % buffer → 60 instances.  
4. **Cost & Availability** – Spot + On‑Demand mix (70/30) reduced hourly cost to $0.12 per instance vs $0.24 on‑demand alone. ALB’s built‑in health checks and 99.99 % SLA ensured high availability.  
5. **Bias for Action** – I provisioned the ASG in minutes, ran a load test with Artillery, confirmed latency <190 ms, and set CloudWatch alarms to auto‑scale during real bursts.

**Result**  
- Achieved 99.9 % request success rate and 185 ms average latency under peak load.  
- Reduced infra cost by **35 %** compared to the baseline on‑demand plan.  

**Reflection (Bar‑raiser focus)**  
I own the end‑to‑end flow, dive into metrics for informed decisions, quantify impact in dollars & latency, and iterate based on failure modes (e.g., failed health checks). This aligns with **Customer Obsession** (delivering low latency) and **Ownership** (owning cost & reliability).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
