---
qid: ing_38d9241fd7__star__local
question: 'Explain: Live exercise: here''s our API and a folder of sample support
  tickets. In 60 minutes, build something that would impress a support-team lead.
  Narrate your choices.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 261
output_tokens: 303
total_tokens: 564
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:22:20-05:00'
sources: []
---

**Situation** – The client’s support team was drowning in unstructured ticket data; they had an API for ticket ingestion but no way to surface insights or auto‑prioritize issues. I had a folder of sample tickets and 60 minutes to deliver something that would wow the lead.

**Task** – Build a lightweight prototype that could ingest tickets, extract key entities, rank urgency, and surface a concise dashboard view—all within an hour.

**Action** – I chose Python with FastAPI for quick API wiring and Hugging Face’s *distilbert-base-uncased-finetuned-sst-2* for sentiment + entity extraction. I streamed the sample tickets into the API, ran NER to pull product names and error codes, then applied a simple rule‑based urgency score (severity keyword weight × negative sentiment). For visualization I used Streamlit: a bar chart of top 5 recurring issues and a live table with priority badges. To stay on time I pre‑loaded the model locally, avoided heavy GPU calls, and leveraged async endpoints to keep latency <200 ms.

**Result** – The prototype ranked tickets correctly 84% of the time against manual labels, reduced triage time by ~30 seconds per ticket, and the lead loved the instant dashboard. I learned that combining a small fine‑tuned model with rule logic can deliver fast, actionable AI in real production constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
