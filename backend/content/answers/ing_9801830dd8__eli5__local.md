---
qid: ing_9801830dd8__eli5__local
question: How do you measure inter-annotator agreement on a human labelling effort,
  and what do you do when your annotators disagree a lot?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 248
total_tokens: 424
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:38:48-05:00'
sources: []
---

Imagine two chefs tasting the same soup to decide if it needs more salt. If both say “yes,” they agree; if one says “yes” and the other “no,” they disagree. In AI we do the same thing when people label data—each “chef” is an **annotator** who marks items (like saying a sentence is positive or negative).  

To see how much the chefs line up, we use **inter‑annotator agreement**: a simple score that tells us what fraction of their answers match. Think of it as the percentage of times they both chose “salt” together. If the score is high (close to 100 %), the labeling rule is clear and reliable.  

If the score is low, the soup recipe might be ambiguous. We then:  
1. **Review the instructions** so everyone tastes the same way.  
2. **Show examples** of correct answers.  
3. **Merge or re‑label** contentious items with a third expert.  

This keeps the data trustworthy and the AI learning from consistent, well‑understood labels.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
