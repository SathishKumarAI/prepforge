---
qid: ing_a9e669c035__fp__local
question: 'Explain: Composition Pattern: Support Agent Delegating Refunds'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 321
total_tokens: 491
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:06:20-05:00'
sources: []
---

**Why the “Support‑Agent Delegates Refund” pattern is essential**

When a customer asks for a refund, the *support agent* must **validate policy compliance** and **initiate payment reversal**—two tasks that belong to distinct domains: customer service and finance.  
If the agent handled both, every change in finance rules would ripple through the service code, violating *separation of concerns* and inflating testing effort. By delegating the refund to a dedicated **Refund Service**, the agent merely orchestrates:  

1. **Validate** (policy engine).  
2. **Delegate** (`refundService.process(orderId)`).  
3. **Acknowledge**.

This mirrors the *Command‑Query Responsibility Segregation* principle: the agent issues a command (“process refund”) while queries remain separate. It also aligns with *information hiding*: the agent needn’t know how refunds are executed, only that they succeed or fail.

**Non‑obvious insight:**  
The delegation is not just about decoupling; it creates a **single source of truth for audit trails**. Because all refund logic lives in one place, you can enforce immutable logs and replayability—critical for regulatory compliance—without burdening every support workflow with logging concerns. Thus, the pattern scales from a handful of agents to thousands of automated bots while preserving correctness and traceability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
