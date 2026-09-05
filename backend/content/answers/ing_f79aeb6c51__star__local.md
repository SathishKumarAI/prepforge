---
qid: ing_f79aeb6c51__star__local
question: What Are Code-Based Evals? — Ai Evals Comprehensive Study Guide
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 347
total_tokens: 586
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:43:55-05:00'
sources: []
---

**Situation:** In my senior year I led a research group at university that was building an AI model for automated code review. Our system needed to be rigorously tested, but the existing benchmarks were mostly natural‑language based and didn’t reflect real coding errors.

**Task:** I had to design a suite of code‑based evaluation tasks—“code evals”—that would assess the model’s understanding of syntax, semantics, and debugging skills on realistic programming problems. The goal was to create a reproducible benchmark that could be shared with the community.

**Action:** I first gathered 200 open‑source projects from GitHub spanning Python, JavaScript, and Rust. For each project I extracted buggy commits, then wrote a set of unit tests that captured the intended behavior before and after the bug fix. Using the OpenAI API, I generated prompts asking the model to identify the bug, explain why it fails, and propose a minimal patch. I scripted an automated pipeline in Python with PyTest to run each prompt against the model, capture its output, compute accuracy, and log execution time. I also incorporated version control metadata so we could track changes across model iterations.

**Result:** The code eval benchmark achieved 68 % precision on bug detection and 55 % success rate on patch generation—significantly higher than baseline models. It was adopted by two other research labs for their own evaluations, and the dataset is now hosted on Hugging Face. I learned that carefully curating realistic code scenarios and automating the evaluation pipeline are key to meaningful AI benchmarking.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
