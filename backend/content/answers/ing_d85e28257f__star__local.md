---
qid: ing_d85e28257f__star__local
question: 'Explain: Problem statement — Text To Sql Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 356
total_tokens: 590
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:41:43-05:00'
sources: []
---

**Situation**  
At my last company we had a legacy data warehouse with dozens of tables but no user‑friendly interface. The analytics team spent hours writing raw SQL queries for ad‑hoc reports, and new hires were stuck learning the schema.

**Task**  
I was asked to build an internal “Text → SQL” agent that would let analysts type natural‑language questions (e.g., “Show me last quarter sales by region”) and get a correct, executable query in under 30 seconds, without compromising security or performance.

**Action**  
I chose a two‑stage pipeline: first, I used spaCy to parse the intent and entities, mapping them to our schema via a custom ontology. Then I fine‑tuned an OpenAI GPT‑4 model on 5,000 historical queries paired with their SQL equivalents, adding prompt templates that enforced safe query patterns (e.g., whitelisting tables, restricting joins). For execution I wrapped the generated SQL in a stored procedure that ran against our Redshift cluster, and logged every output for audit. I also implemented a lightweight cache of frequently requested reports to reduce latency.

**Result**  
Within two months we saw a 45 % drop in manual query time, with analysts reporting a 30 % increase in productivity. The agent handled over 1,200 requests per day, and the cache cut Redshift query load by 25 %. I learned how to blend NLP parsing with model fine‑tuning for production safety and the importance of monitoring real‑world usage to iterate on prompts quickly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
