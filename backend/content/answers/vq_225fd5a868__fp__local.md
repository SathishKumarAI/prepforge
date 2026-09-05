---
qid: vq_225fd5a868__fp__local
question: What is tail-recursion in Scala?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 364
total_tokens: 532
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:26:33-05:00'
sources: []
---

**Tail‑recursion in Scala**

At its core, a function is *tail‑recursive* when the last action performed in each branch is a call to itself (or to another function that will eventually invoke it). The fundamental problem it solves is the linear growth of the call stack during deep recursion: every recursive step normally pushes a new frame onto the stack. If the final call can be reused for the next frame, the compiler can collapse all those frames into one—this is *tail‑call elimination*.

Why must this work?  
The language runtime only needs to remember the arguments of the next invocation; it does not need to preserve the previous context because no computation follows the recursive call. Thus the stack pointer can be reused, turning a recursion that would otherwise blow up into an O(1) memory loop.

Connection to deeper principles: tail‑recursion is a manifestation of **structural recursion** in functional programming, ensuring that algorithms are *space‑optimal* while remaining purely declarative. It also aligns with the *continuation‑passing style* (CPS), where the continuation is trivial and can be inlined.

Non‑obvious insight: In Scala, only functions annotated with `@tailrec` (or implicitly tail‑recursive when compiled) are guaranteed to be optimized. A function that appears tail‑recursive but uses additional local variables after the recursive call will **not** trigger elimination, because those locals must survive until the recursion returns. Thus, careful placement of assignments is crucial for achieving true tail‑call optimization.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
