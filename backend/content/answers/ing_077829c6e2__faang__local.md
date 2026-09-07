---
qid: ing_077829c6e2__faang__local
question: How do you design a good rubric for model-graded evals, and where does chain-of-thought
  fit?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 562
total_tokens: 807
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:01:40-05:00'
sources: []
---

**Clarify**

We’re asked to build a *rubric* that lets an LLM grade student responses automatically, and to explain how “chain‑of‑thought” (CoT) reasoning can be leveraged or penalized within that rubric.  
Assumptions:  
- The evaluator is a single model (or a small ensemble).  
- Inputs are short essays or problem solutions.  
- We need interpretability for instructors.

**Approach**

1. Define high‑level criteria (accuracy, depth, clarity, style).  
2. Map each to sub‑metrics that the model can score via prompt‑engineering.  
3. Introduce a CoT flag: “Did the answer exhibit step‑by‑step reasoning?”  
4. Aggregate with weighted scoring and calibration against human scores.

**Depth**

| Criterion | Sub‑metric | Prompt snippet | Expected output |
|-----------|------------|----------------|-----------------|
| **Accuracy** | Factual correctness | “Rate factual accuracy on a 0–5 scale.” | Integer 0–5 |
| **Depth** | Insightfulness | “Assess depth of analysis (0–3).” | Integer 0–3 |
| **Clarity** | Logical flow | “Score coherence: 0–4.” | Integer 0–4 |
| **Style** | Readability | “Rate readability on a 1–5 scale.” | Integer 1–5 |
| **CoT Presence** | Step‑by‑step reasoning | “Does the response include explicit intermediate steps? Yes/No.” | Boolean |

Aggregate score = Σ(weight_i × metric_i).  
Weights tuned via regression against a human‑labeled validation set.

**Edge Cases**

- Ambiguous answers: model may misclassify CoT presence.  
- Very short responses: depth and clarity collapse.  
- Domain shifts: factual accuracy prompt needs domain‑specific tuning.

Test with synthetic data spanning minimal, correct, and incorrect solutions; validate calibration against a held‑out human rubric.

**Optimize & Communicate**

- Use few‑shot examples for each sub‑metric to reduce hallucination.  
- Cache CoT detection separately to avoid re‑prompting the whole evaluation.  
- Provide instructors with a transparent breakdown: “Accuracy 4/5, Depth 2/3, CoT present.”  

Narrate reasoning by showing how each sub‑metric maps directly to instructor concerns and how CoT can be rewarded (for complex tasks) or penalized (if it inflates score without substance). This structure satisfies FAANG’s emphasis on clarity, depth, and measurable trade‑offs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
