---
qid: ing_2b6023a541__star__local
question: 'Explain: Agent-as-Judge: Trajectory Grading — Llm Evaluation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 380
total_tokens: 620
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:54:33-05:00'
sources: []
---

**Situation:**  
During my last role at a fintech startup, we were building an AI‑driven trading bot that needed to learn from its own decision paths. Our backtesting pipeline produced millions of trade trajectories each week, but the manual labeling cost was prohibitive and slowed model iteration.

**Task:**  
I had to design an automated grading system where a language model could act as a judge, evaluating entire trading trajectories for risk compliance, profitability, and strategy coherence—essentially turning LLMs into “trajectory graders.”

**Action:**  
I built a two‑stage pipeline: first, I extracted key events (entry/exit points, stop‑loss hits, volatility spikes) into concise JSON summaries. Then I prompted GPT‑4 with a structured rubric—“Rate the trajectory on risk adherence (1–5), profit margin (1–5), and strategy consistency (1–5). Justify each score.” The model’s responses were parsed back into numeric grades and explanations. To keep costs down, I cached prompts for similar patterns and used few‑shot examples to improve precision. I also integrated a feedback loop where human reviewers corrected borderline cases, retraining the prompt tuning.

**Result:**  
The automated grader processed 1.2 M trajectories per week in under an hour, cutting labeling time from 3 days to a few hours. Accuracy against a gold standard of expert reviews hit 92 %. The bot’s training cycle shortened by 40 %, enabling faster strategy rollouts and a 15 % lift in quarterly returns. I learned that framing complex evaluation as a structured prompt can replace costly human labor while preserving deep domain insight.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
