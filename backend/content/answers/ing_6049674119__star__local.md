---
qid: ing_6049674119__star__local
question: What is agentic RAG? — Faq
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 284
total_tokens: 519
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:40:43-05:00'
sources: []
---

**Situation:**  
At my previous company we were launching a customer support chatbot that needed to pull up-to-date policy documents and internal knowledge bases in real time, but the documents were constantly changing.

**Task:**  
I was tasked with building an agentic RAG system that could not only retrieve relevant passages but also decide when to fetch new data versus generating from memory, ensuring responses stayed accurate without over‑fetching.

**Action:**  
First, I integrated a vector store (Pinecone) for semantic search and set up an external API layer to pull live policy updates. Then I built a lightweight policy‑based agent that evaluated the confidence score of generated text; if below 0.7, it triggered a retrieval step. I used LangChain’s Chain-of-Thought prompt to let the model reason about whether new information was needed. Finally, I added an audit log to capture each decision path for compliance.

**Result:**  
The bot’s accuracy improved from 78 % to 92 % on internal QA tests, and we cut API calls by 35 % because the agent only fetched when necessary. I learned that coupling retrieval with a simple decision policy can dramatically reduce latency while keeping answers trustworthy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
