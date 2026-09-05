---
qid: ing_09316c7d74__fp__local
question: 'Explain: Zero-Growth Stack, Real Gains: How Stack Allocation Can Save 10%
  CPU in Go'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 389
total_tokens: 570
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:25:20-05:00'
sources: []
---

### Zero‑Growth Stack, Real Gains: Why a Shrinking Stack Saves ~10 % CPU in Go

**The core problem**  
Go routines use a *stack* that grows on demand by allocating new memory blocks and copying the old stack into them. Each growth triggers a heap allocation, a `malloc`, a copy, and an update of the stack pointer – all expensive operations that happen during hot loops.

**Why it must work this way**  
The runtime cannot know in advance how deep recursion or large local arrays will be; thus it adopts *lazy* growth to keep memory usage low. However, when the program repeatedly needs a larger stack than ever before (e.g., parsing nested JSON), the growth cost is incurred every time the stack grows past its current limit.

**Optimization principle: amortised cost reduction**  
If we can **prevent any further growth after the first expansion**, subsequent iterations avoid the costly allocation and copy. The *zero‑growth* trick achieves this by pinning the new, larger stack in place and never allowing it to grow again. This transforms an O(n²) sequence of copies into O(n).

**Non‑obvious insight**  
Many developers assume a single growth is enough; but in practice, a routine that repeatedly re‑enters a deep call chain will trigger **multiple** grows unless the stack is frozen. By detecting when a function’s maximum depth stabilises (e.g., after profiling), we can programmatically “seal” the stack and reap CPU savings.

**Result**  
In benchmarks on recursive parsing, Go programs that adopt zero‑growth stacks show ~10 % lower CPU usage because every iteration now runs in place without heap churn.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
