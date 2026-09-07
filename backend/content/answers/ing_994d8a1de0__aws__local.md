---
qid: ing_994d8a1de0__aws__local
question: 'Explain: Scaling & ops — Customer Support Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 468
total_tokens: 696
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:12:15-05:00'
sources: []
---

**Situation (Customer Obsession)**  
I was tasked to launch a 24/7 AI‑powered support agent for a global SaaS platform that had > 1 M monthly users and an SLA of < 2 min response time.

**Task**  
Design the scaling & ops stack so we could serve peak traffic (~30k concurrent requests) while keeping cost < $0.02 per request and ensuring 99.9 % uptime.

**Action (Ownership + Dive Deep)**  
1. **Compute** – Deployed an **Amazon SageMaker endpoint** behind a **Application Load Balancer (ALB)** with auto‑scaling based on CPU/latency metrics; added a *warm‑up* Lambda layer to keep the model in memory, cutting cold start latency from 5 s to < 0.8 s.  
2. **Observability** – Instrumented with **Amazon CloudWatch Metrics & Alarms** (RPS, latency, error rate) and used **AWS X-Ray** for end‑to‑end tracing; set up a real‑time dashboard in **Grafana on CloudWatch Logs Insights**.  
3. **Cost control** – Enabled *SageMaker Endpoint Auto Scaling* with a target utilization of 70 % and leveraged spot instances for batch inference, saving ~35 %.  
4. **Disaster recovery** – Replicated the endpoint to a secondary region using **Route 53 latency routing**; automated failover with CloudFormation stack updates.

**Result (Deliver Results)**  
- Achieved < 1.2 s average response time and 99.95 % uptime during a two‑month launch period.  
- Reduced operational cost by $120k annually versus the legacy on‑prem solution.  
- Post‑deployment, we logged a 40 % drop in ticket volume for the most common issues, proving real customer value.

**Bar‑raiser takeaways** – I demonstrated end‑to‑end ownership, deep technical decisions backed by metrics, and a learning loop that turned cost savings into measurable product impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
