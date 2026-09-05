---
qid: ing_527340b8f6__eli5__local
question: Traffic doubles overnight and you can't get more GPU capacity for a week.
  What are your graceful-degradation options?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 227
total_tokens: 396
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:47:49-05:00'
sources: []
---

Imagine your AI is a busy kitchen that suddenly needs to serve twice as many customers all at once, but the ovens (GPUs) are still full and you can’t add more right now.  
**Graceful‑degradation options** let the kitchen keep working, just a bit slower or with fewer dishes:

1. **Batch everything** – instead of cooking each order immediately, group orders into larger batches that fit the existing ovens.  
2. **Use a smaller menu** – temporarily drop the most complex recipes (models) and serve only the simplest ones that still satisfy customers.  
3. **Turn down the heat** – reduce GPU usage per task; the same dishes take longer but you avoid overloading the system.  
4. **Prioritize** – decide which orders are urgent (high‑priority requests) and let others wait or go to a slower backup kitchen (CPU).  

These steps keep the service running, just at a gentler pace, until you can add more ovens again.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
