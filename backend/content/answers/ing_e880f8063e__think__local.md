---
qid: ing_e880f8063e__think__local
question: 'Explain: Undoing Changes — Git Commands Cheat Sheet'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 473
total_tokens: 662
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T16:22:17-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
   * Identify that the user wants a mental‑model guide for “undoing changes” in Git (e.g., working tree vs index vs history).  
   * Assume the audience knows basic Git concepts but may mix up `reset`, `checkout`, `revert`, etc.  

**2️⃣ Adopt a “state‑transition” framework**  
   * View Git as moving between three primary states: *Working Tree*, *Staging Area (Index)*, and *Repository History*.  
   * Map each undo command to the state it alters and whether it is irreversible.  

**3️⃣ Step‑by‑step reasoning**  
   1. **Undo in Working Tree** → `git restore` or `git checkout -- <file>`; explain “no history change”.  
   2. **Unstage a file** → `git reset HEAD <file>`; highlight it keeps working tree intact.  
   3. **Move HEAD back (history rewrite)** → `git reset --soft / mixed / hard`; detail the effect on index and worktree.  
   4. **Undo a commit without altering history** → `git revert`; show how it creates a new “opposite” commit.  
   5. **Discard all local changes** → `git clean -fdx` for untracked files, combined with reset/restore as needed.  

**4️⃣ Common traps to avoid**  
   * Confusing `reset --hard` (erases worktree) vs `checkout`.  
   * Using `revert` on a merge commit without specifying the parent.  
   * Forgetting that `clean` only removes untracked files, not ignored ones unless `-x`.  

**5️⃣ Sanity‑check & verbalize**  
   * Ask: “Which state am I targeting? Do I need to keep my working changes?”  
   * Explain trade‑offs (rewrite vs append) before suggesting a command.  
   * End with a quick cheat‑sheet table summarizing commands, target state, and safety notes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
