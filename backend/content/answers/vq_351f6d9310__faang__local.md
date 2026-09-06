---
qid: vq_351f6d9310__faang__local
question: '3 Question 2: Are there NULL values in the array?'
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 386
total_tokens: 623
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:05:34-05:00'
sources: []
---

**Clarify**  
You’re given an integer array `arr`. The question asks whether any element equals **NULL** (or, in Java/C#, `null`). Confirm: *Is the array primitive or object?* In Java/C# primitives can’t be null; only object references can. If it’s a collection like `List<Integer>`, then elements may be null.

**Approach**  
1. Iterate over each element.  
2. For object types, check `if (elem == null)`.  
3. Return true on first hit, else false after loop.

If the array is large and you need to know *how many* nulls exist, keep a counter instead of early exit.

**Depth**  
```java
boolean containsNull(Integer[] arr) {
    for (Integer x : arr) {
        if (x == null) return true;
    }
    return false;
}
```
Time O(n), Space O(1). For primitive arrays, the method always returns `false`—no nulls possible.

**Edge Cases**  
- Empty array → `false`.  
- All nulls → `true`.  
- Mixed types (e.g., `Object[]`) → same logic applies.  
- Concurrent modifications (if using a thread‑safe collection) would need synchronization.

**Optimize & Communicate**  
If you’re only interested in existence, early exit is optimal. If you need the count, replace the return with a counter and remove the early break. Explain to interviewers that the solution scales linearly, uses constant extra memory, and handles both object and primitive arrays appropriately. This showcases clear problem understanding, efficient coding, and edge‑case awareness—key signals for FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
