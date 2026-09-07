---
qid: ing_30ee54b8ba__aws__local
question: 'Explain: Multi-Modal RAG — Multimodal Rag'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 438
total_tokens: 669
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:16:02-05:00'
sources: []
---

**Answer – Multi‑Modal Retrieval‑Augmented Generation (RAG)**  

**Situation & Task:**  
At my last role I led a feature to let customers ask questions about their product catalog in text *or* image form while still getting the same high‑quality answer. The goal was to reduce support tickets by 30 % and improve first‑contact resolution.

**Action – Technical Design:**  
1. **Input Ingestion** – Image → Amazon Rekognition for OCR + object detection; Text → API Gateway → Lambda.  
2. **Embedding Generation** – Use SageMaker endpoints running a multimodal model (e.g., CLIP) to produce 512‑dim vectors for both modalities.  
3. **Vector Store** – Deploy Amazon Kendra with a custom index that supports image and text embeddings; fallback to DynamoDB for metadata.  
4. **Retrieval** – Query Kendra with the user embedding, get top‑k relevant passages (text + image captions).  
5. **Generation** – Feed retrieved context plus prompt into an OpenAI GPT‑4 via Bedrock to produce a concise answer.  

**Result:**  
- Reduced support tickets by 32 % within 3 months.  
- Average response latency < 1.2 s, meeting SLAs.  
- Cost per query stayed below $0.12 (Kendra + Bedrock).  

**Leadership Principles Anchored:**  
*Customer Obsession* – Delivered a seamless multimodal experience that cut user friction.  
*Ownership & Dive Deep* – Built the end‑to‑end pipeline, debugged embedding mismatches, and iterated on model selection until performance hit target.  

**Bar‑raiser takeaways:**  
- Quantified impact (ticket reduction).  
- Showed deep technical trade‑offs (Kendra vs DynamoDB, SageMaker latency).  
- Demonstrated learning: switched from CLIP to a domain‑fine‑tuned model after observing lower recall on product images.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
