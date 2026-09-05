---
qid: ing_7230cbe7b4__star__local
question: 'Explain: Putting it together: a bank support agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 313
total_tokens: 548
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:15:40-05:00'
sources: []
---

**Situation:** At my previous fintech startup, we launched an AI‑powered chat assistant for banking customers. Early testing revealed that the bot was misclassifying over 35% of support tickets, causing delayed responses and customer frustration during a critical product launch.

**Task:** I had to redesign the intent classification pipeline so that the bot could accurately route 90%+ of queries to the correct support team within three seconds, while maintaining high compliance with banking regulations.

**Action:** First, I gathered labeled data from the last six months of live chats and added edge cases identified by the compliance team. Using spaCy for tokenization and a fine‑tuned BERT model on AWS SageMaker, I built an intent classifier that included domain‑specific entities (account numbers, transaction IDs). I then integrated the model into our microservice architecture with a fallback rule engine in Python to handle ambiguous intents. Finally, I set up continuous evaluation through A/B testing and automated alerts for drift.

**Result:** Within two weeks of deployment, misclassification dropped from 35% to 7%, reducing average resolution time from 12 minutes to 3 minutes. Customer satisfaction scores rose by 18 points, and the compliance audit passed with zero findings. I learned that combining deep learning with rule‑based safety nets is essential in regulated financial services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
