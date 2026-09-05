---
qid: ing_2a23d3ae22__star__local
question: 'Explain: Branching and Merging — Git Commands Cheat Sheet'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 395
total_tokens: 633
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:52:20-05:00'
sources: []
---

**Situation** – In my last role I was leading a feature sprint for a recommendation engine that required frequent experimentation with new models. The team had just hit a critical deadline: the next version of the pipeline had to ship by Friday, but we were juggling three model branches (baseline, gradient‑boosted, and transformer) that kept diverging.

**Task** – I needed to coordinate the work so each branch could progress independently while keeping the main production code stable. The goal was to merge all finalized experiments back into `main` without breaking the CI pipeline or losing any commit history.

**Action** – I created a clear branching strategy:  
1. **Create feature branches** (`git checkout -b feature/gbm`) from `dev`.  
2. **Commit and push** regularly (`git add .; git commit -m "Add GBM hyper‑parameters"; git push origin feature/gbm`).  
3. For each finished experiment, I opened a pull request and ran the automated tests.  
4. When approvals were in place, I performed a *rebase* onto `dev` to keep history linear (`git rebase dev`) and then merged with fast‑forward (`git merge --ff-only feature/gbm`).  
5. If conflicts arose, I used `git mergetool` to resolve them locally, committed the resolution, and pushed again.

**Result** – All three model branches were integrated into `dev` by Thursday night, with no CI failures. The final release went out on schedule, and our codebase remained clean: 0 merge commits, a concise log, and all feature branches deleted after merging. I learned that disciplined branching + rebasing keeps experimentation fast while preserving stability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
