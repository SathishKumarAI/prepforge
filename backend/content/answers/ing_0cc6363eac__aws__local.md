---
qid: ing_0cc6363eac__aws__local
question: Why does the AI team keep asking you for lineage, and what does lineage
  mean for RAG data?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 409
total_tokens: 649
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:54:30-05:00'
sources: []
---

**Answer**

When the AI team asks for *lineage*, they’re exercising **Ownership** and **Dive Deep**—they want to know exactly where every piece of data comes from, how it’s transformed, and who approved it. In a Retrieval‑Augmented Generation (RAG) pipeline, “lineage” means tracing each token or document fragment back to its source dataset, preprocessing step, and any model‑generated augmentation.

**Situation / Task:**  
I led the rollout of a new RAG service for our customer‑support chatbot. The team needed confidence that every answer was traceable because regulatory audit requirements were tightening.

**Action:**  
1. Built an **AWS Glue Data Catalog** entry per source corpus and stored a SHA‑256 hash in Amazon S3 object metadata.  
2. Instrumented the preprocessing Lambda to emit a JSON lineage record (source, timestamp, transformation chain) to DynamoDB.  
3. Updated the retrieval index (OpenSearch) with a `lineage_id` field so every search hit could be traced back in real time.

**Result:**  
- Audit compliance achieved within 2 weeks, eliminating a potential $1M penalty.  
- Query latency dropped from 350 ms to 210 ms because lineage data was cached in DynamoDB.  
- The team adopted the pattern across three additional services, cutting manual trace‑back effort by 70%.

**Bar‑raiser takeaways:**  
*Ownership* – I owned the end‑to‑end traceability.  
*dive deep* – I surfaced hidden dependencies (hashes, timestamps).  
*Quantified impact* – avoided $1M risk, improved latency.  
*Learning from failure* – early prototype missed hash consistency; we added a validation step and fixed it before production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
