---
qid: vq_756d17aeab__aws__local
question: In Python, how do you remark numerous lines?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 407
total_tokens: 636
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:58:17-05:00'
sources: []
---

**Situation / Task**  
I was refactoring a legacy data‑pipeline script that ran on an EC2‑based Lambda layer. The code had dozens of “TODO” blocks scattered across three files, each block spanning 15–20 lines. Without proper commenting, the next developer couldn’t understand the intent or risks.

**Action**  
- I introduced **block comments** using triple quotes (`""" … """`) to wrap entire logical sections, keeping the syntax valid for Python.  
- For inline notes that needed to be retained in the source but not executed, I used `#` prefixes and prefixed each with a unique tag (`# TODO:`, `# FIXME:`).  
- To enforce consistency, I added a pre‑commit hook that scans for comment style violations and runs `pylint --max-line-length 120`.  
- Finally, I updated the CI pipeline on CodeBuild to run `bandit` against commented sections to ensure no sensitive data was accidentally exposed.

**Result**  
After deployment, the codebase’s *code‑review turnaround time* dropped from **5 days to 1 day**, and the number of post‑merge defects decreased by **38 %**. The CI pipeline cost increased only **$0.05/month** on CodeBuild, while improving maintainability—an outcome that aligns with Amazon’s **Customer Obsession** (future users) and **Ownership** (owning code quality).

---

> *Bar‑raiser notes:*  
> • Demonstrated ownership by proactively refactoring a legacy system.  
> • Dived deep into comment best practices and CI tooling.  
> • Quantified impact with concrete defect reduction metrics.  
> • Learned from the failure of scattered comments to improve developer experience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
