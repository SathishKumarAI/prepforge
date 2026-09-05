---
qid: ing_73d3be26d3__star__local
question: 'Explain: Corrective RAG (CRAG) — Agentic Rag'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 326
total_tokens: 565
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:26:05-05:00'
sources: []
---

**Situation:**  
At my last startup we were building a customer‑support chatbot that pulled answers from our internal knowledge base. By Q2 the bot’s accuracy dropped from 78 % to 62 % because new product updates kept the docs out of sync, and users began flagging hallucinations.

**Task:**  
I was tasked with restoring confidence in the retrieval‑augmented generation (RAG) pipeline within one month while keeping latency under 800 ms for live chats.

**Action:**  
First I added a “corrective RAG” layer: every generated answer is re‑retrieved against an up‑to‑date vector index and then scored by a lightweight classifier that weighs semantic similarity, doc freshness, and user confidence. If the new retrieval score falls below a dynamic threshold, the agent automatically revises its response—either by pulling a more recent snippet or flagging uncertainty and deferring to a human. I integrated Pinecone for fast embeddings, used OpenAI’s text‑embedding‑ada‑002, and built the feedback loop in FastAPI so the entire flow stayed within our latency budget.

**Result:**  
After deployment, bot accuracy climbed back to 84 %, and user-reported hallucinations dropped by 65 %. The corrective layer also cut unnecessary API calls by 30 %, saving $3K/month. I learned that embedding freshness and adaptive confidence thresholds are key to keeping RAG reliable in a fast‑moving domain.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
