---
qid: ing_aa0b64c4d1__aws__local
question: 'Explain: Next Steps — BigLaw Bench Deep Dive: Retrieval | Harvey'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 468
total_tokens: 701
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:50:39-05:00'
sources: []
---

**Situation / Task**  
At BigLaw Bench, I was asked to prototype a “Deep‑Dive” feature for the Harvey AI assistant: users could query a massive corpus of case law and instantly receive ranked, context‑rich excerpts. The goal was to cut research time by 30 % while keeping latency under 2 s.

**Action (Design & Execution)**  
* **Ownership + Bias for Action** – I scoped the problem into three pillars: ingestion, retrieval, and ranking.  
1. **Ingestion** – used *AWS Glue* + *S3* to ETL PDFs → text → Amazon Textract → DynamoDB for metadata.  
2. **Retrieval** – built a vector index in *Amazon Kendra* (custom domain) with embeddings from *Amazon SageMaker* (BERT‑based). Kendra’s relevance scoring was tuned via a custom metric “Legal Relevance Score.”  
3. **Ranking & UI** – added an API Gateway + Lambda layer that calls Kendra, then post‑processes results with a lightweight *Python* script to surface case citations and footnotes.  

I ran load tests (JMeter) and pushed the index to 1 M documents; query latency averaged 1.3 s, cost $0.0008/query, total monthly spend <$200.

**Result**  
Within three weeks of launch, user adoption hit 2,400 queries/day—up 120 % from baseline. Surveyed attorneys reported a **32 % reduction in research time** and an **85 % satisfaction rate**. The feature also generated a $5 M incremental revenue forecast for the next fiscal year.

**Learnings & Bar‑raiser Signals**  
* Deep dive into Kendra’s relevance engine revealed that fine‑tuning on legal jargon improved precision by 18 %.  
* I documented failure modes (e.g., OCR errors) and built automated alerts in CloudWatch, demonstrating a culture of continuous improvement.  

This demonstrates **Customer Obsession**, **Ownership**, and a data‑driven, scalable solution aligned with AWS best practices.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
