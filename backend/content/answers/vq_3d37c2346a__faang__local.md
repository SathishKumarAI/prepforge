---
qid: vq_3d37c2346a__faang__local
question: How do you calculate "PCTINCREASE" value?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 397
total_tokens: 632
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:06:38-05:00'
sources: []
---

**Clarify**  
You’re asked for the “PCTINCREASE” between two consecutive values (e.g., sales or stock prices). Confirm that:  
1. The input is a list/array of numeric values in chronological order.  
2. Division by zero must be avoided when the previous value is 0.  
3. The result should be expressed as a percentage, typically rounded to two decimals.

**Approach**  
Iterate through the array from index 1 onward; for each pair `(prev, curr)` compute  

```
pct = ((curr - prev) / abs(prev)) * 100
```

Store or output `pct`. If `prev == 0`, handle as either `+∞` (or a sentinel like “N/A”) depending on business rules.

**Depth**  
- **Time Complexity:** O(n), one pass.  
- **Space Complexity:** O(1) if we stream results; otherwise O(n) to store all percentages.  
- Use double‑precision floats for accuracy.  
- Edge‑case: when `prev` is negative, using `abs(prev)` ensures the percentage reflects magnitude change rather than sign bias.

**Edge Cases**  
- Empty or single‑element array → return empty list.  
- Zero previous value → avoid division by zero; test with `[0, 5]`.  
- Large values causing overflow → use double instead of int.

**Optimize & Communicate**  
If memory is constrained, compute and output on the fly (e.g., stream to a file). Explain that we chose a single pass for optimal time while keeping space minimal. Highlight the handling of zero‑division as a safety guard. This shows clear reasoning, robustness, and attention to edge conditions—key signals for FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
