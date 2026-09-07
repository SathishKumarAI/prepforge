---
qid: ing_44efd3cb8c__faang__local
question: 'Explain: Binary (5/5) — Blind 75'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 553
total_tokens: 788
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:24:40-05:00'
sources: []
---

**Topic: Machine Learning – Binary Search (Blind 75)**  

---

### 1️⃣ Clarify  
The interviewer asks you to explain *binary search*—a classic divide‑and‑conquer algorithm that finds an element in a sorted array or decides its presence/absence. “Blind 75” refers to the top 75 coding questions on LeetCode; binary search appears in many of them (e.g., *Binary Search*, *Search Insert Position*, *First Bad Version*). I’ll assume:  
- Input is a **sorted** array of distinct integers.  
- We need an \(O(\log n)\) solution.  

### 2️⃣ Approach  
1. **Initialize two pointers** `lo = 0`, `hi = n‑1`.  
2. While `lo ≤ hi`:  
   - Compute middle: `mid = lo + (hi – lo)/2` to avoid overflow.  
   - If `arr[mid] == target`, return `mid`.  
   - If `arr[mid] < target`, search right half (`lo = mid+1`).  
   - Else, search left half (`hi = mid‑1`).  
3. If loop ends, target isn’t present; return `-1` or insertion index.  

### 3️⃣ Depth (Technical Detail)  
- **Time**: \(O(\log n)\); each iteration halves the search space.  
- **Space**: \(O(1)\) for iterative version; recursion would use \(O(\log n)\) stack.  
- Handles negative numbers, duplicates (by adjusting comparison logic).  
- Can be adapted to *first/last* occurrence by modifying boundary moves.  

### 4️⃣ Edge Cases  
- Empty array → return `-1`.  
- Target less than first or greater than last element → early exit.  
- All elements equal or sorted in descending order (requires reverse logic).  
- Integer overflow on `mid` calculation: use `lo + (hi‑lo)/2`.

### 5️⃣ Optimize & Communicate  
Explain that binary search is the backbone for many Blind 75 problems because it reduces linear scans to logarithmic time. Emphasize its **robustness**—works in any sorted container, including arrays, linked lists with random access, or even database index lookups. Conclude by noting how mastering this pattern unlocks efficient solutions across search‑based interview questions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
