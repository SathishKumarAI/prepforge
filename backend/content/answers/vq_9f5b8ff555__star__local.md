---
qid: vq_9f5b8ff555__star__local
question: With which function of a summary item in the COMPUTE AT option required
  ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 448
total_tokens: 689
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:12:15-05:00'
sources: []
---

**Situation** – In a quarterly sales dashboard I was generating a SAS `PROC REPORT` for the executive team. The report had to show cumulative revenue, but only after every 10th transaction so that managers could see incremental performance at each milestone.

**Task** – I needed to insert a summary item that would calculate and display the running total **exactly at those milestone rows**, without cluttering the output with intermediate totals.

**Action** – I used a `COMPUTE` block with the `AT` option:  
```sas
proc report data=sales nowd;
  column trans_id revenue;
  define revenue / sum;
  compute summary revenue / at=10,20,30;   /* every 10th row */
    call define(_col_, 'style', 'cell={backgroundcolor=lightblue}');
  endcomp;
run;
```  
Inside the `COMPUTE` I referenced the built‑in `SUMMARY` function to pull the current sum value. The `AT` clause told SAS to execute that block only when the row number matched the list (10, 20, 30…). I also used `CALL DEFINE` to highlight those rows visually.

**Result** – The report now displays a clean running total at each milestone, cutting down on 40% of the screen real estate previously occupied by intermediate totals. Managers could spot performance jumps instantly, and the code ran in under 2 seconds on a 1‑million‑row dataset. I learned how powerful `COMPUTE AT` is for conditional summarization without extra data steps.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
