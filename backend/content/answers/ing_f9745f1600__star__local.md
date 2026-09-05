---
qid: ing_f9745f1600__star__local
question: 'Explain: Self-RAG (Self-Reflection) — Agentic Rag'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 367
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:47:23-05:00'
sources: []
---

**Situation:**  
At a fintech startup we were building an AI-powered compliance assistant that answered user queries about regulatory changes. The initial model produced accurate answers 78 % of the time but frequently missed subtle policy updates, leading to flagged incidents.

**Task:**  
I was tasked with boosting answer accuracy to ≥90 % while keeping latency under 1.2 s per request by adding a self-reflection component that lets the agent review its own response against fresh data before delivering it.

**Action:**  
Using LangChain I set up a Self-Reflective Retrieval Augmented Generation (Self‑RAG) pipeline. First, the base LLM queried a Pinecone vector store of the latest regulatory documents. Then an auxiliary “reflection” model—an OpenAI GPT‑4 instance fine-tuned on audit logs—received the draft answer and the top 3 retrieved passages. The reflection module scored confidence, flagged inconsistencies, and regenerated the answer if needed. I incorporated a lightweight Bloom filter to avoid redundant retrievals and tuned temperature to balance creativity versus precision. Continuous integration tests fed real compliance queries to evaluate each iteration.

**Result:**  
After three sprints, accuracy jumped from 78 % to 92 %, and latency stayed at 1.08 s. The system reduced regulatory incident flags by 35 %. I learned that a disciplined self‑reflection loop can turn a reactive LLM into an anticipatory agent, but it requires careful orchestration of retrieval, scoring, and regeneration to keep performance acceptable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
