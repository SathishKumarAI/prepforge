---
qid: vq_432d15110f__faang__local
question: What are generators in Python?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 397
total_tokens: 625
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:07:37-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise yet deep explanation of *generators* in Python—how they work, why use them, and their trade‑offs.

**Approach**  
1. Define generators (lazy iterables).  
2. Explain creation via `def` with `yield` or generator expressions.  
3. Discuss state preservation, memory usage, and typical use cases.  
4. Mention key differences from lists/iterators.  

**Depth**  
A *generator* is an iterator that produces values on the fly using the `yield` keyword. Each call to `next()` resumes execution right after the last `yield`, returning a new value until the function exits, raising `StopIteration`. This lazy evaluation means only one item lives in memory at a time—ideal for streams or large datasets (e.g., reading millions of lines). Generator expressions (`(x*x for x in range(n))`) are syntactic sugar that avoid an explicit function. Generators can also receive input via `send()`, allowing two‑way communication.

**Edge Cases**  
- Exhausted generator: subsequent `next()` raises `StopIteration`.  
- Recursive generators may consume stack space if not careful.  
- Using a generator inside another that consumes it fully will exhaust the inner one, so copy or re‑create as needed.  

**Optimize & Communicate**  
Highlight that generators are more memory‑efficient than lists and can be pipelined (`map`, `filter`). Trade‑off: slower per‑item throughput due to function call overhead; not suitable when random access is required. Emphasize clear naming, docstrings, and unit tests for generator boundaries. This structure demonstrates problem clarity, systematic reasoning, depth of knowledge, and awareness of practical constraints—key signals FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
