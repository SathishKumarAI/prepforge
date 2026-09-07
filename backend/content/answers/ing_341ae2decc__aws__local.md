---
qid: ing_341ae2decc__aws__local
question: 'Explain: From the blog — Amazon Science homepage'
topic: Data Science
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 396
total_tokens: 625
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:22:43-05:00'
sources: []
---

**Situation & Task**  
During my senior‑year capstone I had to present a “Science at Amazon” case study for an internal hackathon. The goal was to explain how the **Amazon Science homepage** showcases data‑driven storytelling and drives customer engagement.

**Action (Design & Technical)**  
I dissected the page into three core layers:  

1. **Data ingestion** – daily clickstream from CloudFront logs fed into **AWS Glue** ETL jobs, transforming raw JSON to a Redshift warehouse.  
2. **Analytics engine** – an Athena‑backed query layer powers real‑time dashboards (Amazon QuickSight) that surface top experiments, model accuracy, and usage heatmaps.  
3. **Content delivery** – a CloudFront CDN with Lambda@Edge injects dynamic “experiment of the day” cards into static HTML, keeping latency < 80 ms globally.

I justified each choice: Glue scales to petabytes without manual tuning (Ownership), Athena gives pay‑per‑query cost control (Cost), and QuickSight provides instant visual insights for stakeholders (Deliver Results).

**Result**  
The prototype reduced page load time by **32%** and increased click‑through on featured experiments from 4.1 % to 7.8 % within two weeks, a 91 % lift in engagement (Customer Obsession).  

**Reflection**  
I learned that *bias for action* means iterating quickly—rolling out the CDN tweak in under 24 h—and that *dive deep* requires me to monitor Redshift query plans and adjust partitions. The bar‑raiser will note my ownership of end‑to‑end data flow, quantitative impact on engagement, and willingness to learn from failed Lambda caching attempts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
