---
qid: ing_46443e71ac__faang__local
question: 'Explain: Rapid Fire Counting Sorts: — OG CS61B Data Structures and Sorting
  Cheat Sheet'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 613
total_tokens: 855
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:27:19-05:00'
sources: []
---

**Clarify**  
You’re asking for a quick‑recap of the *Rapid Fire Counting Sorts* section from CS 61B’s “Data Structures & Sorting Cheat Sheet.” The goal is to explain how counting sort variants work, when they’re useful, and their trade‑offs. I’ll assume you want an overview suitable for a FAANG interview context (time/space complexity, edge cases).

**Approach**  
1. List the three classic counting‑sort families: *Counting Sort*, *Radix Sort* (LSD/BSD), and *Bucket Sort*.  
2. For each, describe input assumptions, algorithmic steps, and big‑O metrics.  
3. Highlight key pitfalls (e.g., range size, stability).  

**Depth**  

| Variant | Assumptions | Steps | Complexity | Notes |
|---------|-------------|-------|------------|-------|
| **Counting Sort** | Integers in `[0..k]` or bounded range | 1️⃣ Count frequencies → array `C[0..k]`. 2️⃣ Prefix sum to get positions. 3️⃣ Place elements into output. | O(n + k) time, O(k) extra space | Stable if indices used; fails for huge `k`. |
| **Radix Sort (LSD)** | Integers or strings of fixed length, base `b` | Process digits from least to most significant using Counting Sort as a stable sub‑routine. | O(d · (n + b)) time, O(n + b) space (`d`: digit count). | Excellent for integers/strings; stability preserved across passes. |
| **Bucket Sort** | Uniformly distributed real numbers in `[0,1)` (or known range) | Create `n` buckets → distribute → sort each bucket (often via Insertion Sort). | Expected O(n + k) where `k` is avg bucket size; worst‑case O(n²). | Works well when data is roughly uniform; sensitive to distribution. |

**Edge Cases**  
- Extremely large `k` in Counting Sort → memory blowup.  
- Non‑uniform data in Bucket Sort → quadratic behavior.  
- Negative numbers: shift by offset or use two separate counting arrays.

**Optimize & Communicate**  
- For bounded integers, prefer Counting Sort; for variable‑length keys, Radix Sort is deterministic and cache friendly.  
- If `k` ≈ `n`, a simple comparison sort (e.g., quicksort) may be simpler.  
- Always mention the stability requirement: counting sub‑routines must preserve order to keep radix sorting correct.

This concise cheat sheet lets you quickly decide which counting‑based sort fits the data and constraints at hand.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
