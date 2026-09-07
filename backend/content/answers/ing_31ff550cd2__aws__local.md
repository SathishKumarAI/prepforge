---
qid: ing_31ff550cd2__aws__local
question: 'Explain: Pattern 3: Vision-First (Page-as-Image) — Multimodal Rag'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 499
total_tokens: 738
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:18:00-05:00'
sources: []
---

**Situation & Task**  
At my last company we had a product that served technical documentation to engineers via a web portal. Users complained the search was “text‑only” and they spent an average of **8 min per session** trying to find code snippets in PDFs or screenshots. I led a vision‑first redesign: a *Page‑as‑Image* multimodal Retrieval‑Augmented Generation (RAG) system that treated every page as a visual context for the LLM.

**Action**  
1. **Data pipeline** – Ingested 120 k PDF/PNG pages into an S3 bucket, ran Textract to extract OCR text and stored embeddings in DynamoDB via SageMaker Feature Store.  
2. **Multimodal RAG engine** – Deployed a multimodal LLM (SageMaker endpoint) that ingests both the extracted text vector and a CLIP‑derived visual embedding per page.  
3. **Query routing** – Lambda authorizer evaluated query intent; if “image‑based” it fetched top‑k pages by cosine similarity from DynamoDB, otherwise used pure text embeddings.  
4. **Scalability & cost** – Leveraged EC2 Spot instances for the heavy inference phase, auto‑scaling on CPU/GPU metrics; overall cost dropped 35 % compared to our previous on‑prem GPU cluster.

**Result**  
- Average session time fell from **8 min to 3.5 min** (a 56 % reduction).  
- Search click‑through rate rose 4×, and user satisfaction scores jumped from 68 % to 92 %.  
- System handled a peak of 15k concurrent queries with <1 s latency, meeting our SLA.

**Leadership Principles**  
*Customer Obsession* – we re‑imagined the search experience based on real user pain points.  
*Ownership & Dive Deep* – I built end‑to‑end pipelines, profiled bottlenecks, and iterated on embeddings until performance met targets.  

Bar‑raisers would note my clear ownership, deep technical dive (embedding choice, Lambda orchestration), quantified impact, and rapid learning from initial OCR mis‑alignments that we fixed by adding a confidence threshold.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
