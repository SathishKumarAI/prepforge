---
qid: ing_88e7f44395__faang__local
question: 'Explain: Sorting Algorithms Runtime Table: inspired by https://www.bigocheatsheet.com/'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 574
total_tokens: 815
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:02:41-05:00'
sources: []
---

**Clarify**  
We’re asked to present a concise runtime comparison of common comparison‑based sorts (e.g., Bubble, Insertion, Selection, Merge, Quick, Heap). I’ll assume worst‑case, average‑case, and best‑case Big‑O, and that the input is an array of *n* elements.  
**Approach**  
1. List each algorithm.  
2. Provide its time complexities for the three cases.  
3. Add a short note on space usage when relevant.  
4. Format as a quick reference table.  

**Depth**  
| Algorithm | Worst‑case | Average‑case | Best‑case | Extra Space |
|-----------|------------|--------------|-----------|-------------|
| Bubble | \(O(n^2)\) | \(O(n^2)\) | \(O(n)\) (optimized) | \(O(1)\) |
| Insertion | \(O(n^2)\) | \(O(n^2)\) | \(O(n)\) | \(O(1)\) |
| Selection | \(O(n^2)\) | \(O(n^2)\) | \(O(n^2)\) | \(O(1)\) |
| Merge (stable) | \(O(n \log n)\) | \(O(n \log n)\) | \(O(n \log n)\) | \(O(n)\) |
| Quick (average) | \(O(n^2)\) | \(O(n \log n)\) | \(O(n)\) | \(O(\log n)\) in‑place |
| Heap | \(O(n \log n)\) | \(O(n \log n)\) | \(O(n \log n)\) | \(O(1)\) |

**Edge Cases**  
- Already sorted data: Bubble and Insertion can degenerate to linear if early‑exit checks are used.  
- Very small arrays (< 10): Insertion or Selection may outperform Merge/Quick due to lower constants.  
- Radix or counting sorts (non‑comparison) achieve \(O(n)\) but require additional assumptions about key ranges.

**Optimize & Communicate**  
Highlight that for practical use, QuickSort (with median‑of‑three pivoting) is often fastest on average, while MergeSort guarantees \(O(n \log n)\) and stability. HeapSort offers an in‑place guarantee with no recursion overhead. In interviews, I’d mention the trade‑off between worst‑case guarantees and average performance, and note that algorithm choice can depend on data size, memory constraints, and whether stability matters.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
