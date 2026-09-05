---
qid: ing_501841fb18__star__local
question: 'Explain: RAG Fundamentals. — AI Daddy \u00b7 Learn AI System Design and
  Pass the AI Interview'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 311
total_tokens: 559
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:08:28-05:00'
sources: []
---

**Situation:**  
At my last role I was tasked with improving our chatbot’s accuracy on niche industry queries. The existing LLM gave generic responses and we were losing customers due to misinformation.

**Task:**  
I needed to design a Retrieval‑Augmented Generation (RAG) pipeline that could pull up-to-date, domain‑specific documents and weave them into the model’s answers within 2 seconds per request.

**Action:**  
I first indexed our internal knowledge base with FAISS, using sentence‑transformer embeddings for semantic search. For each user query I queried FAISS to retrieve the top‑5 passages, then constructed a prompt that included those snippets and sent it to OpenAI’s GPT‑4. I added a confidence score filter: if similarity < 0.7 the system fell back to a generic answer. The whole flow ran on an AWS Lambda cluster with 8 GB RAM, keeping latency under 1.5 s.

**Result:**  
After deployment we saw a 35% drop in user complaints and a 12% increase in chat‑session length. The RAG model also cut our API cost by ~20% because the LLM needed fewer generations per request. I learned that careful indexing, similarity thresholds, and prompt engineering are the real pillars of effective RAG systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
