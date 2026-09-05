---
qid: ing_0936778c7a__fp__local
question: 'Explain: Local setup 💻 — GitHub - langwatch/langwatch: The platform for
  LLM evaluations and AI agent testing \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 490
total_tokens: 681
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:25:21-05:00'
sources: []
---

### Why a *local* setup is the first‑principles choice

When you run an LLM evaluation pipeline, you are essentially **optimising a loss function** over a set of prompts and metrics.  
Every training or inference step changes internal state (model weights, tokeniser vocabularies, random seeds). If you only use a cloud service, that state is recreated on each request, breaking reproducibility and inflating costs.  Locally you own the full **computational graph**: you can freeze hyper‑parameters, control GPU allocation, and run *exactly* the same evaluation twice.

### The minimal stack

1. **Python ≥ 3.10** – the language that hosts most ML libraries; its type hints aid static analysis of the pipeline’s data flow.  
2. **PyTorch + Transformers** – they expose a unified API for both inference and gradient‑based fine‑tuning, enabling you to swap models (GPT‑Neo, LLaMA) without touching the evaluation logic.  
3. **GitHub Actions + Dockerfile** – the repo ships a Docker image that bundles CUDA drivers, ensuring *geometric* reproducibility: the same tensor shapes hit the same GPU kernels every run.

### One non‑obvious insight

The repository’s `langwatch.yml` file is not just CI; it is an **explicit specification of the evaluation horizon**.  
By declaring each metric as a separate job you decouple *information flow* (metric computation) from *resource allocation* (GPU hours).  This mirrors Bayesian inference: you condition on data to update beliefs, but you never need to recompute unrelated posteriors.  Locally, this means you can pause the pipeline after a metric finishes and resume later without losing progress.

### Quick start

```bash
git clone https://github.com/langwatch/langwatch.git
cd langwatch
docker build -t langwatch .
docker run --gpus all -v $(pwd)/data:/app/data langwatch python evaluate.py
```

You now own the entire optimisation loop, from data ingestion to metric aggregation, with full control over every variable that influences your LLM’s performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
