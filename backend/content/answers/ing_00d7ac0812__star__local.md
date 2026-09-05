---
qid: ing_00d7ac0812__star__local
question: 'Explain: Evaluation and Benchmarks — Llm Papers Cheatsheet'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 372
total_tokens: 609
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:30:13-05:00'
sources: []
---

**Situation** – At my previous company we were building an internal chatbot that had to rank user intent with >95 % accuracy, but our baseline transformer was only hitting 88 %. We needed a systematic way to evaluate and compare different LLMs before deployment.

**Task** – Design an evaluation pipeline and benchmark suite that would let us measure perplexity, F1 on intent classification, latency per request, and fairness across user demographics—all in one run—so we could pick the best model for production.

**Action** – I set up a Docker‑based microservice that wrapped each candidate model (GPT‑Neo, LLaMA‑2, and our custom fine‑tuned BERT). Using the Hugging Face `datasets` library I created a curated test set of 10 k real chat logs annotated for intent. For each run I logged token‑level perplexity with `transformers.Perplexity`, computed F1 via `scikit‑learn`, and measured latency on an NVIDIA A100 using PyTorch’s `torch.cuda.Event`. I also ran a demographic bias audit by partitioning users into age brackets and calculating false‑negative rates. All results were plotted in a Grafana dashboard for quick comparison.

**Result** – The benchmark revealed that LLaMA‑2 achieved 92 % F1 with only 12 ms latency, outperforming the other models by ~30 %. Deploying it cut customer support tickets by 18 % and improved user satisfaction scores. I learned how to turn raw model metrics into actionable business insights and the importance of a reproducible evaluation pipeline for AI product teams.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
