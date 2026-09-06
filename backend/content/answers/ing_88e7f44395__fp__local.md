---
qid: ing_88e7f44395__fp__local
question: 'Explain: Sorting Algorithms Runtime Table: inspired by https://www.bigocheatsheet.com/'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 417
total_tokens: 595
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:55:55-05:00'
sources: []
---

**Why a “runtime table” is essential**

When we compare sorting procedures we must answer two questions:

1. **What input sizes can the algorithm handle in practice?**  
2. **How does the cost grow as the problem expands?**

The first question is answered by *Big‑O* notation: it abstracts away constants and lower‑order terms, leaving only the asymptotic growth \(f(n)\). The second requires concrete numbers—how many comparisons or swaps a machine actually performs for a given \(n\).

A runtime table fills this gap. It records empirical counts of elementary operations (often “comparisons” because they dominate time) for representative inputs of size \(n=10, 100, 1\,000,\dots\). These counts are then plotted against the theoretical functions:

- **Insertion sort**: \(\Theta(n^2)\) – the table shows quadratic growth; small \(n\) is fast, but beyond a few thousand it explodes.
- **Merge sort / Quick‑sort (average)**: \(\Theta(n\log n)\) – the table confirms logarithmic moderation; even for millions of items the cost remains manageable.
- **Heap sort**: \(\Theta(n\log n)\) with a larger constant—visible in the table’s higher counts compared to merge sort.

**Deep insight:**  
The *shape* of the curve, not just its slope, tells us about *branch‑predictability* and cache behaviour. For example, quick‑sort’s average case matches \(n\log n\) numerically, but its table often dips below merge sort for moderate \(n\) because it sorts in place (no extra memory). This subtle advantage is invisible to asymptotic notation alone.

Thus a runtime table translates theory into tangible performance, revealing both the asymptotic trend and practical constants that influence algorithm choice.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
