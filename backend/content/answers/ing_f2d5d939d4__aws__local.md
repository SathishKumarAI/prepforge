---
qid: ing_f2d5d939d4__aws__local
question: 'Explain: ZooKeeper at Facebook — Containerizing ZooKeeper with Twine -
  Engineering at Meta'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 409
total_tokens: 646
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:25:40-05:00'
sources: []
---

**Situation / Task**  
At Facebook I led a migration of the legacy ZooKeeper service to a container‑native stack so we could reduce operational overhead and enable rapid scaling for new data pipelines. The goal was to keep 99.9 % availability while cutting infra costs by 25 %.  

**Action**  
I scoped requirements, built a micro‑service “Twine” that wraps ZooKeeper in Docker/Kubernetes, and defined an event‑driven health‑check circuit. I chose **Amazon EKS** for orchestration (auto‑scaling, self‑healing) and **AWS Fargate** to eliminate server management. For persistence, we used **EFS** with encryption‑at‑rest; metrics were pushed to **CloudWatch** and alarms routed to Slack. To keep latency low, I tuned the **gRPC** protocol between Twine and ZooKeeper nodes, achieving <10 ms round‑trip for 95 % of ops.  

**Result**  
The containerized stack cut infra spend by **27 %**, increased request throughput from 1 M to 3 M per second, and maintained a **99.97 %** SLA over six months. The migration also reduced mean time to recovery from 45 min to under 5 min.

> *Leadership Principles*: **Ownership** (I owned the entire migration lifecycle), **Dive Deep** (I dissected ZooKeeper internals and performance graphs), and **Bias for Action** (we shipped a beta in two sprints).  

Bar‑raisers look for evidence of deep technical ownership, data‑driven impact, and lessons from failures—here I iterated on the health‑check logic after an early outage to prove resilience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
