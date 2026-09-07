---
qid: ing_566f7a568b__aws__local
question: 'Explain: Document your data — JSON Schema'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 408
total_tokens: 636
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:41:35-05:00'
sources: []
---

**Situation / Task**  
At my previous company we launched a document‑classification ML pipeline that ingested unstructured PDFs and produced structured JSON for downstream analytics. The data lake grew from 200 GB to 5 TB in six months, but without schema governance the model drifted—accuracy fell by 12 % after the first quarter.

**Action**  
I took *Ownership* and *Dive Deep*:  
1. **Defined a canonical JSON Schema** (using AWS Glue Data Catalog) that captured every required field, type constraints, and semantic validation rules.  
2. Deployed an **AWS Step Functions** workflow that:  
   - Extracts text via Textract → stores raw text in S3.  
   - Runs a Lambda validator against the schema; rejects or tags non‑compliant documents for reprocessing.  
   - Feeds compliant data into SageMaker training pipelines.  
3. Implemented **Athena queries** and **Glue crawlers** to continuously audit the catalog, generating monthly compliance reports.  
4. Added *Customer Obsession* by exposing a real‑time API (API Gateway + Lambda) that lets downstream teams query schema health metrics.

**Result**  
- Reduced model drift by **28 %**, improving overall classification F1‑score from 0.78 to 0.84 within three months.  
- Cut data processing costs by **18 %** by eliminating retries on malformed documents.  
- Earned a *bar‑raiser* note for demonstrating end‑to‑end ownership, deep technical insight, and clear, quantified impact.

This approach balances scalability (S3 + Glue), availability (Step Functions retries), cost (serverless), and maintainability—core to Amazon’s engineering culture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
