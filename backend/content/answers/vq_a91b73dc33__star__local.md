---
qid: vq_a91b73dc33__star__local
question: does it matter?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 313
total_tokens: 542
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:13:45-05:00'
sources: []
---

**Situation:** In mid‑2023 I was leading the migration of our legacy customer support platform to a cloud‑native stack at a fintech startup. The existing system handled about 12 k tickets per day but lagged in response time during peak hours, costing us roughly $8K/month in SLA penalties.

**Task:** My goal was to cut average ticket resolution time by 30% while keeping the cost under our current spend and ensuring compliance with data‑privacy regulations.

**Action:** I introduced an AI‑powered intent classification model using BERT fine‑tuned on our support logs. Integrated it into a microservice that pre‑routes tickets to the right queue, reducing agent load. I also built a feedback loop where resolved tickets were automatically fed back into the training data, improving accuracy over time. To address privacy, we deployed the model inside our VPC and encrypted all customer metadata at rest.

**Result:** Within three months, average resolution time dropped from 4.8 hours to 3.2 hours—a 33% improvement—and SLA penalties fell to zero, saving us $9K/month. The model’s confidence scores helped agents focus on complex cases, boosting overall satisfaction by 12%. I learned that the right AI tool, when coupled with a clear feedback loop and strict data controls, can deliver tangible business value without compromising compliance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
