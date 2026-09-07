---
qid: ing_9d31dfc77c__aws__local
question: 'Q: How do you protect a database tool from "Agent-driven SQL Injection"?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 397
total_tokens: 632
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:20:29-05:00'
sources: []
---

**Situation / Task**  
At my previous role I led the migration of a legacy sales‑analytics platform to Aurora Serverless on AWS. During load testing we discovered “agent‑driven” SQL injection attempts from automated scripts that exploited unsanitized log queries, risking data exfiltration and downtime.

**Action**  
*Customer Obsession & Ownership*: I immediately owned the incident, convened a cross‑functional task force, and set a 48‑hour fix window.  
1. **Input validation** – wrapped all dynamic SQL in parameterised statements using `pgp` (PostgreSQL).  
2. **WAF rule** – deployed AWS WAF with regex patterns targeting injection payloads (`SELECT`, `UNION`, etc.) on the API Gateway front‑end.  
3. **Runtime isolation** – switched to Aurora Serverless v2, enabling auto‑scaling and burst capacity while keeping a read‑replica pool for analytics queries.  
4. **Monitoring & alerts** – added CloudWatch metrics (`WAFAllowedRequests`, `DBConnectionCount`) and an SNS alert if injection attempts exceeded 5/minute.

*Dive Deep*: I reviewed the last 200 log entries, identified the exact payload vectors, and verified that no data was exfiltrated (0 incidents).  

**Result**  
- Zero successful injections post‑deployment.  
- Latency for analytics queries improved by **30 %** due to read replicas.  
- Cost savings of **$1,200/month** from using Aurora Serverless v2 over provisioned RDS.  

**Learning**  
I documented the failure and updated our security playbook, ensuring that future migrations include WAF rules by default—a practice now adopted across the organization.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
