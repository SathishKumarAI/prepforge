---
qid: ing_e18923cb78__eli5__local
question: 'Explain: Session vs SessionFactory — Java/Hibernate.md at main \u00b7 Anshul619/Java
  \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 212
total_tokens: 390
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:32:57-05:00'
sources: []
---

Think of a **SessionFactory** as the master blueprint for building houses (your database objects). It’s created once, takes a while to set up, and knows how every room should look. A **Session**, on the other hand, is like an individual builder working on one house at a time. The builder follows the blueprint (SessionFactory) but handles only its own construction tasks—adding walls, putting in windows, checking for leaks—and discards its work when finished.

So:  
- **SessionFactory** = the single, long‑lived factory that knows how to create all Sessions and holds configuration data.  
- **Session** = a short‑lived, thread‑local object used for a specific unit of work (like saving or querying entities).  

Just as you wouldn’t build every house with a fresh blueprint each time, in Hibernate you keep one SessionFactory and open many Sessions from it.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
