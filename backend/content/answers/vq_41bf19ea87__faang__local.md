---
qid: vq_41bf19ea87__faang__local
question: How do I get a top ten?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 450
total_tokens: 681
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:07:20-05:00'
sources: []
---

**Clarify**  
You want an algorithm that returns the *top‑10* items from a large data set (e.g., highest scores, most frequent words). Assume:  
- The input size **N** can be millions; we cannot sort the entire list in O(N log N).  
- We have enough memory for a small auxiliary structure.  
- Items are comparable via a numeric key or a custom comparator.

**Approach**  
Use a *min‑heap* (priority queue) of fixed size 10:  

1. Iterate through all elements once.  
2. For the first 10 items, insert into the heap.  
3. For each subsequent item `x`: if `x` > heap.min(), pop min and push `x`.  
4. After traversal, the heap contains the top‑10 in ascending order; reverse for descending.

**Depth**  
- **Time:** O(N log k) where k=10 → effectively linear.  
- **Space:** O(k)=O(1).  
- The min‑heap guarantees that any incoming element larger than the current smallest is kept, so we never miss a top candidate.  

If items are streaming or you need to support dynamic updates, replace the heap with an *order‑statistics tree* (e.g., balanced BST) for O(log k) per operation.

**Edge Cases**  
- Fewer than 10 elements → return all sorted descending.  
- Duplicate keys → decide on tie‑breaking rule (e.g., stable order).  
- Extremely large values or negative numbers – the heap handles any comparable type.

**Optimize & Communicate**  
Explain why a full sort is unnecessary: sorting costs O(N log N), while the heap approach only processes each element once. If k were much larger, consider using *selection algorithms* (quickselect) to find the kth largest and then filter, but for k=10 the heap remains simplest and fastest. Conclude by summarizing time/space trade‑offs and how this pattern scales to other “top‑k” problems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
