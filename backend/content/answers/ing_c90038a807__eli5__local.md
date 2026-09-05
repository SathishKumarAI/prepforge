---
qid: ing_c90038a807__eli5__local
question: 'Explain: Hexagonal Architecture — 6 Software Architectural Patterns You
  Must Know'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 325
total_tokens: 487
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:53:56-05:00'
sources: []
---

Think of a software system as a **restaurant kitchen**.  
The *hexagon* is the kitchen itself, with six “doors” (interfaces) that let food in or out: customers order (input), chefs cook (core logic), and waiters deliver dishes (output).  

1. **Ports** – the doors where people enter or leave; they’re plain contracts (no restaurant‑specific code).  
2. **Adapters** – the staff who open the doors: a waiter is an adapter that turns a customer’s order into kitchen instructions, and another takes finished food back to the table.  
3. **Domain** – the chefs’ recipes; pure business rules that don’t care how orders arrive or dishes are served.  
4. **Dependency Rule** – chefs can only use recipes, never the staff; adapters can call the chefs but not vice‑versa.  
5. **Inversion of Control** – the kitchen manager (framework) decides which waiter sits at which door, letting you swap staff without changing recipes.  
6. **Testability** – because doors and staff are separate, you can give a chef a mock order or mock delivery to test each part in isolation.

So hexagonal architecture keeps your core logic clean, lets you plug‑in new “waiters” (UI, APIs, databases) easily, and makes testing as simple as swapping out the staff.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
