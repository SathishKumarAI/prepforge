---
qid: vq_45f325756f__eli5__local
question: How to display the String vertically in Oracle?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 246
total_tokens: 403
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:09:39-05:00'
sources: []
---

Think of your Oracle query like a recipe that prints a word on a page. If you want each letter on its own line—like writing a name up the side of a door—you just tell Oracle to “break the string into rows.” In SQL this is done with the `SUBSTR` function (pick one character) and `CONNECT BY LEVEL` (repeat for each position). A simple recipe:

```sql
SELECT SUBSTR('HELLO',LEVEL,1) AS letter
FROM dual
CONNECT BY LEVEL <= LENGTH('HELLO');
```

**Key terms**

- **`SUBSTR(string,start,length)`** – takes a slice of the string.
- **`LENGTH(string)`** – counts how many characters are in the string.
- **`CONNECT BY LEVEL`** – creates one row for each number from 1 up to the given limit.

Run that, and Oracle will output:

```
H
E
L
L
O
```

Now your word is displayed vertically, just like a banner hung along a wall.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
