---
qid: vq_fd6dca7357__fp__local
question: Which of the following is not correct about an Exception ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 321
total_tokens: 492
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:05:08-05:00'
sources: []
---

**Answer (from first principles)**  

In programming, an *exception* is a mechanism for signaling that an event has occurred which the current code cannot or should not handle.  
From the perspective of **control‑flow optimization**, the language runtime must be able to *jump* out of the normal execution path and transfer control to the nearest handler. This requires two invariants:

1. **Exceptions are objects** (or records) that can carry arbitrary data.  
2. **Only code that has registered a handler for that type can catch it**; otherwise the exception propagates outward, potentially terminating the program.

A common misconception is that *every* exception represents an error. In fact, exceptions are also used to model normal control‑flow (e.g., `break` in generators or early returns from coroutines). Thus, the incorrect statement would be something like:

> “An exception **must** always indicate a fault; it can never be part of normal program logic.”

This is false because languages such as Python and JavaScript intentionally expose exceptions for both error handling and control‑flow purposes. The deeper principle here is that *exceptions are a first‑class abstraction for non‑local transfer of control*, not merely an error reporting tool.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
