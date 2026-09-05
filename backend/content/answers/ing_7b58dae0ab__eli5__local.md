---
qid: ing_7b58dae0ab__eli5__local
question: 'Explain: Design the reliability layer for calls to an LLM provider: timeouts,
  retries, circuit breakers, idempotency.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 246
total_tokens: 419
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:52:14-05:00'
sources: []
---

Imagine your app is a messenger who needs to deliver messages (questions) to a busy post office that writes the answers (the LLM). To keep the delivery reliable you add four safety rules:

1. **Timeouts** – The messenger gives the post office only a set amount of time (say 5 seconds) to write a reply. If it takes longer, the messenger stops waiting and moves on.  
2. **Retries** – If the messenger doesn’t receive an answer, he can try again up to a few times, hoping that a temporary glitch was the cause.  
3. **Circuit Breaker** – When the post office is overwhelmed (many failed attempts in a row), the messenger stops sending more messages for a while, giving the office time to recover.  
4. **Idempotency** – Each message carries a unique stamp so that if it’s sent twice by accident, the post office knows it’s the same request and returns the same reply instead of writing duplicate answers.

Together these rules make sure your app gets accurate responses even when the LLM service hiccups.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
