---
qid: ing_95883987ae__faang__local
question: 'Explain: Blue-Green Deployment — Deployment Strategies'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 386
total_tokens: 618
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:31:44-05:00'
sources: []
---

**Clarify**  
Blue‑green deployment swaps a live “blue” environment for a new “green” one while keeping both identical. The goal is zero‑downtime rollouts and instant rollback. I’ll assume we’re deploying stateless services behind a load balancer, with separate infra stacks (e.g., EC2/containers) that can be spun up independently.

**Approach**  
1. Spin up the green environment from the latest image/config.  
2. Run smoke tests on green; keep blue untouched.  
3. If green passes, shift traffic (via DNS or LB routing) to green.  
4. Decommission or archive blue after a safe‑period.  

If any step fails, we revert to blue without impacting users.

**Depth**  
- *Implementation*: Use infrastructure as code (Terraform/CloudFormation) to duplicate resources; tag environments for easy identification.  
- *Traffic shift*: Gradual canary via weighted LB routing; full cutover on success.  
- *Rollback*: Automatic if health checks fail; manual switch otherwise.  
- *Data consistency*: For stateful services, run database migrations in a backward‑compatible way or use feature flags.

**Edge Cases**  
- *Stateful data*: Requires migration scripts that support both versions simultaneously.  
- *Cost*: Running two full environments doubles spend until cutover.  
- *Network partitions*: Ensure DNS TTL is low enough to avoid stale routing.  

**Optimize & Communicate**  
To reduce cost, use spot instances or auto‑scaling for green until traffic stabilizes. I’d present this flow with a diagram: blue → test → green → switch → retire blue. Highlight that the strategy gives instant rollback and minimal risk, but demands robust health checks and careful resource budgeting.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
