---
qid: vq_60584eb692__fp__local
question: What is High Water Mark?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 395
total_tokens: 561
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:37:20-05:00'
sources: []
---

**High‑Water‑Mark (HWM) – the ultimate “peak” counter**

At its core, HWM is a *monotonic* statistic that records the maximum amount of a resource (memory, CPU time, stack depth, etc.) ever consumed during a program’s execution.  
Why monotonic? Because any allocation can only increase usage; deallocations reduce it but cannot lower the historical peak. Thus the HWM is simply the supremum of the usage function over time.

In practice, consider dynamic memory: each `malloc` adds to the current heap size, and each `free` subtracts it. The HWM is updated whenever a new allocation pushes the running total above the previous maximum. This yields an exact upper bound on peak consumption—no later deallocations can make the earlier peak obsolete.

Why does this matter?  
* **Benchmarking**: Two algorithms may have identical average memory use but different HWMs; the higher one is more demanding in worst‑case scenarios (e.g., real‑time systems).  
* **Optimization**: A lower HWM often translates to a smaller stack or heap allocation, enabling deployment on constrained hardware.  

**Non‑obvious insight:** In many languages, the *HWM of the call stack* equals the deepest recursion depth times frame size. Thus, profiling the HWM can reveal hidden tail‑recursion pitfalls: an algorithm that appears iterative may still incur a high HWM due to inadvertent deep recursion in helper functions.

In short, HWM is a simple yet powerful bridge between raw resource usage and worst‑case guarantees, grounded in the basic principle that peak consumption bounds all future states.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
