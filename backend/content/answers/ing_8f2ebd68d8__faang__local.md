---
qid: ing_8f2ebd68d8__faang__local
question: Your agent charged a customer's card twice. The trace shows one tool call.
  What happened, and how do you prevent it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 495
total_tokens: 742
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:17:31-05:00'
sources: []
---

**Clarify**  
We’re asked to explain why a customer’s card was charged twice even though the audit log shows only **one** tool call, and then outline how to prevent this in future runs.  
Key assumptions:  
- The “tool” is a payment‑API wrapper that executes an external HTTP request.  
- The trace captures the outbound call but not the internal retry logic of the wrapper or any downstream idempotency handling.  
- The customer’s account remains unchanged after the first successful charge.

**Approach**  
1. Reconstruct the full transaction flow: user request → agent → tool call → payment gateway → response.  
2. Identify where a duplicate could be generated (e.g., client‑side retry, server‑side re‑execution).  
3. Propose fixes at both system and code levels.

**Depth**  
The most common culprit is **idempotency key misuse**: the tool may generate a new key on each invocation or ignore the one supplied by the agent. If the first call succeeds but the client times out, the gateway may treat the second identical request as a duplicate only if it receives the same idempotency key; otherwise it processes it again, resulting in double‑charge.  
To fix:  
- Ensure every tool call includes a **stable idempotency key** derived from user intent (e.g., hash of order ID + timestamp).  
- The agent should cache and reuse that key for any retries.  
- Add an explicit “de‑duplication” flag in the payload so the gateway can reject duplicate charges regardless of key.

**Edge Cases**  
- Gateway may not support idempotency → need a client‑side ledger to track processed payments.  
- Network partition could cause double processing on both sides; test with flaky connections.  
- If multiple agents handle the same order, coordinate via a central lock or message queue.

**Optimize & Communicate**  
Implement a **retry‑policy layer** that only retries when idempotent and limits to one retry per key. Log all retries with the key for auditability.  
Explain this plan succinctly to interviewers: “We trace the request, discover missing idempotency, add stable keys, and enforce single‑execution semantics—this eliminates double charges while keeping latency low.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
