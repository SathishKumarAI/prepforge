---
qid: ing_125fa64a66__think__local
question: Design a customer-facing agent for an airline that can cancel and rebook
  flights. How do you keep it from violating fare policy?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 204
output_tokens: 457
total_tokens: 661
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T03:57:16-05:00'
sources: []
---

**1️⃣ Clarify the scope & constraints**  
   - *What* is “customer‑facing”? (chatbot, voice assistant, mobile app).  
   - *Which fare rules* must be obeyed? (cancellation fees, refund eligibility, blackout dates, upgrade limits).  
   - Assume we have a real‑time API that returns the policy for any ticket.

**2️⃣ Adopt a “policy‑first” design pattern**  
   - Treat fare rules as a separate domain model.  
   - Build an *intent → rule check → action* pipeline: detect intent (cancel/rebook), fetch current fare policy, evaluate constraints before proceeding.

**3️⃣ Step‑by‑step reasoning**  
   1. **Intent detection** – NLP identifies “I want to cancel” or “rebook flight X”.  
   2. **Ticket lookup** – retrieve booking ID and associated fare class.  
   3. **Policy fetch** – call the fare‑policy microservice for that ticket.  
   4. **Constraint evaluation** – check cancellation window, fee schedule, rebooking eligibility.  
   5. **Decision & fallback** – if permissible, proceed; otherwise, present a clear explanation and offer alternatives (e.g., credit voucher).  

**4️⃣ Avoid common pitfalls**  
   - *Hard‑coding rules*: leads to stale policies after fare changes.  
   - *Blindly trusting user input*: always validate against the authoritative policy API.  
   - *Over‑abstraction*: too many indirections can hide errors; keep the rule engine testable.

**5️⃣ Sanity‑check & communicate**  
   - Write unit tests for each rule path (e.g., “no‑refund fare”).  
   - Log every decision point for auditability.  
   - In user messages, explicitly state the reason for any restriction (“Your ticket is non‑refundable; you can receive a credit instead.”).  

By treating fare policy as an external, authoritative service and making it the gatekeeper before any action, the agent stays compliant while still sounding helpful.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
