---
qid: ing_125fa64a66__faang__local
question: Design a customer-facing agent for an airline that can cancel and rebook
  flights. How do you keep it from violating fare policy?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 397
total_tokens: 645
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:26:33-05:00'
sources: []
---

**Clarify**  
We need a chatbot that lets passengers cancel or re‑book their tickets while ensuring the airline never violates its own fare rules (e.g., non‑refundable fares, blackout dates). I’ll assume we have access to the booking database, fare‑rule engine, and an API to the reservation system.

**Approach**  
1. **Pre‑validation layer:** intercept every request → lookup fare class & associated policy.  
2. **Rule‑engine integration:** call a deterministic engine that returns “Allowed/Denied” + penalties.  
3. **Stateful conversation:** keep context (flight, ticket ID, user intent).  
4. **Fallback path:** if uncertain, route to human agent with all data pre‑filled.

**Depth**  
- The agent queries the booking table for the fare code and passes it to a rule service that evaluates conditions such as “no‑refund”, “last‑minute fee” or “blackout”.  
- If allowed, the bot orchestrates cancellation via the reservation API, calculates fees, and offers alternative dates.  
- All decisions are logged with a hash of the original fare rules so auditors can trace why a cancellation was permitted.  
- Complexity: O(1) per request; rule engine runs in milliseconds.

**Edge Cases**  
- Multi‑segment itineraries with mixed fare types.  
- Group bookings where only part of the group wants to cancel.  
- Promotions or loyalty status that override standard rules.  
- System outages: fall back to a “manual review” queue.

**Optimize & Communicate**  
I’d add caching for frequently queried fare codes, and expose an audit API so compliance can verify actions in real time. In interviews I would narrate how the pre‑validation guard protects against policy violations, while the fallback ensures user satisfaction without breaking business rules.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
