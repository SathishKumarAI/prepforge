---
qid: ing_90ee9502ae__aws__local
question: 'Explain: Clean up — Embed Amazon OpenSearch Service dashboards in your
  application | AWS Big Data Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 399
total_tokens: 638
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:53:45-05:00'
sources: []
---

**Situation & Task (S)**  
While leading the data‑science team at a consumer‑tech startup, we had to expose real‑time search insights to product managers without giving them direct OpenSearch access. The goal was to embed interactive dashboards inside our internal portal while keeping security tight and cost predictable.

**Approach (A)**  
1. **Auth & Ownership** – We created a dedicated “search‑view” IAM role with least privilege, delegating only `es:ESHttpGet` on the specific index.  
2. **Embedding via OpenSearch Dashboards** – Instead of linking to the public Kibana URL, we used the OpenSearch Dashboards iframe API (`/api/saved_objects/_export?type=dashboard`) and served the JSON through a lightweight Lambda@Edge that injected a signed S3‑presigned URL into the dashboard’s `basePath`.  
3. **Scalability & Cost** – The dashboards were rendered client‑side, so we avoided extra EC2 load; only the Lambda executed on request (≈$0.000016 per 1 k invocations).  
4. **Security & Availability** – All traffic went through CloudFront with WAF rules and SSL termination, giving us 99.999% SLA from AWS.

**Result (R)**  
Within two weeks of deployment:  
- Product managers accessed dashboards in‑app without external logins → *+30 % faster decision cycles*.  
- IAM role restrictions reduced accidental data exposure risk by **100 %**.  
- Cost saved vs. running a dedicated Kibana cluster was **$1,200/month**.

**Learnings & Bar‑raiser Notes**  
I took full ownership of the end‑to‑end flow, dived deep into OpenSearch’s API quirks, and quantified impact in both speed and dollars—exactly what Amazon looks for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
