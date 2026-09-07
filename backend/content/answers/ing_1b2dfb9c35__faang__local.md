---
qid: ing_1b2dfb9c35__faang__local
question: 'Explain: Heap / Priority Queue (7 Problems) — Neetcode 150'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 1022
total_tokens: 1260
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:48:24-05:00'
sources: []
---

**1️⃣ Clarify**  
You’re asked to discuss *heaps* (binary heaps implemented as priority queues) and how they solve seven classic NeetCode‑150 problems:  
- **Kth Largest Element** (max‑heap or min‑heap of size k).  
- **Top K Frequent Elements** (min‑heap by frequency).  
- **Merge k Sorted Lists** (min‑heap over current heads).  
- **Find Median from Stream** (two heaps, median in O(1)).  
- **Sliding Window Maximum** (max‑heap with lazy deletion or deque trick).  
- **Kth Smallest Element in a Matrix** (min‑heap over matrix cells).  
- **Merge Intervals / Skyline Problem** (min‑heap of end times).  

Assumptions: all input sizes fit in memory, comparisons define order, and we can use standard library heaps or implement our own binary heap.

---

**2️⃣ Approach**  
For each problem I’ll:  
1. Identify the *key operation* that needs to be fast (insert, delete‑min/max).  
2. Choose a heap variant (max‑heap vs min‑heap) and its size constraints.  
3. Outline the algorithm in high‑level pseudocode, noting when we push or pop.

---

**3️⃣ Depth – Core Solutions**

| Problem | Heap Type | Core Idea | Complexity |
|---------|-----------|-----------|------------|
| Kth Largest Element | Min‑heap (size k) | Keep k largest seen so far; the root is kth largest. | O(n log k) time, O(k) space |
| Top K Frequent Elements | Min‑heap by frequency | Push each `(freq,item)` into heap of size k; pop when >k. | O(n log k), O(k) |
| Merge k Sorted Lists | Min‑heap of list heads | Push first element of each list; repeatedly extract min and push next from that list. | O(N log k), O(k) |
| Median from Stream | Two heaps (max‑left, min‑right) | Balance sizes so median is top of one heap or average of both tops. | O(log n) per insert, O(1) median |
| Sliding Window Maximum | Max‑heap + lazy delete | Insert new element; pop while root index < window start. | O(n log k), O(k) |
| Kth Smallest in Matrix | Min‑heap of cells | Expand from (0,0); push right/down neighbors if not visited. | O(k log k) with k≤n² |
| Skyline / Merge Intervals | Min‑heap of end times | While current start > top.end, pop; push new interval’s end. | O(n log n) |

*Trade‑offs*:  
- **Min‑heap vs Max‑heap**: choose based on whether you need smallest or largest element at the root.  
- **Size constraint** (e.g., k elements) keeps space bounded and operations fast.  
- **Lazy deletion** avoids expensive delete by checking timestamps/indices.

---

**4️⃣ Edge Cases & Testing**

| Edge | What to test |
|------|--------------|
| Empty list / k=0 | Should return null or throw. |
| k > n (Kth Largest) | Return smallest element or error. |
| Duplicate frequencies (Top K) | Ensure stable ordering or tie‑break by value. |
| All elements equal (Median, Max‑heap) | Median equals that value. |
| Window size = 1 (Sliding Max) | Each output is the element itself. |
| Matrix with negative numbers | Works because heap uses natural order. |
| Intervals touching exactly at end | Decide inclusive/exclusive; test boundary logic. |

---

**5️⃣ Optimize & Communicate**

- **Use binary‑heap arrays** for cache locality; avoid pointer overhead of linked nodes.  
- **Preallocate array size** when k is known to reduce reallocations.  
- **When k ≈ n**, a quickselect (O(n) average) beats heap O(n log k). Mention this trade‑off.  
- **Explain why two heaps work for median**: balancing guarantees that the max of left ≤ min of right, so median is trivial.

*Communication*:  
- Start with “Here’s the problem…”, then “We’ll use a heap because …”.  
- Show pseudocode snippets inline.  
- Summarize time/space trade‑offs and mention when to switch algorithms (e.g., quickselect vs heap).  

This structured approach demonstrates clear problem understanding, algorithmic planning, depth of technical detail, awareness of edge cases, and thoughtful optimization—all key signals for a FAANG interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
