---
qid: ing_def4c4cb34__aws__local
question: 'Explain: Git Rebase — Git Merge vs. Git Rebase'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 500
total_tokens: 733
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:43:44-05:00'
sources: []
---

**Situation & Task**  
I was leading a data‑science team that built an ML pipeline on **Amazon SageMaker** and versioned code in GitHub. Our CI/CD (AWS CodePipeline + CodeBuild) ran nightly jobs; merge conflicts bloated the commit history, making rollbacks hard. I had to decide between *git merge* or *git rebase* for our feature branches.

**Action**  
I scoped both workflows:  

| | Merge | Rebase |
|---|---|---|
|Commit graph | Divergent, “merge commits” | Linear history, no merge commits |
|Conflict resolution | On PR merge (slow) | Early, during rebase |
|Revert safety | `git revert -m 1` | `git reset --hard` + new commit |
|CI impact | One build per branch + one on merge | One build per branch + one on rebase |

I benchmarked CI runtimes: merge → **12 min** (2 builds), rebase → **9 min** (2 builds). I also measured code review time: merge reviews averaged 45 min; rebases cut it to 30 min.  

To keep the history clean, I implemented a *rebase‑before‑merge* policy in CodeBuild using the `git rebase` command and added automated conflict detection with AWS Lambda.

**Result**  
After 3 months:  
- Build time dropped **25 %**, freeing ~100 h/month of developer capacity.  
- Merge conflicts resolved **35 % faster**.  
- Rollback to previous model version took 2× less effort (CI logs retained).  

**Leadership Principles**  
- **Customer Obsession** – Faster, cleaner code means quicker deployment of ML models that directly improve user experience.  
- **Ownership & Dive Deep** – I owned the CI pipeline, dissected build metrics, and engineered a solution that balanced speed and safety.

**Bar‑raiser cues**  
I demonstrated ownership by automating conflict checks; dove deep into build analytics to quantify impact; learned from an initial failure where rebasing broke a dependency, then added pre‑rebase linting.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
