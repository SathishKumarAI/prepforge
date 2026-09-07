---
qid: vq_ec6beb20b6__faang__local
question: HOW DO YOU DELETE DUPLICATE RECORDS WHILE KEEPING ONE COPY?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 479
total_tokens: 718
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:41:18-05:00'
sources: []
---

**Clarify**  
You’re given a data set (array, list, linked‑list, DB table, etc.) that may contain duplicate values. The goal is to keep exactly one instance of each value and remove all others while preserving the relative order of the first occurrences.

*Assumptions I’d confirm:*  
- What data structure are we operating on?  
- Do we have random access or only sequential traversal?  
- Are we allowed to use extra memory (hash‑set, map)?  

**Approach**  
1. Traverse the collection once.  
2. Keep a hash‑set of seen values.  
3. For each element:  
   - If it’s not in the set → add to result / keep in place and insert into the set.  
   - If it is → skip/remove it.  

If we’re working with an array, build a new array; if it’s a linked list, adjust pointers on the fly.

**Depth**  
- **Time:** O(n) – one pass.  
- **Space:** O(k) where *k* is the number of unique items (hash‑set).  
- For in‑place removal in an array we can use two indices (`write` and `read`) to overwrite duplicates, keeping O(1) extra space besides the set.

**Edge Cases**  
- Empty input → return empty.  
- All elements identical → keep one.  
- Already unique → no changes.  
- Very large data that doesn’t fit in memory – use a streaming approach with an external hash or Bloom filter.

**Optimize & Communicate**  
If memory is constrained, we can sort first (O(n log n)) and then scan once to drop adjacent duplicates—this trades space for time. For databases, a `SELECT DISTINCT` or a window function (`ROW_NUMBER() OVER(PARTITION BY col ORDER BY id)`) followed by deletion of rows with row_number > 1 is idiomatic.

I’d narrate the trade‑offs clearly: “We’ll use a hash set for O(n) time and acceptable memory; if that’s too high, we can sort first to reduce memory at the cost of extra log factor.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
