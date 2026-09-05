---
qid: ing_2a23d3ae22__fp__local
question: 'Explain: Branching and Merging — Git Commands Cheat Sheet'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 494
total_tokens: 666
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:34:28-05:00'
sources: []
---

**Why Git branches exist**

When training a model you often want to experiment with new hyper‑parameters, feature engineering or architectures without jeopardising the stable “production” version of your code and data.  
Git’s branching mechanism is a lightweight *version space* that lets each experiment live in its own sub‑space.  The underlying principle is **optimisation under uncertainty**: we keep several candidate solutions (branches) that can be evaluated independently, then merge only the ones that pass our tests.

---

### Core commands – cheat sheet

| Action | Command | Why it matters |
|--------|---------|----------------|
| Create a new branch | `git checkout -b <name>` | Forks current state; start fresh experiment. |
| Switch branches | `git switch <name>` (or `checkout`) | Move to another sub‑space without losing work. |
| View all branches | `git branch` | See the optimisation landscape. |
| Delete a local branch | `git branch -d <name>` | Clean up after experiments that failed. |
| Push a new branch to remote | `git push -u origin <name>` | Share candidate with collaborators. |
| Pull latest changes on current branch | `git pull` | Keep experiment updated with shared work. |
| Merge another branch into current | `git merge <branch>` | Integrate successful experiments back into mainline. |
| Resolve conflicts manually | edit conflicted files → `git add <file>` → `git commit` | Ensure consistency of merged code. |
| Rebase onto latest base | `git rebase origin/main` | Linearise history; avoid unnecessary merge commits. |

---

**Non‑obvious insight:**  
A *merge* is not just a copy‑paste; it’s an **information reconciliation problem**. Git records the *common ancestor* (the “pivot” of your optimisation) and computes the minimal set of changes needed to reconcile two branches. This guarantees that even if multiple experiments diverge significantly, the merged result contains exactly the new information introduced by each branch—nothing more, nothing less.  

By treating branches as isolated optimisation runs and merges as principled reconciliations, you can iterate faster while keeping a clean, reproducible history of every model variant.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
