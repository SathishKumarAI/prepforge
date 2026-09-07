---
qid: ing_a9e669c035__faang__local
question: 'Explain: Composition Pattern: Support Agent Delegating Refunds'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 481
total_tokens: 714
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:19:03-05:00'
sources: []
---

**Clarify**  
We’re asked to describe the *Composition* design pattern as it applies when a customer‑support agent delegates a refund request to another subsystem (e.g., billing). I’ll assume:  
1. The agent is part of a larger support service.  
2. Refund logic lives in a separate, reusable component.  
3. Communication between them must be decoupled and testable.

**Approach**  
1. Identify the *interface* that both the agent and the refund module will share (e.g., `IRefundService`).  
2. Make the agent hold a reference to this interface rather than a concrete class.  
3. Inject an implementation of the interface (via constructor or DI container).  
4. When a refund is requested, the agent calls the interface method; the concrete service handles validation, persistence, and external API calls.

**Depth**  
- **Interface (`IRefundService`)** defines `processRefund(orderId, amount)`.  
- **Concrete implementation (`BillingRefundService`)** implements all business rules (eligibility, limits, audit logging).  
- **Agent class**:  
  ```ts
  class SupportAgent {
    constructor(private readonly refundSvc: IRefundService) {}
    async handleRefund(req) {
      return await this.refundSvc.processRefund(req.orderId, req.amount);
    }
  }
  ```
Complexity is O(1) per request; composition keeps the agent lightweight and allows swapping services (e.g., a mock for testing). Trade‑offs: slight overhead of indirection but gains in modularity.

**Edge Cases**  
- Refund amount exceeds balance → service throws `InsufficientFundsError`.  
- External API timeout → graceful retry logic inside the service.  
- Agent receives malformed request → validation layer before delegation.

**Optimize & Communicate**  
To improve, add caching of eligibility checks and expose metrics on refund latency. I’d explain to interviewers how composition decouples concerns, eases unit testing (mock `IRefundService`), and supports A/B‑testing different billing engines without touching the agent logic—an ideal pattern for FAANG‑scale systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
