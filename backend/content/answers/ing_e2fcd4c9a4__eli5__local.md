---
qid: ing_e2fcd4c9a4__eli5__local
question: 'Explain: Basic Usage — GitHub - mem0ai/mem0: Universal memory layer for
  AI Agents \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 283
total_tokens: 458
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:35:02-05:00'
sources: []
---

**What mem0 does**

Imagine you’re building a robot that talks to people, but the robot can’t remember anything it learns in one conversation unless you tell it where to keep that information. *mem0* is like a smart filing cabinet for the robot: every time the robot learns something new—facts, preferences, or past chats—you drop a note into mem0, and later the robot can pull up that note whenever it needs it.

**How to use it**

1. **Add the library** – install mem0 in your project with `pip install mem0ai`.  
2. **Create a memory store** – think of this as choosing which filing cabinet (e.g., local disk, cloud database).  
3. **Write data** – call `store.add("key", value)` to save a fact or conversation snippet.  
4. **Read data** – later use `store.get("key")` to retrieve that exact piece of information.  

Because mem0 is “universal,” it works with many AI frameworks (OpenAI, Anthropic, etc.) and can be plugged into any agent you’re building. It’s just a simple, reliable way to give your AI a long‑term memory so it feels more natural and helpful.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
