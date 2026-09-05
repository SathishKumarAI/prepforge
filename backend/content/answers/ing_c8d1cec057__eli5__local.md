---
qid: ing_c8d1cec057__eli5__local
question: 'Explain: Getting Started — Git Commands Cheat Sheet'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 357
total_tokens: 514
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:53:39-05:00'
sources: []
---

Think of your machine‑learning project like a cookbook that you keep updating as you learn new recipes (models).  
*Git* is the kitchen’s **inventory notebook**: it remembers every change so you can go back if a recipe goes wrong.

| What you do | Git command | Kitchen picture |
|-------------|------------|-----------------|
| Take a snapshot of your work | `git add <file>` then `git commit -m "message"` | Write the recipe in the notebook. |
| See what changed since last note | `git status` | Look at the ingredients list to see new items. |
| View past notes | `git log` | Flip back through old pages. |
| Go back to an earlier version | `git checkout <commit>` | Re‑open a previous recipe page. |
| Share your notebook with teammates | `git push` (after `git pull`) | Email the updated cookbook. |
| Bring in others’ changes | `git pull` | Receive their added recipes and merge them. |

**Key terms**  
- **Repository (repo)**: the folder that holds all files and Git history.  
- **Commit**: a saved snapshot with a message explaining what changed.  
- **Branch**: a side‑track of the notebook where you experiment without affecting the main recipe list.

Start by initializing a repo (`git init`), then use `add/commit` to save your first model code, and `push/pull` to sync with teammates or cloud storage. That’s all you need to keep your ML experiments organized and recoverable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
