---
qid: vq_d6dfc6aff6__faang__local
question: What is a Built_in subprogram ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 411
total_tokens: 642
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:36:58-05:00'
sources: []
---

**Clarify**  
We’re asked about *built‑in subprograms* in the context of programming languages (e.g., Pascal/Modula). A built‑in subprogram is a function or procedure that is supplied by the language implementation rather than written by the programmer.

- **Assumptions to confirm:**  
  - Language supports a standard library of primitives.  
  - The term refers to *subprograms* (procedures/functions), not just operators.

**Approach**  
1. Define what “built‑in” means in language semantics.  
2. List typical categories: I/O, math, string manipulation, type conversion, system calls.  
3. Explain how they are invoked and where their code resides.  

**Depth**  
A built‑in subprogram is a routine whose implementation lives inside the compiler or runtime environment. The programmer calls it by name; the compiler translates that call into a single instruction (or a small inline sequence) that directly invokes the runtime library. Examples: `write`, `read` in Pascal; `printf`, `scanf`; `sin`, `cos`. They are *intrinsic* because they cannot be overridden or redefined, ensuring predictable behavior and optimal performance.

**Edge Cases**  
- Overloading: some languages allow multiple signatures for a built‑in (e.g., `len()` for strings vs. arrays).  
- Platform differences: the same name may map to different system calls on Windows vs. Linux.  
- Extensibility: languages like Python expose C extensions that act as built‑ins but are user‑defined.

**Optimize & Communicate**  
Highlight that built‑ins reduce code size and execution time, provide a safety net (e.g., bounds checking in `array[]`), and enable the compiler to perform optimizations. Conclude by noting their role in language design: they balance expressiveness with performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
