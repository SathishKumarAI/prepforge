---
qid: ing_aabb9935ee__star__local
question: 'Explain: Ambiguity clarification — Text To Sql Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 321
total_tokens: 557
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:14:23-05:00'
sources: []
---

**Situation** – In my last role, we built a conversational AI for our e‑commerce analytics platform. Users could ask natural‑language questions like “Show me sales from the last quarter” and get instant SQL queries. Early beta testing revealed that half of the user utterances were ambiguous: some asked for revenue but meant units sold; others referenced “last quarter” while the database used fiscal periods.

**Task** – I had to design a lightweight ambiguity‑clarification loop so the agent could ask follow‑up questions without breaking the flow, ensuring accurate query generation and high user satisfaction.

**Action** – I implemented a two‑stage approach. First, the intent extractor flagged potential ambiguities using a fine‑tuned BERT model trained on 3,000 labeled utterances. When ambiguity was detected, the system generated a clarifying question via a templated NLG module (e.g., “Do you mean revenue or units sold?”). The response was fed back into a context‑aware transformer that updated the slot values before re‑generating the final SQL with a rule‑based template engine. I also added an audit log to capture user choices for continuous model improvement.

**Result** – Post‑deployment, query accuracy rose from 78 % to 94 %, and average user session time dropped by 18 %. The team learned that proactive clarification not only improves precision but also boosts trust in AI assistants.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
