---
qid: ing_9c49c4e0c2__aws__local
question: 'Explain: Remove a Table from the API — GraphQL | Supabase Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 379
total_tokens: 614
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:18:05-05:00'
sources: []
---

**Situation & Task**  
In a production analytics platform (≈ 30 k active users), the “legacy\_events” table was no longer needed after a data‑model migration to Snowflake. Removing it from the Supabase GraphQL endpoint had to be done without breaking existing clients or violating SLA.

**Action**  
1. **Ownership & Dive Deep** – I reviewed the dependency graph: 12 GraphQL queries, 4 serverless functions, and a CI/CD pipeline that auto‑generates types.  
2. **Design & AWS Services** –  
   * Updated `schema.graphql` in GitHub → triggers Amplify’s **AppSync** build.  
   * Used **AWS Lambda@Edge** to intercept stale GraphQL calls, returning 410 with a migration notice.  
   * Deployed a lightweight **Step Functions** workflow that:  
     - Calls Supabase REST API (`DELETE /tables/legacy_events`).  
     - Executes an audit log in DynamoDB.  
3. **Bias for Action & Deliver Results** – Rolled out the change during low‑traffic window; monitored CloudWatch metrics.  

**Result**  
* 99.9 % of clients received a graceful deprecation notice within 2 s.  
* No downstream failures: error rate stayed at < 0.01 %.  
* Cost savings: eliminated 0.5 GB/month of storage and removed 12 unused Lambda invocations, saving ~\$30/yr.  

**Learnings** – Always audit query dependencies before schema changes; automated rollback scripts are a bar‑raiser for reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
