---
qid: ing_a1fb374032__star__local
question: 'Explain: Agentic RAG'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 363
total_tokens: 594
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:56:34-05:00'
sources: []
---

**Situation** – At my previous company we had a customer support chatbot that answered technical queries. The FAQ database was growing to 12 k documents, and the bot’s accuracy dropped from 78% to 61% after a product update because it couldn’t retrieve the right context.

**Task** – I was asked to rebuild the knowledge‑base interaction so the bot could autonomously fetch and synthesize relevant information in real time, improving answer relevance without manual curation.

**Action** – I designed an Agentic Retrieval Augmented Generation pipeline:  
1. Built a vector index with FAISS over the 12 k docs, using Sentence‑Transformers for embeddings.  
2. Implemented a lightweight RL‑agent that, given a user query, selects top‑k passages and scores them via a BERT similarity model.  
3. Integrated LangChain’s RAG template to feed the selected passages into GPT‑4, letting the model “reason” about which facts apply.  
4. Added a feedback loop where each answer’s confidence score was logged; low‑confidence responses triggered a fallback to human agents and updated the index with new Q&A pairs.

**Result** – Within two weeks of deployment, bot accuracy rose from 61% to 84%, cutting human‑agent escalations by 35%. The system also reduced document latency from 1.2 s to 0.6 s per query. I learned that coupling an agent’s decision policy with a retrieval engine can turn static knowledge bases into dynamic, self‑improving assistants.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
