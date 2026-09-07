---
qid: ing_273a1d4bc5__faang__local
question: 'Explain: Rapid Fire Comparison Sorts: — OG CS61B Data Structures and Sorting
  Cheat Sheet'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 622
total_tokens: 864
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:14:52-05:00'
sources: []
---

**Rapid‑Fire Comparison Sorts (CS 61B Cheat Sheet)**  
*Goal*: Quickly recall the main comparison sorts, their worst‑case \(T(n)\), average‑case, space, and a key “when to use” cue.

| Sort | Worst‑Case | Avg. Case | Space | Typical Use |
|------|------------|-----------|-------|-------------|
| **Insertion** | \(O(n^2)\) | \(O(n^2)\) | \(O(1)\) | Nearly sorted data; tiny arrays (≤ 10–20). |
| **Selection** | \(O(n^2)\) | \(O(n^2)\) | \(O(1)\) | Stable variant not needed; when memory is tight. |
| **Bubble** | \(O(n^2)\) | \(O(n^2)\) | \(O(1)\) | Educational; rarely practical. |
| **Merge (Top‑down)** | \(O(n\log n)\) | \(O(n\log n)\) | \(O(n)\) | Large datasets, stable sort, external sorting. |
| **Quicksort (Lomuto/Hoare)** | \(O(n^2)\) | \(O(n\log n)\) | \(O(\log n)\) avg., \(O(n)\) worst‑case | General‑purpose; in‑place; good cache behavior. |
| **Heapsort** | \(O(n\log n)\) | \(O(n\log n)\) | \(O(1)\) | When memory is limited, need guaranteed \(T(n)\). |
| **IntroSort** | \(O(n\log n)\) | \(O(n\log n)\) | \(O(\log n)\) | STL `std::sort`; hybrid quick‑+‑heap. |

### How to choose:
1. **Data size & distribution** – small, nearly sorted → insertion; random large → quicksort/intro.
2. **Memory constraints** – in‑place needed? → heapsort or quicksort with tail recursion elimination.
3. **Stability requirement** – merge sort (or stable quicksort) for keys that need order preservation.

### Edge Cases:
- All equal elements → quicksort degrades to \(O(n^2)\); use median‑of‑three or switch to intro/heap.
- Already sorted → insertion is linear; quicksort can be linear with good pivot strategy.

### Optimization Tips:
- **Pivot selection**: median of three, randomization, or introsort depth limit to avoid worst case.
- **Tail recursion elimination** in quicksort for stack safety.
- Use **iterative heapsort** to eliminate function call overhead.

*Remember*: The cheat sheet is a mental map; always justify the chosen algorithm by its guarantees versus data characteristics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
