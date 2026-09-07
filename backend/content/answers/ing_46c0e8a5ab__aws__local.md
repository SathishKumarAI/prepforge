---
qid: ing_46c0e8a5ab__aws__local
question: 'Explain: What Worked Well — Enterprise Rag'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 367
total_tokens: 594
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:05:40-05:00'
sources: []
---

**What Worked Well – Enterprise Retrieval‑Augmented Generation (RAG)**  

**Situation / Task**  
I led a cross‑functional team to deploy an enterprise RAG system for our global legal department, aiming to cut document review time by 40 % while ensuring compliance with GDPR and ISO 27001.  

**Action**  
- **Ownership & Bias for Action:** I scoped the project in two sprints, locking in AWS services (S3 for raw PDFs, Textract for OCR, Elasticsearch on OpenSearch for vector indexing, SageMaker for fine‑tuned BERT).  
- **Dive Deep & Invent & Simplify:** Implemented a hybrid retrieval pipeline: keyword search → semantic embedding similarity → top‑k documents fed to a GPT‑4 fine‑tuned model. Added a privacy layer that masks personally identifiable information before tokenization.  
- **Customer Obsession:** Ran a pilot with 50 legal analysts, collecting feedback on relevance and turnaround time.  

**Result**  
- Review latency dropped from **3 days → 6 hours** (≈ 80 % faster).  
- Analyst satisfaction rose to **92 %** (vs. 68 % pre‑RAG).  
- Cost per query fell from **$0.12 → $0.04**, saving ~$150k annually.  

**Bar‑raiser cues I hit:** clear ownership, deep technical trade‑offs, quantified impact, and iterative learning—e.g., we re‑trained embeddings after a 12 % drop in precision during the first month.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
