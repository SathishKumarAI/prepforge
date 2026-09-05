---
qid: ing_3996702cfb__star__local
question: 'Explain: Embeddings — Rag And Retrieval'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 337
total_tokens: 570
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:24:04-05:00'
sources: []
---

**Situation:**  
When I joined a fintech startup, our customer support chatbot was stuck answering generic FAQs; the open‑domain LLM kept hallucinating product details because it had no quick way to pull in the latest policy documents.

**Task:**  
I needed to build an end‑to‑end Retrieval-Augmented Generation (RAG) pipeline that could fetch the precise policy text and feed it into a GPT‑4 model, reducing misinformation by at least 70% while keeping response latency under 1 s for live chat.

**Action:**  
First, I scraped all policy PDFs and converted them to clean UTF‑8 text. Using Sentence‑Transformers (all-MiniLM-L6-v2) I generated 768‑dimensional embeddings per paragraph and stored them in a Pinecone vector index with cosine similarity scoring. On the frontend, I built an async FastAPI endpoint that, given a user query, queried Pinecone for the top‑3 passages, concatenated them with a prompt template, and streamed GPT‑4’s answer back to the UI. I added cache layers (Redis) and batched embeddings to keep CPU usage low.

**Result:**  
Post‑deployment, hallucination incidents dropped from 32% to 5%, and user satisfaction scores rose by 18 points on our NPS survey. The system handled 250 concurrent chats with <950 ms average latency, proving that a lightweight embedding index + RAG can dramatically improve factual accuracy in production AI services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
