---
qid: ing_c8d1cec057__faang__local
question: 'Explain: Getting Started — Git Commands Cheat Sheet'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 636
total_tokens: 868
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:26:58-05:00'
sources: []
---

**Clarify**  
You want a concise cheat sheet that covers the most common Git commands you’ll use when starting a machine‑learning project—initializing repos, branching, staging, committing, pushing, pulling, and handling merges or conflicts.

---

**Approach**  
1. Group commands by workflow stage (init → work → share).  
2. For each command include syntax, a short description, and an example that fits ML data‑science use (e.g., tracking experiment scripts vs. large datasets).  
3. Highlight flags that matter for collaboration (e.g., `--force`, `-m`).  
4. Add quick tips on handling binary files or LFS.

---

**Depth**  

| Stage | Command | Description | Example |
|-------|---------|-------------|---------|
| **Setup** | `git init` | Create empty repo | `git init ml‑project` |
| | `git clone <url>` | Copy remote repo | `git clone https://github.com/…/ml‑repo.git` |
| **Staging** | `git add <file>` | Stage changes | `git add train.py data/*.csv` |
| | `git add .` | Stage all |  |
| **Commit** | `git commit -m "msg"` | Record snapshot | `git commit -m "Add preprocessing script"` |
| **Branching** | `git branch <name>` | Create new branch | `git branch experiment‑v2` |
| | `git checkout <branch>` | Switch | `git checkout experiment‑v2` |
| | `git merge <branch>` | Merge changes | `git merge experiment‑v2` |
| **Remote** | `git push -u origin <branch>` | Push and set upstream | `git push -u origin master` |
| | `git pull` | Fetch + merge |  |
| **History** | `git log --oneline` | View commits |  |
| | `git diff <commit1> <commit2>` | Show changes |  |
| **Handling large data** | `git lfs track "*.csv"` | Track binaries |  |

*Tips:*  
- Use `.gitattributes` to set merge drivers for CSVs.  
- Prefer `git stash` before switching branches when you have uncommitted work.

---

**Edge Cases**  
- Binary conflicts: use LFS or external storage (S3).  
- Large repos: consider shallow clones (`--depth 1`).  
- Force pushes after rebasing: `git push --force-with-lease`.

---

**Optimize & Communicate**  
- For ML teams, add aliases like `gco` → `checkout`, `gcm` → `commit -m`.  
- Document the cheat sheet in the repo’s README so new collaborators can jump straight into reproducible experiments.  

This structured cheat sheet balances brevity with the commands that matter most for iterative ML development.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
