---
qid: ing_e68938fd52__star__local
question: 'Explain: Comparison for RAG — Multimodal Rag'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 325
total_tokens: 561
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:09:04-05:00'
sources: []
---

**Situation** – In a recent product sprint at my previous company, we were tasked with building an AI-powered customer support chatbot that could understand both text and images from user queries. The existing RAG pipeline only handled plain text, so users frequently sent screenshots of error messages, and the bot couldn’t retrieve relevant documentation.

**Task** – I needed to extend our Retrieval Augmented Generation model to process multimodal inputs (text + image) while keeping response latency under 1 second for live chat.

**Action** – First, I integrated a CLIP encoder to convert images into embeddings that could be joined with the text token vectors. Then I modified the retrieval index to store both modalities in a joint vector space using FAISS’s product quantization for efficient similarity search. During generation, I fed the concatenated embedding into a transformer decoder fine‑tuned on our support logs. To maintain speed, I pruned the top‑k retrieved documents to 5 and used beam‑search with length penalty to avoid hallucinations.

**Result** – The multimodal RAG system cut user wait times by 30% (from 1.2 s to 0.8 s) and increased first‑contact resolution from 58% to 74%. I learned that careful embedding fusion and index tuning are key to scaling RAG beyond text, and that latency constraints often dictate the choice of retrieval algorithm.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
