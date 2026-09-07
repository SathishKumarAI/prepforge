---
qid: ing_546db2f376__aws__local
question: 'Explain: nbdev: use Jupyter Notebooks for everything'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 439
total_tokens: 670
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:37:09-05:00'
sources: []
---

**Situation / Task**

While leading a data‑science team at my last company, we had to prototype and ship an NLP model in under two weeks for a client demo. The usual pipeline—Jupyter notebooks → scripts → CI/CD—was too slow; each notebook was a monolith that made collaboration messy.

**Action**

I introduced **nbdev**, a framework that treats notebooks as first‑class source code. I set up a GitHub repo with nbdev’s `build` process, so every cell became an importable Python module and the entire stack ran on AWS SageMaker endpoints.  
- **Requirements:** 1 GB of training data, 50 k words per epoch, <5 min inference latency.  
- **Design:** Store notebooks in S3; use CodeBuild to run `nbdev_build_lib` → Lambda for packaging; deploy with CloudFormation (SageMaker endpoint + API Gateway).  
- **Trade‑offs:** Slightly higher CI cost (~$0.50 per build) but cut manual refactor time by 70 %.  

**Result**

We reduced the end‑to‑end cycle from 5 days to 2, achieved a 92 % F1 score on production data, and earned a “Best Innovation” award in Q3. The notebooks were now versioned, testable (pytest), and auto‑documented—improving **Ownership** and **Dive Deep**.

**Bar‑raiser notes**

- Ownership: I owned the migration and mentored 4 junior engineers.  
- Dive deep: I benchmarked latency across Lambda vs. EC2 to justify SageMaker usage.  
- Quantified impact: 70 % faster iteration, $200/month cost savings after scaling.  
- Learning from failure: First build failed due to missing `__init__.py`; fixed by adding a pre‑commit hook and documenting the convention.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
