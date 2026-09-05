---
qid: ing_22dd8117b2__star__local
question: 'Explain: Scenario — Enterprise Rag'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 327
total_tokens: 558
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:38:54-05:00'
sources: []
---

**Situation**  
In my last role at a fintech startup, our customer support chatbot was drowning in outdated policy docs and FAQ PDFs. Every time an agent tried to pull up the right clause, the bot returned generic answers that led to a 35 % increase in escalated tickets during Q2.

**Task**  
I had to build an Enterprise RAG system so the bot could retrieve the exact policy snippet from our internal knowledge base and generate precise, context‑aware responses within two seconds.

**Action**  
First, I mapped the document corpus into a vector store using Pinecone with embeddings from OpenAI’s text‑embedding‑3.0. Then I set up an Elasticsearch index for quick keyword filtering on top of the vectors to reduce latency. For generation, I fine‑tuned GPT‑4o on a curated set of policy Q&A pairs and wrapped it in LangChain, feeding the retrieved snippet as a prompt prefix. Finally, I added a confidence score threshold; if retrieval confidence fell below 0.7, the bot deferred to an agent.

**Result**  
After deployment, ticket escalation dropped from 35 % to 12 %, response time improved to 1.8 s on average, and we cut support costs by $45k annually. I learned that combining dense retrieval with lightweight keyword filtering can dramatically improve RAG performance in high‑stakes domains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
