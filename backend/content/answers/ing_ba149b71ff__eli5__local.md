---
qid: ing_ba149b71ff__eli5__local
question: 'Explain: Title: Defeating Prompt Injections by Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 236
total_tokens: 396
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:32:07-05:00'
sources: []
---

Think of a chatbot as a kitchen where you give it recipes (prompts) and it cooks answers. A **prompt injection** is like someone slipping a secret note into the recipe, telling the bot to do something unsafe—maybe reveal private data or act maliciously.  

Defeating them “by design” means building the kitchen so that any hidden notes are caught before they reach the cook. First, the chef (the model) only follows recipes that come from trusted, signed‑off sources, just like a bank only accepts checks with a verified stamp. Second, each recipe is run through a *sandbox* that strips out instructions asking for private info—imagine a filter that removes any request to “open the vault.” Finally, the system keeps an audit log of every recipe it tried, so if something slips through, you can see who inserted the note and fix it.  

In short, by validating sources, filtering dangerous commands, and logging everything, we build a kitchen where malicious notes are caught before they can influence cooking.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
