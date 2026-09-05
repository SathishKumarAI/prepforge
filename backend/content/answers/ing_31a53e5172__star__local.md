---
qid: ing_31a53e5172__star__local
question: 'Explain: Retrieval Strategy — Context vs. Memory Engineering in Agentic
  AI Systems'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 333
total_tokens: 573
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:07:38-05:00'
sources: []
---

**Situation** – In a recent project for a fintech startup, our generative chatbot was struggling to answer user queries about loan eligibility in real‑time. The model kept generating generic responses because it couldn't quickly pull relevant policy documents from our knowledge base.

**Task** – I needed to design a retrieval system that could dynamically fetch the most context‑relevant excerpts (context engineering) while also maintaining an internal short‑term memory of user intent and prior interactions (memory engineering), all within 150 ms latency for live chat.

**Action** – First, I implemented a hybrid vector search using FAISS with embeddings from Sentence‑Transformers. For context retrieval, we added a sliding window of the last three utterances to query the index, ensuring the model had up‑to‑date conversation cues. Next, I built an LRU cache in Redis keyed by user session ID to store recent policy snippets and user preferences—our memory layer. The LLM then received both the retrieved context chunk and a concise memory summary via prompt injection. Finally, I tuned batch size and indexed only top‑k 50 results to hit our latency SLA.

**Result** – Response relevance jumped from 58 % to 87 % accuracy (measured by manual QA), and average response time fell to 120 ms. I learned that balancing fresh context with a lightweight memory cache can dramatically improve agentic AI performance without overhauling the underlying model.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
