---
qid: ing_0857466fb1__eli5__local
question: 'Explain: Stack (7 Problems) — Neetcode 150'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 376
total_tokens: 536
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:48:53-05:00'
sources: []
---

Think of a **stack** like a pile of plates you keep on your kitchen counter.  
You can only touch the top plate—if you want another one, you must lift the top plate first.  
In programming, a stack works exactly that way: it’s a collection where you *push* (add) items onto the top and *pop* (remove) them from the top. The “last in, first out” rule is what makes a stack useful for tasks like undo‑history or parsing expressions.

In the **Neetcode 150** set, seven problems ask you to build or use stacks to solve real‑world puzzles:  
1. **Maximum Subarray Sum (Kadane)** – you keep track of current sums in a simple list.  
2. **Next Greater Element** – a stack remembers indices that still need their “next bigger” value found.  
3. **Daily Temperatures** – another stack holds future‑day temperatures yet to be compared.  
4. **Valid Parentheses** – push opening brackets, pop when you see the matching closing one.  
5. **Largest Rectangle in Histogram** – a stack keeps heights that haven’t found a shorter bar yet.  
6. **Trapping Rain Water** – two stacks (or a single with indices) remember left/right boundaries.  
7. **Binary Tree In‑Order Traversal** – an explicit stack simulates the recursive call stack.

Each problem shows how keeping items in LIFO order lets you solve otherwise tricky “look‑ahead” or “undo” problems quickly and cleanly. The key idea: *think of a stack as a tiny, invisible pile where only the top matters.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
