---
qid: ing_edd05fa1fa__aws__local
question: 'Explain: Using Too Many Cloud Services Without a Strategy'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 385
total_tokens: 615
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:16:01-05:00'
sources: []
---

**Situation / Task**  
In my last role at a fintech startup we migrated from on‑prem to the cloud and began spinning up new services—S3 buckets for raw data, Lambda functions for ETL, SageMaker notebooks for experimentation, Glue crawlers for cataloging, Redshift clusters for analytics, and DynamoDB tables for feature flags—all without an overarching strategy. The result was duplicated effort, inconsistent tagging, and rising monthly spend (~$30k/month).  

**Action**  
I led a cross‑functional “Cloud Services Alignment” workshop (Owner: myself, Stakeholders: Data Science, Ops, Finance). We mapped each service to its business objective, defined a naming/labeling convention, and built a Terraform module that enforced:

| Service | Purpose | Governance |
|---------|---------|------------|
| S3 | Raw & processed data | Lifecycle + encryption |
| Glue | Metadata catalog | IAM policies per dataset |
| SageMaker | Model training & inference | VPC endpoints + spot instances |
| Redshift | Analytical queries | Concurrency scaling |
| DynamoDB | Feature flags | TTL, auto‑scaling |

We introduced a cost‑tracking dashboard in CloudWatch and scheduled quarterly reviews.  

**Result**  
Within 6 months we cut cloud spend by **35% ($10k/month)**, reduced duplicated data pipelines by **40%**, and improved deployment velocity from 3 weeks to 1 week for new ML models.  

**Reflection (Bar‑raiser check)**  
I took full ownership of the problem, dove deep into cost & usage metrics, quantified impact, and learned that a lightweight governance framework can prevent “service sprawl” while still enabling rapid experimentation—exactly what Amazon expects from leaders.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
