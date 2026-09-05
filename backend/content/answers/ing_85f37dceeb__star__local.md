---
qid: ing_85f37dceeb__star__local
question: 'Explain: Walk me through every stage of a production RAG pipeline, from
  raw documents to a cited answer.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 357
total_tokens: 604
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:00:55-05:00'
sources: []
---

**Situation:**  
At my last company we were building an AI‑powered helpdesk that could pull up relevant policy documents for support agents. The existing search engine returned tons of PDFs, but the answers lacked context and citations, so agents often doubted them.

**Task:**  
I had to design a production RAG (Retrieve‑Augment‑Generate) pipeline that ingested raw corporate docs, indexed them, retrieved the most relevant snippets on query, generated concise answers, and attached proper citations for every fact.

**Action:**  
First, I wrote an ingestion script using Python and Apache Kafka to stream new PDFs into a Celery queue. Each file was split into 500‑token chunks, embedded with OpenAI’s text‑embedding‑ada‑002, and stored in Pinecone for vector similarity search. For retrieval, I built a FastAPI endpoint that queries Pinecone based on the user prompt, fetches top‑k vectors, and concatenates their source IDs. The augmentation layer passes this chunked context to an LLM (GPT‑4o) via OpenAI’s API, with a prompt template that forces the model to output the answer followed by “Sources: …”. Finally, I wrapped everything in Kubernetes, autoscaling based on request latency.

**Result:**  
Within two weeks of deployment, agent response times dropped 35 %, and the accuracy of cited facts improved from 68 % to 92 %. The pipeline also cut storage costs by 22 % thanks to chunking and vector pruning. I learned how careful indexing, prompt engineering, and observability are all critical to a reliable RAG system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
