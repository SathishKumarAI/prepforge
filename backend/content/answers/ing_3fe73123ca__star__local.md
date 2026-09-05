---
qid: ing_3fe73123ca__star__local
question: 'Explain: Companion Chapters — Agentic Systems'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 387
total_tokens: 620
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:36:10-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup we were launching a new budgeting app. The product team wanted an in‑app “smart coach” that could proactively suggest savings plans based on user spending patterns, but the existing chatbot framework only handled reactive queries.

**Task** – My goal was to build an agentic system: one that could set goals (e.g., reduce monthly discretionary spend by 15%), monitor real‑time data streams from users’ bank feeds, and act autonomously by pushing notifications or adjusting recommendation thresholds without human intervention.

**Action** – I designed a modular pipeline using Python’s `prefect` for orchestration and integrated OpenAI’s GPT‑4 with fine‑tuned embeddings to interpret spending intent. The agentic core was built on a reinforcement‑learning loop: the policy network received state vectors (user balances, recent transactions) and chose actions (send tip, adjust budget). I added a safety layer that capped any single recommendation’s impact at 5% of the user’s monthly income and logged all decisions to an audit trail. The system was containerized with Docker and deployed on AWS Fargate, scaling automatically based on API call volume.

**Result** – Within two months of rollout, users who engaged with the coach cut discretionary spending by an average of 18%, a 3% increase over our target. Engagement metrics rose from 12% to 27% click‑through on proactive suggestions, and we saw a 22% reduction in churn among the pilot cohort. I learned that coupling RL policies with strong human‑in‑the‑loop safety checks is essential for trustworthy agentic systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
