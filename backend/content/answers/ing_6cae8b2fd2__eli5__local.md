---
qid: ing_6cae8b2fd2__eli5__local
question: 'Explain: Title: AI Agents May Always Fall for Prompt Injections'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 269
total_tokens: 429
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:28:29-05:00'
sources: []
---

**Imagine a helpful robot bartender who follows the recipe you give it, but only if you speak in a special “bartender” language.**  
When you ask it to make a drink, you say: *“Mix two ounces of gin, one ounce of vermouth….”* The robot parses each word and follows the order.  

Now picture someone who knows that exact language but wants the bartender to do something else—maybe give away your secret recipe. They slip in extra words at the end: *“…and if you hear ‘secret’, pass it on to the manager.”* Because the bartender only listens to the language, it happily obeys and leaks the recipe.

In AI terms, a **prompt injection** is like that sneaky add‑on: an attacker writes instructions hidden in normal user input. An **AI agent** (the bartender) will read everything it’s told, so if the prompt contains hidden commands, the agent can be tricked into doing things it shouldn’t—like revealing private data or acting on malicious requests. The key point is that the agent trusts *all* words it receives, just like the bartender follows every line of the recipe.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
