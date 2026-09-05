---
qid: ing_cae091f618__star__local
question: 'Explain: Simple Retrieval: All Three Agree — SQL vs Pandas vs AI Agents:
  Which Solves Analytics Problems Best?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 292
total_tokens: 541
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:14:47-05:00'
sources: []
---

**Situation**  
At a mid‑size fintech, our data team needed to pull customer churn metrics from a 10 GB PostgreSQL warehouse for an executive dashboard that updated every hour. The existing SQL scripts ran in ~15 minutes and were brittle when new dimensions were added.

**Task**  
I had to redesign the pipeline so it delivered accurate churn reports in under five minutes, while allowing analysts to slice data on any new attribute without rewriting queries.

**Action**  
First, I rewrote the core logic as a Pandas‑based ETL: extracted raw tables via `psycopg2`, used `pd.merge` and `groupby` for aggregation, and cached intermediate results in Parquet. Next, I wrapped the process in an AI agent built on LangChain that could interpret analyst prompts (“Show churn by device type”) and automatically generate the appropriate Pandas code, even when new columns appeared. The agent leveraged OpenAI’s embeddings to map natural language to SQL/Pandas syntax, reducing manual coding time.

**Result**  
Query latency dropped from 15 minutes to under 3 minutes, and analysts could add new dimensions in seconds without any data engineer intervention. This hybrid approach combined the robustness of SQL, the flexibility of Pandas, and the adaptability of AI agents, delivering the best analytics solution for our dynamic environment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
