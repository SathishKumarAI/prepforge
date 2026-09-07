---
qid: ing_60d7be9eb4__aws__local
question: 'Explain: On-call playbook — Computer Use Agent Production'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 401
total_tokens: 631
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:04:40-05:00'
sources: []
---

**Situation / Task**  
I was tasked with designing an *on‑call playbook* for the Computer Use Agent (CUA) that powers our internal AI tooling. The goal was to reduce mean time to resolution (MTTR) while ensuring high availability during nightly inference spikes.

**Action**  
- **Ownership & Customer Obsession**: I owned the full incident lifecycle and mapped user‑impact metrics (latency, error rate).  
- **Dive Deep**: Instrumented CUA with CloudWatch Alarms on CPU %, GPU utilization, and queue depth. Wrote a Lambda‑driven “auto‑scale” routine that spins up Fargate tasks when GPU load > 80 % for 2 min.  
- **Bias for Action & Deliver Results**: Created an OpsGenie playbook with step‑by‑step runbooks, automatic rollback scripts, and pre‑incident health checks (S3 health flag + SNS ping).  
- **Invent & Simplify**: Replaced manual SSH resets with a DynamoDB “reset flag” that triggers a graceful restart via ECS task definition update.  

**Result**  
Implemented playbook cut MTTR from 45 min to **8 min** and reduced unplanned downtime by **67 %** in the first quarter post‑deployment. The automated scaling added only ~3 % cost overhead, while maintaining 99.9 % SLA for AI inference requests.

---

*Bar‑raiser notes*: I demonstrated ownership of metrics, deep technical insight into AWS services (CloudWatch, Lambda, Fargate, DynamoDB), quantified impact, and lessons learned from a prior incident that highlighted the need for automated health checks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
