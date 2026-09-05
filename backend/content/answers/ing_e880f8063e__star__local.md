---
qid: ing_e880f8063e__star__local
question: 'Explain: Undoing Changes — Git Commands Cheat Sheet'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 324
total_tokens: 560
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:13:05-05:00'
sources: []
---

**Situation** – In the middle of a sprint, I was merging a feature branch into our production‑ready branch when a colleague’s refactor broke the integration test suite. The merge commit had already been pushed to the shared repo, and we were under a 48‑hour deadline to ship the new analytics dashboard.

**Task** – I needed to roll back the problematic changes quickly, restore the last known good state, and ensure the fix was safe for the next sprint without losing valuable work from other teammates.

**Action** – First, I used `git reflog` to locate the commit hash just before the merge. Then I ran `git reset --hard <hash>` locally to rewind my branch. To keep our history clean, I rebased the remaining feature commits onto the restored state with `git rebase -i`. After verifying all tests passed, I force‑pushed (`git push origin HEAD --force`) to overwrite the bad merge on the remote. Finally, I opened a PR for the corrected changes and added a detailed comment explaining the rollback steps.

**Result** – The dashboard shipped on time, the test suite ran 100 % green, and our CI pipeline was stable again. I learned that mastering `git reflog` + `reset --hard` plus careful rebasing is essential for rapid recovery in high‑pressure environments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
