---
qid: ing_96acf3007d__faang__local
question: 'Explain: Making Changes — Git Commands Cheat Sheet'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 756
total_tokens: 988
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:34:50-05:00'
sources: []
---

**Clarify**  
You’re looking for a quick‑reference “cheat sheet” of Git commands that let you create, modify, and manage code changes in a repository—commits, branches, staging, rebasing, etc. I’ll assume a basic familiarity with Git terminology (commit, branch, merge) and that the user works on a local clone of a remote repo.

**Approach**  
1. Group commands by common workflow stages: **Stage → Commit → Branch → Push → Clean‑up**.  
2. Highlight both the canonical command and its most useful short‑form flag.  
3. Add a note on when to use `git stash` or `rebase -i`.  

**Depth (Cheat Sheet)**  
| Stage | Command | Shortcut / Notes |
|-------|---------|------------------|
| **Create/Modify files** | `touch file`, `echo "…" > file` | – |
| **Check status** | `git status` | Shows staged, unstaged, untracked |
| **Stage changes** | `git add <file>` / `git add .` | `-u` stages modified/deleted only |
| **Commit** | `git commit -m "msg"` | Use `-a` to skip staging for tracked files |
| **Amend last commit** | `git commit --amend -m "new msg"` | Rewrites HEAD, update message or add staged changes |
| **Create branch** | `git checkout -b <branch>` | Same as `switch -c` in newer Git |
| **Switch branches** | `git checkout <branch>` / `git switch <branch>` | `-f` to discard local changes |
| **Rebase onto upstream** | `git rebase origin/main` | Interactive: `git rebase -i HEAD~n` |
| **Merge branch** | `git merge <branch>` | Fast‑forward or create a merge commit |
| **Stash work** | `git stash push -m "desc"` | Retrieve with `git stash pop` |
| **View history** | `git log --oneline --graph --decorate` | Add `-p` to see diffs |
| **Undo local changes** | `git restore <file>` / `git checkout -- <file>` | Restores from HEAD |
| **Reset commit (hard)** | `git reset --hard HEAD~1` | Throws away last commit and changes |
| **Push to remote** | `git push origin <branch>` | `--force-with-lease` for safe force‑push |
| **Delete branch** | `git branch -d <branch>` / `-D` for unmerged | |

**Edge Cases**  
* Force pushes can overwrite collaborators’ work → use `--force-with-lease`.  
* Interactive rebase rewrites history; avoid on public branches.  
* Stashing hides changes but not ignored files—use `git stash -u` to include them.

**Optimize & Communicate**  
To keep this sheet useful, I’d host it as a Markdown file in the repo’s docs and link it from the main README. For large teams, adding short aliases (`alias g='git'`) in shell profiles speeds up daily use. Finally, I’d run a quick demo: `git add .; git commit -m "feat: …"; git push` to illustrate the flow before diving into branching or rebasing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
