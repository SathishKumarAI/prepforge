---
qid: ing_f21141537d__aws__local
question: 'Explain: Cross-Field Validation — Document Intelligence'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 409
total_tokens: 637
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:24:17-05:00'
sources: []
---

**Situation / Task**  
I led a team that built *Cross‑Field Validation* for our Document Intelligence (DI) platform—automatically cross‑checking structured fields extracted from invoices against multiple source documents (e.g., PO, contract). The goal was to reduce downstream error rates by 30 % before data entered the finance pipeline.

**Action**  
1. **Ownership & Bias for Action** – I scoped a two‑phase sprint: (a) prototype an NLP module in SageMaker that normalizes field values; (b) integrate with DynamoDB Streams and Step Functions to orchestrate validation workflows.  
2. **Dive Deep** – Conducted root‑cause analysis on 12 k historical invoices, discovering that mismatches often stemmed from date formats or vendor name variations. I engineered a fuzzy‑matching service using Amazon Comprehend Custom Entities + Levenshtein distance in Lambda, caching results in ElastiCache for low latency.  
3. **Invent & Simplify** – Replaced the legacy batch ETL with an event‑driven architecture: S3 triggers → Glue crawler → Redshift Spectrum query → DynamoDB validation state. This cut processing time from 8 h to <30 min.

**Result**  
- Validation accuracy improved from 68 % to **96 %**, cutting downstream rework by **32 %** (≈$120K annual savings).  
- System cost dropped 18 % due to serverless scaling.  

**Bar‑raiser takeaways**  
I demonstrated full ownership, deep technical insight, and a clear, data‑driven impact while learning that early fuzziness in NLP can be mitigated with iterative model tuning—an approach I plan to iterate on for future cross‑document analytics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
