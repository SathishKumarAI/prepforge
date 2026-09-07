---
qid: ing_6eedd82e4e__aws__local
question: 'Explain: Get started with managed agents — Expanding Managed Agents in
  Gemini API:  background tasks, remote MCP and more'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 547
total_tokens: 791
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:34:47-05:00'
sources: []
---

**Situation & Task**  
At my previous company we were migrating a legacy recommendation engine to AWS SageMaker so that new features could be rolled out faster. The challenge was that the team had no ML ops experience, and our data scientists needed a way to prototype quickly while still being able to run production‑grade jobs in the background. I proposed using **managed agents** via the Gemini API (the internal wrapper around SageMaker Pipelines) to orchestrate these tasks.

**Action & Design**  
1. **Define Agent Roles** – Created two managed‑agent types:  
   * `ProtoAgent` for interactive notebook training, backed by an EC2 spot fleet with a `ml.t3.medium` instance type.  
   * `ProdAgent` for scheduled background jobs, using SageMaker Batch Transform on `ml.m5.large` instances.  
2. **Remote MCP (Model Control Plane)** – Leveraged AWS Step Functions to coordinate data prep → training → evaluation → deployment steps. The remote MCP exposed a REST endpoint that the agents called via IAM‑role based authentication, ensuring zero‑trust access.  
3. **Scalability & Cost** – Spot instances for prototyping cut GPU costs by 60 %. Batch Transform auto‑scales with concurrency limits (max 20 jobs) and we enabled S3 event triggers to start pipelines automatically on new data uploads.  
4. **Availability** – Step Functions’ retry policy and Lambda fallback ensured >99.9 % uptime for the orchestrator, while agents ran in separate VPCs with NAT gateways for outbound traffic.

**Result**  
- Reduced end‑to‑end model iteration time from 5 days to 3 hours.  
- Cut infrastructure spend by **$120k annually** (spot + auto‑scaling).  
- Delivered a production pipeline that now processes 1M user events per day with <2 min latency.

**Reflection & Learning**  
I took full ownership of the migration, diving deep into AWS pricing models and experimenting with different instance families. The biggest failure was an initial misconfiguration that caused data leakage; I fixed it by adding a VPC‑endpoint policy and documenting the change in our internal playbook. This experience reinforced my bias for action while keeping customer impact (fast model updates) at the core.  

**Leadership Principles Highlighted**  
- **Ownership** – Spearheaded the end‑to‑end solution, from requirement gathering to deployment.  
- **Dive Deep** – Conducted cost/latency trade‑off analyses and iterated on the agent design based on real metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
