---
qid: ing_a140a44565__star__local
question: 'Explain: Overview — Introducing BigLaw Bench to Evaluate LLMs | Harvey'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 369
total_tokens: 609
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:55:11-05:00'
sources: []
---

**Situation:**  
At a midsize law firm, the legal research team was overwhelmed by inconsistent accuracy from different language models used for drafting memos and analyzing case law. Senior partners demanded a standardized way to benchmark these models before we could adopt them in client work.

**Task:**  
I was tasked with designing an evaluation framework—BigLaw Bench—that would systematically assess LLM performance on real legal tasks, quantify strengths and weaknesses, and provide actionable metrics for the team’s decision‑making.

**Action:**  
First, I gathered a corpus of 1,200 annotated legal briefs spanning contracts, litigation, and regulatory compliance. Using Python and Hugging Face Transformers, I scripted a benchmark pipeline that ran each model through three evaluation stages: (1) factual consistency via question‑answer pairs, (2) stylistic appropriateness scored by human raters, and (3) inference speed measured in milliseconds per token. I introduced a weighted scoring rubric to balance precision, recall, and latency, and visualized results with Plotly dashboards for quick comparison.

**Result:**  
The benchmark revealed that Model X achieved 87% factual accuracy but lagged in speed (120 ms/token), while Model Y was faster (70 ms/token) yet only 78% accurate. Using these insights, the firm adopted Model Y for routine drafting and Model X for high‑stakes litigation summaries, cutting research time by 35% overall. I learned that a data‑driven, transparent evaluation not only guides tool selection but also builds trust with stakeholders who are wary of “black‑box” AI.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
