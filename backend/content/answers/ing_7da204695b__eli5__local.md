---
qid: ing_7da204695b__eli5__local
question: 'Explain: Synchronous vs Asynchronous Replication — Availability | System
  Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 227
total_tokens: 388
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:55:59-05:00'
sources: []
---

Imagine a bakery that sends fresh loaves to two cafés every morning.  
**Synchronous replication** is like the baker standing beside each café, handing over a loaf only after both cafés confirm they received it. The baker waits until both “yes” replies come back before he can leave. If one café’s phone line is down, the baker can’t finish his trip and no new loaves arrive anywhere—availability drops.

**Asynchronous replication** is like the baker dropping a loaf at each café’s door and then walking away. The cafés get the bread immediately; the baker doesn’t wait for their reply. If one café loses its phone line later, it still has the loaf that was already delivered, so service stays up. Only if the bakery later learns the drop failed does it have to resend.

So synchronous guarantees perfect consistency but can hurt availability when a link fails, while asynchronous keeps the system alive even with occasional hiccups, at the cost of temporary differences between copies.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
