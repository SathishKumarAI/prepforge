---
qid: vq_3d37c2346a__eli5__local
question: How do you calculate "PCTINCREASE" value?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 263
total_tokens: 423
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:08:52-05:00'
sources: []
---

Think of a spreadsheet that keeps track of how many times a particular item is sold each month.  
The **PCTINCREASE** column tells you, for each month, what percent the sales jumped compared with the previous month.

To find it, look at two consecutive rows:

1. Take the current month’s value (let’s call it *Current*).  
2. Subtract the previous month’s value (*Previous*) from it.  
3. Divide that difference by the *Previous* value to see how big the change is relative to what you started with.  
4. Multiply by 100 to turn the fraction into a percent.

In plain terms:  

\[
\text{PCTINCREASE} = \frac{\text{Current} - \text{Previous}}{\text{Previous}} \times 100
\]

If sales went from 50 to 75, you’d compute (75 – 50)/50 = 0.5, then × 100 gives a **50 % increase**. This simple rule lets you see growth month‑to‑month at a glance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
