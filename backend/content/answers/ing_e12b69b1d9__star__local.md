---
qid: ing_e12b69b1d9__star__local
question: 'Explain: Introduction — The Complete Guide to Tool Selection in AI Agents'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 368
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:59:02-05:00'
sources: []
---

**Situation:**  
At my previous startup we were building a conversational agent for the customer support portal of a mid‑size e‑commerce company. The product manager demanded that the bot answer queries in under two seconds and handle at least 1,000 concurrent sessions during peak holiday traffic. Our prototype using a single large language model (LLM) was too slow and cost-prohibitive.

**Task:**  
I had to design an efficient tool selection strategy so the agent could combine fast retrieval with powerful generation while staying within the budget of $2k/month in cloud compute costs.

**Action:**  
1. I profiled latency on three LLM providers (OpenAI, Anthropic, Cohere) and chose Anthropic’s Claude 3 for text generation because it offered lower per‑token cost and comparable accuracy.  
2. For knowledge lookup, I integrated a vector store built on Pinecone, indexing our FAQ documents with FAISS embeddings from Sentence‑Transformers.  
3. I added a rule‑based fallback using spaCy NER to catch obvious product‑related intents and route them directly to static answers, reducing unnecessary LLM calls.  
4. Finally, I set up an autoscaling Lambda layer that cached recent responses in Redis, cutting duplicate queries by ~30%.

**Result:**  
The bot’s average response time dropped from 3.2 s to 1.5 s, and concurrency handling improved to 1,200 sessions with a cost of $1,350/month. I learned that tool selection is an optimization problem: balance speed, accuracy, and cost by layering retrieval, generation, and rule‑based logic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
