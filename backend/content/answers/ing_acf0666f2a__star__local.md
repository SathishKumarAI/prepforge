---
qid: ing_acf0666f2a__star__local
question: 'Explain: The Three Core Truths About Evals — Ai Evals Complete Guide Langwatch
  Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 349
total_tokens: 595
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:18:07-05:00'
sources: []
---

**Situation:**  
When my team launched a new chatbot for our customer‑support portal, the user satisfaction score dipped from 92% to 78%. We suspected the model was generating vague or incorrect responses.

**Task:**  
I had to design an evaluation pipeline that would surface these issues quickly, quantify them, and guide fine‑tuning decisions—essentially turning qualitative feedback into actionable metrics.

**Action:**  
First, I set up **Langfuse** to instrument every user interaction. It captured raw prompts, model outputs, and user ratings in real time, giving us a structured log. Next, I built an evaluation script that ran each conversation through the three core truth checks: *Accuracy*, *Consistency*, and *Hallucination*. Accuracy was measured by cross‑matching answers against a gold‑standard FAQ database using cosine similarity; consistency used a Siamese network to flag contradictory replies across sessions; hallucinations were caught via a rule‑based filter that flagged unsupported claims. Results were visualized in LangWatch dashboards, where I could drill down from aggregate scores to individual conversation IDs.

**Result:**  
Within two weeks we reduced the error rate by 35%, raising the satisfaction score back to 90%. The pipeline also cut manual review time by 70% and gave us a repeatable framework for future model iterations. I learned that embedding structured evals early turns raw data into precise, measurable insights—and that tools like Langfuse and LangWatch can surface hidden defects before they reach users.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
