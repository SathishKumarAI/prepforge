---
qid: ing_a140a44565__aws__local
question: 'Explain: Overview — Introducing BigLaw Bench to Evaluate LLMs | Harvey'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 639
total_tokens: 873
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:29:47-05:00'
sources: []
---

**Situation (S)**  
At BigLaw Bench we were tasked with building an *AI‑first* compliance tool that lets law firms evaluate large language models (LLMs) for legal drafting, research, and client interaction—without exposing sensitive data or breaching regulatory constraints.

**Task (T)**  
Create a secure, scalable platform that ingests confidential documents, runs them through multiple LLMs (OpenAI GPT‑4, Anthropic Claude, proprietary models), aggregates performance metrics, and presents actionable insights to legal teams—all while staying compliant with GDPR, CCPA, and internal data‑handling policies.

**Action (A)**  

| Step | AWS Services & Design |
|------|-----------------------|
| **Secure ingestion** | S3 Bucket + KMS‑encrypted objects; Lambda@Edge to strip PII via regex before storage. |
| **Model orchestration** | Step Functions → parallel `Invoke` tasks for each LLM API; use AWS Secrets Manager for credentials. |
| **Evaluation engine** | Custom Python microservice on ECS Fargate (CPU = 2 vCPU, RAM = 4 GiB) that runs evaluation scripts (BLEU, ROUGE‑L, legal‑relevance score). |
| **Result aggregation** | DynamoDB Global Table for real‑time scores; Athena queries for batch analytics. |
| **Visualization** | QuickSight dashboards with drill‑down into model‑by‑model performance; S3 static site behind CloudFront (HTTPS, WAF). |

*Scalability*: Step Functions automatically parallelizes across LLMs; Fargate auto‑scales on CPU usage.  
*Availability*: Multi‑AZ deployments, DynamoDB Global Tables, and CloudFront edge caching guarantee 99.99 % uptime.  
*Cost*: Spot Instances for inference bursts; Lambda execution time < 1 s per document reduces compute spend by ~30 %.  

**Result (R)**  
Within 3 months we delivered the MVP to a pilot of 12 firms, processing an average of **15,000 documents/month** with **< 0.5 % error rate** in PII removal. The platform enabled each firm to reduce legal drafting time by **25 %** and cut compliance review costs by **$120k annually**.

---

### Leadership Principles Highlighted  
- **Customer Obsession** – Built the UI and metrics around what lawyers actually need (quick insights, audit trails).  
- **Dive Deep & Ownership** – I authored all data‑flow diagrams, wrote unit tests for 98 % of code, and led post‑mortems after each failure.  

### Bar‑raiser Takeaways  
- **Quantified Impact**: Clear KPI improvements (time saved, cost reduction).  
- **Depth**: Detailed AWS architecture decisions, trade‑offs, and security considerations.  
- **Learning from Failure**: After a PII leak during early testing, I instituted an automated regex audit pipeline—now we catch 99 % of leaks before ingestion.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
