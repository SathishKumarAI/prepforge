---
qid: ing_564c023b46__star__local
question: 'Explain: Interview questions — Rag And Retrieval'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 401
total_tokens: 634
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:20:27-05:00'
sources: []
---

**Situation**  
At my last company we were launching a knowledge‑base chatbot for the sales team. The internal FAQ had 12,000 documents, but our pilot users reported that the bot kept pulling outdated or irrelevant answers, hurting adoption.

**Task**  
I was tasked with redesigning the answer generation pipeline so that it could pull up‑to‑date information from the document corpus and combine it with a generative model to produce natural responses within two seconds per query.

**Action**  
First I set up an embedding index using Sentence‑Transformers (all-MiniLM-L6-v2) and stored vectors in Pinecone for low‑latency similarity search. When a user asked a question, the system retrieved the top‑5 passages via semantic similarity—this is the *retrieval* step. Next, I fed those passages into an OpenAI GPT‑4 Turbo prompt that included a “knowledge base” context block and a strict instruction to cite sources, ensuring transparency. I also implemented a fallback rule: if no passage scored above 0.75 cosine similarity, the bot would answer “I’m not sure—let me check.” Finally, I added an A/B test harness so we could measure precision‑recall against the old static FAQ.

**Result**  
Within three weeks the new Retrieval-Augmented Generation (RAG) system cut the average answer latency from 4.5 s to 1.8 s and increased user satisfaction scores by 32 % (from 3.6/5 to 4.7/5). The engineering team adopted the same RAG pattern for other internal tools, saving us roughly 200 person‑hours of manual content curation per month. I learned that a well‑tuned retrieval backbone paired with a concise prompt can dramatically improve both relevance and speed in production AI assistants.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
