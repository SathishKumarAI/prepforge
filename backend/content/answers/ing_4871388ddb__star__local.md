---
qid: ing_4871388ddb__star__local
question: 'Explain: Memory and Connectors — Semantic Kernel'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 371
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:53:22-05:00'
sources: []
---

**Situation**  
At my previous company we had a customer‑facing chatbot that kept asking the same follow‑up questions because it couldn’t remember earlier parts of a conversation. The product manager wanted to reduce user churn by making the bot feel more human and context‑aware.

**Task**  
I was tasked with adding persistent, session‑level memory to the bot using Semantic Kernel’s connectors, while keeping latency under 300 ms per turn and ensuring data privacy compliance.

**Action**  
First I mapped the conversational flow to a “semantic graph” in Semantic Kernel. I used the built‑in Azure Cosmos DB connector for long‑term storage of user intents and the Redis connector for short‑term in‑memory cache. For each utterance, the kernel’s prompt engine generated an embedding with OpenAI’s GPT‑4o model; these embeddings were stored as key–value pairs keyed by a session ID. When a new turn arrived, I fetched the top‑3 most similar past embeddings from Redis, merged their context into the current prompt, and let the language model generate a response that referenced prior user goals. I also added a policy layer to purge memory after 24 hours unless flagged as “high‑value”.

**Result**  
After deployment, repeat‑question frequency dropped by 48 %, and overall user satisfaction scores rose from 3.8/5 to 4.6/5 in the following month. The system maintained <250 ms latency per turn, and we met GDPR requirements by encrypting all stored embeddings. I learned how Semantic Kernel’s connector abstraction lets you swap storage backends without rewriting prompt logic, a pattern I’ll apply to future AI products.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
