---
qid: ing_96acf3007d__fp__local
question: 'Explain: Making Changes — Git Commands Cheat Sheet'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 522
total_tokens: 691
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:25:59-05:00'
sources: []
---

**Why a “changes” cheat sheet matters**

At its core, Git is an *information‑theoretic* system that records the differences between file states over time. Every commit stores a snapshot of the project, but internally it keeps only the delta relative to the previous snapshot. When you modify files, those deltas must be captured in a coherent, reproducible way so that collaborators can merge or roll back changes without ambiguity.

**Fundamental workflow**

1. **`git add <file>`** – *Stage* the exact bytes you want in the next commit. Think of it as selecting which parts of your delta will become part of the next snapshot.  
2. **`git status`** – View the staged vs. unstaged differences; it’s a quick sanity check that the information you intend to commit is actually queued.  
3. **`git commit -m "msg"`** – Atomically write the staged delta into the repository’s history, attaching metadata (author, timestamp). The commit becomes an immutable “information unit.”  

If something goes wrong:

- **`git reset <file>`** un‑stages a file, discarding it from the next snapshot while preserving the working tree.  
- **`git checkout -- <file>`** restores the file to its last committed state, effectively erasing local edits (use with caution).  

**Non‑obvious insight**

Git’s *index* is not just a staging area—it’s a *lazy cache of diffs*. When you run `git add`, Git computes a hash of the new content and stores that hash in the index. Subsequent commits reuse this hash; if the file hasn’t changed, Git re‑uses the existing object rather than creating a duplicate. This mechanism underpins Git’s speed and storage efficiency: only *new* information is stored, never redundant copies.

**Quick cheat sheet**

| Command | Purpose |
|---------|---------|
| `git add <file>` | Stage file for commit |
| `git status` | Show staged/unstaged changes |
| `git commit -m "msg"` | Record snapshot |
| `git reset <file>` | Unstage file |
| `git checkout -- <file>` | Discard local edits |

Mastering these commands gives you precise control over the *information flow* in your project, ensuring every change is intentional and recoverable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
