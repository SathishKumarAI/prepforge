---
qid: ing_0542cc7b6f__aws__local
question: Design an agent that automates an enterprise workflow - say, drafting responses
  to RFPs using internal documents and a CRM. What does "enterprise-grade" add?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 443
total_tokens: 695
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:37:44-05:00'
sources: []
---

**Situation & Task (S)**  
In 2023 I led a cross‑functional team that built an AI agent for drafting RFP responses in a Fortune‑500 manufacturing firm. The goal was to cut response time from **7 days → 2 days** while maintaining compliance with regulatory and brand guidelines.

**Action (A)**  
*Ownership & Customer Obsession*: I scoped the workflow, mapped data lineage from internal docs, knowledge bases, and the CRM (Salesforce).  
*Technical Design*:  
- **LLM inference on Amazon Bedrock** for domain‑specific language.  
- **Retriever‑augmented generation** using **Amazon Kendra** over a consolidated S3 document store (≈ 2 TB) + encrypted CRM snapshots via **AWS Glue**.  
- **Workflow orchestration** with **Step Functions** and **Lambda** to enforce policy checks, versioning, and audit logs in DynamoDB.  
- *Scalability*: Bedrock scales horizontally; Step Functions ensures at‑least‑once delivery.  
- *Availability*: Multi‑AZ deployment, 99.9 % SLA via CloudWatch alarms + automated failover.  
- *Cost*: 70 % reduction vs. on‑prem GPU cluster by leveraging pay‑per‑use Bedrock and spot Lambda.

**Result (R)**  
*Quantified Impact*: Response time dropped from **7 days to 2 days** (71 % faster). Error rate fell from 8 % → 1.2 %. Client satisfaction scores rose from **4.3/5 to 4.9/5** in post‑deployment surveys.

**Learning & Bar‑Raiser Signals**  
I documented the trade‑offs between Bedrock vs. custom fine‑tuning, iterated on prompt engineering based on A/B testing, and built a rollback mechanism that allowed us to revert to previous models within 30 minutes—demonstrating true ownership and bias for action.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
