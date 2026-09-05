---
qid: vq_8d5b6cd9e9__fp__local
question: Which package construct must be declared and defined within the package
  body?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 568
total_tokens: 741
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:45:44-05:00'
sources: []
---

In PL/SQL a *package* is split into two parts:

| Part | What it contains | Why it must be in the body |
|------|------------------|----------------------------|
| **Spec** | Public declarations (procedures, functions, types, variables, constants, exceptions) that other units can see. | It defines the interface only; no executable code lives here. |
| **Body** | *All* subprogram bodies for procedures/functions declared in the spec, and any private objects (variables, types, exceptions, nested packages, etc.) that are not exposed in the spec. | The body is where the compiler can generate machine‑level code for each routine. It also holds “private” state that must remain hidden from callers; keeping it in the body enforces encapsulation and allows the engine to inline or optimize without exposing implementation details. |

**Key insight:**  
If a procedure/function is declared in the spec **without** a corresponding body in the package, the compiler will raise an *“missing body”* error. This rule guarantees that every public contract has an implementation, preventing accidental exposure of incomplete interfaces. Moreover, because private declarations live only in the body, they can be re‑compiled independently when the interface stays unchanged—improving deployment efficiency and maintaining binary compatibility for dependent units.

Thus, *the package body must contain every subprogram’s code defined in the spec, plus all internal objects that are not part of the public API.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
