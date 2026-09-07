---
qid: ing_394e0e2377__aws__local
question: 'Explain: Need public web data, without scraper headaches? (Partner)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 498
total_tokens: 732
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:34:36-05:00'
sources: []
---

**Situation & Task**  
When building a recommendation engine for our marketplace, I needed up‑to‑date product and review data from external sites (e.g., Amazon, Walmart). Traditional web scraping caused rate limits, IP bans, and brittle HTML parsing—delaying model training by 3–4 days. My goal was to replace scrapers with a reliable partner‑API pipeline that delivered fresh data every 12 hours while keeping costs under $2k/month.

**Action (Technical)**  
1. **Partner API Integration** – Signed contracts with two data providers offering RESTful endpoints for product catalogs and reviews, each with generous rate limits.  
2. **AWS Architecture**  
   * **API Gateway + Lambda**: Expose a single `GET /partner-data` endpoint; Lambda authorizes requests, validates signatures, and forwards calls to partners.  
   * **SQS FIFO**: Queue partner responses for idempotent processing.  
   * **DynamoDB Streams → Lambda**: Upsert records into a normalized table (`Products`, `Reviews`).  
   * **S3 + Athena**: Store raw JSON blobs (audit trail) and run ad‑hoc analytics.  
   * **Glue ETL**: Cleanse, dedupe, and enrich data before feeding SageMaker training jobs.  
3. **Monitoring & Scaling** – CloudWatch Alarms on Lambda errors trigger SNS alerts; auto‑scaling of Lambda concurrency ensures 99.9 % availability.

**Result**  
- Reduced data latency from *4 days* to *12 hours*.  
- Cut operational costs by **70 %** compared to a scraper stack (EC2 + cron + headless browsers).  
- Improved model freshness led to a **15 % lift in conversion rate** on featured listings.

**Learning & Ownership**  
I documented the failure modes of the previous scraper, identified key metrics for success, and iterated the design with cross‑functional teams. The partner‑API solution not only met scalability demands but also positioned us to add new data sources cost‑effectively—demonstrating **Ownership**, **Dive Deep**, and a strong **Bias for Action** mindset.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
