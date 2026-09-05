---
qid: ing_9e8f2177f2__star__local
question: What does it do? — Diagram as Code
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 350
total_tokens: 585
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:49:14-05:00'
sources: []
---

**Situation:**  
At my last role, our data‑science team was building a predictive model for churn that required dozens of feature‑engineering steps: missing‑value imputation, one‑hot encoding, target‑encoding, and custom transformations. Every time we updated the pipeline, I had to manually tweak Jupyter notebooks, run `sklearn.pipeline.Pipeline`, and then re‑document everything in PowerPoint for stakeholders.

**Task:**  
I needed a way to version‑control, visualize, and automatically regenerate that entire preprocessing workflow so that any team member could see exactly how raw data turned into model inputs without hunting through code files.

**Action:**  
I introduced **Diagram as Code** using `Graphviz` in combination with the `mlflow` tracking server. I wrote a lightweight DSL that described each transformation node and its dependencies, then parsed it to generate both an SVG diagram and a Python script that instantiated a scikit‑learn pipeline. Whenever a new step was added, the same DSL updated the visual graph and re‑created the pipeline object automatically. We stored these diagrams in Git alongside the code, ensuring every commit had a snapshot of the data‑processing logic.

**Result:**  
The team cut pipeline documentation time from 6 hours per sprint to under 30 minutes, reduced errors by 40 % (no mismatched feature names), and made onboarding new engineers five times faster. I learned that treating workflows as first‑class code objects not only boosts reproducibility but also keeps stakeholders in sync with the technical reality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
