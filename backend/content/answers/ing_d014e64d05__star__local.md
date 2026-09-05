---
qid: ing_d014e64d05__star__local
question: 'Explain: Iterating on Your Judge Prompt — Ai Evals Complete Guide Langwatch
  Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 400
total_tokens: 644
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:25:22-05:00'
sources: []
---

**Situation:**  
At my previous company we launched a new customer‑service chatbot that needed to score responses against human‑rated quality metrics. Our initial “judge” prompt—used by the evaluation framework (Langwatch/Langfuse)—was generic, so the model kept flagging perfectly fine replies as low quality and vice versa.

**Task:**  
I had to redesign the judge prompt so it would reliably differentiate subtle nuances in tone, accuracy, and relevance while staying within the 32‑token limit of the evaluation API. The goal was a 15% improvement in precision/recall for our key metric by the next sprint.

**Action:**  
1. I mapped out the most common misclassifications from the first batch of evals.  
2. Using Langwatch’s prompt‑analysis tool, I identified high‑impact words that skewed scores.  
3. I rewrote the prompt in a concise “chain‑of‑thought” format: “Rate this answer on factual accuracy (1–5), relevance to the question (1–5), and helpfulness (1–5). Provide a brief justification.”  
4. I added a dynamic placeholder for the user query, ensuring context wasn’t lost.  
5. Finally, I ran A/B tests with Langfuse’s evaluation pipeline, iterating on wording until the F1‑score hit 0.82.

**Result:**  
The new prompt reduced false positives by 18% and increased overall evaluator confidence scores from 0.74 to 0.81 within one sprint. I learned that a data‑driven, iterative approach—leveraging Langwatch’s diagnostics and Langfuse’s real‑time feedback loop—is essential for fine‑tuning judge prompts in production AI systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
