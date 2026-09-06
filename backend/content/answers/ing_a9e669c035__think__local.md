---
qid: ing_a9e669c035__think__local
question: 'Explain: Composition Pattern: Support Agent Delegating Refunds'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 415
total_tokens: 604
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T12:15:07-05:00'
sources: []
---

**1. Clarify the context and assumptions**  
   - Identify who “Support Agent” is (front‑line staff) and what a “Refund” entails (financial transaction, policy check).  
   - Assume we’re designing a system where agents can delegate refund logic to specialized services rather than handling it all themselves.

**2. Choose a mental model: the Composition pattern**  
   - View the Support Agent as a *composite* object that aggregates other objects (e.g., `RefundProcessor`, `PolicyChecker`).  
   - The agent delegates specific responsibilities, keeping its interface simple while leveraging composed components.

**3. Step‑by‑step reasoning**  
   1. Define an interface `IRefundService` with methods like `ProcessRefund(orderId)`.  
   2. Implement concrete services (`StandardRefund`, `PremiumRefund`) that encapsulate different refund rules.  
   3. In the Support Agent class, hold a reference to an `IRefundService` (composition).  
   4. When an agent receives a refund request, it calls the service’s method instead of implementing logic inline.  
   5. The agent can swap services at runtime (e.g., for different customer tiers) without changing its own code.

**4. Avoid common traps**  
   - Don’t “inherit” from `RefundProcessor`; inheritance implies a fixed relationship, whereas composition allows dynamic swapping.  
   - Avoid leaking internal state of the composed service; expose only what the agent needs through its interface.  

**5. Sanity‑check & verbalize**  
   - Ask: *“If I replace the refund service with a mock, can the agent still operate?”* – this confirms loose coupling.  
   - Explain to stakeholders that composition keeps the Support Agent focused on user interaction while delegating business rules to specialized components.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
