---
qid: ing_0cfa7f6a8d__star__local
question: 'Explain: Likely interviewer follow-ups — Text To Sql Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 316
total_tokens: 553
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:54:27-05:00'
sources: []
---

**Situation** – In my last role, our analytics team needed a way for non‑technical stakeholders to run ad hoc queries against the sales database. The existing BI tool required writing SQL manually, which slowed decision making by an average of 3 days per query.

**Task** – I was tasked with building a prototype Text‑to‑SQL agent that could understand natural language requests and generate accurate, safe SQL statements for our PostgreSQL warehouse, while keeping latency under 1 second and ensuring no privileged data leakage.

**Action** – I chose the open‑source Hugging Face `text2sql` model and fine‑tuned it on a curated corpus of 5,000 internal queries. To enforce safety, I wrapped the model in a rule‑based post‑processor that checks for disallowed tables or columns before execution. The agent was deployed behind an API gateway with role‑based access control, and I added a caching layer (Redis) to hit repeat queries instantly.

**Result** – Within two weeks of rollout, user adoption jumped from 0 to 120 daily sessions, cutting the average query turnaround time by 70 % (from 3 days to 7.5 hours). The system logged zero security incidents, and I learned how to balance model flexibility with strict data‑governance controls.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
