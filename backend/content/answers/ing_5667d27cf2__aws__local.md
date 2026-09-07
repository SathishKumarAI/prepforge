---
qid: ing_5667d27cf2__aws__local
question: 'Explain: Clarifying questions & assumptions — Document Intelligence Pipeline'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 613
total_tokens: 843
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:41:20-05:00'
sources: []
---

**Situation / Task**

At my previous role I led the design of a **Document‑Intelligence (DI) pipeline** that extracts structured data from unstructured PDFs for an enterprise analytics platform. The stakeholder asked me to “clarify assumptions and document the pipeline.” My goal was to deliver a repeatable, cost‑efficient architecture that could scale to 10 M documents per month.

**Action**

1. **Clarifying Questions & Assumptions**
   * What data fields are required? (Invoice total, PO number, dates)
   * Acceptable latency? (≤30 s for batch ingestion)
   * Tolerance for OCR errors? (≤2 % false‑positive rate)
   * Compliance: data must stay in‑region and be encrypted at rest.
   * Expected growth: 200 % YoY.

   I documented these as a “Requirements & Assumptions” matrix, shared with product, security, and finance teams for sign‑off.  
2. **Design & AWS Services**
   * **S3** (event‑driven) → trigger **Step Functions**  
   * Step Functions orchestrates:
     * **Lambda**: pre‑processing (image enhancement) – cost $0.20 per 100 k calls
     * **Amazon Textract**: OCR + form extraction – billed per page ($1.50/page)
     * **Glue**: transform to Parquet, enrich with metadata
     * **Redshift Spectrum** or **Athena** for downstream analytics  
   * **SQS** decouples ingestion from processing; auto‑scales with Lambda concurrency.
3. **Scalability & Availability**
   * Serverless components give 99.999% SLA automatically.
   * Multi‑region read replicas (Redshift) ensure low‑latency analytics for global users.
4. **Cost & Trade‑offs**
   * Forecast: $15 k/month for Textract + $2 k for compute, vs. on‑prem OCR ($120 k upfront).  
   * We chose serverless to avoid over‑provisioning; trade‑off is higher per‑page cost but lower CAPEX.

**Result**

Implemented pipeline within 6 weeks, processing 5 M docs/month with <1 % error rate and reducing data prep time from 48 h to 3 h. Cost savings of 70 % over legacy stack. Stakeholder reported “high confidence in data quality” and I presented the design at AWS re:Invent.

**Reflection**

* **Ownership** – drove cross‑team alignment, risk mitigation, and cost optimization.  
* **Dive Deep** – quantified OCR error rates, latency budgets, and CAPEX vs OPEX trade‑offs.  
* Learned that early assumption validation prevents costly redesigns; I now always surface a “Requirements & Assumptions” doc before architecture work.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
