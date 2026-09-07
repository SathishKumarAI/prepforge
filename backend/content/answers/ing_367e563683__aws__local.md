---
qid: ing_367e563683__aws__local
question: 'Explain: Legal — Jobs at Together AI'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 492
total_tokens: 719
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:27:40-05:00'
sources: []
---

**Situation (S)**  
When I joined Together AI as a Senior Cloud Architect, the legal team needed a scalable platform to manage GDPR‑compliant data access requests across 12 global regions. The existing on‑prem system was slow, error‑prone, and cost ~$1M/yr in support.

**Task (T)**  
Build an automated “Legal Request Service” that reduces manual effort by 80 % while ensuring auditability, data residency, and zero downtime.

**Action (A)**  
*Ownership & Dive Deep*: I scoped the requirement, interviewed legal officers to capture edge cases, and mapped them to AWS services.  
- **API Gateway + Lambda** for a serverless request intake API (auto‑scales to 10k req/s).  
- **Step Functions** orchestrate multi‑region data access flows and enforce compliance checks.  
- **DynamoDB with Global Tables** stores immutable request logs; encryption at rest via KMS guarantees GDPR audit trails.  
- **EventBridge + SNS** notify stakeholders and trigger automated workflows (e.g., data deletion).  
*Bias for Action*: I rolled out a pilot in 3 regions, using CloudWatch dashboards to monitor latency (<200 ms) and error rates (<0.1 %).  

**Result (R)**  
Within 90 days:  
- Legal request turnaround time dropped from **5 days → <6 h** (80 % speedup).  
- Manual effort cut by **$850k/yr**, freeing legal staff for higher‑value work.  
- System uptime achieved **>99.999 %** with automated failover across AZs, meeting our 24/7 SLA.

*Learned*: Early engagement with compliance experts prevented costly redesign; continuous monitoring surfaced a rare data residency issue that was fixed before production.

---

### Leadership Principles Highlighted
1. **Customer Obsession** – Delivered a faster, reliable legal service that directly benefits internal customers (Legal & Compliance).  
2. **Ownership** – Took full responsibility for end‑to‑end design, cost optimization, and post‑deployment monitoring.  

This example shows measurable impact, deep technical reasoning, and clear ownership—exactly what a bar‑raiser expects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
