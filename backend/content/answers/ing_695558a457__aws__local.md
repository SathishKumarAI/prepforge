---
qid: ing_695558a457__aws__local
question: 'Explain: Design a defence-in-depth strategy for a customer-facing agent
  that reads user data and can take actions.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 415
total_tokens: 656
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:22:12-05:00'
sources: []
---

**Situation & Task (Customer Obsession)**  
I was tasked to launch a conversational AI agent that reads customer records and triggers workflow actions. The product had to guarantee data confidentiality while remaining highly available.

**Action (Ownership + Dive Deep)**  
1. **Data‑at‑Rest** – Store all PII in an encrypted Aurora PostgreSQL cluster using AWS KMS; enable point‑in‑time recovery for a 7‑day window.  
2. **Transit & Runtime** – Deploy the agent on Fargate behind an Application Load Balancer, enforce TLS 1.3, and use IAM roles with least privilege to access Secrets Manager for API keys.  
3. **Least‑Privilege Access Control** – Use fine‑grained AWS Cognito authorizers; each microservice has its own role and only the “ReadCustomer” policy is attached.  
4. **Observability & Response** – Integrate CloudWatch Logs, X-Ray tracing, and GuardDuty alerts; set up an SNS topic that triggers a Lambda remediation workflow when anomalous API calls are detected.  
5. **Redundancy & Scaling** – Run the Fargate service across two AZs with auto‑scaling based on CPU/Memory metrics (target 70 %).  

**Result (Deliver Results)**  
Within three months, we achieved <0.001 % data leakage incidents and reduced mean time to recovery from 12 h to under 10 min. Cost was contained at $4,200/month versus an estimated $7,000 for a traditional EC2‑based stack.

**Learning (Bar‑Raiser)**  
I iterated on the IAM policy after a false positive in GuardDuty; documenting that trade‑off helped the next team avoid over‑privileged roles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
