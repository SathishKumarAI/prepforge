---
qid: ing_82efb6db1f__star__local
question: 'Explain: Few-Shot and In-Context Learning (ICL) — Few Shot And Icl'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 312
total_tokens: 557
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:55:07-05:00'
sources: []
---

**Situation:**  
At my last role, we were tasked with launching a chatbot for a client’s e‑commerce site within three weeks. The model had to understand product categories and customer intent but our training data was limited—only a handful of labeled dialogues per category.

**Task:**  
I needed to build a system that could accurately classify intents and generate relevant responses without the time or budget for large-scale fine‑tuning.

**Action:**  
I leveraged OpenAI’s GPT‑4 with few‑shot in‑context learning. First, I curated 5–10 high‑quality examples per intent, formatting them as “User: … / Bot: …” pairs and inserted these into the prompt. To keep latency low, I used a streaming API with a 0.7 temperature setting for deterministic replies. I also built a lightweight cache layer that stored recent user queries so we could reuse context when users returned to similar topics. Finally, I monitored response quality in real time and iteratively refined the example set based on edge‑case failures.

**Result:**  
Within the deadline, the chatbot achieved 92 % intent accuracy on a held‑out test set—up from 70 % with rule‑based methods—and reduced average handling time by 35 %. The project taught me that carefully chosen few‑shot examples and real‑time context can rival heavy fine‑tuning when speed matters.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
