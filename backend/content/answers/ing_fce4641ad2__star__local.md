---
qid: ing_fce4641ad2__star__local
question: 'Q: Why does Agentic RAG often lead to higher quality but lower "Reliability"
  (Determinism)?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 266
total_tokens: 515
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:54:24-05:00'
sources: []
---

**Situation:**  
In a recent project building an internal knowledge assistant for our legal team, we migrated from a standard retrieval‑augmented generation (RAG) pipeline to an agentic RAG model that could ask clarifying questions before generating answers.

**Task:**  
The goal was to improve answer relevance and accuracy while still delivering consistent outputs within the 30‑second response window required by the UI.

**Action:**  
I integrated a lightweight dialogue manager that let the agent pose follow‑up queries, then routed each turn through our vector store. We used reinforcement learning with a reward signal based on BLEU scores versus a curated gold set, but capped the number of turns to keep latency low. To maintain determinism, we added a temperature‑controlled sampling layer and seeded all random operations per user session.

**Result:**  
The agent produced answers that were 25 % more accurate according to our QA team (from 78 % to 103 % correct on a benchmark set) but the response variance increased—about 18 % of outputs differed between identical inputs. I learned that while exploration boosts quality, it inherently reduces determinism; balancing reward and sampling temperature is key to meeting both quality and reliability goals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
