---
qid: ing_ac84306227__faang__local
question: 'Explain: Greedy (8 Problems) — Neetcode 150'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 649
total_tokens: 885
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:25:00-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise explanation of the *Greedy* category in the Neetcode‑150 list. I’ll confirm that we’re talking about the 8 problems labeled “greedy” and that they illustrate classic greedy patterns (interval scheduling, activity selection, coin change, etc.).  

**Approach**  
1. List each problem with its core idea.  
2. For each, state the greedy invariant, why it holds, and the resulting algorithmic steps.  
3. Mention time/space complexity.  

**Depth**  
| # | Problem (Neetcode‑150) | Greedy Pattern | Invariant | Algorithm | Complexity |
|---|------------------------|----------------|-----------|-----------|------------|
|1|Activity Selection|Earliest finish first|Pick interval with smallest end that doesn’t conflict|Sort by finish, iterate selecting non‑overlap|O(n log n) time, O(1) extra|
|2|Minimum Number of Arrows to Burst Balloons|Shoot at latest possible point|Choosing the rightmost intersection keeps future options open|Sort by end, shoot when a balloon’s start > current arrow|O(n log n), O(1)|
|3|Coin Change (minimum coins)|Take largest denomination first|Greedy optimal for canonical coin systems|While amount>0: subtract largest ≤amount|O(n log m) (if sorted), otherwise O(m)|
|4|Gas Station|Keep track of deficit while moving forward|If cumulative gas<distance, restart at next station|Two‑pass linear scan|O(n) time, O(1) space|
|5|Maximum Number of Non‑Overlapping Intervals|Same as Activity Selection|—|Sort by finish, greedy pick|O(n log n)|
|6|Jump Game II|Always jump to farthest reachable index|Farthest reach at current level guarantees minimal jumps|Level‑by‑level scan|O(n), O(1)|
|7|Partition Labels|Assign each letter to its last occurrence|All occurrences of a character must stay in one part|Scan, track max end, cut when i==maxEnd|O(n), O(1)|
|8|Meeting Rooms II|Minimize rooms by earliest finish|Heap of current end times keeps track of free rooms|Sort by start, heap ops|O(n log n)|  

**Edge Cases**  
- Empty input or single element.  
- Coin systems that are non‑canonical (greedy fails).  
- Circular gas station with no solution; algorithm returns “no answer”.  

**Optimize & Communicate**  
For coin change, I’d mention using a DP fallback for arbitrary denominations. For meeting rooms, an interval tree could replace the heap if queries become frequent. In conversation, I’d stress why each invariant guarantees optimality and how the greedy choice never blocks better future choices, aligning with FAANG’s emphasis on clear reasoning and algorithmic rigor.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
