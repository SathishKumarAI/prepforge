---
qid: ing_cea66ed342__star__local
question: 'Explain: Agents as Tools — Llamaindex'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 346
total_tokens: 580
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:22:22-05:00'
sources: []
---

**Situation**  
When I joined a fintech startup, our product team wanted to add an AI‑powered FAQ chatbot that could pull up-to-date policy documents from a large internal knowledge base of PDFs and markdown files.

**Task**  
I had to design a system where the chatbot could understand user questions, fetch relevant content, and generate concise answers—all within a 3 second response window—without rebuilding our entire document store from scratch.

**Action**  
I chose LlamaIndex as the vector‑store layer because it lets you index heterogeneous files with minimal code. I first wrapped each document in a `Document` object, then used the `SimpleDirectoryReader` to ingest the 12 GB of policy PDFs and markdowns. After that, I instantiated an `GPTVectorStoreIndex` backed by Pinecone for low‑latency retrieval. To make the agent “smart,” I built a RetrievalQA pipeline with OpenAI’s GPT‑4 Turbo as the LLM and added a custom prompt template that instructed the model to cite sources. Finally, I wrapped everything in LangChain’s `LLMChain`, exposing it via a REST endpoint.

**Result**  
The chatbot answered 95 % of queries correctly within 2.3 seconds on average. User satisfaction scores rose from 72 % to 88 %, and we cut manual FAQ updates by 70 %. I learned that LlamaIndex’s abstraction over vector stores keeps the system flexible, while a retrieval‑augmented approach delivers both speed and transparency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
