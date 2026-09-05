---
qid: vq_f4ed265ecf__eli5__local
question: WHAT IS THE DIFFERENCE BETWEEN LEAD() AND LAG() FUNCTIONS?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 169
total_tokens: 332
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:33:53-05:00'
sources: []
---

Think of a line of people taking photos in a group‑shoot.  
The **LEAD** function is like asking the person *ahead* in the line: “What’s your name?” It looks forward to the next row and brings that data into the current row.  

The **LAG** function is the opposite: it asks the person *behind* you, “What was your name earlier?” It pulls information from a previous row into the current one.  

So, LEAD gives you future data for each record; LAG gives you past data. Both keep the same number of rows, but one peeks forward while the other peeks backward in the ordered list.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
