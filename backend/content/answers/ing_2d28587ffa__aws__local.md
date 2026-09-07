---
qid: ing_2d28587ffa__aws__local
question: 'Explain: OWASP Top 10 Risks for Agentic AI — Safety And Governance'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 430
total_tokens: 665
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:06:55-05:00'
sources: []
---

**Situation (S)**  
While leading a cross‑functional team to launch an agentic‑AI platform for our marketplace, I was tasked with defining the risk framework that would satisfy both security and compliance mandates.

**Task (T)**  
Translate the OWASP Top 10 for Agentic AI into concrete safety & governance controls, quantify potential impact, and build an automated monitoring pipeline.

**Action (A)**  
1. **Risk mapping** – mapped each OWASP item to our product stack: *Model Inversion* → inference APIs; *Adversarial Inputs* → data‑validation microservices; *Data Poisoning* → training‑data ingestion pipelines.  
2. **Design** – built a serverless architecture using **Amazon SageMaker**, **Lambda**, and **API Gateway** with fine‑grained IAM roles, coupled to **AWS GuardDuty** for anomaly detection.  
3. **Metrics** – set up CloudWatch dashboards that trigger alerts when inference latency > 200 ms or when confidence scores fall below 0.4 on a rolling window of 10 000 requests.  
4. **Governance** – implemented a *Model Registry* with versioned policies stored in **AWS Secrets Manager**, and automated rollback via **Step Functions**.

**Result (R)**  
- Reduced model‑related incidents by **87 %** within the first quarter, cutting mean time to recovery from 12 h to < 30 min.  
- Cost of monitoring stayed under **$0.02 per request** thanks to Lambda’s pay‑per‑execution pricing.

---

### Leadership Principles Highlighted
- **Customer Obsession** – safeguarding user data and ensuring reliable AI behavior.  
- **Ownership** – owning the entire risk lifecycle from detection to remediation.  

*Bar‑raiser focus:* depth of technical design, clear ownership, quantifiable impact, and learning loop (e.g., post‑mortem analysis after each incident).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
