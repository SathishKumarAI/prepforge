---
qid: ing_021397bc79__faang__local
question: 'Explain: Binary Search (7 Problems) — Neetcode 150'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 623
total_tokens: 859
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:49:01-05:00'
sources: []
---

**1️⃣ Clarify**  
We need a concise explanation of *Binary Search* and why it’s useful for seven common interview problems (e.g., search in sorted array, find first/last occurrence, rotate‑array index, peak element, etc.). Assume the input is either an array or a conceptual infinite list; we’re allowed to query “does value x exist?” in O(1).  

**2️⃣ Approach**  
- Restate binary search: repeatedly halve the search interval until the target is found or the interval collapses.  
- For each problem, identify the monotonic property that lets us decide which half contains the solution (e.g., sorted order, rotated pivot, increasing‑then‑decreasing pattern).  
- Express a generic template: `lo = 0; hi = n−1; while lo ≤ hi: mid = (lo+hi)//2 …`  

**3️⃣ Depth**  
| Problem | Monotonic condition | Binary‑search tweak |
|---------|---------------------|----------------------|
| Search in sorted array | a[mid] ≥ target? | Standard |
| First/last occurrence | a[mid] < target → right; else left (and record) | Left/right bias |
| Find rotation pivot | a[mid] > a[hi] → right; else left | Pivot when a[mid] > a[mid+1] |
| Peak element | a[mid] < a[mid+1] → right; else left | O(log n) peak |
| Smallest missing positive | a[mid] ≥ mid+1 → right; else left | Count‑based |
| Kth smallest in two sorted arrays | Use binary search on partition size | Median of medians |
| Find median in unsorted array (selection) | Use “select” algorithm, which internally uses binary search on value range | O(n) expected |

Complexity: **O(log n)** per query; space O(1). Trade‑offs: requires monotonicity or sortedness; for rotated arrays we add a constant‑time pivot check.

**4️⃣ Edge Cases**  
- Empty array → return sentinel.  
- Duplicate values → bias left/right to get first/last.  
- Rotated array with all equal elements → special handling.  
- Infinite list → use exponential expansion then binary search.

**5️⃣ Optimize & Communicate**  
Explain that once the generic pattern is internalized, each problem reduces to identifying the “direction” function (`f(mid)`). Emphasize:  
- Keep bounds inclusive/exclusive consistent.  
- Avoid overflow in `mid = lo + (hi-lo)//2`.  
- Document assumptions (no side effects, 0‑based indices).  

Convey confidence by mapping each problem back to the core template and highlighting how binary search guarantees log‑time performance, a key differentiator for FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
