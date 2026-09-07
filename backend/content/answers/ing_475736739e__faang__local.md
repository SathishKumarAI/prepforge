---
qid: ing_475736739e__faang__local
question: 'Explain: Better compliance — What is Disaster Recovery? | Google Cloud'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 496
total_tokens: 732
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:30:07-05:00'
sources: []
---

**1️⃣ Clarify**  
The interview asks for a *Google‑cloud‑centric* definition of **Disaster Recovery (DR)** and why it matters for compliance.  
Assumptions to confirm:  
- “Disaster” refers to any event that disrupts availability or data integrity (natural, cyber, human).  
- DR is part of an overall Business Continuity Plan (BCP).  
- Compliance frameworks (GDPR, HIPAA, ISO 27001) require documented DR procedures and recovery time/objective targets.

**2️⃣ Approach**  
1. Define DR in cloud terms.  
2. Explain its role in compliance.  
3. Highlight Google Cloud services that enable DR.  
4. Mention key metrics: RTO (Recovery Time Objective) & RPO (Recovery Point Objective).

**3️⃣ Depth**  
> *Disaster Recovery* is a set of policies, processes, and technologies that allow an organization to restore critical applications and data within agreed timeframes after an outage or catastrophic event. In Google Cloud, DR typically involves:  
- **Cross‑region replication** via Cloud Storage, Cloud Spanner, or Cloud SQL with automated failover.  
- **Infrastructure as Code (IaC)** using Terraform/Deployment Manager for rapid redeployment.  
- **Backup & snapshot** services (Cloud Filestore snapshots, Compute Engine persistent disk snapshots).  
- **Multi‑zone/region load balancers** to shift traffic automatically.  

Compliance mandates that these DR plans be *tested*, *documented*, and *audited*. Google Cloud’s *Security Command Center* and *Compliance Reports* provide evidence of configuration adherence and recovery readiness.

**4️⃣ Edge Cases**  
- Partial outages: ensure graceful degradation rather than full failover.  
- Data sovereignty: cross‑border replication must respect local laws (e.g., EU data residency).  
- Third‑party integrations: verify that partner services also meet DR standards.

**5️⃣ Optimize & Communicate**  
To improve, adopt *continuous DR testing* with automated playbooks and integrate monitoring alerts to trigger failover scripts. Explain trade‑offs: higher replication latency vs. stricter RPOs. Conclude by noting that a robust DR strategy not only satisfies compliance but also builds customer trust and resilience—key metrics Google values in its Cloud offerings.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
