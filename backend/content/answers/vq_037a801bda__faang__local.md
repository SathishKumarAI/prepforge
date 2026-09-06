---
qid: vq_037a801bda__faang__local
question: What are namespaces in Python? What is their purpose?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 483
total_tokens: 716
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T17:55:25-05:00'
sources: []
---

## Clarify  
The interviewer asks about **namespaces** in Python—how they’re defined, what scope rules govern them, and why they matter for code organization and avoiding name collisions.

### Assumptions  
- The context is runtime execution (not static typing).  
- We’re focusing on built‑in namespace types (`module`, `class`, `local`) rather than the whole import system.  

## Approach  
1. Define a *namespace* as a mapping from names to objects.  
2. Explain the three primary namespaces and their lifetimes.  
3. Illustrate with examples how lookups resolve across scopes.  
4. Summarize the purpose: isolation, predictability, and modularity.

## Depth  

| Namespace | Scope & Lifetime | Example |
|-----------|------------------|---------|
| **Global (module)** | File‑level; persists while module is loaded | `x = 5` in `foo.py`; accessible as `foo.x`. |
| **Local** | Inside a function or comprehension; destroyed on exit | `def f(): y = 2` – `y` exists only during `f()`. |
| **Enclosing (non‑local)** | For nested functions; captured by closures | `def outer(): z=3; def inner(): print(z)` |
| **Built‑in** | Predefined names (`len`, `int`) | Always available regardless of module. |

Name resolution follows the *LEGB* rule: Local → Enclosing → Global → Built‑in. This hierarchy prevents accidental overwrites and lets modules expose a clean API.

## Edge Cases  
- **Shadowing**: A local variable with same name as global hides it; `global` keyword can override this.  
- **Mutable defaults**: A mutable default argument shares its namespace across calls, leading to bugs.  
- **Circular imports**: Two modules importing each other create partially initialized namespaces.

## Optimize & Communicate  
Highlight that understanding namespaces is crucial for large codebases—enables lazy loading, avoids “namespace pollution,” and supports features like `__all__` to control exports. Conclude by noting how this knowledge helps write maintainable, testable Python at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
