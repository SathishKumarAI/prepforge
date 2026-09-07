---
qid: ing_170c433dc6__aws__local
question: 'Explain: That''s why it''s really important to clean'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 406
total_tokens: 635
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:17:54-05:00'
sources: []
---

**Situation & Task**  
At a fintech startup I led the migration of our credit‑score model from an on‑prem Hadoop cluster to **Amazon SageMaker**. The model’s production accuracy had slipped to *73 %* after a surge in user sign‑ups, and stakeholders demanded a 5 % lift within two weeks.

**Action**  
I assumed full ownership: first I performed a *dive deep* audit of the raw data pipeline using **AWS Glue** crawlers and **Amazon Athena** queries. We uncovered that 12 % of rows had inconsistent date formats, 8 % contained impossible values (e.g., negative balances), and 4 % were duplicated across partitions—each error skewed feature distributions.

I designed an automated cleaning workflow:  
- **Glue ETL jobs** to standardize dates, clamp numeric ranges, and deduplicate.  
- A **S3 event trigger** to run the job on every new upload.  
- **Amazon CloudWatch alarms** for anomalies in data quality metrics.

The cleaned dataset fed into a SageMaker training job that improved model precision from *73 %* to **78 %** (a 5‑point jump) and reduced inference latency by 18 %. The cost of the Glue jobs was < $10/day, far below the $200/day penalty for SLA breaches.

**Result**  
We delivered a more reliable credit‑score service, earning a *+12 %* lift in approved loans while cutting operational costs. This experience reinforced my belief that **Customer Obsession** and **Ownership** are inseparable from data hygiene, and it taught me to always quantify the trade‑offs between cleaning effort and business impact.

---

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
