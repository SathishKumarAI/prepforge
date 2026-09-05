---
qid: ing_e880f8063e__eli5__local
question: 'Explain: Undoing Changes — Git Commands Cheat Sheet'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 257
total_tokens: 415
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:43:20-05:00'
sources: []
---

Imagine your code is a garden and every time you plant a new flower (make a change) you write it down in a notebook (the commit log). If a flower wilts or you decide the color isn’t right, you can *undo* it by going back to an earlier page of the notebook.  

**Undoing changes with Git**

- **`git checkout -- <file>`** – Pulls the exact copy of that file from the last commit, like picking up a fresh seed from the notebook and planting it again.  
- **`git reset HEAD <file>`** – Removes the file from the “next plant list” (staging area) without touching the garden itself; it’s still in your working tree but won’t be saved next time.  
- **`git revert <commit>`** – Adds a new entry that undoes the effects of a previous commit, just as you’d write “remove this flower” in the notebook and plant its opposite.

Think of Git as a time‑traveling gardener: it lets you step back to any page of your garden’s history and correct mistakes without destroying the whole plot.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
