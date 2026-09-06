---
qid: ing_b1a2f18b75__think__local
question: 'Explain: F3: Teacher hallucinations baked into student'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 506
total_tokens: 695
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T12:43:10-05:00'
sources: []
---

### 1️⃣ Clarify the Question & Set Assumptions  
- **What is meant by “F3”**? Assume it’s a shorthand for a *third‑generation* or *specific* failure mode in AI.  
- **Teacher vs. Student**: In knowledge distillation, a large “teacher” model trains a smaller “student.”  
- **Hallucination**: The teacher generates plausible but false information.  
- **Baked into student**: The student inherits these hallucinations during training.

### 2️⃣ Mental Model & Framework  
1. **Distillation pipeline**: Teacher → soft targets → Student loss.  
2. **Error propagation**: If teacher outputs are wrong, the student’s loss surface is shaped by those errors.  
3. **Regularization vs. overfitting**: Distillation can act as a regularizer; but if teacher mistakes dominate, the student over‑fits to hallucinated patterns.

### 3️⃣ Step‑by‑Step Reasoning  
- **Identify hallucination sources** in the teacher (e.g., ambiguous prompts, data bias).  
- **Quantify impact**: Measure how often the teacher’s predictions are incorrect.  
- **Trace influence**: Show that these wrong labels drive gradients during student training.  
- **Resulting behavior**: Student produces similar false outputs when faced with analogous inputs.  

### 4️⃣ Common Traps to Avoid  
- *Assuming all hallucinations vanish in a smaller model.*  
- *Overlooking teacher confidence*: High‑confidence hallucinations are more damaging.  
- *Ignoring curriculum*: Training the student on filtered data can mitigate but not eliminate the issue.

### 5️⃣ Sanity‑Check & Communicate Clearly  
- **Test the student** on a held‑out “truth” set to confirm hallucination rates.  
- **Explain in plain terms**: “The teacher’s mistakes become part of the student’s learned knowledge, so the student repeats them.”  
- **Offer mitigations**: Use ensemble teachers, confidence filtering, or post‑distillation calibration.

By following this structured approach you can dissect why and how hallucinations from a teacher model get baked into a student, and what practical steps can reduce the problem.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
