---
qid: ing_b98fbb89a6__star__local
question: 'Explain: What they emphasise — Perplexity'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 377
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:42:19-05:00'
sources: []
---

**Situation**  
At my previous company we were launching a new customer‑support chatbot and the QA team kept flagging that the responses felt “stilted” and often repeated the same phrases.

**Task**  
I was asked to quantify how well our language model understood context so we could decide whether to keep the current 12‑layer GPT‑like network or fine‑tune a larger 24‑layer variant.

**Action**  
Using PyTorch, I computed perplexity on a held‑out validation set of real support logs. I first tokenized with HuggingFace’s `tokenizers`, then calculated cross‑entropy loss for each batch and exponentiated the average to get perplexity. To reduce it, I added a domain‑specific fine‑tuning step: 5 epochs on 200k labeled conversation pairs, applying a learning‑rate warm‑up schedule (AdamW). I also experimented with temperature scaling during sampling to see its effect on perplexity versus fluency.

**Result**  
Perplexity dropped from 122.3 to 78.6 after fine‑tuning, and the bot’s response diversity increased by ~15 % as measured by distinct‑n metrics. The QA score improved from 68 % to 93 %, and we rolled out the updated model in production with no further complaints. I learned that perplexity is a practical proxy for linguistic fluency and that targeted fine‑tuning can deliver measurable gains without architectural overhauls.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
