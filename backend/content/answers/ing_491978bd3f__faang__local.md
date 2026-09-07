---
qid: ing_491978bd3f__faang__local
question: 'Explain: Remote Repositories — Git Commands Cheat Sheet'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 635
total_tokens: 868
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:33:57-05:00'
sources: []
---

**Clarify**  
You want a concise cheat‑sheet for the most common Git commands used when collaborating on remote repositories (GitHub/GitLab/Bitbucket). I’ll assume a command‑line workflow, SSH authentication, and that the user is comfortable with basic local commits.

**Approach**  
1. Group commands by purpose: clone, sync, branch, push/pull, conflict resolution.  
2. For each group give the shortest syntax, optional flags, and a one‑sentence tip.  
3. End with a quick “when to use what” cheat table.

**Depth**  

| Purpose | Command | Shortcut / Flag | Tip |
|---------|---------|-----------------|-----|
| **Clone repo** | `git clone <url>` | – | Use `--depth 1` for shallow copy when history isn’t needed. |
| **Pull latest** | `git pull` | – | Equivalent to `fetch + merge`. Add `--rebase` if you prefer a linear history. |
| **Push changes** | `git push origin <branch>` | – | `-u` sets upstream for future simple pushes. |
| **Create branch** | `git checkout -b <name>` | – | Use `-c` to start from an existing commit: `checkout -c new base`. |
| **Switch branches** | `git switch <branch>` | – | Cleaner than `checkout` for non‑file operations. |
| **Merge branch** | `git merge <branch>` | – | `--no-ff` forces a merge commit, preserving context. |
| **Rebase** | `git rebase <upstream>` | – | Keeps linear history; resolve conflicts with `git status`. |
| **Delete remote branch** | `git push origin --delete <branch>` | – | Avoid orphaned refs on CI. |
| **View log** | `git log --oneline --graph` | – | Add `--decorate` to see tags/heads. |
| **Stash changes** | `git stash` / `git stash pop` | – | Handy before pulling a fast‑forward that would overwrite work. |

**Edge cases**  
- Pulling when you have uncommitted local changes → stash or commit first.  
- Rebase conflicts: always run `git rebase --continue` after resolving.  
- Deleting a branch locally (`git branch -d`) before pushing may leave a dangling ref on the remote.

**Optimize & communicate**  
I’d present this as a one‑page PDF or markdown file, with color‑coded sections for “Setup,” “Daily Sync,” and “Advanced Ops.” During an interview I’d walk through a typical day: clone → work → stash/pull → commit → push. This demonstrates not just knowledge of commands but how they fit into a collaborative workflow—exactly what FAANG interviewers look for in a clear, structured answer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
