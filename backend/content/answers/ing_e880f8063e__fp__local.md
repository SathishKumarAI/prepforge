---
qid: ing_e880f8063e__fp__local
question: 'Explain: Undoing Changes — Git Commands Cheat Sheet'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 634
total_tokens: 804
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:13:13-05:00'
sources: []
---

### Undoing Changes – The Core Problem  

When a developer writes code, the repository must **record history** while still allowing **trial and error**.  
*What we want:*  
- *Preserve every commit that might be useful later.*  
- *Discard or move changes that turn out to be mistakes.*  

The two fundamental constraints are:  

1. **Immutability of past commits** – once a commit is published, it should not be altered (otherwise history diverges).  
2. **Local flexibility** – before pushing, you can freely rewrite the current branch.

Git satisfies these with three orthogonal tools:

| Tool | Where it acts | Why it works |
|------|---------------|--------------|
| `git reset` | *HEAD* and index | Moves the pointer back; with `--soft`, keeps working tree; with `--mixed`, clears index; with `--hard`, discards all changes. |
| `git checkout / restore` | Working tree (and optionally index) | Replaces files with a commit’s snapshot, enabling “undo” of local edits without touching history. |
| `git revert` | Creates a new commit that negates a previous one | Keeps the original commit in history while logically undoing its effects. |

#### Non‑obvious Insight  
Most people think *reset* is “dangerous” because it rewrites history, but **its safety comes from never touching published commits**. The real danger lies in using `--hard` on a branch that others base work upon; the local rewrite is safe, but the remote branch must be force‑pushed, causing collaborators to lose their divergent histories.

#### Cheat Sheet  

| Command | Effect | When to use |
|---------|--------|-------------|
| `git reset --soft HEAD~1` | Move HEAD back one commit, keep staged files | Undo last commit but keep changes ready to re‑commit. |
| `git reset --mixed HEAD~1` *(default)* | Unstage files from last commit, keep working tree | Discard staging but preserve edits for new commit. |
| `git reset --hard HEAD~1` | Throw away last commit and all local changes | Clean slate after a bad experiment (never on shared branch). |
| `git checkout <commit> -- <file>` | Replace file with version from `<commit>` | Undo edits to a single file. |
| `git restore --staged <file>` | Unstage a file | Remove it from index without touching working tree. |
| `git revert <commit>` | Create new commit that undoes changes of `<commit>` | Safely undo public commits. |

> **Bottom line:**  
> *Reset* rewrites the local pointer, *checkout/restore* edits files, and *revert* preserves history while negating effects. Use each according to whether you’re still in your private sandbox or have already shared your work.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
