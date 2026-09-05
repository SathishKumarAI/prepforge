---
qid: ing_676f69117b__star__local
question: 'Q: How do temperature and top-p affect generation?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 253
total_tokens: 489
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:54:36-05:00'
sources: []
---

**Situation:** While working on a chatbot for a fintech client, the team noticed that our model was either too repetitive or producing nonsensical answers depending on the user query length.

**Task:** I had to tune the sampling strategy so that the bot would stay on topic but also offer varied, useful responses across different prompts.

**Action:** I experimented with temperature and top‑p (nucleus) sampling. First, I lowered the temperature from 1.0 to 0.6, which reduced high‑entropy word choices and made outputs more deterministic. Then I set top‑p to 0.9, allowing only the most probable words that together summed to 90 % probability—this kept rare but relevant tokens in play while pruning out noise. I compared results on a validation set of 200 user intents, measuring BLEU scores and human readability ratings.

**Result:** The combined setting raised our average BLEU from 0.42 to 0.56 and improved user satisfaction scores by 18 %. I learned that temperature controls overall randomness, while top‑p fine‑tunes the candidate pool—balancing creativity against coherence is key in production AI.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
