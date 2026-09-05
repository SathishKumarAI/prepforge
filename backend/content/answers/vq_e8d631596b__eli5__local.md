---
qid: vq_e8d631596b__eli5__local
question: Why does part of a row sometimes get shifted to the next page, but not all
  of it?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 207
total_tokens: 375
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:32:31-05:00'
sources: []
---

Think of a table row as a long sofa that must fit inside a hallway (the page). The hallway has a fixed width and length, but the sofa can be folded slightly to slide through. When the hallway is almost full, the sofa’s front legs may still fit on the current floor, while its back half cannot reach the next step without bumping into a wall. In printing, if there isn’t enough room left at the bottom of the page for the whole row, the software “breaks” it: the first part stays on the current page, and the rest continues on the next one. This happens only when the remaining space is too small; otherwise the entire row stays together. A *row* is simply a horizontal line of cells in a table.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
