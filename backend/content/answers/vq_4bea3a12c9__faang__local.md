---
qid: vq_4bea3a12c9__faang__local
question: list; it just creates a new one. Could we try performing the reversal in
  place?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 348
total_tokens: 589
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:09:24-05:00'
sources: []
---

**Clarify**  
The interviewer asks whether we can reverse a linked list *in‑place* rather than allocating a new list. Assume it’s a singly linked list, no dummy head, and we may only modify `next` pointers (no extra memory).  

**Approach**  
1. Initialize three pointers: `prev = null`, `curr = head`.  
2. Iterate while `curr != null`:  
   * Store `nextTemp = curr.next`.  
   * Point `curr.next = prev`.  
   * Advance `prev = curr` and `curr = nextTemp`.  
3. Return `prev` as the new head.

**Depth**  
- **Time:** O(n) – each node visited once.  
- **Space:** O(1) – only three references regardless of list size.  
The algorithm is a classic iterative reversal; it guarantees no memory leaks and works for empty or single‑node lists without special cases.

**Edge Cases**  
- Empty list (`head == null`) → returns `null`.  
- Single node → pointer assignments leave the node unchanged.  
- Cyclic list (should not occur in well‑formed input) would cause infinite loop; we assume acyclic.

**Optimize & Communicate**  
If recursion were used, stack depth becomes O(n), risking overflow on long lists—hence iterative is preferable for production code. Explain that the pointer reassignment must happen before losing reference to `next`. Conclude by noting that this in‑place reversal is optimal both time‑wise and space‑wise for a singly linked list.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
