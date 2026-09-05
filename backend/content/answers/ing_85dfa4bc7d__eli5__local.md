---
qid: ing_85dfa4bc7d__eli5__local
question: 'Explain: Backtracking (9 Problems) — Neetcode 150'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 248
total_tokens: 409
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:08:47-05:00'
sources: []
---

Imagine you’re trying to build a LEGO tower that must follow nine different “rules” – each rule is like a small puzzle piece that can fit in only certain places.  
Backtracking is the careful way you try to place each piece, one at a time, and if you see that it will make the tower fall (the rules clash), you immediately remove it and pick another piece.  

In practice:  
1. **Choose** a piece for the next spot.  
2. **Check** all nine rules; if any rule is broken, **undo** that choice (backtrack) and try the next possibility.  
3. If no rule is violated, move to the next spot.  
4. When every spot is filled without breaking any rule, you’ve found a valid tower – a solution.  

You repeat this until all possible towers are examined or you find the one you want. This step‑by‑step trial‑and‑error with instant undo is what backtracking does for problems like N‑Queens, Sudoku, Hamiltonian Path, and many more in Neetcode’s 150 list.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
