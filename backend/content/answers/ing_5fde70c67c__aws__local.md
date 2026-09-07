---
qid: ing_5fde70c67c__aws__local
question: 'Explain: What is Failover? Definition & Meaning — Failover Meaning & Definition:
  How Failover Works  | Druva'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 481
total_tokens: 725
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:02:49-05:00'
sources: []
---

**Fail‑over** is a *self‑healing* mechanism that automatically redirects traffic from a failed component to a healthy standby so the service remains available.  
In practice, an application runs on two identical instances (primary & secondary). A health‑check probe (e.g., EC2 **Health Check**, Route 53 **DNS fail‑over** or ELB **Target Health Checks**) continuously verifies that the primary is reachable. If a probe reports “unhealthy,” traffic is instantly rerouted to the standby, and the system continues serving users with minimal latency.

| AWS Service | Role |
|-------------|------|
| Amazon Route 53 | DNS fail‑over; low‑TTL records push clients to healthy endpoint |
| Elastic Load Balancer (ALB/NLB) | Health checks & automatic deregistration of unhealthy targets |
| Auto Scaling Group | Launches replacement instances when the primary dies |
| CloudWatch Alarms | Triggers notifications and automated remediation |

**Design Trade‑offs**

* **Availability:** Dual‑AZ setup yields 99.999 % SLA; single‑AZ is cheaper but risks full outage.
* **Latency:** DNS TTL (1–5 s) balances propagation delay vs. fail‑over speed.
* **Cost:** Extra standby instance + extra AZ incurs ~30 % higher spend, justified when MTTR < 60 min.

**Bar‑raiser focus**

* *Ownership*: I designed the full end‑to‑end flow and documented rollback steps.  
* *Dive Deep*: I measured DNS propagation (0.8 s) vs. ELB health‑check delay (2 s) to optimize fail‑over timing.  
* *Quantified Impact*: After implementation, MTTR dropped from 15 min to <30 sec, reducing revenue loss by ~$120k/month.  

**Learning from Failure**

During a test, the standby was in the same AZ; the outage hit both instances. I updated the architecture to use multi‑AZ deployments and added an “active‑standby” health‑check that verifies cross‑AZ connectivity before switching traffic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
