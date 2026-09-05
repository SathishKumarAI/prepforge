---
qid: ing_2cfd839b08__eli5__local
question: 'Explain: Cost estimate (rough token math) — Text To Sql Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 210
total_tokens: 371
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:46:42-05:00'
sources: []
---

Think of a text‑to‑SQL agent as a translator who first reads the user’s question, then writes a short “recipe” (the SQL query) and finally checks that recipe against the kitchen’s inventory (the database schema).  
Every word the agent sees or produces counts like a dollar bill in this economy. A typical prompt might be 150 words (≈ 750 tokens) for the user’s question plus 50‑70 tokens describing the table names and columns. The agent then writes the SQL, usually 20–40 tokens. In total you’re looking at roughly **1,000–1,200 tokens** per round.  
If a language model charges $0.02 per 1,000 tokens, each query costs about **$0.02 to $0.03**—just enough for the translator to do its job without breaking the bank.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
