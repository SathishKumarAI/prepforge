---
qid: ing_b77027ffbc__star__local
question: What's the difference between a workflow and an agent?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 326
total_tokens: 561
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:37:53-05:00'
sources: []
---

**Situation:**  
At my last company we were building an automated customer support system for a fintech app. The product team wanted to cut response time from 15 minutes to under 3 minutes for routine inquiries.

**Task:**  
I had to design the automation layer that would route, interpret, and answer tickets without human intervention while still allowing escalation when needed.

**Action:**  
I first defined a *workflow* as the orchestrated series of steps—ticket ingestion → NLP classification → knowledge‑base lookup → response generation → logging. I implemented this using Airflow DAGs to schedule nightly batch runs and Kafka streams for real‑time triggers. Next, I introduced an *agent*: a lightweight LLM‑powered conversational bot that could engage users directly in chat. The agent ran as a containerized microservice on Kubernetes, listening to the same message queue but with a shorter response latency goal. I set up a fallback policy so that if the agent’s confidence dropped below 0.7, the ticket would automatically hand off to the workflow for deeper processing and human review.

**Result:**  
Within two weeks of deployment, average first‑response time dropped to 2 minutes, a 87% improvement. The agent handled about 60% of inquiries, freeing up engineers to focus on edge cases. I learned that workflows are best for deterministic, multi‑step processes, whereas agents excel at real‑time, conversational interactions—each complements the other when orchestrated correctly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
