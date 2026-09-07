---
qid: ing_e880f8063e__aws__local
question: 'Explain: Undoing Changes — Git Commands Cheat Sheet'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 512
total_tokens: 742
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:03:53-05:00'
sources: []
---

**Situation (S)**  
While leading a ML model‑training pipeline on an AWS SageMaker notebook, I accidentally committed raw training data to the repo and pushed it to **GitHub Enterprise**. The repository now contained sensitive customer logs that violated our compliance policy.

**Task (T)**  
I had to remove the data from history, ensure no further leakage, and demonstrate ownership of a security incident.

**Action (A)**  
1. **Rewind commits:** `git reset --hard HEAD~2` – removed the offending commit locally.  
2. **Force‑push safe branch:** `git push origin main --force-with-lease` – updated remote without affecting teammates’ work.  
3. **Rewrite history:** `git filter-repo --path data/ --invert-paths` – purged all traces of the dataset from every commit, then rebased (`git rebase -i`) to keep a clean linear history.  
4. **Audit & lock:** Used **AWS Secrets Manager** to rotate any exposed keys and enabled **GitHub’s secret scanning**.  
5. **Documentation:** Added a `SECURITY.md` entry with the incident details and remediation steps.

**Result (R)**  
- No data remained in the repo history; audit logs show zero exposure.  
- Compliance review passed within 48 hrs, avoiding potential fines (~$200k).  
- Team trust restored; I introduced a pre‑commit hook that scans for large binary files, reducing future risk by **95%**.

---

### Technical Takeaway
- *Git* is stateful: `git reset` rewinds local history, `filter-repo` rewrites all commits.  
- Use `--force-with-lease` to avoid accidental overwrites.  
- Combine Git operations with AWS services (Secrets Manager, S3 versioning) for end‑to‑end security.

**Leadership Principles Highlighted**

1. **Ownership** – I took full responsibility for the data breach and its resolution.  
2. **Dive Deep** – Analyzed commit history, performed a forensic rewrite, and audited downstream systems.  

This blend of rapid action, technical rigor, and ownership is what a bar‑raiser looks for in an Amazon ML engineer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
