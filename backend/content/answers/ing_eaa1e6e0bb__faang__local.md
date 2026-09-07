---
qid: ing_eaa1e6e0bb__faang__local
question: Your AI feature can call tools - search, email, database writes. What does
  prompt injection mean for your design?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 397
total_tokens: 642
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:45:24-05:00'
sources: []
---

**Clarify**  
Prompt‑injection is when a user crafts input that tricks the LLM into executing unintended tool calls (e.g., an email to a malicious address or a database write). I’ll assume the system uses a single “tool‑calling” interface, runs in a trusted environment, and logs all tool invocations.

**Approach**  
1. Identify injection vectors: user text that looks like a command or contains hidden instructions.  
2. Build a guardrail layer that validates every tool request before execution.  
3. Separate the LLM’s output into “intent” and “arguments,” then apply policy checks.  
4. Log and audit all calls for post‑hoc review.

**Depth**  
- **Intent detection:** Use a lightweight classifier or rule set to confirm that the intent field matches an allowed tool (e.g., `search`, `email`).  
- **Argument sanitization:** For email, whitelist domains; for DB writes, enforce schema constraints and use parameterized queries.  
- **Execution gate:** If any check fails, return an error message instead of invoking the tool.  
Complexity is O(n) over the number of calls; overhead is negligible compared to the LLM’s inference cost.

**Edge cases**  
- Ambiguous prompts that mix multiple intents (e.g., “search for emails about X and then email Y”).  
- Nested tool calls where one tool’s output triggers another.  
- Adversarial text that uses Unicode tricks or escape sequences.  
Tests should cover these patterns, ensuring the guardrail never bypasses.

**Optimize & communicate**  
To improve resilience, add a “trusted‑source” flag for internal commands and rate‑limit tool usage per user session. I’d explain to interviewers how this layered defense balances safety with flexibility, keeping latency low while preventing malicious side effects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
