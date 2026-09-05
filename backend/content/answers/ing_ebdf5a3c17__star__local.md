---
qid: ing_ebdf5a3c17__star__local
question: 'Explain: Golden Set Composition Guidelines — Rag Evaluation Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 324
total_tokens: 559
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:20:30-05:00'
sources: []
---

**Situation:**  
At a fintech startup, we were building an AI‑driven risk assessment tool that fed into our loan approval workflow. Our internal audit flagged that the model’s explanations were too generic, causing compliance teams to lose confidence in the decisions.

**Task:**  
I needed to redesign the RAG (Red‑Amber‑Green) explanation framework so it complied with the Golden Set Composition Guidelines—ensuring each label was backed by concrete evidence and actionable insights, while keeping the user interface clean.

**Action:**  
First, I mapped every feature contribution to a single “golden set” of audit‑ready metrics. Using SHAP values, I grouped features into high, medium, and low impact buckets. For each bucket, I drafted concise RAG narratives that referenced exact threshold ranges (e.g., “Green: credit score > 750; Amber: 650–749; Red: < 650”). I then integrated these into a custom React component that dynamically updated based on model output, ensuring the explanation length stayed under 150 characters. Finally, I ran A/B tests with compliance staff to fine‑tune wording and visual cues.

**Result:**  
The new RAG system cut audit cycle time by 40 % and improved compliance approval rates from 78 % to 92 %. I learned that marrying rigorous feature attribution with human‑centric design is key to trustworthy AI.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
