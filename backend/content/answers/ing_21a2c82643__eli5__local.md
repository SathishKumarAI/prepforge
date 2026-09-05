---
qid: ing_21a2c82643__eli5__local
question: Design the human-handoff path for a customer-service agent. When should
  it escalate, and what does a good handoff look like?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 294
total_tokens: 468
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:30:03-05:00'
sources: []
---

Imagine your AI assistant is a friendly barista who can make most coffee orders quickly, but sometimes the customer needs something special—like a latte with a custom flavor or a dietary restriction that the machine can’t handle. The “human‑handoff path” is like deciding when to pass the order to a human barista.

**When to Escalate**  
1. **Complex requests** – anything beyond the AI’s preset menu (e.g., a new product, legal question).  
2. **Customer frustration or uncertainty** – if the user says “I’m not sure” or repeats a problem many times.  
3. **High‑stakes decisions** – refunds, policy changes, or safety issues.

**What a Good Handoff Looks Like**  
- The AI politely says, *“Let me connect you with one of our specialists who can help.”*  
- It hands over the conversation transcript and any relevant data (order ID, previous messages) so the human doesn’t start from scratch.  
- The system keeps the user in the same chat window; they don’t have to open a new ticket or call a phone line.

In short, the AI should hand off when it can’t resolve the issue efficiently and smoothly pass all context to the human agent, ensuring the customer feels heard and supported without unnecessary friction.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
