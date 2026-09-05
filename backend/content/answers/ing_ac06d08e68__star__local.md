---
qid: ing_ac06d08e68__star__local
question: 'Explain: Data & context strategy — Text To Sql Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 369
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:16:37-05:00'
sources: []
---

**Situation:** At my last startup, we were launching a conversational analytics platform for retail clients. The product promised users could ask natural‑language questions like “Show me last month’s sales by region” and instantly receive accurate charts. Internally, our data lake had 50+ relational tables with complex joins, but no unified schema exposed to the front end.

**Task:** I was tasked with building a Text‑to‑SQL agent that could interpret user queries, map them onto the underlying database schema, and generate correct SQL while handling ambiguities—essentially creating a reliable data & context strategy for conversational analytics.

**Action:** First, I built a schema abstraction layer: extracted table metadata (columns, types, foreign keys) into a graph model using Neo4j. Then I trained a transformer‑based intent classifier on 3,000 annotated query examples, fine‑tuned with domain‑specific prompts. For context handling, I implemented a session memory that stored recent user intents and variable bindings in Redis so the agent could resolve pronouns (“that table”) across turns. When generating SQL, the agent used prompt engineering to include the schema graph as context, allowing it to produce safe, parameterized queries via an execution sandbox.

**Result:** The prototype achieved 92 % query‑accuracy on a held‑out test set and reduced mean response time from 4.2 s (manual DBA) to 0.8 s. Clients reported a 35 % increase in self‑service analytics usage within the first month, and I learned that coupling schema abstraction with session context is key for robust conversational AI over relational data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
