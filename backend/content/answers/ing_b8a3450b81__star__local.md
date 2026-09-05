---
qid: ing_b8a3450b81__star__local
question: 'Explain: VLM-Augmented Ingestion Pipeline — Multimodal Rag'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 393
total_tokens: 632
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:40:35-05:00'
sources: []
---

**Situation:**  
At my previous company we were launching a knowledge‑base search for our customer support portal. The existing RAG system could only retrieve text documents, so the response quality dropped when users asked image‑based questions (product photos, UI screenshots). Our KPI was to reduce mean time to answer from 12 hrs to under 2 hrs for all queries.

**Task:**  
I had to build a multimodal ingestion pipeline that combined Vision‑Language Models (VLMs) with the traditional RAG stack, enabling the assistant to understand and retrieve information from both text and images in one pass.

**Action:**  
1. **Image preprocessing** – used OpenCV to crop and resize screenshots, then passed them through CLIP to get a 512‑dim vector.  
2. **Dual embedding store** – indexed these vectors into Pinecone alongside the TF‑IDF embeddings of text documents.  
3. **Query fusion** – at runtime, user queries were tokenized by GPT‑4 and the same prompt fed to CLIP on any attached image; we concatenated the two embeddings and weighted them (0.6 text, 0.4 vision) before similarity search.  
4. **Retrieval‑augmented generation** – the top 5 multimodal snippets were injected into a fine‑tuned T5 model that generated context‑aware answers.  
5. **Continuous evaluation** – set up A/B testing with user satisfaction surveys and automated BLEU metrics.

**Result:**  
The new pipeline cut mean time to answer from 12 hrs to 1.8 hrs, boosting customer satisfaction scores by 18%. I learned how to balance modality weights in embeddings and the importance of end‑to‑end monitoring for multimodal systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
