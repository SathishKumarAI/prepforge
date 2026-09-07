---
qid: ing_edb689766c__aws__local
question: 'Explain: Walk me through how you would threat-model a new agent before
  it ships.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 493
total_tokens: 729
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:15:46-05:00'
sources: []
---

**Situation / Task**  
I led the launch of an AI‑driven recommendation agent for a global e‑commerce platform. Before shipping I had to ensure it met security, privacy, and compliance standards.

**Action – Threat‑Modeling Process**  

| Step | What I did | AWS services |
|------|------------|--------------|
| 1️⃣ Identify assets & trust boundaries | Cataloged user data, model weights, API endpoints, and internal pipelines. | IAM, KMS |
| 2️⃣ Enumerate potential adversaries | Threat actors: attackers, malicious insiders, compromised third‑party APIs. | GuardDuty, Detective |
| 3️⃣ Map attack surfaces | Exposed REST endpoints, WebSocket streams, S3 buckets for training data, Lambda functions for inference. | API Gateway, AppSync, S3 |
| 4️⃣ Identify threats & mitigations | • Injection → input validation + OWASP‑ASVS checks.<br>• Data exfiltration → VPC endpoints, encryption at rest/traffic.<br>• Model theft → AWS SageMaker model packaging with IAM roles. | WAF, Shield, SageMaker |
| 5️⃣ Quantify risk & impact | Used CVSS scoring and internal risk matrix; high‑impact data loss risk was 9.2/10, mitigated to <3/10. | Cost estimator (AWS Pricing Calculator) |

**Result**  
The agent shipped with a *zero‑day* risk rating of 1.4/10, saving the business ~$2 M in potential breach costs and earning an internal “Security Champion” award.

---

### Leadership Principles Highlighted
- **Customer Obsession** – protecting user data is paramount.  
- **Ownership** – I drove the entire threat‑model from start to finish.  

### Bar‑raiser Signals
- Deep dive into asset inventory & attack surface.  
- Quantified risk reduction (CVSS shift).  
- Learned from a failed early test where an unencrypted bucket leaked model weights; revised IAM policies immediately.

---

**Takeaway** – A systematic, data‑driven threat model using AWS native tools ensures both security and cost efficiency before any AI agent goes live.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
