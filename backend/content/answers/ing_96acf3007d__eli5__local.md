---
qid: ing_96acf3007d__eli5__local
question: 'Explain: Making Changes — Git Commands Cheat Sheet'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 355
total_tokens: 512
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:36:49-05:00'
sources: []
---

Imagine your machine‑learning project is a recipe book that you keep sharing with teammates.  
**Making changes** is like adding a new ingredient, editing a step, or fixing a typo—each action has a small “git” spell that records it.

| What you want to do | Git command (cheat) | Why it matters |
|---------------------|----------------------|----------------|
| **Add new files** – e.g., a fresh dataset or notebook | `git add <file>` | Tells git, “I’m bringing this into the story.” |
| **Save your changes** – commit the story so far | `git commit -m "Add data preprocessing"` | Creates a snapshot you can refer back to. |
| **See what’s different from last snapshot** | `git status` | Shows which ingredients are new or changed. |
| **View the recipe history** | `git log` | Lets you scroll through every past change, like reading previous versions of the cookbook. |
| **Undo a mistake before sharing** | `git reset HEAD <file>` | Removes a file from the next snapshot without deleting it locally. |
| **Share your updated recipe with teammates** | `git push` | Sends your new commits to the shared server so others can pull them. |

Think of each commit as a page in the book: once you write and seal that page (commit), later you can read it again or branch off a new version without losing the original. That’s the heart of “making changes” in Git—simple, traceable, and collaborative.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
