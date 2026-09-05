---
qid: ing_696ef7a5c3__star__local
question: 'Explain: Action-item extraction & the faithfulness gate'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 349
total_tokens: 584
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:57:55-05:00'
sources: []
---

**Situation** – At my previous company we launched a customer support chatbot that generated weekly summaries of user conversations. Management noticed the summaries often contained actionable items that were inaccurate or incomplete, leading to missed follow‑ups and client frustration.

**Task** – I was tasked with building an end‑to‑end pipeline to reliably extract action items from chat logs while ensuring each extracted item truly reflected what the user intended—essentially adding a faithfulness gate before feeding them into the CRM.

**Action** – First, I trained a transformer‑based NER model on 15k labeled conversation snippets to tag “action” triggers (e.g., *“please send me the report”*). Next, I implemented a rule‑based post‑processor that matched each trigger to a verb–object pair and validated it against the user’s prior context using cosine similarity in a sentence embedding space. The faithfulness gate scored each candidate on semantic alignment; items below 0.75 were discarded or flagged for human review. Finally, I integrated the pipeline with our internal ticketing system via an asynchronous microservice.

**Result** – Accuracy of extracted action items rose from 58 % to 92 %, and manual review time dropped by 70 %. Client satisfaction scores improved by 15 points in the quarterly survey, and we reduced missed follow‑ups by 4.3 k incidents annually. I learned that combining neural extraction with a lightweight semantic gate can dramatically improve real‑world reliability without sacrificing speed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
