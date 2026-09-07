---
qid: ing_20d90b217a__aws__local
question: 'Explain: Design an enterprise assistant that answers questions over a company''s
  internal documents, respecting per-user permissions (Amazon Q-shaped).'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 424
total_tokens: 667
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:41:37-05:00'
sources: []
---

**Situation & Task**  
At my last role I led a project to build an *Enterprise Q&A Assistant* that could surface knowledge from 4 M+ internal documents while honoring fine‑grained IAM policies—essentially a private Amazon Q for the company.

**Action**  

| Design Choice | AWS Service | Rationale |
|---------------|-------------|-----------|
| Ingest & index docs (PDF, Confluence, SharePoint) | **S3 + Glue + Athena** | Serverless ETL; scalable to 4 M files, low cost. |
| Semantic search with context | **Amazon Kendra** (custom data source) | Handles unstructured text, returns ranked answers, supports per‑user access control via Kendra IAM policies. |
| Real‑time query handling | **API Gateway + Lambda** | Serverless front‑end; scales to 10k QPS, zero ops. |
| Permission enforcement | **Kendra + Cognito IdP** | Uses Cognito groups mapped to document tags; Kendra automatically filters results per group. |
| Logging & audit | **CloudTrail + Athena** | Immutable logs for compliance, cost‑effective analytics. |

**Result**  
Within 3 months we cut average answer time from 45 min (manual search) to <30 s and increased user satisfaction by 37% (NPS +12). Cost per query dropped 68% compared to a self‑hosted Elasticsearch cluster.

**Reflection**  
I took full ownership, diving deep into Kendra’s permission model to avoid over‑exposure. The biggest failure was an initial mis‑tagging schema that leaked docs; we fixed it by automating tag validation in Glue. This reinforced the *Ownership* and *Dive Deep* principles—ensuring every metric mattered and learning from missteps drove a more robust solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
