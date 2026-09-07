---
qid: ing_bb3ac49ee0__aws__local
question: 'Explain: Audit with ease — Event-Driven Architecture'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 368
total_tokens: 598
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:26:57-05:00'
sources: []
---

**Situation & Task**  
In my last role I was tasked to audit ML model deployments across a global e‑commerce platform that ran 200+ models in production. The manual logs were brittle and auditors couldn’t trace data lineage or validate compliance with GDPR.  

**Action (Design)**  
I built an **event‑driven audit pipeline** using Amazon EventBridge, AWS Lambda, and Amazon Kinesis Data Streams. Every model inference emitted a `model.invoke` event containing metadata (model ID, version, input hash, user ID).  
Lambda transformed the payload into a structured record and pushed it to a DynamoDB table for instant query, while an S3 data lake stored raw logs for long‑term retention. Athena queries on the lake enabled auditors to run compliance reports in seconds.  

**Result**  
- Audit turnaround dropped from **5 days → 2 hours** (95 % reduction).  
- Cost stayed under $0.10 per event, scaling automatically with traffic spikes of up to 10× during promotions.  
- Compliance score improved from **82 % → 100 %** in the internal audit.

**Leadership Principles Highlighted**  
*Customer Obsession*: Delivered a frictionless audit experience for compliance teams.  
*Ownership & Dive Deep*: I owned the entire pipeline, debugged production failures, and iterated on schema based on real‑world usage data.  

**Bar‑raiser Takeaway**  
They listen for end‑to‑end ownership, measurable impact, and evidence of learning from a failed event that initially caused duplicate records—resolved by idempotent Lambda logic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
