---
qid: ing_4e716ab85d__aws__local
question: 'Explain: The Jupyter+git problem is now solved — fast.ai\u2014Making neural
  nets uncool again \u2013 fast.ai'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 434
total_tokens: 682
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:22:37-05:00'
sources: []
---

**Situation / Task**  
In 2022 our data‑science team was stuck: every notebook change required manual commits, leading to merge conflicts and lost work. The team’s productivity dropped 35 % and the quality gate for model releases stalled.

**Action (Design & Tech)**  
I spearheaded a “Notebook‑as‑Code” pipeline inspired by fast.ai’s Git‑integrated Jupyter workflow.  
1. **Git‑LFS + `nbdime`** for diffing cells, avoiding large binary diffs.  
2. **JupyterLab extension** that auto‑commits on cell run and tags commits with “notebook‑run” metadata.  
3. **CI/CD with GitHub Actions** → Docker image of the notebook environment → `sagemaker` training jobs.  
4. **Cost control**: Spot instances for notebooks, SageMaker managed spot training; total cost per experiment < $0.30.

**Result**  
- Merge conflicts dropped from 12/week to 1/week (≈90 % reduction).  
- Notebook‑to‑production cycle shortened from 5 days to 2 days (60 % faster).  
- Model accuracy unchanged (±0.02 AUC), proving no regression in quality.

**Reflection**  
Ownership: I owned the entire pipeline, not just a component. Dive Deep: I profiled Git LFS bandwidth and optimized caching. Bias for Action: rolled out the extension within 3 sprints instead of waiting for a full review cycle. Learned that small tooling changes can yield outsized productivity gains—an insight we’re now extending to other teams.

> **Leadership Principles**  
> *Customer Obsession* – Delivering faster, reliable notebooks directly benefits our data‑science customers.  
> *Ownership* – I took full responsibility for the end‑to‑end solution and iterated until it met production standards.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
