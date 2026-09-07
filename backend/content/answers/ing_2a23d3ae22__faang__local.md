---
qid: ing_2a23d3ae22__faang__local
question: 'Explain: Branching and Merging — Git Commands Cheat Sheet'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 659
total_tokens: 894
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:21:14-05:00'
sources: []
---

**Problem Clarification**

The interviewee asks for a concise “cheat‑sheet” of Git’s branching/merging commands, likely to evaluate quick recall and context awareness (e.g., when working on ML model experiments or dataset pipelines).  
*Assumptions:*  
- The user is comfortable with the command line.  
- They need a reference that covers both typical usage and edge scenarios (conflicts, rebasing, remote sync).

---

### 1️⃣ Approach

Outline the life‑cycle of a feature branch → merge back into main.  
List core commands in order: create, switch, commit, push, fetch, rebase/merge, resolve conflicts, delete.

---

### 2️⃣ Depth (Cheat‑Sheet)

| Action | Command | Notes |
|--------|---------|-------|
| **Create & switch** | `git checkout -b <branch>` | Starts a new branch at HEAD. |
| **List branches** | `git branch` / `git branch -a` | Local vs remote. |
| **Switch** | `git switch <branch>` (or `checkout`) | Prefer `switch`. |
| **Commit changes** | `git add . && git commit -m "msg"` | Use meaningful messages (`--amend` to edit). |
| **Push to remote** | `git push -u origin <branch>` | Sets upstream. |
| **Pull latest main** | `git fetch origin && git rebase origin/main` | Keeps history linear; resolves before merge. |
| **Merge into main** | `git checkout main && git merge --no-ff <branch>` | Creates a merge commit for visibility. |
| **Rebase onto main** | `git rebase origin/main` | Rewrites branch to tip of main; faster history. |
| **Conflict resolution** | Edit files → `git add <file>`, then `git rebase --continue` or `git merge --continue`. |
| **Abort rebase/merge** | `git rebase --abort` / `git merge --abort` | Restores pre‑operation state. |
| **Delete branch** | `git branch -d <branch>` (local) / `git push origin --delete <branch>` (remote) | Use `-D` to force delete. |

---

### 3️⃣ Edge Cases

* **Fast‑forward vs merge commit:** use `--no-ff` for explicit history.  
* **Large binary data:** consider Git LFS; avoid large merges.  
* **Conflicting files in multiple commits:** rebase interactive (`git rebase -i`) to squash or reorder.  

---

### 4️⃣ Optimization & Communication

Explain when to prefer rebasing (clean history, CI pipelines) vs merging (preserving context). Highlight that for ML experiments, a feature branch per model version keeps reproducibility intact. Conclude with best practice: always pull latest `main` before starting work and push frequently; use descriptive commit messages (“Add XGBoost hyperparameter sweep”).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
