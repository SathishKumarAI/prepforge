---
qid: ing_72a569d901__aws__local
question: 'Explain: Security — Client-Server Architecture | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 435
total_tokens: 666
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:44:42-05:00'
sources: []
---

**Situation / Task**  
In my last role I led a team that built a secure client‑server ML inference platform for a financial services client. The goal was to expose a REST API that would accept raw transaction data, run it through a fraud‑detection model, and return risk scores—all while meeting PCI‑DSS compliance and zero downtime.

**Action**  
- **Ownership & Dive Deep:** I wrote the threat model (MITRE ATT&CK) and defined least‑privilege IAM roles for each service.  
- **Design:**  
  - *Client* – React web app signed in via Cognito, token‑based auth to API Gateway.  
  - *Server* – API Gateway → Lambda (Python, boto3) → SageMaker endpoint (real‑time inference).  
  - *Data* – Encrypted S3 buckets for model artifacts; KMS keys per environment.  
  - *Observability* – CloudWatch metrics (latency, error %, CPU), X-Ray traces, GuardDuty alerts.  
- **Scalability & Availability:** Lambda concurrency set to 2000, autoscaling on CloudWatch alarms; SageMaker endpoint in a multi‑AZ deployment with warm containers.  
- **Cost & Trade‑offs:** Chose “On‑Demand” endpoints for flexibility; used spot instances for batch training (30 % cost savings).  

**Result**  
- Deployed 95 % of traffic with <50 ms latency, 99.9 % SLA.  
- Reduced model inference costs by 25 % vs. on‑prem GPU clusters.  
- Zero security incidents in the first year; quarterly penetration tests passed with no critical findings.

**Reflection**  
I learned that early threat modeling and continuous monitoring are non‑negotiable for ML services at scale. The bar‑raiser will hear my ownership, depth of dive into AWS tooling, quantified impact, and iterative learning from post‑mortems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
