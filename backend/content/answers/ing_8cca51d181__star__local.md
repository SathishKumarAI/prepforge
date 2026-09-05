---
qid: ing_8cca51d181__star__local
question: 'Explain: What Did Not Work Initially — Conversational Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 314
total_tokens: 550
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:14:22-05:00'
sources: []
---

**Situation** – At my previous company we launched a customer‑support chatbot on the e‑commerce site to handle order queries. Within the first week, metrics showed a 60 % abandonment rate and an average resolution time of 12 minutes—way higher than our target of 3 minutes.

**Task** – I was tasked with diagnosing why users were dropping off, cutting the response time, and improving overall satisfaction while keeping the model’s inference cost under $0.05 per request.

**Action** – First, I ran A/B tests on the conversation logs to pinpoint failure points: over‑generation of generic responses and a lack of context retention caused repeated back‑and‑forth. I re‑engineered the pipeline using a lightweight transformer (DistilBERT) fine‑tuned on our FAQ corpus and added a slot‑filling layer to capture intent and entities. Then, I implemented a dialogue state tracker that persisted user context across turns, reducing unnecessary prompts. Finally, I deployed the model behind an edge cache with autoscaling so latency stayed under 200 ms.

**Result** – After two weeks, abandonment dropped to 12 %, average resolution time fell to 2.5 minutes, and NPS improved from 38 to 52. I learned that balancing model size, context management, and real‑time constraints is critical for conversational AI success.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
