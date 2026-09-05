---
qid: ing_977f39051c__star__local
question: 'Explain: // Data — SQL vs Pandas vs AI Agents: Which Solves Analytics Problems
  Best?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 334
total_tokens: 579
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:35:46-05:00'
sources: []
---

**Situation**  
In my last role at a retail analytics team we had to generate monthly sales dashboards for over 150 store locations. The legacy SQL pipeline was slow (15 min per query) and the data volume kept growing. Meanwhile, our data science squad wanted to experiment with predictive models but lacked an easy way to pull fresh features.

**Task**  
I needed to redesign the analytics workflow so that real‑time dashboards stayed under 2 minutes, while also giving analysts a one‑click path from raw tables to model inputs without writing repetitive SQL or Pandas code.

**Action**  
I built a lightweight AI agent layer on top of our data lake. The agent uses natural language prompts to generate optimized SQL (leveraging cost‑based planner hints) and then automatically converts the result into a Pandas DataFrame for feature engineering. For model inference, I wrapped the agent in a serverless function that pulls the latest features from the Data Lake, runs a pre‑trained XGBoost model, and writes predictions back to a ClickHouse table. The agent also logs query plans so we could compare performance.

**Result**  
Dashboard refresh time dropped from 15 min to under 90 s (30% of the previous time). Analysts reduced feature engineering effort by 70%, spending less on manual SQL and more on model tuning. I learned that a hybrid approach—SQL for large‑scale joins, Pandas for in‑memory manipulation, and AI agents for orchestration—delivers both speed and flexibility in analytics pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
