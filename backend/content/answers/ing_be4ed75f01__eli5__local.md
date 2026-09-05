---
qid: ing_be4ed75f01__eli5__local
question: 'Explain: Recursive Summarization — Context Window Management for Long-Running
  Agents: Strategies and Tradeoffs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 236
total_tokens: 404
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:38:48-05:00'
sources: []
---

Imagine a long‑term travel diary that you keep writing every day.  
Your notebook can only hold 200 pages at once (the **context window**).  
When the trip gets longer than that, you decide which parts of the diary to keep in your hand and which to tuck away.

**Recursive summarization** is like making a short “executive summary” for each chunk of pages: you read 200 pages, write a concise recap, then replace those pages with the recap.  
If the trip still exceeds 200 pages, you repeat the process on the new, shorter diary—making summaries of summaries—until everything fits.

The trade‑off:  
* **Accuracy vs. size** – deeper summarization saves space but can lose details.  
* **Speed vs. depth** – fewer passes are faster but may miss nuance; more passes give richer context but take longer.

So, recursive summarization lets a “long‑running agent” keep the essential story in its limited memory while still understanding the whole journey.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
