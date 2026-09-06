---
qid: ing_c708387ff8__think__local
question: 'Explain: Yearly dives — GitHub - huggingface/evaluation-guidebook: Sharing
  both practical insights and theoretical knowledge about LLM evaluation that we gathered
  while managing the Open LLM Leaderboard and designing lighteval! \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 523
total_tokens: 754
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T14:05:37-05:00'
sources: []
---

**What you’re looking at**

The *“Yearly dives”* refers to a series of deep‑dive articles that the Hugging Face team has published on GitHub (specifically in the `huggingface/evaluation-guidebook` repository). These posts combine hands‑on lessons with theory around evaluating large language models (LLMs).

---

### Why it matters

1. **Open LLM Leaderboard** – Hugging Face runs an open leaderboard that tracks how different LLMs perform on a variety of benchmarks. The dives explain the data‑collection, preprocessing, and scoring methods used to keep this leaderboard fair and reproducible.

2. **lighteval** – A lightweight evaluation framework built by Hugging Face for fast, modular assessment of models. The articles walk through its architecture, how to plug in new tasks, and best practices for scaling evaluations across GPUs or TPUs.

---

### What you’ll find inside

| Section | Content |
|---------|---------|
| **Practical insights** | Code snippets, command‑line examples, tips on setting up datasets, handling model weights, dealing with tokenization quirks. |
| **Theoretical knowledge** | Discussion of evaluation metrics (accuracy, F1, BLEU, ROUGE, perplexity), statistical significance testing, bias and fairness considerations, and the trade‑off between speed vs. fidelity. |
| **Case studies** | Real‑world examples from recent LLM releases (e.g., GPT‑4, Claude, Llama‑2) showing how their scores were derived on the leaderboard. |

---

### How to use it

1. Clone the repo:  
   ```bash
   git clone https://github.com/huggingface/evaluation-guidebook.git
   ```
2. Read the README for an overview of `lighteval`.  
3. Dive into a “Yearly dive” markdown file (e.g., `2024-06-evaluation.md`).  
4. Follow the code examples, run them locally or in Colab, and tweak parameters to see how scores change.

---

### Bottom line

The *Yearly dives* are Hugging Face’s way of demystifying LLM evaluation: they give you the practical toolkit (lighteval, leaderboard scripts) **and** the conceptual framework (metrics, statistical reasoning). Whether you’re a researcher benchmarking a new model or an engineer deploying one in production, these posts provide a solid foundation for reliable, transparent evaluation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
