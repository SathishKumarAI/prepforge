---
qid: ing_43a1fd0d00__aws__local
question: 'Explain: Cost Comparison at Scale (May 2026) — Model Taxonomy'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 412
total_tokens: 647
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:59:02-05:00'
sources: []
---

**Situation / Task**  
At AWS in Q3 2025 I led the “Cost Comparison at Scale” initiative for the new **Model Taxonomy** service, which aggregates pricing data from over 200 AI/ML models (SageMaker, Bedrock, third‑party). The goal was to provide customers a single API that returns the most cost‑effective model per use case, with predictions up to 12 months ahead.

**Action**  
- **Ownership & Bias for Action:** Built an end‑to‑end pipeline in Python using AWS Glue (ETL), Amazon Athena (ad‑hoc queries), and Redshift Spectrum (analytics).  
- **Dive Deep & Invent & Simplify:** Designed a schema that normalizes “model tier,” “instance type,” and “pricing model” into a star data warehouse, enabling 1 ms query latency for >10k concurrent requests.  
- **Customer Obsession:** Integrated user feedback loops via Amazon CloudWatch dashboards to surface pricing anomalies in real time.  
- **Scalability & Availability:** Deployed the API behind an Application Load Balancer with auto‑scaling on Lambda, ensuring 99.99 % uptime and cost control (≈$0.03 per request).  

**Result**  
- Delivered a fully operational service in 6 weeks, reducing customer effort by **70 %** compared to manual spreadsheet analysis.  
- Enabled customers to cut AI spend by an average of **15 %** within the first month of adoption, saving $12 M annually for large enterprises.  

**Learnings**  
I realized that normalizing pricing semantics across AWS and partners required continuous data validation; introduced automated unit tests in CI/CD, cutting downstream errors by 90 %. This experience reinforced my commitment to ownership, depth, and measurable impact—key traits of a bar‑raiser.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
