---
qid: ing_b8a3450b81__aws__local
question: 'Explain: VLM-Augmented Ingestion Pipeline — Multimodal Rag'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 488
total_tokens: 721
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:21:28-05:00'
sources: []
---

**Answer (Amazon‑style)**  

I built a **VLM‑Augmented Ingestion Pipeline** for a multimodal Retrieval‑Augmented Generation (RAG) service that powers our internal knowledge base.  
**Situation:** Our analysts struggled to find relevant documents because the search index only contained text; images and diagrams were ignored, causing 30 % slower query times and 18 % lower satisfaction scores on the help portal.  

**Task:** Design a pipeline that ingests PDFs, PowerPoints, and scanned white‑board photos, extracts both visual and textual features, and stores them in an index usable by a multimodal LLM.

**Action:**  
1. **Extract & Embed** – Use **Amazon Rekognition** to detect objects/handwritten notes; feed the image into **AWS SageMaker** hosting a pre‑trained Vision‑Language Model (e.g., CLIP). Text is OCR’d via **Textract** and embedded with **SageMaker Endpoint**.  
2. **Indexing** – Store embeddings in an **Amazon Kendra** knowledge base, keyed by document ID, and persist raw files in **S3**.  
3. **Query Fusion** – At runtime, the LLM (via **Bedrock**) receives the query text + optional image; it retrieves top‑k candidates from Kendra using a cosine similarity score over multimodal embeddings.  
4. **Scalability & Cost** – Rekognition and SageMaker batch jobs run on spot instances, cutting cost by 45 %. Kendra scales automatically for millions of docs while keeping latency <200 ms per query.

**Result:** After deployment, search relevance improved from 68 % to 91 %, response times dropped 40 %, and user satisfaction rose 25 % (NPS +15).  

*Leadership Principles:* **Customer Obsession** – we solved a real pain point; **Ownership** – I led the end‑to‑end design, trade‑off analysis, and rollout.  

Bar‑raiser notes: depth in model choice, clear quantification of impact, and learning from an earlier attempt that used only OCR (which missed visual context).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
