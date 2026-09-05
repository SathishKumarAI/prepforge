---
qid: ing_dd7bad7cce__star__local
question: 'Explain: You Just Hallucinated — That Is Embarrassing: Why Frontier AI
  Still Makes Things Up, and What to Do About It'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 287
total_tokens: 540
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:51:14-05:00'
sources: []
---

**Situation:**  
During a client‑facing demo of our new generative chatbot for legal document drafting, the model started fabricating case citations that didn’t exist. The client was a law firm with a reputation for precision; one hallucinated citation risked a lawsuit.

**Task:**  
I had to identify why the AI was inventing facts, mitigate the risk in real‑time, and implement safeguards so future demos wouldn’t repeat the incident.

**Action:**  
First, I profiled the model’s training data pipeline: it pulled unfiltered web scraping sources, which introduced noise. I added a “fact‑checking” layer that cross‑references any generated citation against a vetted legal database (Westlaw). Next, I tuned the temperature and top‑k parameters to reduce creativity in factual outputs and enabled a confidence‑scoring flag so users could see when the model was uncertain. Finally, I built an internal audit log that flags any new claim for human review before it reaches the client.

**Result:**  
The demo ran flawlessly with zero hallucinations; the firm adopted our chatbot, reporting a 30 % reduction in drafting time and no compliance incidents. I learned that combining data curation, parameter tuning, and external verification is essential when deploying frontier AI in high‑stakes domains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
