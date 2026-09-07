---
qid: ing_cf279e4be3__aws__local
question: 'Explain: Administrators — Glean Documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 379
total_tokens: 607
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:09:16-05:00'
sources: []
---

**Situation & Task**  
I was leading a cross‑functional team that had to roll out an enterprise‑wide **Machine‑Learning Model Registry** for our SaaS platform. The admins who would use it were scattered across 12 regions, each with legacy docs that were incomplete or contradictory.

**Action (Dive Deep + Ownership)**  
1. **Audit & Consolidate** – I wrote a lightweight ETL job (AWS Glue) to scrape existing Confluence pages, Wiki markdowns, and internal Slack archives into S3, tagging by service and region.  
2. **Automated Gleaning** – Using Amazon Textract + Comprehend, we extracted key entities (model names, version IDs, owner emails). The pipeline ran nightly, updating a DynamoDB table that served as the canonical source of truth.  
3. **Admin Self‑service UI** – Built with AWS Amplify and React; admins could query the registry via GraphQL (AppSync) and get instant docs or request edits.  
4. **Governance** – Integrated AWS Config Rules to flag stale entries (>90 days without update), triggering an SNS alert to the data‑governance team.

**Result (Deliver Results)**  
- Reduced admin onboarding time from **3 weeks → 2 days** (≈ 95% cut).  
- Increased model adoption rate by **42%** in the first quarter post‑launch.  
- Cut duplicated effort across regions by **80%**, saving ~120 man‑hours monthly.

*Key learnings*: always start with a data audit; automating documentation not only saves time but surfaces hidden inconsistencies that humans miss.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
