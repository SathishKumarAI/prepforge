---
qid: vq_8d5b6cd9e9__faang__local
question: Which package construct must be declared and defined within the package
  body?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 435
total_tokens: 671
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:21:59-05:00'
sources: []
---

**Clarify**  
You’re asking which *package elements* need to appear only inside a **package body** (as opposed to being visible in the specification). In Ada, any item that is private or implementation‑specific—e.g., `private` types, variables, constants, and subprogram bodies—is confined to the package body.  

**Approach**  
1. List all possible package constructs.  
2. Identify those whose visibility must be hidden from clients.  
3. Explain why they belong in the body.

**Depth**  
- **Private type definitions** (`type T is private;`) – the full representation is declared only in the body.  
- **`private` subtype and object declarations** – their actual types/values are defined in the body.  
- **Variables, constants, and arrays with private types** – initialized only in the body.  
- **Subprogram bodies** for procedures/functions that are *public* in the spec but whose implementation is not exposed.  
- **Private subprograms** (those declared `private` in the spec) also live solely in the body.

These elements cannot appear in the package spec because the spec must be self‑contained and visible to all clients; the body can reference private data without exposing it.

**Edge Cases**  
- If a type is declared as `type T is new Base with null record;` its full definition *can* go in the spec, but if you want to hide its representation (e.g., for binary compatibility), move it to the body.  
- A generic package may expose a private type only via a formal parameter; still, the actual type definition stays in the body.

**Optimize & Communicate**  
When interviewing, state the rule succinctly: *“Only items that must remain hidden—private types, variables, constants, and subprogram bodies—go into the package body.”* Then illustrate with a brief code snippet. This shows you grasp Ada’s encapsulation model while keeping the answer concise.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
