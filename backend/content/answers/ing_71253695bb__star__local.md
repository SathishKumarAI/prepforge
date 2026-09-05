---
qid: ing_71253695bb__star__local
question: 'Explain: Message History — What is Context Engineering'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 350
total_tokens: 585
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:13:42-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup we were launching an AI‑powered customer support bot for loan applications. The existing model could answer FAQs but lost track after two turns, leading to user frustration and a 15 % drop in completion rates.

**Task** – I had to design a context‑engineering layer that would preserve conversation state across sessions without bloating the input prompt or breaking latency constraints.

**Action** – First, I mapped out all user intents and identified key entities (income, credit score, loan amount). Then I built an incremental “context window” using Redis Streams: each turn appended a compact JSON token (intent + slot values) to a per‑session list. For the LLM prompt, I injected only the last three tokens plus a summary of prior turns, keeping the prompt under 1 k tokens. To avoid drift, I added a confidence filter that refreshed the context if the model’s predicted intent deviated by >30 %. Finally, I automated rollback logic so that if a user reverts an action, the context list popped the latest token.

**Result** – The bot maintained coherent multi‑turn conversations, raising completion rates from 68 % to 84 % within one month. Latency stayed below 400 ms, and we reduced developer effort on hand‑crafting prompts by 70 %. I learned that lightweight state persistence combined with smart token curation is the key to scalable context engineering in real‑world ML systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
