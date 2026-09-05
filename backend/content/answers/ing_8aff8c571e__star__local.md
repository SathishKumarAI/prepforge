---
qid: ing_8aff8c571e__star__local
question: An agentic research query returns a memo citing a case that was overruled.
  Where does that get caught?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 363
total_tokens: 611
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:10:31-05:00'
sources: []
---

**Situation**  
During the Q&A phase of our legal‑tech startup’s knowledge‑base engine, a user asked for guidance on *Smith v. Jones*. The system pulled up a memo citing *Doe v. Roe*, which had been overruled in 2018. The error made its way to production because we hadn’t yet integrated the case‑law update pipeline.

**Task**  
I needed to identify where the stale citation slipped through, patch the retrieval logic, and set up an automated guard against future overrulings so our lawyers could trust the outputs.

**Action**  
First I traced the query flow: user → NLP intent → semantic search over a vector index → memo generator. The culprit was the legacy PostgreSQL table that stored case metadata without a “status” flag. I added a `current_status` column, migrated to an up‑to‑date legal data feed from Westlaw’s API, and wrote a daily cron job that flags any case with a `status = 'overruled'`. Then I updated the memo generator to filter out flagged cases and append a disclaimer if no valid precedent exists. Finally, I added unit tests that mock an overruled citation to ensure the system never returns it.

**Result**  
Within two days the bug was fixed; our QA team confirmed 100 % of returned citations were current. The automated flagging cut downstream legal review time by 30 %, and we avoided a potential liability from giving outdated advice. I learned that coupling data freshness checks directly into the retrieval pipeline is essential for any AI‑driven legal tool.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
