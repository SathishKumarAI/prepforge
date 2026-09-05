---
qid: ing_c9098d925b__eli5__local
question: 'Explain: 2019 - string 1982. Python doesn''t know — Python Full Course
  for Beginners'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 249
total_tokens: 417
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:54:02-05:00'
sources: []
---

Imagine a library where every book is labeled with a number on its spine. If you see the label “1982” written as a word, the librarian can’t tell whether it’s a number or just letters—so she can’t sort the book into the right shelf. In programming we do the same: when Python reads `"1982"` (a *string*), it treats it as text, not a numeric value. If we want to use that year in calculations—say subtract 2019 from it to find how many years ago something happened—we first need to tell Python “turn this string into an integer.” That’s called *type conversion* or *casting*. Once the string is cast to `int`, Python can do arithmetic, just like the librarian now knows the book belongs in the 1980s section. So, `"1982"` → `int("1982")` gives the number 1982, which you can then subtract from 2019 or add to other numbers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
