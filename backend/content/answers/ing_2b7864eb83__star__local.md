---
qid: ing_2b7864eb83__star__local
question: How does Mastra handle agent memory and context?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 314
total_tokens: 549
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:54:41-05:00'
sources: []
---

**Situation** – I was building a voice‑enabled shopping assistant for an online retailer that had to remember user preferences across multiple sessions while keeping latency under 300 ms.

**Task** – The goal was to give the agent “long‑term memory” so it could refer back to past purchases, style choices and browsing history without overloading the prompt or hitting token limits.

**Action** – I split the conversation into logical segments and stored each as a vector in Pinecone. Using LangChain’s `VectorStoreRetriever` I fetched the top three relevant chunks on every turn. I wrapped those in a structured JSON context block, then prefixed it to the LLM prompt with a concise system instruction: “You have access to user history below.” The agent also updated its memory after each response by appending the new utterance and re‑embedding it. To keep latency low, I used batching and cached embeddings.

**Result** – User satisfaction scores rose from 78 % to 92 %, while recall of prior preferences improved by ~35 %. I learned that hybrid retrieval—vector search plus lightweight prompt engineering—is essential for scalable agent memory.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
