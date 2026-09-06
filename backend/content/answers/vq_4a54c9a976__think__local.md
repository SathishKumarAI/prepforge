---
qid: vq_4a54c9a976__think__local
question: Q20- When should you use classification over regression?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 389
total_tokens: 579
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T01:32:22-05:00'
sources: []
---

**Metacognitive Checklist for “When to choose classification vs. regression”**

1. **Clarify the problem and data**  
   *Ask:* What is the target variable? Is it a numeric score (e.g., house price) or a discrete label (e.g., spam/not‑spam)?  
   *Assume:* You have labeled examples; check if labels are categorical or continuous.

2. **Apply the output‑type framework**  
   - *Classification*: predict a class from a finite set.  
   - *Regression*: predict a real‑valued quantity.  
   Use this binary decision as your mental model: “Is my prediction an ordered number or a category?”

3. **Step through reasoning**  
   1. List the possible outputs for each instance.  
   2. Count how many unique values you expect (often > 2).  
   3. If they form an ordinal scale with meaningful distances → regression; if not, go to classification.

4. **Avoid common pitfalls**  
   - Don’t default to regression just because the label looks numeric (e.g., “1” could be a class).  
   - Don’t treat a multi‑class problem as binary by collapsing classes unless justified.  
   - Beware of ordinal data: if order matters, consider *ordinal classification* or *regression with constraints*.

5. **Sanity‑check and verbalize**  
   Compare your choice to the business goal: “Do we need a score that can be incrementally improved (regression) or just a yes/no decision (classification)?”  
   Re‑state the problem in plain language, then confirm that the chosen model type aligns with that description.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
