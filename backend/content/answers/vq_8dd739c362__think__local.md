---
qid: vq_8dd739c362__think__local
question: What is recursion?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 373
total_tokens: 555
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T02:01:20-05:00'
sources: []
---

**1️⃣ Clarify the goal & assumptions**  
Ask yourself what “recursion” means in the context of a beginner’s Python question. Assume the reader knows basic control flow but not formal definitions or why recursion is useful.

**2️⃣ Pick a mental model**  
Think of recursion as *“a function calling itself to solve smaller versions of the same problem.”* Use the classic “divide‑and‑conquer” picture: break down, solve sub‑problem, combine results. Remember that each call creates a new stack frame until a base case stops further calls.

**3️⃣ Step‑by‑step reasoning**  
- Define the *base case*: the simplest instance that can be answered directly.  
- Define the *recursive case*: reduce the problem size and invoke the same function.  
- Explain how the call stack unwinds: each recursive call returns to its caller, combining partial results.  
- Highlight that recursion is essentially a loop expressed via self‑calls.

**4️⃣ Common traps to avoid**  
- Forgetting or misidentifying the base case → infinite recursion.  
- Thinking recursion replaces loops entirely; in practice it’s often clearer but not always more efficient.  
- Overlooking stack depth limits for very large inputs.

**5️⃣ Sanity‑check & communicate**  
Run through a tiny example (e.g., factorial of 3) mentally: `fact(3)` → `3*fact(2)` → `2*fact(1)` → base case returns 1, then unwind. If the steps feel consistent and terminate, you’re on track. Explain this to the reader in plain language, emphasizing that recursion is a tool, not a replacement for all iteration.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
