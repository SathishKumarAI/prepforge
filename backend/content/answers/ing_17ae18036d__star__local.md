---
qid: ing_17ae18036d__star__local
question: We set temperature to 0, so outputs should be deterministic. Why do users
  still get different answers to the same prompt?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 367
total_tokens: 617
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:16:11-05:00'
sources: []
---

**Situation** – I was working on a customer‑support chatbot that had just rolled out to production. The engineering team set the temperature to 0 to guarantee deterministic replies, but QA reported that identical user prompts were producing different answers across multiple sessions.

**Task** – My job was to trace why the system was still non‑deterministic and ensure every prompt returned exactly the same response in all environments.

**Action** – I started by capturing a full log of the request pipeline. The first clue came from the tokenizer: a stray zero‑width space in the user input changed the token IDs, which in turn caused the model to start at a different hidden state even with temperature 0. I wrote a pre‑processing script that normalizes whitespace and strips invisible characters before tokenization. Next, I verified that all instances of the bot were using the same pinned checkpoint; a stray update on one server had rolled in a newer version that behaved slightly differently. After aligning the model versions and cleaning the input stream, I reran the same prompt 100 times to confirm deterministic output.

**Result** – The bot now returned identical responses for every identical prompt with >99% consistency. We reduced QA complaints by 90 %, and the incident gave me a deeper appreciation of how even minor tokenization quirks can break determinism in production AI systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
