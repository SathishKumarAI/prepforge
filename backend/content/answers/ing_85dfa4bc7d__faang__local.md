---
qid: ing_85dfa4bc7d__faang__local
question: 'Explain: Backtracking (9 Problems) — Neetcode 150'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 654
total_tokens: 890
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:55:47-05:00'
sources: []
---

**Backtracking – 9 Core Problems (NeetCode 150)**  
*(Structured for a FAANG interview)*  

| # | Problem | Key Idea |
|---|---------|----------|
| 1 | **Permutations** | Generate all orderings of *n* distinct numbers. |
| 2 | **Combination Sum I** | Find subsets that sum to target, each number used once. |
| 3 | **Letter Combinations of a Phone Number** | Map digits → letters; build strings recursively. |
| 4 | **N‑Queens** | Place queens so none attack each other; use board + column/diag sets. |
| 5 | **Sudoku Solver** | Fill 9×9 grid, backtrack on first empty cell with row/col/block checks. |
| 6 | **Word Search** | DFS through matrix for a word, marking visited cells in place. |
| 7 | **Unique Binary Search Trees II** | Construct all structurally unique BSTs for values 1…n. |
| 8 | **Palindrome Partitioning** | Split string into palindromic substrings; recurse on suffixes. |
| 9 | **Combination Sum II** | Like #2 but numbers may repeat in input; skip duplicates. |

### 1️⃣ Clarify  
- *Backtracking* is a depth‑first search that incrementally builds solutions and abandons (prunes) branches that cannot lead to valid results.  
- Confirm the constraints: e.g., array sizes, duplicate handling, time limits.

### 2️⃣ Approach  
For each problem:  
1. Identify the decision at each step (add element, place queen, choose next cell).  
2. Maintain state (current path, used indices, board status).  
3. Recurse until a full solution is built or dead‑end occurs; backtrack by undoing the last decision.

### 3️⃣ Depth  
- **Complexity**: Exponential in worst case (e.g., *n!* for permutations), but pruning (duplicate skip, early invalid checks) keeps it tractable.  
- **Data structures**: Use sets or bitmasks for quick conflict detection; mutable board for Sudoku/Word Search to avoid copying.

### 4️⃣ Edge Cases  
- Empty inputs → return empty list.  
- All duplicates → ensure only unique combinations (skip same value after sorting).  
- Impossible targets → backtrack fully, yielding no results.

### 5️⃣ Optimize & Communicate  
- **Pruning**: For N‑Queens, precompute attacked diagonals; for Combination Sum, break when sum exceeds target.  
- **Memoization** (optional): Cache subproblem results in problems like Unique BSTs to avoid recomputation.  
- **Narration**: While coding, verbalize each recursive call’s purpose, state changes, and pruning rationale—demonstrates clear reasoning and keeps interviewers engaged.

*Total word count: ~215.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
