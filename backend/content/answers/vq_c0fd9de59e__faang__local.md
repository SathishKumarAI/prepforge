---
qid: vq_c0fd9de59e__faang__local
question: What is the purpose of reindexing in Pandas?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 401
total_tokens: 635
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:31:44-05:00'
sources: []
---

**Clarify**  
The question asks why *reindex* is used in a `pandas.DataFrame` or `Series`. I’ll assume the interviewee wants an explanation of its role in aligning data, not the implementation details.

**Approach**  
1. Define reindexing as changing the index to a new set.  
2. Explain how it aligns data across multiple objects.  
3. Mention default fill behavior and optional parameters.  
4. Touch on performance & when to use vs. other methods (merge, join).

**Depth**  
Reindexing creates a new object whose index matches a supplied list/array of labels.  
- **Alignment:** When you have two dataframes with different indices, `df.reindex(other.index)` brings them into the same shape so element‑wise operations work without misalignment.  
- **Missing rows/columns:** New entries are added; their values default to `NaN` (or a user‑supplied `fill_value`).  
- **Ordering:** You can reorder existing labels or drop those not in the new index.  
- **Complexity:** O(n) for building the new index, with additional overhead for filling missing data.

**Edge cases**  
- Reindexing to an empty list yields an empty frame.  
- Duplicate indices cause ambiguous alignment; pandas will keep all rows but operations may be misleading.  
- Reindexing large objects can be memory‑intensive if many NaNs are introduced.

**Optimize & communicate**  
In practice, use reindex sparingly: for aligning time series or preparing data for aggregation. For merging two frames on a key, `merge` is usually cheaper. I would explain this trade‑off and note that reindexing preserves the original object (returns new one), so it’s safe to chain without side effects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
