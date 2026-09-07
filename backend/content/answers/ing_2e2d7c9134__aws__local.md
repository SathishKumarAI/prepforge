---
qid: ing_2e2d7c9134__aws__local
question: 'Explain: Automated Evaluators — Langsmith Observability'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 414
total_tokens: 643
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:09:46-05:00'
sources: []
---

**Situation / Task**  
While building a generative‑AI product, we noticed that model drift and hallucinations were slipping through our QA pipeline. The goal was to create *Automated Evaluators* powered by **Langsmith Observability** so we could surface quality issues in real time and reduce manual review hours.

**Action**  
1. **Ownership & Dive Deep** – I mapped the data flow from prompt → LLM → response, identified key metrics (BLEU, ROUGE, hallucination score), and built a Lambda‑driven pipeline that ingests Langsmith traces into Amazon Kinesis Data Streams.  
2. **AWS Services** –  
   * **Amazon DynamoDB** stores per‑prompt evaluation scores with TTL for cost control.  
   * **Amazon SageMaker Ground Truth** is used to generate labeled gold standards at scale.  
   * **Amazon CloudWatch & X-Ray** provide observability into the evaluator microservice.  
3. **Bias for Action** – Deployed a serverless API (API Gateway + Lambda) that runs evaluations on every new trace, publishing alerts via SNS when thresholds are breached.  
4. **Deliver Results** – Within two weeks of rollout, manual review time dropped from 4 hrs/week to 30 min, and the hallucination rate fell by **32%**.

**Result**  
The automated evaluators gave us continuous, data‑driven insight into model quality, enabling rapid iteration while keeping infrastructure costs below $200/month. I documented lessons learned in a post‑mortem: we had over‑aggressive thresholds initially, which caused false positives; adjusting the ROC curve reduced noise by 15%. This experience reinforced my belief that *Customer Obsession* and *Ownership* drive the best technical solutions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
