---
qid: ing_5e0de77331__star__local
question: How does prompt injection show up in a mobile app, and what does the client
  own?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 315
total_tokens: 558
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:36:12-05:00'
sources: []
---

**Situation:**  
While working on a fintech startup’s Android wallet, we integrated an LLM‑powered chat assistant for customer support. The product team wanted instant answers to balance queries and troubleshooting tips without exposing our backend.

**Task:**  
I had to design the prompt flow so that user inputs never leaked proprietary data or allowed malicious manipulation of the model (prompt injection), while keeping the client’s privacy intact.

**Action:**  
First, I sandboxed all user text through a sanitization layer: stripping URLs, code snippets, and any system‑level tokens. Then I built a templated prompt in Kotlin that inserted only the sanitized intent into a fixed “You are a helpful banking assistant” context. To guard against injection, we added an “Allowed Commands” whitelist and used OpenAI’s `prompt` API with `max_tokens=150`. On the client side, all sensitive info (account numbers, balances) is encrypted locally; we never send it to the LLM. For logging, I stored only hash digests of user queries so we could audit for abuse without exposing content.

**Result:**  
The chat handled 2,300 daily interactions with <0.5 % error rate, and a penetration test found no viable injection vectors. We reduced API calls by 30 % by reusing prompts, saving ~$1k/month. I learned that coupling strict prompt templates with local encryption is the most effective defense against injection in mobile AI features.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
