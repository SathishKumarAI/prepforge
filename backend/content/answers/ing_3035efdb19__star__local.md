---
qid: ing_3035efdb19__star__local
question: What do temperature and top_p actually do, and how do you choose them per
  task?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 312
total_tokens: 555
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:04:56-05:00'
sources: []
---

**Situation** – I was building a chatbot for an e‑commerce client that had to generate product descriptions in multiple languages. The earlier model produced bland, repetitive text, and the team complained it lacked personality.

**Task** – My goal was to tune the generation parameters so the bot could produce engaging, context‑aware sentences while keeping the output within acceptable cost limits (API token usage).

**Action** – I first experimented with **temperature**. At 0.2 the model was deterministic and safe but overly literal; raising it to 0.7 introduced creative phrasing without hallucinating facts. Next, I applied **top_p (nucleus sampling)**: setting top_p=0.9 kept the most probable tokens in a dynamic pool, preventing unlikely words from appearing. I ran controlled A/B tests, measuring BLEU scores for fluency and human ratings for engagement. For short product blurbs I used temperature 0.6 + top_p 0.85; for longer marketing copy I leaned higher (temp 0.8, top_p 0.9) to allow more variance.

**Result** – The tuned settings boosted average user satisfaction scores from 3.2/5 to 4.7/5 and reduced token usage by ~12%. I learned that temperature controls overall randomness while top_p trims the tail of low‑probability tokens; balancing them per content length yields both quality and efficiency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
