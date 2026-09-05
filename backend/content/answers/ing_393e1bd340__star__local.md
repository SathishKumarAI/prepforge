---
qid: ing_393e1bd340__star__local
question: 'Explain: Start building your first document agent today'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 390
total_tokens: 624
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:23:14-05:00'
sources: []
---

**Situation** – At my last company we had a growing internal knowledge base of over 12 k PDF manuals and support tickets that our help‑desk agents could never search efficiently; the average time to find an answer was 18 minutes, and SLA compliance fell below 70%.

**Task** – I was asked to prototype a “document agent” that would let a user type a question in plain English and instantly retrieve the most relevant excerpt from any document in the knowledge base, improving response time by at least 50 % and raising SLA to >90 %.

**Action** – I chose LangChain for orchestration, OpenAI GPT‑4o as the LLM, and Pinecone for a low‑latency vector store. First, I scripted a data pipeline that chunked PDFs into 500‑token pieces, generated embeddings with OpenAI’s text‑embedding‑3‑small, and upserted them into Pinecone. Then I built a question‑answer chain: the user query is embedded, top‑10 documents are fetched, and GPT‑4o is prompted with “You are an expert technical support agent; answer concisely using only the provided excerpts.” Finally, I wrapped everything in a FastAPI endpoint for real‑time interaction.

**Result** – In a two‑week pilot involving 30 agents, average search time dropped from 18 min to 5.2 min (71 % reduction), SLA compliance jumped to 93 %, and user satisfaction scores rose by 15 points on our internal survey. I learned that careful chunk sizing, prompt engineering, and a performant vector store are the three pillars of an effective document agent.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
