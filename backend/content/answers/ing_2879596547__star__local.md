---
qid: ing_2879596547__star__local
question: 'Explain: Create an OpenSearch Service domain — Embed Amazon OpenSearch
  Service dashboards in your application | AWS Big Data Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 411
total_tokens: 660
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:49:15-05:00'
sources: []
---

**Situation**  
At my previous company we had a real‑time analytics portal for IoT sensor data that was built on an old self‑hosted Elastic stack. The dashboard team kept asking for faster query performance, and the maintenance overhead was killing our dev velocity.

**Task**  
I was tasked with provisioning a new Amazon OpenSearch Service domain, migrating the existing indices, and embedding interactive dashboards directly into our React application while keeping latency under 200 ms for 95% of queries.

**Action**  
First, I used Terraform to spin up a dedicated OpenSearch domain (10 m3.medium.search nodes, auto‑scaling enabled) with fine‑tuned index templates for time‑series data. I then scripted an AWS Glue ETL job that pulled the old indices from S3, transformed them into OpenSearch’s bulk format, and loaded them via the REST API—saving us a full rebuild of the pipeline. For embedding dashboards, I leveraged the OpenSearch Dashboards (formerly Kibana) “embed” mode: generated secure signed URLs with short‑lived IAM policies, wrapped them in an iframe, and added a custom React component that refreshed data every 5 seconds. Finally, I set up CloudWatch metrics to monitor query latency and used the domain’s fine‑grained access control to restrict API keys to read‑only dashboards.

**Result**  
Query latency dropped from ~1.2 s to <200 ms for 95% of requests, and the new dashboards were loaded in under 3 seconds on average. The migration cut operational costs by 30% (eliminating on‑prem hardware) and freed the dev team to focus on feature development. I learned how to balance cost, performance, and security when moving from self‑hosted Elastic to managed OpenSearch, and how embedding dashboards can dramatically improve user experience without compromising data safety.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
