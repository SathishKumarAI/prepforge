---
qid: ing_8f2ebd68d8__fp__local
question: Your agent charged a customer's card twice. The trace shows one tool call.
  What happened, and how do you prevent it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 184
output_tokens: 346
total_tokens: 530
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:09:54-05:00'
sources: []
---

When the system makes a single *tool* call that performs the payment, the tool itself is usually **stateless** from the agent’s view: it just returns “success” or “error”.  
If the agent receives no confirmation (e.g., a timeout or network glitch), it retries the same instruction. The second call reaches the payment gateway with the same order id, but because the gateway treats each POST as a new transaction, it charges the card again.  

Why this must happen?  
* **Optimistic concurrency**: The agent assumes success until proven otherwise; it cannot “look back” into the external world to see that a side‑effect already occurred.  
* **Idempotence gap**: The payment API is not idempotent unless you supply an explicit client‑generated idempotency key.

**Prevention strategy**

1. **Generate a unique idempotency token per intent** and include it in every tool call.  
2. **Persist the token locally** (or in a short‑lived cache) before invoking the tool.  
3. If the agent retries, it sends the same token; the gateway will return the original result instead of creating a new charge.  

*Non‑obvious insight:* The root issue is *state leakage*: once the payment has left the agent’s control, you must treat the external system as an immutable black box and enforce idempotence at the boundary, not in the agent logic itself. This turns a fragile retry loop into a deterministic, recoverable operation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
