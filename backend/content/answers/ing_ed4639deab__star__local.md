---
qid: ing_ed4639deab__star__local
question: 'Explain: Multi-Stage Extraction Pattern — Structured Generation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 313
total_tokens: 548
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:23:15-05:00'
sources: []
---

**Situation:**  
When I was building a conversational agent for a fintech client, the initial natural‑language model could generate accurate answers but often missed contextual details like account balances or transaction dates, which led to user frustration and a 15% drop in satisfaction scores.

**Task:**  
I needed to improve answer fidelity by ensuring every response included all required structured data (e.g., amount, date, merchant) while keeping the dialogue natural and fast enough for real‑time interaction.

**Action:**  
I implemented a multi‑stage extraction pattern: first, I let the model produce a draft response; second, I ran an extraction module that parsed the draft into a JSON schema using spaCy’s dependency parser and custom regexes; third, I fed this structured output back to a fine‑tuned T5 encoder–decoder that re‑generated the final reply, filling in placeholders with verified data from the bank API. I also added a confidence threshold so low‑confidence fields triggered a clarification prompt instead of an incorrect answer.

**Result:**  
The system’s accuracy for required fields rose from 72% to 94%, and user satisfaction scores climbed by 22 points. I learned that separating generation from extraction lets you leverage specialized tools without sacrificing the fluidity of conversational AI.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
