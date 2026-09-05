---
qid: ing_c57adc45e3__eli5__local
question: 'Explain: Pattern: Corrective RAG (CRAG) — Design Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 220
total_tokens: 382
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:48:49-05:00'
sources: []
---

**Corrective RAG (CRAG)** is a way to keep an AI system safe when it starts making mistakes.  
Imagine you’re driving a self‑driving car that can sometimes misread traffic signs. A CRAG “traffic guard” watches the car’s decisions. If the guard notices a wrong turn or a sign misinterpretation, it quickly tells the car to stop, re‑analyze the situation, and choose a safer route—just like a co‑pilot who pulls the brakes when they spot an error.

- **RAG** = *Red‑Amber‑Green* status lights that show how confident the AI is.  
- **Corrective** means the system can step in, pause, and fix its own mistake instead of letting it happen unnoticed.

So CRAG turns a potentially dangerous “self‑learning” robot into a cautious partner that learns from its blunders on the fly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
