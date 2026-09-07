---
qid: ing_717ab7b41c__faang__local
question: 'Explain: Linear vs. Agentic RAG'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 380
total_tokens: 611
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:07:34-05:00'
sources: []
---

**Linear vs. Agentic Retrieval‑Augmented Generation (RAG)**  

| | **Linear RAG** | **Agentic RAG** |
|---|---|---|
| **Workflow** | 1️⃣ Encode query → retrieve top‑k docs. <br>2️⃣ Concatenate retrieved text + prompt. <br>3️⃣ Feed single prompt to LLM → generate answer. | 1️⃣ Encode query → retrieve initial set. <br>2️⃣ LLM acts as *agent*: decides which docs to fetch next, how many, and when to stop. <br>3️⃣ Iteratively refines context until confident response is produced. |
| **Control** | All decisions are static (fixed k, retrieval policy). | Dynamic; the agent adapts based on intermediate outputs or confidence signals. |
| **Complexity** | O(k) retrieval + one LLM call. | O(k₁ + … + kₙ) retrievals + n LLM calls; higher compute but often fewer total tokens. |
| **Use‑cases** | Quick, low‑latency queries where context size is limited (FAQ bots). | Complex reasoning, multi‑step fact gathering (clinical decision support, legal research). |

### Why the difference matters  
- **Linear RAG** excels when the answer can be extracted from a handful of documents; simplicity keeps latency low.  
- **Agentic RAG** shines when knowledge is sparse or spread across many sources; the agent can ask follow‑up “retrieval questions” to hone in on missing facts.

### Practical tip  
Start with Linear RAG for baseline performance; add an Agentic layer only if evaluation shows significant recall gaps or user feedback demands deeper reasoning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
