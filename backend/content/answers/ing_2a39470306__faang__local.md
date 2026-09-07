---
qid: ing_2a39470306__faang__local
question: 'Explain: Hexagonal architecture the original 2005 article'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 366
total_tokens: 600
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:21:30-05:00'
sources: []
---

**Clarify**  
The interview asks about *hexagonal (ports‑and‑adapters) architecture* as introduced by Alistair Cockburn in his 2005 article. I’ll explain the core idea: a system’s business logic is isolated from external concerns through well‑defined ports, with adapters translating between them.

**Approach**  
1. Define the **core domain** (the “inside” of the hexagon).  
2. Specify **ports**—interfaces that describe what the core needs or offers (e.g., repository, service, UI).  
3. Build **adapters** around the hexagon: inbound adapters (controllers, message handlers) and outbound adapters (database, REST clients).

**Depth**  
- The core is pure, testable, free of framework or infrastructure code.  
- Ports are interfaces; adapters implement them, allowing substitution (e.g., swap a MySQL repo for an in‑memory one).  
- In practice, you might use dependency injection to wire adapters at runtime.  
- Complexity stays O(1) per request; the architecture adds negligible overhead but yields high modularity.

**Edge Cases**  
- Circular dependencies between adapters can break isolation—ensure ports are pure interfaces.  
- Very small projects may over‑engineer; hexagonal shines when multiple deployment targets or testing strategies exist.  

**Optimize & Communicate**  
Highlight that this pattern decouples the domain from infrastructure, eases unit testing (mocking ports), and supports continuous delivery by swapping adapters without touching business logic. Convey confidence in the trade‑off: a slight initial complexity for long‑term maintainability and testability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
