---
qid: ing_c190c099ba__star__local
question: 'Explain: The interview loop — Cognition Devin'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 396
total_tokens: 630
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:56:58-05:00'
sources: []
---

**Situation:**  
During my final semester at university, I was part of a research team building an AI tutor for coding assignments. Our prototype’s accuracy plateaued around 78% on unseen test data, and the faculty asked us to improve it before presenting at the annual tech symposium.

**Task:**  
I needed to design a systematic evaluation loop—what we called the “interview loop”—to iteratively refine the model’s understanding of student intent and feedback patterns. The goal was to raise accuracy to at least 88% while keeping inference latency under 200 ms for real‑time interaction.

**Action:**  
First, I mapped out three phases: *Capture*, *Interpret*, and *Validate*. In Capture, we logged every student query and the model’s raw prediction scores. For Interpret, I used SHAP values to identify which features (e.g., code syntax vs. error messages) most influenced the prediction. Then in Validate, I set up a continuous integration pipeline that ran the model on a held‑out “interview” dataset—pairs of student questions and human‑graded answers—and automatically generated confusion matrices. Every week we revisited the top 5 misclassifications, fine‑tuned hyperparameters (learning rate, batch size), and added domain‑specific embeddings from a transformer trained on open‑source code repositories. We also introduced an early‑stopping mechanism to prevent overfitting.

**Result:**  
After six iterations of the interview loop, accuracy climbed to 89%, latency remained at 180 ms, and the system received a “Best Student Support” award at the symposium. I learned that framing evaluation as an iterative interview—not just a one‑time test—lets you surface subtle model biases early and converge faster on real user needs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
