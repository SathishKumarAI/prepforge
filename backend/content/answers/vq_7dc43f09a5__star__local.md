---
qid: vq_7dc43f09a5__star__local
question: What are negative indexes and why are they used?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 350
total_tokens: 585
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:06:37-05:00'
sources: []
---

**Situation:**  
During a data‑pipeline refactor for our customer‑segmentation tool, the original code was looping over a list of user actions with `for i in range(len(actions)):` and then accessing elements as `actions[i]`. The list could be empty or contain only one element, which caused off‑by‑one errors and made the loop hard to read.

**Task:**  
I needed to simplify the iteration logic, reduce bugs related to boundary conditions, and improve readability for future maintainers.

**Action:**  
I replaced the index‑based loop with a direct `for action in actions:` loop. When I had to refer to the last element (e.g., checking if the most recent action was “purchase”), I used negative indexing: `if actions[-1] == 'purchase':`. Negative indexes let you count from the end of a sequence without computing its length, so I could write concise conditions like `if actions[-2:] == ['login', 'add_to_cart']:`. I also added defensive checks for empty lists to avoid `IndexError`.

**Result:**  
The refactored code ran 40 % faster because it eliminated the unnecessary index calculation and reduced memory usage by not creating intermediate slices. Unit tests that previously failed on single‑item lists now pass consistently, and the team reports the logic is clearer and easier to extend. I learned that negative indexes are a powerful Python idiom for clean, error‑free end‑of-list access.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
