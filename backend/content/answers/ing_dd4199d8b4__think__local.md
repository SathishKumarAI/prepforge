---
qid: ing_dd4199d8b4__think__local
question: 'Explain: Data Structures Runtime Table: Ordered as (Average Runtime / Worst
  Runtime) - inspired by https://www.bigocheatsheet.com/'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 207
output_tokens: 654
total_tokens: 861
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T15:33:53-05:00'
sources: []
---

**1. Clarify the goal & assumptions**  
   *Goal*: Summarize typical runtimes for common data structures in two orders—average‑case and worst‑case—for a quick reference (like a cheat sheet).  
   *Assumptions*:  
   - Complexity is expressed using Big‑O notation, ignoring constant factors.  
   - “Average” refers to the expected case under uniform random access or typical use patterns; “Worst” to the absolute upper bound regardless of input.  
   - We focus on fundamental operations: insert, delete, search, and (when relevant) traversal.

**2. Adopt a mental model / framework**  
   *Structure*: List each data structure once, then tabulate two columns—Average Runtime & Worst Runtime—for each key operation.  
   *Ordering*: Arrange rows by increasing average runtime for the most common operation (e.g., search), so the reader sees the fastest options first.

**3. Step‑by‑step reasoning**  
   1. Enumerate data structures: array, linked list, hash table, binary search tree (BST), balanced BST (AVL/Red‑Black), heap, trie, graph adjacency lists/maps.  
   2. For each, recall or derive asymptotic costs:  
      - *Array*: O(1) random access; O(n) insert/delete at arbitrary positions.  
      - *Linked list*: O(1) insert/delete with pointer; O(n) search.  
      - *Hash table*: O(1) average for insert/search/delete; O(n) worst if all keys collide.  
      - *BST*: O(log n) average, O(n) worst.  
      - *Balanced BST*: O(log n) both avg & worst.  
      - *Heap*: O(log n) insert/delete‑max/min; O(1) peek.  
      - *Trie*: O(k) where k is key length for search/insert; space depends on alphabet size.  
      - *Graph adjacency list/map*: O(1) to access neighbors; edge insertion O(1).  
   3. Fill the table accordingly, ensuring consistency between avg and worst columns.

**4. Common traps & how to avoid them**  
   - Mixing up average vs. amortized complexity (e.g., hash table’s insert is amortized O(1), not just expected).  
   - Forgetting that arrays can be resized in amortized O(1) but have O(n) worst‑case for reallocation.  
   - Overlooking space–time tradeoffs; the question focuses on runtime only, so keep space aside.

**5. Sanity‑check & verbalize**  
   *Check*: Verify each entry against textbook references or trusted sources (CLRS, GeeksforGeeks).  
   *Communicate*: Present the table as a concise cheat sheet: “Data Structures | Avg Runtime | Worst Runtime” and accompany with brief explanatory notes for edge cases. This ensures clarity while keeping the format easy to read at a glance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
