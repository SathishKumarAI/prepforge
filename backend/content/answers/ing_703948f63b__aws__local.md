---
qid: ing_703948f63b__aws__local
question: 'Explain: Figma LeetCode Practice (Mapped to Reported Topics)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 455
total_tokens: 690
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:38:51-05:00'
sources: []
---

**Situation & Task (Customer Obsession / Ownership)**  
When our product analytics team noticed that new hires were struggling to align coding interview prep with the exact topics we assessed in hiring, I took ownership of building a unified “Figma‑LeetCode Map” dashboard. The goal was to reduce candidate onboarding time by 30 % and increase hiring manager confidence in skill coverage.

**Action (Dive Deep / Bias for Action)**  
1. **Data Collection** – Pulled raw LeetCode submission logs from our internal PostgreSQL repo, mapped each problem to its canonical topic tags, and exported the data to an S3 bucket.  
2. **Design Layer** – Created a Figma component library that visualizes these mappings as interactive heat‑maps. Each node links to the corresponding LeetCode URL and shows pass‑rate statistics.  
3. **Deployment** – Built an AWS Lambda function (Python 3.11) scheduled via EventBridge every night to ingest new submissions, update a DynamoDB table, and trigger a CloudFront invalidation so users always see fresh data.  
4. **Analytics** – Ran Amazon Athena queries over the S3 logs; built QuickSight dashboards that report topic coverage per cohort, average time‑to‑complete, and interview success rates.

**Result (Deliver Results)**  
- Reduced candidate prep time by **32 %** (from 8 hrs to 5.2 hrs).  
- Increased hiring manager satisfaction scores from 3.4/5 to **4.6/5** in post‑interview surveys.  
- Saved the team ~$1,200/month on manual reporting labor.

**Reflection & Learning**  
I learned that a lightweight serverless pipeline (Lambda + DynamoDB) can scale to millions of daily submissions while keeping costs under $50/month. Future iterations will add real‑time alerts for low‑coverage topics using SNS, ensuring continuous improvement in our interview prep ecosystem.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
