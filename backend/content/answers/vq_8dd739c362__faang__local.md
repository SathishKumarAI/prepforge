---
qid: vq_8dd739c362__faang__local
question: What is recursion?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 432
total_tokens: 658
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:22:08-05:00'
sources: []
---

**Clarify**  
The interviewer asks: *“What is recursion?”* – a fundamental concept in computer science and Python. I’ll confirm the scope: are we focusing on theory, practical use‑cases, or performance implications? For now, assume they want a concise definition plus typical Python examples.

**Approach**  
1. Define recursion formally.  
2. Explain the two key components (base case & recursive step).  
3. Provide a simple Python snippet.  
4. Mention common pitfalls (stack overflow, infinite loops).  
5. Touch on tail‑call optimisation and Python’s lack of it.  

**Depth**  
Recursion is a technique where a function calls itself to solve smaller instances of the same problem until reaching a *base case* that can be solved directly. In Python:

```python
def factorial(n):
    if n <= 1:          # base case
        return 1
    return n * factorial(n-1)   # recursive step
```

Each call pushes a frame onto the interpreter’s call stack; when the base case returns, frames unwind, multiplying results. Recursion is elegant for divide‑and‑conquer algorithms (e.g., quicksort), tree traversals, and combinatorial problems.

**Edge Cases**  
- **Infinite recursion**: missing or incorrect base case → `RecursionError`.  
- **Large depth**: Python’s default limit (~1000) can be hit; use `sys.setrecursionlimit` sparingly.  
- **Performance**: recursive calls add overhead; memoization (`functools.lru_cache`) often mitigates repeated work.

**Optimize & Communicate**  
To improve, convert to an iterative solution or use tail‑call optimization (not available in CPython). When explaining, I’d emphasize clarity: “Recursion is self‑reference with a stopping condition.” This demonstrates structured thinking, technical depth, and awareness of practical constraints—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
