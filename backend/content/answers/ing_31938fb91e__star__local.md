---
qid: ing_31938fb91e__star__local
question: 'Explain: Solution overview — Embed Amazon OpenSearch Service dashboards
  in your application | AWS Big Data Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 320
total_tokens: 565
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:07:30-05:00'
sources: []
---

**Situation:**  
At my last role I was tasked with giving our sales analytics team a real‑time view of campaign performance. Their existing BI stack used Tableau, but the latency for fresh data was too high and licensing costs were rising.

**Task:**  
I needed to embed an interactive search and visualization layer directly into our internal web portal, keeping it lightweight, secure, and cost‑effective while still delivering near real‑time dashboards on campaign metrics.

**Action:**  
I chose Amazon OpenSearch Service as the underlying engine. First I set up a daily ingestion pipeline using Kinesis Data Firehose to stream clickstream logs into an OpenSearch domain, applying an ingest node pipeline to parse JSON and enrich documents with campaign IDs. Then I used the OpenSearch Dashboards (formerly Kibana) API to create saved dashboards for key KPIs: impressions, CTR, conversion rate. Using the OpenSearch Dashboards iframe embedding feature, I wrapped each dashboard in a secure, authenticated iframe within our React portal, applying fine‑grained IAM roles and a custom Lambda authorizer to enforce user access. I also added an autoscaling policy on the domain to handle traffic spikes during peak campaign periods.

**Result:**  
The embedded dashboards cut data latency from 12 hours to under 5 minutes, improved analyst productivity by 35%, and reduced BI licensing spend by 40%. I learned how to balance OpenSearch cluster sizing with cost while ensuring secure embedding of dashboards in a production application.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
