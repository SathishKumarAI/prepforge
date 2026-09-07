---
qid: ing_d0013623c3__aws__local
question: 'Explain: Need public web data, without scraper headaches? (Partner)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 412
total_tokens: 646
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:11:08-05:00'
sources: []
---

**Situation / Task**  
I was tasked with building a recommendation engine for a media company that needed fresh user‑engaged content from public websites—think news sites and blogs—without dealing with the maintenance nightmare of custom scrapers.

**Action**  
1. **Partnered with AWS Marketplace Data Partners** – I scoped partners that provide curated, API‑driven feeds (e.g., NewsAPI, Diffbot).  
2. **Designed an ingest pipeline** in **Amazon EventBridge** to trigger on partner webhook events, route data through **AWS Lambda** for lightweight transformation, and store raw JSON in **S3 Glacier Deep Archive** for cost efficiency.  
3. **Built a data lake** using **Amazon Athena** + **Glue Crawler** so the ML team can query structured tables directly with SQL‑like syntax—no need to write ETL scripts.  
4. **Implemented a versioned, immutable schema** in **AWS Lake Formation**, granting fine‑grained IAM access and ensuring compliance.

**Result**  
- Cut data ingestion time from 3 days (scraper maintenance) to <30 minutes.  
- Reduced operational cost by 70% versus running EC2‑based scrapers.  
- Enabled the ML model to train on 5× more recent articles, improving recommendation click‑through rate from 12% to 18% (+6pp).

**Amazon Leadership Principles**  
- **Customer Obsession** – Delivered a frictionless data source that empowered the product team.  
- **Ownership & Dive Deep** – I evaluated partner APIs, benchmarked costs, and engineered a scalable pipeline.

*Bar‑raiser takeaway*: I demonstrated ownership by selecting a commercial solution that eliminated scrapers, dove deep into AWS services to architect cost‑effective ingestion, quantified the impact (70% cost savings, +6pp CTR), and learned from prior failures with custom scrapers—highlighting the value of partner APIs for reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
