---
qid: ing_f8b05803fc__aws__local
question: 'Explain: Error Taxonomy — Architecture Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 456
total_tokens: 683
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:40:47-05:00'
sources: []
---

**Situation / Task**  
While revamping our recommendation engine I discovered that every micro‑service was returning opaque “generic” errors, making debugging a 2‑hour sprint per incident. My goal: design an **Error Taxonomy Architecture Pattern** that turns error logs into actionable telemetry and cuts mean time to resolution (MTTR) by 70 %.  

**Action**  
1. **Ownership & Customer Obsession** – I mapped every failure point to a *customer impact* score (high, medium, low).  
2. **Dive Deep** – Created a hierarchical error model: `Category > Sub‑category > Code`.  
3. Built an **Event‑Driven pipeline** using **Amazon EventBridge** → **AWS Lambda** → **Amazon OpenSearch Service** for real‑time indexing; persisted to **Amazon DynamoDB** for durable lookups.  
4. Implemented a **GraphQL API** (AppSync) so ops can query error trends by time, service, or impact.  
5. Added **CloudWatch Alarms** that fire when high‑impact errors exceed a threshold, auto‑triggering an SNS alert and a Lambda that patches the offending service via CodeDeploy.  

**Result**  
* MTTR dropped from 2 hrs to **25 min** (a 70 % reduction).  
* Error volume normalized by 60 % because automated remediation handled 80 % of high‑impact faults.  
* Cost: $0.03 per event in OpenSearch, < $5/month for DynamoDB; overall spend < $50/month—well below the previous $200/month spent on manual triage.  

**Learning** – Early failure to tag errors with impact led to noisy alerts; I added a *feedback loop* where users can rate alert relevance, refining thresholds and improving precision by 15 %. This demonstrates true **Ownership**, deep technical insight, and measurable customer value—key bar‑raiser signals for Amazon.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
