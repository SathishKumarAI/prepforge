---
qid: ing_6ced4a889a__star__local
question: 'Explain: Company context — Perplexity'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 333
total_tokens: 566
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:05:07-05:00'
sources: []
---

**Situation** – At a mid‑size SaaS firm we were launching a conversational AI assistant for our support portal. Our initial model scored a perplexity of 48 on the internal validation set, which meant users were getting off‑topic responses during live chats.

**Task** – I was tasked with reducing perplexity to below 30 so that the bot’s language fluency matched the quality benchmark we had set for customer experience scores (target NPS ≥ 70).

**Action** – First, I performed a data audit: removed duplicate FAQ entries and added 15k new context‑rich dialogues from support logs. Then I fine‑tuned a GPT‑2 base model with a custom learning rate schedule and applied weight decay to prevent overfitting. To accelerate convergence, I used mixed‑precision training on our GPU cluster, cutting training time from 12 hrs to 3 hrs. Finally, I implemented an adaptive temperature scheduler during inference to keep predictions sharp yet diverse.

**Result** – Perplexity dropped to 27.8 on the holdout set and live A/B testing showed a 22% reduction in support tickets routed back to humans. Customer satisfaction rose from 68 to 74 NPS, and we saved roughly $120k annually by cutting outbound support staff hours. I learned that meticulous data cleaning combined with fine‑tuned hyperparameters can yield measurable business impact faster than brute‑force model scaling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
