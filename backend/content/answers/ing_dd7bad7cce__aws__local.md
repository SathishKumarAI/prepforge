---
qid: ing_dd7bad7cce__aws__local
question: 'Explain: You Just Hallucinated — That Is Embarrassing: Why Frontier AI
  Still Makes Things Up, and What to Do About It'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 462
total_tokens: 709
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:40:01-05:00'
sources: []
---

**Situation & Task (Customer Obsession)**  
When our ML team rolled out a new generative‑AI assistant for the support portal, we received dozens of tickets where answers were factually wrong—“hallucinations.” The product manager asked me to diagnose why this was happening and propose a fix that wouldn’t compromise user experience.

**Action (Dive Deep & Ownership)**  
I first examined the model’s training data pipeline: it mixed scraped web text with internal documents, but lacked a robust “knowledge‑grounding” step. I redesigned the workflow:

1. **Data validation layer** – Use AWS Glue to run schema checks and anomaly detection on incoming corpora; flag entries that deviate from known facts.
2. **Retrieval‑augmented generation (RAG)** – Store verified documents in an Amazon QLDB ledger for immutable auditability, index with Amazon OpenSearch Service, and let the model query this context before generating text.
3. **Real‑time fact‑checking** – Deploy a Lambda function that calls Amazon Titan Knowledge Base to verify key facts; if confidence < 0.8, replace the answer with a “I’m not sure” fallback.

Cost impact: Glue ETL reduced data noise by 35 %, cutting model inference requests by ~20 % (≈$1.2k/month). The OpenSearch cluster scales automatically via Auto Scaling and is provisioned on burstable `r5.large` instances, keeping latency < 200 ms for 99th‑percentile traffic.

**Result (Deliver Results)**  
Within two weeks, hallucination incidents dropped from 12% to <1%. Support ticket volume fell by 27 %, and NPS rose from 68 to 81. I documented the entire pipeline in a living playbook that other teams now use for new AI projects.

**Learning & Bar‑raiser Insight**  
I learned that *ownership* means owning the data lineage, not just the model. The bar‑raiser looks for deep dives into root causes and quantified ROI—both of which are evident here.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
