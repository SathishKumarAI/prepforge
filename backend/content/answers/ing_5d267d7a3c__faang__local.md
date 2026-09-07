---
qid: ing_5d267d7a3c__faang__local
question: 'Explain: Bit Manipulation (7 Problems) — Neetcode 150'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 661
total_tokens: 898
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:20:32-05:00'
sources: []
---

**1️⃣ Clarify**  
We’re asked to solve the *Bit Manipulation* set in NeetCode‑150—seven classic problems that test low‑level understanding of integers, masks, and bitwise operators (AND, OR, XOR, NOT, shifts). Assume 32‑bit signed ints, O(1) time/space per operation unless otherwise noted.  

**2️⃣ Approach**  
For each problem:  
- Identify the property to extract or modify (e.g., “count set bits”, “find single number”).  
- Pick a mask or shift that isolates the target bits.  
- Apply bitwise ops to compute the answer in constant time.  
Typical patterns:  
| Problem | Key Mask/Shift | Core Idea |
|---------|-----------------|-----------|
| Count 1‑bits | `x & (x-1)` loop | Remove lowest set bit each iteration |
| Find single number | XOR all numbers | Duplicate pairs cancel out |
| Check if power of two | `n & (n-1) == 0` | Only one bit set |
| Flip bits in range | `mask = ((1<<len)-1)<<start` | XOR with mask |
| Reverse bits | Iterate 32 times, shift | Build reversed value |
| Compute parity | XOR all bits together | Result 1 if odd number of ones |
| Set/clear/check a bit | `x |= (1<<k)`, `x &= ~(1<<k)` | Manipulate kth position |

**3️⃣ Depth**  
- **Count 1‑bits:** Loop until x==0; each iteration removes one set bit → *O(k)* where k is popcount.  
- **Find single number:** XOR of array → duplicates cancel → *O(n)* time, *O(1)* space.  
- **Power of two:** Constant check → *O(1)*.  
- **Flip bits in range [l,r]:** Build mask of length `r-l+1`, shift to l, XOR with x → *O(1)*.  
- **Reverse bits:** Shift-and-or loop over 32 bits → *O(32)=O(1)*.  
- **Parity:** XOR all bits together (or use Brian Kernighan) → *O(k)*.  
- **Set/clear/check bit k:** Single shift and mask → *O(1)*.

**4️⃣ Edge Cases**  
- Negative numbers: handle sign‑bit correctly (use unsigned shifts).  
- Zero input for power‑of‑two check.  
- Range boundaries equal or out of order; validate l≤r.  
- 32‑bit overflow when shifting beyond limits—mask with `(1<<31)`.

**5️⃣ Optimize & Communicate**  
Explain why XOR cancels pairs, why `n&(n-1)` clears the lowest set bit, and how masks isolate ranges. Highlight that all solutions run in constant or linear time relative to input size and use O(1) auxiliary space—ideal for interview scenarios where clarity and speed matter.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
