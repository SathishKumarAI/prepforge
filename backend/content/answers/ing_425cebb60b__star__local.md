---
qid: ing_425cebb60b__star__local
question: 'Explain: Clarifying questions & assumptions — Customer Support Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 361
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:41:26-05:00'
sources: []
---

**Situation** – In late‑2023 I was leading the rollout of an AI‑powered chatbot to handle first‑tier support tickets for a SaaS platform that had seen a 25 % spike in user queries during a major product update. The engineering team noticed that the bot’s accuracy on troubleshooting requests dropped from 78 % to 62 % after deployment.

**Task** – My goal was to identify why the bot misinterpreted user intents and to redesign its question‑generation logic so it could surface clarifying questions and validate assumptions before providing solutions, thereby restoring confidence scores above 85 %.

**Action** – I started by reviewing a random sample of failed tickets. Using a lightweight NLP pipeline (spaCy + custom intent classifier), I mapped each query to its “unknown” categories. I then built a decision tree that prompts users with targeted follow‑up questions whenever the bot’s confidence fell below 70 %. For example, if a user typed “I can’t log in,” the bot now asks, “Are you seeing an error message? If so, what does it say?” I also added a context‑aware assumption flag: if the user mentions “beta feature,” the bot defers to human escalation. The changes were deployed via A/B testing with 10 % of traffic.

**Result** – Within two weeks, bot accuracy rose from 62 % to 88 %, and first‑tier resolution time dropped by 30 %. I learned that systematic clarifying questions and explicit assumption checks are critical in AI support to reduce friction and improve trust.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
