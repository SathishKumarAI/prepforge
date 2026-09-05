---
qid: ing_d2b7cbf1fa__eli5__local
question: 'Explain: Use resiliency patterns — 9 Best Practices for Building Microservices'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 342
total_tokens: 505
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:09:03-05:00'
sources: []
---

Imagine a city of tiny factories (your microservices) that must keep producing goods even when storms hit or roads get blocked.  
**Resilience patterns** are the city’s safety nets—rules that let each factory stay alive and help the whole city keep running.

1. **Retry** – If a factory’s door is jammed, it tries again after a short pause.  
2. **Circuit Breaker** – When many doors stay jammed, the factory stops trying to avoid clogging traffic, letting the rest of the city breathe.  
3. **Bulkhead** – Separate each factory’s power lines so one outage doesn’t cut off all factories.  
4. **Timeout** – If a machine takes too long, the factory closes that line and moves on.  
5. **Fallback** – When a part fails, the factory switches to a backup tool instead of stopping.  
6. **Rate Limiting** – The city limits how many cars can enter a factory at once to prevent traffic jams.  
7. **Health Checks** – A patrol robot constantly checks each factory; if it’s down, the city reroutes work.  
8. **Graceful Degradation** – If some factories shut down, the city still delivers essential goods, just slower.  
9. **Observability** – City sensors log every movement so managers can spot trouble early.

By treating microservices like this well‑guarded city, you keep machine‑learning pipelines running smoothly even when parts hiccup or fail.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
