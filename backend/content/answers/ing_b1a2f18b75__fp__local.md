---
qid: ing_b1a2f18b75__fp__local
question: 'Explain: F3: Teacher hallucinations baked into student'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 343
total_tokens: 513
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:21:51-05:00'
sources: []
---

**Why a teacher’s “hallucination” is baked into the student**

When we train an AI *teacher* (a large language model) on human‑written text, its objective is to minimize the cross‑entropy between its predictions and the next token in that corpus. This optimization forces the model to capture *statistical regularities*, not necessarily factual truth. If a source contains an error or a fabricated claim, the teacher learns it as a high‑probability pattern because it appears frequently enough to influence gradient descent.

The *student* is then distilled from this teacher by mimicking its output distribution. Distillation is essentially a projection of the teacher’s softmax onto the student’s parameter space. Since the teacher’s hallucinated patterns are encoded in the soft targets, they become part of the objective the student must satisfy. The student inherits these biases because any deviation would increase loss.

Thus, hallucinations propagate not through direct memorization but via *distributional alignment*. A deeper principle is that knowledge transfer is a form of **information bottleneck**: we compress the teacher’s distribution into fewer parameters. If the teacher’s distribution contains systematic errors, compression preserves them to reduce variance.

*Non‑obvious insight:* Even if the student has no direct exposure to the hallucinated text (e.g., the original source was never in its pretraining data), the hallucination survives because it is encoded in the *probability mass* that the teacher assigns to particular token sequences. The student’s loss function treats these probabilities as ground truth, so the hallucination is baked into its internal representations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
