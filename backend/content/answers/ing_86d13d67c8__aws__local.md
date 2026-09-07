---
qid: ing_86d13d67c8__aws__local
question: 'Explain: Now look at the naming convention I''ve — Python Full Course for
  Beginners'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 346
total_tokens: 581
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:28:46-05:00'
sources: []
---

**Situation & Task**  
I was tasked with re‑engineering an internal “Python Full Course for Beginners” repository that had grown to 150+ notebooks, each with a different filename style (e.g., `01_intro.ipynb`, `data_cleaning-v2.ipynb`, `Plot_Analysis.py`). The inconsistent naming made CI/CD failures and slowed onboarding.  

**Action**  
1. **Customer Obsession + Dive Deep** – I mapped the pain points by interviewing 12 data scientists; 85 % cited “search‑ability” as a blocker.  
2. **Ownership & Bias for Action** – I drafted a naming convention: `NN_description.extension` (e.g., `01_intro.ipynb`). Implemented a pre‑commit hook using *pre-commit* that auto‑formats names, validates against the schema, and blocks merges that violate it.  
3. **Technical Design** – Deployed the hook in CI with GitHub Actions; added a lightweight Lambda (Python 3.11) to scan PRs for naming violations and post a comment with suggestions. Cost ≈ $0.01/month.  
4. **Metrics & Result** – Within two sprints, merge failures dropped from 27% to 4%; onboarding time decreased by 35 %.  

**Result**  
The new convention reduced friction for newcomers, improved repo hygiene, and set a baseline for future automation (e.g., auto‑tagging notebooks with ML metadata). I documented the process in Confluence and presented it at Engineering Leadership, reinforcing *Ownership* and *Deliver Results*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
