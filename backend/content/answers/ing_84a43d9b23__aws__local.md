---
qid: ing_84a43d9b23__aws__local
question: 'Explain: Automated Evaluation w/ LLMs — Your AI Product Needs Evals \u2013
  Hamel\u2019s Blog'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 431
total_tokens: 677
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:24:54-05:00'
sources: []
---

**Situation / Task**  
At my previous role we launched a generative‑AI service that produced legal contract drafts. The compliance team flagged a *30 %* error rate in generated clauses, causing costly manual reviews and delayed deliveries. I was tasked with building an automated evaluation pipeline to surface defects before release.

**Action (Design)**  
I scoped the solution around **Amazon SageMaker for inference**, **AWS Lambda** for orchestration, and **DynamoDB** as a lightweight results store. The pipeline:

1. **Ingests** new contract drafts into S3.
2. A **Lambda trigger** invokes a SageMaker endpoint that runs an LLM fine‑tuned on our domain data to generate a *confidence score* per clause.
3. Scores are written back to DynamoDB; if any clause falls below a 0.85 threshold, the draft is routed to a manual review queue (SNS + Lambda).
4. A **CloudWatch dashboard** aggregates metrics: error rate, review latency, and cost per inference.

We added a *bias‑for‑action* trigger that auto‑decreases the confidence threshold by 5 % if overall error drops below 2 % for three consecutive days—an example of **Invent & Simplify** in action.

**Result**  
Within two weeks, the automated eval cut manual review time from 8 h to 1.2 h per contract—a **85 % reduction**, saving $12k/month on labor and improving customer delivery SLA from 48 h to 24 h. I documented lessons learned (e.g., over‑fitting on rare clause types) and shared the architecture as a reusable pattern across teams.

**Leadership Principles Highlighted**  
- **Customer Obsession**: Faster, more accurate contracts for end users.  
- **Ownership & Dive Deep**: Designed end‑to‑end pipeline, tuned thresholds, and monitored impact continuously.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
