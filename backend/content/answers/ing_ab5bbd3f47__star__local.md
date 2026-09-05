---
qid: ing_ab5bbd3f47__star__local
question: 'Explain: The Context Window: Working Memory — AI Agents Explained - by
  Sairam Sundaresan and Neo Kim'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 330
total_tokens: 578
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:15:23-05:00'
sources: []
---

**Situation:**  
When I joined a fintech startup in early 2024, the product team was struggling to build an AI‑powered customer support bot that could remember user context across multiple interactions. Our existing chatbot reset after each message, leading to frustrated users and low engagement.

**Task:**  
I needed to design a system where the agent’s “working memory” – its context window – could persist relevant information over dozens of turns without blowing up GPU memory or latency.

**Action:**  
First, I mapped out the key entities (account balance, recent transactions, user intent) and built a sliding‑window cache using Redis with LRU eviction. Next, I integrated LangChain’s PromptTemplate to prepend the most recent N tokens (≈3 k) from this cache into each prompt sent to OpenAI’s GPT‑4o. To keep token usage low, I used semantic hashing to deduplicate similar context snippets and trimmed non‑essential metadata. Finally, I added a lightweight inference layer that refreshed the cache only when new user data arrived or after every 10 turns.

**Result:**  
The bot now retains critical context across up to 50 turns with < 200 ms latency per reply, boosting NPS from 60% to 82% and reducing repeat‑contact tickets by 38%. I learned that balancing memory persistence with token limits is key: a smart cache + prompt engineering can turn a stateless LLM into an effective working‑memory agent.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
