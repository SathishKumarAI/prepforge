---
qid: ing_ca00116ebe__eli5__local
question: 'Explain: Anchor to Rate limits Rate limits — GraphQL Admin API reference'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 237
total_tokens: 399
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:55:19-05:00'
sources: []
---

Think of the GraphQL Admin API as a busy café that serves only a limited number of customers each minute.  
The **rate limit** is like the kitchen’s “maximum orders per minute” rule: after you place an order (a query), you must wait until the kitchen clears its current batch before your next one can be cooked.  

An **anchor** is a bookmark that tells the café exactly where you left off in the menu, so you don’t have to start from the top each time. In practice, when you hit the rate‑limit ceiling, the API returns a special cursor (the anchor). Your next request includes this cursor, and the server resumes processing right after that point—just as a customer would pick up where they left off in a long line.

So:  
- **Rate limit** = how many “orders” you can send per minute.  
- **Anchor** = a saved spot to resume once the limit resets.  

This keeps the café (the API) running smoothly for everyone.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
