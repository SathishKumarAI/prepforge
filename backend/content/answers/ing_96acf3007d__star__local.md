---
qid: ing_96acf3007d__star__local
question: 'Explain: Making Changes — Git Commands Cheat Sheet'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 355
total_tokens: 590
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:34:21-05:00'
sources: []
---

**Situation:**  
During a Kaggle competition I was working on an ensemble pipeline in a shared repo with five teammates. Our nightly training jobs were failing because we accidentally merged a broken feature branch that added a new preprocessing step.

**Task:**  
I had to quickly isolate the faulty commit, roll back the changes for the current build, and restore the stable version while preserving my own experimental work.

**Action:**  
1. Ran `git log --oneline` to identify the offending commit hash.  
2. Created a temporary branch from HEAD: `git checkout -b temp-fix`.  
3. Used `git revert <bad‑commit>` to generate a new commit that undoes the changes, then pushed it to the remote so everyone’s CI was green again.  
4. For my experiments I used `git stash` before switching back to the main branch, pulled the latest stable code with `git pull --rebase`, and applied the stash (`git stash pop`).  
5. Finally, I cherry‑picked the specific experiment commits onto a new feature branch (`git cherry-pick <sha>`), ran tests locally, and pushed once everything passed.

**Result:**  
The production pipeline was back online within 45 minutes, the CI build time dropped from 12 min to 6 min, and we avoided a full re‑train of the entire model. I learned that keeping experiment work in separate branches and using `revert` instead of `reset` preserves history while protecting shared code.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
