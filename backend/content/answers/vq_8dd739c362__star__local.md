---
qid: vq_8dd739c362__star__local
question: What is recursion?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 289
total_tokens: 518
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:09:17-05:00'
sources: []
---

**Situation:**  
During a coding bootcamp project, my team was tasked with generating all possible anagram permutations of user‑input strings for a word‑game app. The dataset included words up to nine letters long, and the UI required instant feedback.

**Task:**  
I had to devise an algorithm that could produce every unique permutation quickly enough to keep the interface responsive, while avoiding redundant calculations.

**Action:**  
I implemented a recursive backtracking function in Python: `def permute(prefix, remaining):` where each call appended a character from `remaining` to `prefix`, then recursed on the shortened string. To prune duplicates for words with repeated letters, I sorted the input and skipped over identical characters at each recursion level. I also added memoization via an LRU cache to store intermediate results for sub‑strings that reappeared during branching.

**Result:**  
The recursive solution generated all permutations in under 0.15 s for nine‑letter words (≈362,880 combinations), compared to a naïve iterative approach that took >3 s and consumed excessive memory. The app’s latency dropped below the 200 ms threshold, improving user satisfaction scores by 12%. I learned how recursion can elegantly express combinatorial problems while still allowing optimization tricks like memoization and duplicate pruning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
