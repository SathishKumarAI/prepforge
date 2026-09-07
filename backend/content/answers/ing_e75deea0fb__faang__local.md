---
qid: ing_e75deea0fb__faang__local
question: 'Explain: Week 2: Core Patterns (18 Problems) — Blind 75'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 785
total_tokens: 1024
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:38:05-05:00'
sources: []
---

**Clarify**  
You’re asking for a concise overview of the *Blind 75* set of problems that form the “core patterns” in machine‑learning‑style interviews (Week 2, 18 problems). I’ll assume you want:  

1. What each problem tests (algorithmic pattern)  
2. Typical solution sketch and complexity  
3. Edge cases to guard against  

**Approach**  
I’ll list the 18 problems grouped by pattern, give a one‑sentence “why it matters” for ML interviews, then outline the key steps and big‑O costs. I’ll finish with common pitfalls.

---

### Core Patterns & Problem Highlights

| Pattern | Representative Problems (Blind 75) | Why It Matters in ML |
|---------|------------------------------------|----------------------|
| **Dynamic Programming** | *Climbing Stairs*, *House Robber* | DP teaches state‑transition, optimal substructure—crucial for sequence models. |
| **Sliding Window / Two Pointers** | *Longest Substring Without Repeating Characters*, *Container With Most Water* | Efficient O(n) scans mirror feature extraction over time windows. |
| **Backtracking** | *Combination Sum*, *Sudoku Solver* | Enumerating possibilities is analogous to hyper‑parameter search. |
| **Graph Traversal (BFS/DFS)** | *Number of Islands*, *Course Schedule* | Connectivity checks map to graph‑based embeddings. |
| **Binary Search on Answer Space** | *Find Minimum in Rotated Array*, *Search in Rotated Sorted Array* | Binary search over sorted domains is a proxy for hyper‑parameter tuning. |
| **Greedy** | *Jump Game*, *Merge Intervals* | Greedy choices parallel greedy feature selection. |
| **Hash Map / Frequency Counting** | *Two Sum*, *Longest Consecutive Sequence* | Hashing underlies efficient similarity searches in embeddings. |
| **Divide & Conquer** | *Maximum Subarray (Kadane’s variant)* | Splitting data streams into chunks resembles mini‑batch processing. |

---

### Depth: Example – *Container With Most Water*

- **Goal:** Maximize `min(height[i], height[j]) * (j-i)` over all pairs.
- **Algorithm:** Two pointers at ends; move the shorter one inward, updating max area.
- **Complexity:** `O(n)` time, `O(1)` space.  
- **Why ML‑relevant:** Mirrors two‑pointer window scanning for maximizing a product of width and min height—similar to optimizing pairwise similarity scores.

---

### Edge Cases & Testing

| Problem | Edge Case |
|---------|-----------|
| *Two Sum* | Duplicate numbers, no solution (return empty). |
| *Longest Substring Without Repeating Characters* | Empty string, all identical chars. |
| *Number of Islands* | All water or all land; non‑rectangular grids. |
| *Container With Most Water* | Two points at the same index (area = 0). |

Test each with minimal, maximal, and irregular inputs to ensure boundary safety.

---

### Optimize & Communicate

- **Trade‑offs:** For DP problems, memoization (`O(n)` space) vs. tabulation (`O(1)` space) depending on recursion depth.  
- **Narration Tip:** Start by explaining the pattern you recognize, then walk through the algorithm’s state changes while highlighting how it satisfies ML interview criteria (time efficiency, scalability).  

This structured overview should give a clear, interview‑ready grasp of the Week 2 core patterns in the Blind 75 list.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
