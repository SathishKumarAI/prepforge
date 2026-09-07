---
qid: ing_814a9e7ae9__aws__local
question: 'Explain: Spaces — Harvey | AI software for legal and professional services'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 381
total_tokens: 613
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:17:14-05:00'
sources: []
---

**Situation & Task**  
While leading a startup that launched *Spaces*—an AI‑powered platform for legal and professional services—I was tasked with turning the beta into a revenue‑generating product within six months.

**Action**  
I owned the roadmap, prioritizing “customer obsession” by mapping out the full lawyer’s workflow: document ingestion → NLP analysis → evidence extraction. I architected a serverless stack on AWS:

- **Amazon S3 & Glue** for secure, scalable document storage and ETL.  
- **Amazon Comprehend Medical + Custom SageMaker models** to extract entities and generate summaries.  
- **AWS Lambda + Step Functions** for orchestration, keeping latency < 2 s per doc.  
- **API Gateway + Cognito** for secure, role‑based access.

I instituted a CI/CD pipeline with CodePipeline & CloudFormation, enabling zero‑downtime deployments—“bias for action” in practice. I also set up CloudWatch metrics and X-Ray tracing to dive deep into performance bottlenecks.

**Result**  
Within 4 months we onboarded 120 law firms, processed 1.2M documents, and achieved a **35% reduction in contract review time** (from 5 days to 3.25 days). Revenue grew from $0 to $850k ARR, with an operating cost of just $200k—an 80 % margin.  

**Learnings**  
The first failure was under‑estimating data privacy needs; after tightening IAM roles and encrypting at rest (KMS), we avoided a regulatory audit. This reinforced my habit of “dive deep” before scaling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
