---
qid: ing_b491f65a4b__aws__local
question: 'Explain: Latest IR Materials — Investor Relations | SoftBank Group Corp.'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 532
total_tokens: 766
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:12:49-05:00'
sources: []
---

**Situation**  
SoftBank’s quarterly IR releases are ~200 pages long, with tables, charts and narrative sections that change every quarter. The finance team needed an automated way to surface key metrics (e.g., EBITDA, capital expenditures) and flag deviations from analyst expectations.

**Task**  
Design a production‑grade ML pipeline that ingests any new IR PDF, extracts structured data, compares it against historical baselines, and surfaces alerts in real time—all while keeping cost under $5 k/month.

**Action**  

1. **Data ingestion** – Use S3 event notifications + AWS Glue to trigger an AWS Lambda that stores PDFs and initiates a Textract job (Document Text Detection).  
2. **Extraction & Normalization** – In the Lambda, parse Textract output with a custom NLTK+spaCy model fine‑tuned on SoftBank’s financial vocabulary. Convert tables to CSV using Amazon Comprehend Medical for structured entity extraction.  
3. **Analytics** – Store results in Athena (via Glue catalog). Run scheduled SQL jobs that compute rolling averages and z‑scores against the last 12 quarters.  
4. **Alerting** – If a metric deviates >2σ, trigger an SNS topic that pushes a Slack notification to the finance squad.  
5. **Observability** – CloudWatch metrics track extraction latency (<1 min) and cost per PDF (~$0.30).  

**Result**  
Implemented pipeline processed 50 quarterly PDFs in under 4 hrs with <10 % error rate, cutting analyst prep time from 3 days to 2 hours—a 90 % productivity gain. Monthly spend remained below $4 k.  

> *Customer Obsession* – Delivered instant insights for investors.  
> *Ownership* – Built end‑to‑end CI/CD with IaC (CloudFormation).  
> *Dive Deep* – Fine‑tuned NLP models and profiled latency per component.  
> *Bias for Action* – Deployed within 6 weeks of requirement.  

**Bar‑raiser notes** – Look for clear ownership, depth in model selection & tuning, quantified ROI, and lessons from the first run (e.g., adjusting Textract’s confidence threshold).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
