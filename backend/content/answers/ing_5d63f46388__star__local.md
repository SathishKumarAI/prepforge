---
qid: ing_5d63f46388__star__local
question: 'Explain: on the board it then recursively calls — Coding Adventure: Chess'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 353
total_tokens: 593
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:34:52-05:00'
sources: []
---

**Situation:**  
In a hackathon last spring I built a lightweight chess engine that had to evaluate millions of positions in under 10 seconds on an iPhone. The initial prototype was fast enough, but the evaluation function was too slow because it recomputed sub‑positions over and over.

**Task:**  
I needed to reduce the recursion depth overhead and avoid redundant calculations so the engine could explore deeper while staying within the time budget.

**Action:**  
I introduced a transposition table using a 64‑bit Zobrist hash as the key. Whenever `evaluate(board)` was called, I first looked up the hash; if present, I returned the cached value immediately. If not, I performed the recursive calls to generate child positions, summed their evaluations, and stored the result before returning it. To keep memory usage low on mobile, I capped the table at 1 million entries and evicted the least‑used ones using an LRU policy. I also refactored the recursion to use tail‑call optimization where possible, converting deep loops into iterative scans.

**Result:**  
The engine’s search depth increased from a maximum of 6 plies to 9 plies in the same 10‑second window—about a 50 % improvement in effective move quality. The transposition table hit rate averaged 78%, and memory usage stayed below 32 MB. I learned that careful memoization combined with lightweight hashing can turn an exponential recursion into a manageable linear search, especially on constrained devices.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
