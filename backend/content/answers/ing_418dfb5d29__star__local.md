---
qid: ing_418dfb5d29__star__local
question: Explain min-p sampling and repetition/frequency penalties. When do standard
  sampling settings fail?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 353
total_tokens: 595
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:39:37-05:00'
sources: []
---

**Situation:**  
During a launch of our conversational AI for customer support, we noticed the model repeatedly generated “Sure, I can help you with that” in over 40% of user interactions, causing users to feel stuck and leading to a 12% drop in satisfaction scores.

**Task:**  
I needed to reduce repetitive phrasing while maintaining relevance and fluency, ensuring the bot stayed engaging across diverse queries within the same session.

**Action:**  
First, I implemented *min‑p sampling* (minimum probability threshold) by setting `min_p=0.05`. This clipped token probabilities below 5%, forcing the model to consider a broader set of plausible continuations instead of repeatedly picking the top‑probability phrase. Next, I added *frequency penalties* (`freq_penalty=1.2`) and *repetition penalties* (`rep_penalty=1.3`) in the decoding pipeline. These penalized tokens that appeared earlier in the same turn or session, discouraging the model from reusing identical n‑grams. I also tuned temperature to 0.7 for a balanced trade‑off between creativity and coherence.

**Result:**  
Within two weeks, repetition dropped by 68%, user satisfaction rose from 78% to 87%, and we saw a 15% increase in session depth (average turns per conversation). I learned that standard greedy or top‑k sampling can over‑focus on high‑probability tokens, but combining min‑p with frequency/repetition penalties effectively diversifies output without sacrificing quality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
