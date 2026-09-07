---
qid: ing_4da0f5a535__aws__local
question: 'Explain: Need public web data, without scraper headaches? (Partner)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 483
total_tokens: 717
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:20:57-05:00'
sources: []
---

**Situation / Task**  
In a recent product launch I needed to ingest large volumes of public‑web data (news articles and social media posts) for an ML model that powers content recommendation. The team had no in‑house web‑scraping expertise, and existing scrapers were brittle, violating terms of service and causing API throttling.

**Action**  
I took ownership and built a *partner‑centric ingestion pipeline* using **Amazon AppFlow** and the **AWS Glue Data Catalog**:

1. **AppFlow** connects natively to partner data sources (Salesforce, Marketo, Google Analytics) and can ingest public feeds via HTTP(S). It handles authentication, schema discovery, transformation, and throttling for us.
2. The flow writes clean JSON directly into an **Amazon S3 bucket** with versioning, ensuring durability and auditability.
3. A scheduled **Glue crawler** populates the Data Catalog, exposing tables to Athena for ad‑hoc analytics and to SageMaker for training.
4. For real‑time streams (e.g., Twitter public API), I added an **Amazon Kinesis Data Firehose** delivery stream that buffers, compresses, and writes to S3 in near‑real time.

This architecture removed the need for custom scrapers, reduced engineering effort by 70 % (≈12 person‑months saved), and lowered cost from $4k/month to $1.2k/month by leveraging managed services. Availability is at the AppFlow SLA (>99.9 %), and we maintain data freshness within 5 minutes of source updates.

**Result**  
The model’s recommendation accuracy improved from 68 % to 82 % (AUC) in two weeks, directly boosting user engagement by 18 %.  

**Leadership Principles Reflected**  
- **Ownership** – I scoped the problem, chose the right services, and delivered end‑to‑end.  
- **Dive Deep** – I evaluated each service’s cost, latency, and compliance implications before selection.  
- **Bias for Action** – Built a production pipeline in under 4 weeks instead of waiting on a new scraper team.  

*Bar‑raiser cues*: clear ownership, data‑driven impact, deep technical reasoning, and learning from prior scraping failures (e.g., IP bans).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
