---
qid: ing_a4d6c62118__faang__local
question: 'Explain: Disaster Recovery — Disasterrecovery'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 556
total_tokens: 786
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:08:31-05:00'
sources: []
---

**Clarify**  
You’re asking how an organization protects its AI workloads and data when a catastrophic event (hardware failure, cyber‑attack, natural disaster) occurs. I’ll assume we’re talking about on‑prem + cloud deployments, large model training pipelines, and real‑time inference services.

**Approach**  
1. **Identify critical assets** – models, training data, feature stores, inference APIs.  
2. **Tiered recovery strategy** – *Active‑Passive* for latency‑sensitive inference; *Cold‑Standby* or *Immutable Backups* for training pipelines.  
3. **Automated backup & versioning** – use immutable snapshots (e.g., S3 Object Lock) and model registry with lineage.  
4. **Geographic redundancy** – replicate data to a separate region/availability zone; keep an “always‑on” secondary inference endpoint.  
5. **Failover orchestration** – Helm/Kubernetes operators or Cloud Functions that detect node loss and spin up replicas from the latest snapshot.  
6. **Testing & drills** – quarterly DR drills, chaos‑engineering to validate recovery time objectives (RTO) and recovery point objectives (RPO).

**Depth**  
- *RTO* for inference should be < 1 s; achieved via a read‑replica cluster in another AZ.  
- *RPO* for training can be 24 h, using nightly snapshots of the training dataset and model checkpoints stored in S3 Glacier Deep Archive.  
- Use **Infrastructure as Code** (Terraform) to recreate the entire stack from the latest snapshot, ensuring repeatable recoveries.  
- Employ **Canary releases** post‑failover to verify model accuracy before routing traffic back.

**Edge Cases**  
- Data corruption across all replicas → rely on immutable backups and external audit logs.  
- Model drift after a long outage – re‑validate metrics against fresh data.  
- Regulatory constraints (e.g., GDPR) may forbid cross‑region storage; use local backups with encryption keys managed in HSM.

**Optimize & Communicate**  
- Introduce **continuous DR validation**: automated pipelines that run sanity checks and push alerts to Slack/Teams.  
- Document the recovery playbook and embed it into CI/CD, so every engineer knows their role.  
- Present a 2‑slide deck (asset inventory + failover diagram) during demos to show confidence in resilience.  

This structured plan balances speed, cost, and compliance—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
