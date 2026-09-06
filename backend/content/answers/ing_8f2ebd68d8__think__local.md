---
qid: ing_8f2ebd68d8__think__local
question: Your agent charged a customer's card twice. The trace shows one tool call.
  What happened, and how do you prevent it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 203
output_tokens: 404
total_tokens: 607
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T10:33:43-05:00'
sources: []
---

**1️⃣ Clarify the situation & assumptions**  
- *What* did we observe? One tool call in the trace, yet two charges on the customer’s card.  
- *Assume*: The tool is a payment‑processing API that can be invoked multiple times by our agent code; the double charge likely came from an unintended second invocation or a retry logic bug.  

**2️⃣ Mental model: “Idempotency & side‑effect handling”**  
Treat every external call as a potential source of duplication. Use the tool’s idempotency key feature (or implement your own) to guarantee that repeated calls with the same key produce a single transaction.

**3️⃣ Step‑by‑step reasoning**  
1. Inspect the trace: confirm the single `charge` call and check its payload for an idempotency token.  
2. Verify whether the agent’s code or the underlying tool automatically retries on network failure—this could trigger a second charge.  
3. Check if the payment provider returned a “duplicate” error that was silently swallowed, causing the agent to retry.  
4. If no idempotency key was supplied, that explains the double charge.

**4️⃣ Common traps to avoid**  
- Assuming the trace is exhaustive—side‑effects might happen outside logged calls (e.g., webhook triggers).  
- Overlooking silent error handling: an exception may be caught and retried without notice.  
- Relying on client‑side flags; always enforce idempotency server‑side.

**5️⃣ Sanity‑check & communicate**  
Re‑run the same charge request with a unique idempotency key and confirm only one transaction appears. Explain to stakeholders: “The duplicate was caused by an unguarded retry; adding a per‑transaction idempotency key (or using the provider’s built‑in mechanism) will prevent future double charges.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
