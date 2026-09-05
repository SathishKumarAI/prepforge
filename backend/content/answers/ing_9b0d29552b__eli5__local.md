---
qid: ing_9b0d29552b__eli5__local
question: A user closes the tab halfway through a streamed response. What happens
  on the server, and what should happen?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 218
total_tokens: 387
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:43:16-05:00'
sources: []
---

Imagine you’re ordering a pizza that’s being delivered in slices one at a time. While you’re still eating, you decide to cancel your order and leave the kitchen (close the tab). On the server side, the “pizza” is the AI’s streamed answer: it keeps generating pieces of text as if they were slices. When the user leaves, the browser stops asking for more slices. The server has no built‑in signal that you’re gone; it simply continues to run until the whole pizza finishes or it runs out of time.  

What should happen? The server ought to detect the broken connection (the “delivery truck” can’t reach the door) and politely stop cooking, freeing resources for other customers. This graceful shutdown saves CPU, memory, and avoids wasting energy on a response that no one will read. In short: the user’s tab closing ends the stream, so the server should terminate the generation process soon after noticing the closed connection.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
