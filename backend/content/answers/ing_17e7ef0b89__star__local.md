---
qid: ing_17e7ef0b89__star__local
question: 'Question 2: Does It Need to Survive Beyond a Single Session?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 318
total_tokens: 558
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:16:34-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup, we launched an AI‑powered chatbot to handle customer support tickets. Early testing showed the bot could resolve 70 % of queries in a single interaction, but users complained it couldn’t remember past conversations when they returned after a few days.

**Task** – My goal was to design a system that preserved user context across sessions so the bot felt “alive” and could pick up where it left off, improving satisfaction scores from 78 % to at least 90 %.

**Action** – I implemented a hybrid storage layer: short‑term session data in Redis for instant retrieval, and long‑term context snapshots stored in DynamoDB keyed by user ID. Each bot turn generated an incremental delta that was merged into the persistent state via a Lambda function, ensuring idempotency. I added a privacy‑by‑design flag so users could opt out of long‑term storage. We also introduced a lightweight “context refresh” prompt to keep the model’s internal memory within token limits.

**Result** – After deployment, repeat‑visit resolution rose from 65 % to 92 %, and NPS climbed by 12 points. The architecture cut support tickets by 35 % in three months, proving that AI must persist beyond a single session to deliver real value. I learned that balancing short‑term speed with durable context requires careful state management and clear user consent mechanisms.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
