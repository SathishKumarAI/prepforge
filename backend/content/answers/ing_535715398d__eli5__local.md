---
qid: ing_535715398d__eli5__local
question: 'Q: How do you decide how many candidates to rerank?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 269
total_tokens: 429
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:49:01-05:00'
sources: []
---

When a search‑style AI (like a smart assistant) first finds a bunch of possible answers, it calls them **candidates**.  
Think of the candidates as people standing at a bus stop waiting to board. The AI’s quick “first pass” is like a driver who spots everyone and says, “All right, you’re all ready.” But the driver can’t put every passenger on one small bus; he has to pick a few for a short ride that will get them close enough so they can walk the rest of the way.

So the AI decides how many candidates to **rerank**—that is, to examine more closely—by balancing two things:

1. **Speed:** The fewer people you let on the bus, the faster the driver can decide who gets a seat.
2. **Quality:** If you let too few, you might miss someone who would have been a great match.

A common rule of thumb is to take the top *N* candidates that the first pass gave you (often 10–20) and rerank them with a deeper analysis. This gives the AI enough options to choose from while still staying quick and accurate.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
