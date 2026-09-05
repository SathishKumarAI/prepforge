---
qid: ing_4e716ab85d__star__local
question: 'Explain: The Jupyter+git problem is now solved — fast.ai\u2014Making neural
  nets uncool again \u2013 fast.ai'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 356
total_tokens: 610
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:05:15-05:00'
sources: []
---

**Situation** – At my previous startup we were training image‑classification models in Jupyter notebooks and pushing code to GitHub every week. Every merge caused notebook conflicts: different branches had diverging cell outputs, the `.ipynb` format made diffs unreadable, and CI pipelines would fail because of binary blobs.

**Task** – I needed a workflow that let us keep using Jupyter for experimentation while maintaining clean, version‑controlled code and reproducible builds.

**Action** – First, I converted notebooks to Python scripts with `nbconvert --to script` and stored the original `.ipynb` files only in an “experiments” folder ignored by Git. Then I used `jupytext` to keep a synced `.py` file that could be committed. For data and model artifacts, I added a lightweight DVC pipeline: each training run logged parameters to a YAML file, checkpoints were stored in S3, and the pipeline was triggered by a pre‑commit hook that ran unit tests on the script. Finally, I set up GitHub Actions to build Docker images from the committed scripts and push them to ECR.

**Result** – Merge conflicts dropped from 12 per month to zero; CI build times fell from 45 min to 10 min. We cut model iteration time by 70% and were able to ship a new CNN architecture in two weeks instead of six. I learned that separating notebook artifacts from production code and using a data‑versioning tool can make Jupyter+Git work smoothly for large teams.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
