---
qid: ing_ffe67014b2__faang__local
question: 'Explain: Natural Language Processing Interview Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 509
total_tokens: 739
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:34:47-05:00'
sources: []
---

**Clarify**  
You’re asking for a concise rundown of *typical* NLP interview questions and the concepts they probe. I’ll assume the interview is for an ML/AI role (not just data‑science), so questions will test both theory and practical implementation.

**Approach**  
I’ll group questions by topic: foundational linguistics, modeling techniques, evaluation metrics, scaling, and ethics. For each, I’ll give a representative question and explain why it matters to interviewers.

**Depth**

| Topic | Representative Question | Why It Matters |
|-------|--------------------------|---------------|
| **Tokenization & Representation** | *“Explain sub‑word tokenization (BPE/GPT‑2) vs. word‑level.”* | Tests understanding of vocabulary sparsity and model generalization. |
| **Language Models** | *“How does a transformer differ from an RNN in handling long‑range dependencies?”* | Evaluates grasp of attention, self‑attention, computational trade‑offs. |
| **Training & Optimization** | *“Why do we use Adam with weight decay instead of plain SGD for BERT?”* | Checks knowledge of adaptive optimizers and regularization effects. |
| **Evaluation** | *“What is BLEU? When would you prefer ROUGE or METEOR?”* | Demonstrates familiarity with metric strengths/weaknesses in translation vs. summarization. |
| **Scaling & Deployment** | *“How would you distill a GPT‑3 model for edge inference?”* | Looks at compression, quantization, and latency constraints. |
| **Ethics & Bias** | *“Describe how to detect and mitigate gender bias in an NLP pipeline.”* | Signals awareness of societal impact and fairness metrics. |

**Edge Cases**  
- Questions may twist wording (e.g., “What’s the trade‑off between perplexity and BLEU?”).  
- Some interviewers expect you to write pseudocode for attention or loss functions; practice that.

**Optimize & Communicate**  
When answering, start with a brief definition, then dive into key equations or algorithmic steps, finish with a real‑world implication. Highlight trade‑offs (e.g., transformer memory vs. RNN speed). This narrative shows you can translate theory to engineering decisions—exactly what FAANG interviewers reward.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
