---
qid: vq_45f325756f__star__local
question: How to display the String vertically in Oracle?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 345
total_tokens: 580
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:56:57-05:00'
sources: []
---

**Situation:**  
At a retail analytics firm we had to generate a weekly KPI report for senior management that included product codes as part of the header. The report was built in Oracle SQL*Plus and displayed on a legacy terminal that only supported monospaced text; when the code strings were too long, they spilled over into adjacent columns, breaking alignment.

**Task:**  
I needed to reformat those string fields so each character appeared vertically, preserving column width while keeping the output readable for the terminal’s 80‑column limit.

**Action:**  
Using Oracle's `SUBSTR` and `CONNECT BY LEVEL`, I created a recursive CTE that split each string into individual characters. Then I pivoted the result with `MAX(CASE WHEN level = n THEN char END)` to stack them as separate rows, effectively rotating the string 90 degrees counter‑clockwise. Finally, I wrapped the logic in a pipelined function so it could be called directly from the report query, and tuned the `CONNECT BY` depth to match the longest product code (12 characters). I also added a small `TRIM` step to remove trailing spaces for cleaner output.

**Result:**  
The KPI report now displays product codes as neat vertical columns, fitting within the terminal’s width without truncation. The change cut formatting errors by 100 % and reduced manual editing time from ~15 minutes per week to zero. I learned how Oracle’s hierarchical queries can be leveraged for non‑standard text manipulation, a trick that has since helped in other legacy reporting tasks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
