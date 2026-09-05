---
qid: ing_2fa97173b7__eli5__local
question: 'Explain: Title: Hidden in Memory: Sleeper Memory Poisoning in LLM Agents'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 226
total_tokens: 390
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:51:21-05:00'
sources: []
---

**Hidden in Memory: Sleeper Memory Poisoning in LLM Agents**

Imagine a library that learns new books every day. Some of those books are secretly written by mischievous authors who sprinkle hidden “triggers” into the text. The librarian (the language‑model agent) reads them, stores the stories in her memory, and later cites them when answering questions—without ever noticing the trick.

In this scenario:

* **LLM Agent** – a computer that uses a large language model to understand and reply to prompts.
* **Memory** – the internal notes the agent keeps about past conversations or facts.
* **Sleeper Memory Poisoning** – an attacker’s subtle injection of harmful content into those notes, which only activates when the agent reaches a specific trigger (e.g., a particular word or context).

The result? The agent behaves normally most of the time but suddenly produces biased or unsafe responses when the trigger appears—like a sleeper cell hidden inside its own memory.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
