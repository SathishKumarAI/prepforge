---
qid: vq_a2fb0dd0bf__star__local
question: How do you implement data masking in ADF for sensitive data?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 335
total_tokens: 574
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:13:00-05:00'
sources: []
---

**Situation** – In a recent migration of our customer‑onboarding pipeline to Azure, the source SQL database contained SSN and credit card numbers that had to be protected before landing in our analytics warehouse. The compliance team flagged any plaintext exposure as a breach risk.

**Task** – I was tasked with adding automated data masking within ADF so that every run of the pipeline would strip or obfuscate those columns while still allowing downstream BI tools to ingest a consistent schema.

**Action** – I configured a Mapping Data Flow in ADF, added source and sink datasets, and introduced a *Derived Column* transformation. Using conditional expressions, I replaced SSNs with a masked pattern (e.g., `XXXX-XX-1234`) and credit cards with a hash (`HASH(credit_card)`). I parameterized the mask format so we could toggle between “mask” and “pass‑through” for testing. I also added an *Expression* that logged original values to a separate audit table via a sink, ensuring traceability without exposing data in transit. Finally, I scheduled the pipeline with incremental refresh triggers and monitored throughput using ADF’s monitoring dashboard.

**Result** – The new flow masked 100% of sensitive records, reduced compliance audit time by 70%, and maintained a 95 % success rate for nightly loads. I learned how to balance strict masking rules with performance considerations in large‑scale ETL jobs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
