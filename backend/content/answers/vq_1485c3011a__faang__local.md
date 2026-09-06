---
qid: vq_1485c3011a__faang__local
question: How can I coalesce free space?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 443
total_tokens: 674
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T17:58:52-05:00'
sources: []
---

**Clarify**  
We’re given a memory allocator that tracks *free* blocks (e.g., via a bitmap or list). “Coalesce free space” means merging adjacent free blocks into one larger block so future allocations can use it. Assume:  
- We know the start and size of each free block.  
- The underlying data structure allows O(1) lookup by address.  
- No concurrency concerns for now.

**Approach**  
1. Iterate through all free blocks in order of increasing address.  
2. Keep a `current` block; when the next block’s start equals `current.end`, merge them (update size).  
3. If not adjacent, push `current` to the result list and set `current` = next block.  
4. After loop, add the last `current`.  
This yields a new list of disjoint free blocks.

**Depth**  
- **Time:** O(n) where *n* is number of free blocks (one pass).  
- **Space:** O(1) extra if we modify in place; otherwise O(n) for output list.  
- If using an ordered tree, insertion/deletion during coalescing remains O(log m), but the merge logic stays the same.

**Edge Cases**  
- Empty free list → return empty.  
- Single block → unchanged.  
- Overlapping or corrupted metadata → detect and skip or report error.  
- Allocation at boundaries (e.g., start=0 or end=max) must still be merged correctly.

**Optimize & Communicate**  
If the allocator frequently coalesces, keep free blocks in a balanced BST keyed by address; then we can find adjacent neighbors in O(log m). For large heaps, consider lazy coalescing: merge only when an allocation fails. Explain trade‑offs (immediate memory reuse vs. runtime overhead) and how to benchmark with typical workloads.

This plan balances clarity, efficiency, and robustness—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
