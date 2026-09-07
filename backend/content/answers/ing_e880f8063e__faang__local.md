---
qid: ing_e880f8063e__faang__local
question: 'Explain: Undoing Changes — Git Commands Cheat Sheet'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 602
total_tokens: 835
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:40:15-05:00'
sources: []
---

**Clarify**  
You want a concise reference for undoing changes in Git—reverting work that’s already committed or still uncommitted. I’ll assume you’re on the command line, working on a feature branch, and may need to reset, checkout, or revert depending on whether the commits are local or shared.

---

### Approach  
1. **Unstaged/untracked files** – `git restore`, `git clean`.  
2. **Staged but uncommitted** – `git reset` (mixed) or `git reset --soft`.  
3. **Committed locally, not pushed** – `git reset --hard <commit>` or `git revert <sha>`.  
4. **Committed and already pushed** – prefer `git revert`; if history rewrite is acceptable, use `git push --force-with-lease`.

---

### Depth  

| Situation | Command | Effect |
|-----------|---------|--------|
| Undo last staged file | `git restore --staged <file>` | Unstage only. |
| Discard all unstaged changes | `git restore .` | Reset working tree to HEAD. |
| Remove untracked files | `git clean -fd` | Delete directories and files not tracked. |
| Uncommit last commit (keep work) | `git reset --soft HEAD~1` | Move branch pointer back, keep index & working tree. |
| Uncommit last commit (discard changes) | `git reset --hard HEAD~1` | Throw away commit and all its changes. |
| Revert a specific commit (safe) | `git revert <sha>` | Creates new commit undoing the target. |
| Rewrite history after push | `git reset --hard <commit>; git push --force-with-lease` | Overwrites remote; use with caution. |

**Complexity:** All operations are O(1) on Git’s internal data structures, but `git clean -fd` can be expensive if the tree is large.

---

### Edge Cases  
* **Large binaries** – `git clean` may need `-x` to remove ignored files.  
* **Stash conflicts** – `git stash pop` can fail; use `stash apply`.  
* **Force‑push** on shared branches – leads to diverging histories; always coordinate.

---

### Optimize & Communicate  
Explain the trade‑off: *soft* keeps work, *hard* discards it. For collaborative workflows, prefer `revert` over rewriting history. When narrating, start with the goal (“undo last commit”), then present the minimal command and its safety profile. This shows you can choose the right tool for the context—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
