---
qid: ing_3ef60426db__aws__local
question: 'Explain: Why Text-Only RAG Fails — Multimodal Rag'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 428
total_tokens: 662
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:48:15-05:00'
sources: []
---

**Situation:**  
At a prior fintech startup we launched an AI‑powered customer support chatbot that used *text‑only Retrieval‑Augmented Generation (RAG)*. Within two months the bot’s resolution rate dropped from **85 % to 42 %**, and users complained about “irrelevant answers.”

**Task:**  
Own the root cause, redesign the system for higher accuracy, and deliver a scalable, cost‑effective solution.

**Action:**  
1. **Dive Deep into Data** – Analyzed logs; found that many queries involved visual documents (invoices, screenshots). Text‑only embeddings missed key context (e.g., “red cross” indicating an error).  
2. **Invent & Simplify** – Switched to *Multimodal RAG*:  
   - Store PDFs/Images in **Amazon S3**; extract text via **AWS Textract** and image features via **SageMaker Ground Truth + SageMaker Feature Store**.  
   - Build a joint embedding with **SageMaker Neo**‑optimized models (text+vision).  
   - Index embeddings in **Amazon Kendra** for fast similarity search, leveraging its multimodal query support.  
3. **Bias for Action & Ownership** – Deployed incremental rollout; monitored latency and cost in real time using **CloudWatch** dashboards.

**Result:**  
- Resolution rate rose to **78 %** (a 36‑point lift).  
- Average response time improved from **4.2 s to 1.9 s** due to Kendra’s efficient vector search.  
- Operational cost stayed below the baseline by 12 % thanks to on‑demand SageMaker endpoints and S3 lifecycle policies.

**Reflection:**  
The failure taught me that *customer context* (visual cues) matters as much as text. Next time, I’ll validate multimodal needs in the discovery phase and iterate on embeddings before full deployment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
