---
qid: ing_717ab7b41c__star__local
question: 'Explain: Linear vs. Agentic RAG'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 341
total_tokens: 575
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:14:20-05:00'
sources: []
---

**Situation:**  
In my last role, we were launching a customer‑support chatbot for a fintech app that needed instant, accurate answers to regulatory questions. Our metrics demanded 95 % accuracy within 3 seconds per query.

**Task:**  
I had to decide between a linear RAG pipeline (retrieval → single LLM pass) and an agentic RAG approach (LLM acting as an autonomous tool‑chain that can iteratively fetch, refine, and verify information).

**Action:**  
First, I built a baseline linear system: the user query hit ElasticSearch, retrieved top 5 documents, concatenated them into a prompt, and fed it to GPT‑4. We hit 87 % accuracy but latency was 4.2 s because of large context size.  
Next, I prototyped an agentic pipeline using LangChain agents: the LLM first parsed the question, then issued separate “search” actions with tailored queries, fetched concise snippets, and finally composed a response after a verification step. We capped each action to 3 KB, reduced prompt size, and parallelized searches.

**Result:**  
The agentic RAG cut latency to 2.1 s while boosting accuracy to 94 %. User satisfaction scores rose by 12 % in A/B tests. I learned that letting the LLM orchestrate retrieval as a series of small, focused tasks can dramatically improve both speed and correctness when dealing with regulated content.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
