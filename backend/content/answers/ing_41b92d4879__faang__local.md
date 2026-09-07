---
qid: ing_41b92d4879__faang__local
question: 'Explain: Linked List (6 Problems) — Blind 75'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 546
total_tokens: 781
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:16:51-05:00'
sources: []
---

**Clarify**  
The interviewer asks you to explain *six* common linked‑list problems that appear in the “Blind 75” ML interview set (e.g., cycle detection, removal of Nth node from end, merge two sorted lists, etc.). I’ll assume we’re working with a singly linked list and need to discuss time/space trade‑offs.

**Approach**  
1. List each problem succinctly.  
2. For each: state the goal, key idea, algorithmic steps, complexity, and edge cases.  
3. Highlight any ML‑style twist (e.g., streaming data).  

**Depth**

| # | Problem | Idea | Complexity |
|---|---------|------|------------|
| 1 | **Cycle detection** | Floyd’s tortoise & hare – two pointers; if they meet, cycle exists. | O(n) time, O(1) space |
| 2 | **Remove Nth from end** | Two‑pass: first get length, then delete node at `len-n+1`. Or one‑pass with a dummy and two pointers n+1 apart. | O(n), O(1) |
| 3 | **Merge two sorted lists** | Iteratively pick smaller head; use dummy to simplify. | O(m+n), O(1) |
| 4 | **Add two numbers (linked list digits)** | Simulate grade‑school addition with carry; build result on the fly. | O(max(m,n)), O(1) extra |
| 5 | **Reverse a sublist** | Three pointers (`prev`, `curr`, `next`) to reverse between positions m and n in one pass. | O(n), O(1) |
| 6 | **Detect & return start of cycle** | After detection, reset one pointer to head; move both at same speed until they meet – that node is the entry. | O(n), O(1) |

**Edge Cases**  
- Empty list or single node.  
- N larger than length (for removal).  
- Lists with identical values (merge/add).  
- Cycle that starts at head.

**Optimize & Communicate**  
Explain why a two‑pass for “remove nth” is simpler but can be optimized to one pass, trade‑off being readability vs. constant factor. Use clear variable names and mention that dummy nodes avoid null checks. Conclude by summarizing how each technique embodies classic linear‑time, constant‑space solutions—a hallmark of top‑tier ML interview problems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
