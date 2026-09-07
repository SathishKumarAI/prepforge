---
qid: vq_a05a85f3a7__aws__local
question: What is the difference between data science and data analytics?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 370
total_tokens: 600
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:06:37-05:00'
sources: []
---

**Answer (Amazon style)**  

> **Leadership Principles:** *Customer Obsession* & *Dive Deep*  

**Situation / Task** – While leading a new product‑launch team at Amazon, I was asked to explain the distinction between data science and data analytics to stakeholders who needed clear guidance on resource allocation.  

**Action** – I framed the difference in terms of **purpose, scope, and outcome**, then mapped each to concrete AWS services and measurable business impact.

| Role | Core focus | Typical workflow | Key AWS services |
|------|------------|------------------|-----------------|
| Data Analytics | Descriptive & diagnostic insights (what happened?) | SQL queries → dashboards → decisions | Athena, Redshift, QuickSight |
| Data Science | Predictive & prescriptive models (what will happen? / how to act?) | Feature engineering → ML training → model deployment | SageMaker, Glue, Lambda |

I highlighted that analytics solves **short‑term operational questions** and can be delivered in ~2 weeks with Athena/QuickSight at <$0.01/query. Data science tackles **long‑term strategic problems**, requiring iterative experimentation, GPU instances (p3) and a cost of ~$1–$5 per training job, but yielding up to 15 % lift in conversion rates when deployed.

**Result** – The stakeholders adopted this taxonomy, re‑allocated $250k from analytics to data science, leading to a 12 % increase in A/B test lift within three months.  

**Bar‑raiser cues:** ownership of the clarification, depth of technical trade‑offs, quantified ROI, and learning from previous mis‑allocation failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
