---
qid: ing_b067ac4804__star__local
question: 'Explain: Factuality and Instruction Following — Benchmarks And Leaderboards'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 362
total_tokens: 601
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:24:43-05:00'
sources: []
---

**Situation:**  
During my senior project, I was tasked with evaluating the reliability of several open‑source language models for an internal chatbot that would handle customer support queries in our banking app. The team needed a clear way to compare how well each model stayed on fact and followed instructions.

**Task:**  
I had to design a methodology that measured both factual accuracy (does the model provide correct information?) and instruction following (can it execute multi‑step user requests?). The results would feed into a leaderboard we could share with stakeholders for decision making.

**Action:**  
First, I selected established benchmarks: the *TruthfulQA* dataset for factuality and the *MMLU* “Instruction Following” subset. I scripted automated pipelines in Python using Hugging Face’s `datasets` library to load each model, run inference, and compute accuracy scores. For instruction following, I added a custom prompt engineering layer that wrapped user queries into a step‑by‑step format, then measured the percentage of correctly completed steps. I also plotted the results on a dynamic leaderboard built with Streamlit so the team could instantly see changes as we tweaked model parameters.

**Result:**  
The leaderboard revealed that Model A achieved 82% factual accuracy and 74% instruction compliance, outperforming Model B’s 68%/59%. Presenting these metrics to product managers accelerated our go‑live timeline by two weeks. I learned the importance of choosing the right benchmarks—TruthfulQA captures real‑world misinformation risks, while MMLU focuses on procedural fidelity—and how a live leaderboard can drive iterative improvement in model selection.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
