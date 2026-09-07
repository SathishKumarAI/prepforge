---
qid: ing_ac132ba23a__aws__local
question: 'Explain: Required authorization — Create an index | Elasticsearch API documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 434
total_tokens: 666
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:55:19-05:00'
sources: []
---

**Answer (Amazon style)**  

During a migration to **Amazon OpenSearch Service**, I led the team that had to expose an “index‑creation” endpoint for our analytics app while keeping it secure.  
- **Leadership Principles:** *Customer Obsession* – we needed to let internal users create indices quickly without compromising data; *Ownership* – I took full responsibility for the policy design and rollout.

**Situation / Task**  
The legacy on‑prem cluster allowed any authenticated user to run `PUT /my-index`. In OpenSearch, that exposed us to privilege escalation. My goal: grant **exactly** index‑creation rights to a subset of developers while keeping read/write access separate.

**Action**  
1. Created an IAM policy with the `opensearch:CreateIndex` action scoped to the target domain and index prefix (`my-index-*`).  
2. Added the policy to a dedicated Cognito identity pool role that only the dev team could assume.  
3. Updated the OpenSearch domain’s access policy to allow `es.amazonaws.com` via `aws:SourceArn` checks, ensuring requests come through AWS SDKs with signed headers.  
4. Instrumented CloudWatch metrics (index‑creation latency, count) and set an alert for anomalous spikes.

**Result**  
- Reduced accidental index creations by **95 %**, eliminating 12 manual incidents per month.  
- Maintained a **99.9 %** availability SLA with no cost impact; the policy added < $0.01/month to IAM usage.  

**Bar‑raiser note:** I demonstrated *ownership* by mapping business need → AWS security primitives, *dive deep* into policy scopes, quantified the impact, and learned that a single‐purpose role drastically cuts noise in audit logs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
