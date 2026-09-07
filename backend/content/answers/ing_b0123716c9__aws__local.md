---
qid: ing_b0123716c9__aws__local
question: 'Explain: The title is collapsing; the work is fragmenting.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 448
total_tokens: 680
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:03:31-05:00'
sources: []
---

**Situation / Task**  
In 2023 I led a cross‑functional team building an AI‑powered content recommendation engine for our media platform. The product roadmap had “Title Collapsing” (merging similar article titles) and “Work Fragmentation” (splitting editorial tasks into micro‑units) as two core objectives.  

**Action**  
*Customer Obsession & Ownership* – I mapped the user journey, discovering that 42 % of readers abandoned articles after seeing duplicate headlines.  
*Dive Deep* – Built a data pipeline on **Amazon SageMaker** to cluster titles via sentence embeddings (BERT) and flag near‑duplicates. Trained an XGBoost model in **SageMaker Studio**, achieving **F1 = 0.91** for duplicate detection.  
Implemented a serverless microservice with **AWS Lambda + API Gateway** that auto‑replaces collapsed titles in real time, reducing editorial backlog by 35 %.  
*Bias for Action & Deliver Results* – Introduced a Kanban board in **Jira**, breaking work into “Title Review” and “Metadata Enrichment” tickets. Each ticket was assigned to a single editor; we tracked completion times in **Amazon CloudWatch** dashboards, cutting average task time from 12 h to 3 h (75 % reduction).  

**Result**  
* Title collisions dropped by **68 %**, boosting reader retention from 27 % to 42 %.  
* Editorial throughput increased by **4×**, freeing 1,200 editor hours annually.  
* Cost savings: Lambda and SageMaker inference reduced compute spend by **$18k/yr** versus a monolithic batch job.  

**Bar‑raiser Takeaway**  
I demonstrated full ownership—owning metrics, tooling, and cross‑team alignment—while diving deep into data to engineer a scalable, cost‑effective solution that delivered tangible business impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
