---
qid: vq_1485c3011a__fp__local
question: How can I coalesce free space?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 477
total_tokens: 645
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:23:53-05:00'
sources: []
---

### Coalescing free space in a dynamic‑storage allocator  

**Problem statement**  
When an allocator hands out blocks of varying sizes, the heap becomes *fragmented*: small holes appear between allocated regions. If a new request exceeds any single hole’s size, allocation fails even though the total free memory is sufficient. The only way to recover such “external fragmentation” is to merge adjacent free chunks into larger ones—*coalescing*.

**Why it must work this way**  
Each free chunk is usually represented as a node in a doubly‑linked list or tree, with headers storing its size and a flag. When freeing a block, the allocator only knows the exact boundaries of that block; it cannot predict where other blocks will be requested. Thus, to guarantee that any future request can be satisfied if enough total memory exists, we must **merge** every pair of consecutive free chunks immediately after each `free`. This is a local, deterministic operation that restores global flexibility.

**Deeper principle: locality of reference + greedy merging**  
Coalescing is essentially the greedy step in an optimal *interval‑cover* problem. Each allocation request corresponds to an interval on the address line; we wish to keep the union of free intervals as large and contiguous as possible. The greedy rule—merge any two adjacent free intervals—is provably optimal: any other strategy can only leave more, smaller holes.

**Non‑obvious insight**  
Many systems perform *lazy* coalescing (only when a request fails). This saves time on ordinary frees but can lead to catastrophic fragmentation after many operations. The key is that the *amortized cost* of eager coalescing is bounded: each free triggers at most two merges, so the total work over \(n\) operations is \(O(n)\). Hence, always merging keeps the allocator’s time complexity linear while guaranteeing worst‑case allocability.

---

In short, to recover from fragmentation you must **immediately merge adjacent free blocks** whenever a block is released. This local rule guarantees that any future allocation can be satisfied if enough total memory exists, and it does so with provably optimal and inexpensive work.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
