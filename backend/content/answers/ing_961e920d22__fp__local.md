---
qid: ing_961e920d22__fp__local
question: 'Explain: Interval (5 Problems) — Blind 75'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 525
total_tokens: 696
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:24:32-05:00'
sources: []
---

### Intervals – why they’re a “Blind 75” staple

At its core an **interval problem** asks you to reason about *ranges* of indices or values that satisfy some property—think of a sub‑array, a continuous segment on the real line, or a set of timestamps.  
Why is this so hard? Because the naïve way (checking every possible interval) costs O(n²), which explodes for 10⁵+ elements. The key insight is that **intervals can be represented by two pointers** or by a *sliding window* that moves monotonically, guaranteeing each element is examined only a constant number of times.

#### Deep principle: Monotonicity + Two‑Pointer
If the predicate you test on an interval is monotone (e.g., “sum ≤ k” stays true as you shrink the window), then advancing the right pointer never invalidates earlier conclusions. This turns a quadratic search into linear time, a classic example of *divide‑and‑conquer by pruning*.

#### One non‑obvious trick
Often we maintain an **auxiliary data structure** (deque, hash map) that stores *extrema* or counts inside the current window. Updating it in O(1) keeps the overall complexity linear. For instance, finding the longest subarray with distinct elements uses a deque of last seen indices to drop duplicates instantly.

#### 5 representative problems

| # | Problem (Blind 75) | Core idea |
|---|--------------------|-----------|
| 1 | **Longest Substring Without Repeating Characters** | Two pointers + hash map of last index. |
| 2 | **Maximum Size Subarray Sum Equals k** | Prefix sums + hash map of seen sums. |
| 3 | **Sliding Window Median** | Two heaps (max‑heap for lower half, min‑heap for upper). |
| 4 | **Minimum Size Subarray Sum** | Expand right until sum≥target, then contract left to shrink. |
| 5 | **Find All Anagrams in a String** | Sliding window + frequency array; compare counts. |

These problems illustrate the same underlying geometry: *a moving interval over an ordered set*. Mastering them unlocks many other challenges (range queries, segment trees, interval scheduling) because you’ve internalized how to keep track of a changing subset efficiently.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
