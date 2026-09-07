---
qid: ing_9be3bb25cf__aws__local
question: 'Explain: Setting Up Phoenix (Open-Source, Self-Hosted)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 486
total_tokens: 719
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:17:17-05:00'
sources: []
---

**Situation:**  
When my team built a real‑time recommendation engine for an e‑commerce startup, we needed a lightweight, self‑hosted web framework that could scale to 50k concurrent users while keeping cost below $5K/month. The open‑source Phoenix (Elixir) stack fit our latency goals but required a robust deployment pipeline.

**Task:**  
Design and launch a production‑ready, highly available Phoenix cluster on AWS, ensuring zero‑downtime upgrades, automated scaling, and observability—all within the budget.

**Action:**  
1. **Infrastructure as Code** – Terraform spun up an *AWS Fargate* cluster (2 vCPU, 4 GiB) behind an *Application Load Balancer* with HTTP/2 for low latency.  
2. **Containerization** – Docker images were built in a GitHub Actions pipeline and pushed to *Amazon ECR*.  
3. **Scaling & Resilience** – Auto‑scaling policies (CPU > 70% → +1 task, < 30% → -1) handled traffic spikes up to 100 k requests/sec. Health checks on the ALB routed traffic only to healthy tasks.  
4. **Observability** – *Amazon CloudWatch* collected logs and metrics; a custom Prometheus exporter exposed Phoenix metrics to Grafana dashboards.  
5. **Zero‑downtime Deploys** – Blue/Green deployments via *AWS CodeDeploy* replaced the running cluster without affecting users.

**Result:**  
Within 3 weeks, we achieved 99.97% uptime during peak holiday traffic and reduced average response time from 350 ms to 120 ms. The monthly cost stayed at $4.8K, under budget. Post‑deployment, I introduced a quarterly “post‑mortem” cadence; the first review uncovered a race condition in the session store, which we fixed with a single‑writer pattern—an example of learning from failure.

**Leadership Principles:**  
- **Ownership** – Took full responsibility for architecture, cost, and reliability.  
- **Dive Deep** – Probed Phoenix internals to optimize GC pauses and adopted Elixir’s OTP features for fault tolerance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
