---
qid: ing_8daaffc0eb__aws__local
question: 'Explain: Compensation (2025 data, engineering roles)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 418
total_tokens: 648
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:46:01-05:00'
sources: []
---

**Customer Obsession & Deliver Results**

> **Situation:** In Q1 2025 I led a cross‑functional team to redesign the compensation model for our global engineering org (≈12k people). The goal was to align pay with market, retain top talent, and keep the budget under $3B.

> **Task:** Build a data‑driven framework that balances base, equity, and benefits while ensuring internal parity across regions.

> **Action:**
> *Collected 2024 market comps (Glassdoor, Levels.fyi) + internal pay rolls → built an automated pipeline in **AWS Glue** to ingest, clean, and aggregate the data nightly.  
> *Designed a **Lambda‑driven** microservice that applies percentile rules per level & geography, stores results in **DynamoDB**, and feeds a **QuickSight** dashboard for leadership review.  
> *Implemented a **step‑function workflow** to run quarterly reviews, trigger alerts when pay gaps exceed 10 % vs market, and auto‑generate recommendation PDFs (via **S3 + PDFKit**).  
> *Conducted A/B tests on equity vesting schedules; saw a 15 % drop in churn for high‑impact engineers.

> **Result:** 
> *Achieved 98 % alignment with external benchmarks.  
> *Reduced cost variance by $200M YoY while increasing retention from 78 % to 92 %.  
> *Enabled real‑time decision making, cutting review cycle time from 3 months to 2 weeks.

**Bar‑raiser Notes:** Look for clear ownership (team & data pipeline), deep dive into AWS services and trade‑offs (cost vs. scalability), measurable impact (retention %, cost savings), and lessons learned (iterating equity schedules).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
