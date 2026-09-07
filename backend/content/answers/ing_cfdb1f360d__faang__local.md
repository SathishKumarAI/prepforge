---
qid: ing_cfdb1f360d__faang__local
question: 'Explain: Matrix (4 Problems) — Blind 75'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 653
total_tokens: 887
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:43:50-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise walkthrough of *four* representative “Matrix”‑type questions that appear in the Blind 75 list, covering the core techniques (DFS/BFS, dynamic programming, greedy, and prefix sums). I’ll assume we’re coding in Python/Java, focus on time/space trade‑offs, and highlight typical edge cases.

**Approach**  
1. **Unique Paths (DP)** – grid traversal with obstacles.  
2. **Surrounded Regions (BFS/DFS flood fill)** – flip surrounded ‘O’s.  
3. **Set Matrix Zeroes (in‑place marking)** – linear scan with O(1) extra space.  
4. **Maximal Rectangle (Histogram + stack)** – largest all‑ones submatrix.

**Depth**  

| Problem | Core Idea | Complexity | Key Implementation Notes |
|---------|-----------|------------|--------------------------|
| **Unique Paths II** | DP: `dp[i][j] = dp[i-1][j]+dp[i][j-1]` unless obstacle. | O(mn) time, O(n) space (row‑by‑row). | Use a single array; set first row/col to 0 on obstacles. |
| **Surrounded Regions** | BFS from border ‘O’s marking safe cells; flip remaining. | O(mn) time, O(mn) worst‑case queue. | Use sentinel or temporary char (`#`) to avoid revisiting. |
| **Set Matrix Zeroes** | First pass mark first row/col; second pass set zeros; last rows/cols based on marks. | O(mn) time, O(1) extra. | Handle the corner cell (`matrix[0][0]`) separately for row/col flags. |
| **Maximal Rectangle** | Treat each row as histogram heights; find largest rectangle in histogram via stack. | O(mn) time, O(n) space. | Update `heights[j]` = 0 if cell is ‘0’, else increment. |

**Edge Cases**  
- Empty matrix or single‑row/column inputs.  
- All cells are obstacles (Unique Paths).  
- No border ‘O’s (Surrounded Regions).  
- Matrix already all zeros (Set Matrix Zeroes).  
- Height stack underflow when heights reset.

**Optimize & Communicate**  
Explain why DP is optimal for Unique Paths (no overlapping subproblems). For Surrounded Regions, BFS guarantees linearity and avoids recursion depth limits. The in‑place Set Matrix trick saves memory—critical for interviewers to see space awareness. In Maximal Rectangle, the histogram reduction transforms a 2D problem into a well‑studied 1D stack solution, showing algorithmic thinking. Conclude by summarizing trade‑offs: DP vs BFS/DFS vs greedy marking, and highlight that each pattern can be adapted to variations (e.g., weighted grids). This structured walk‑through demonstrates clear reasoning, depth, and practical coding insights expected in a FAANG interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
