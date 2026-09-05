---
qid: ing_323e4e9cde__fp__local
question: 'Explain: Working with evals | OpenAI API'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 432
total_tokens: 601
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:51:44-05:00'
sources: []
---

**Why we need “evals”**

The core problem is that an LLM can generate anything it likes; a developer needs *quantifiable evidence* that the model behaves as intended on a specific task set.  
An evaluation, in statistical terms, is a function \(f:\mathcal{M}\rightarrow\mathbb{R}\) that maps a model’s outputs to a score. The OpenAI API exposes this as an **eval**—a reusable test harness.

**How the API constructs it**

1. **Prompt template + context** – You supply a prompt and optional system message.  
2. **Reference answers** – A ground‑truth set (human‑labelled or curated).  
3. **Metric definition** – Either a built‑in metric (accuracy, BLEU) or a custom scorer written in Python.  
4. **Evaluation run** – The API sends the prompt to the model, collects the response, and applies the scorer.

The returned JSON contains per‑example scores and aggregate statistics, mirroring a mini‑experiment with hypothesis testing: \(H_0\): “Model performs no better than random.”  

**Underlying principle**

This is an instance of *probability‑weighted loss minimization*: each eval assigns a weight (confidence) to examples; the overall score is the expectation of the metric under that distribution. By treating the dataset as a sample from the target distribution, you approximate \(E_{\text{data}}[L(\hat y,y)]\).

**Non‑obvious insight**

Because metrics are computed *after* generation, they implicitly enforce **output space constraints**: if your eval penalises hallucination, the model will learn to stay within the allowed answer set. Thus, a well‑designed eval not only measures but also shapes future generations—essentially turning evaluation into a lightweight form of fine‑tuning without retraining.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
