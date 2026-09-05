---
qid: ing_eca987fbe8__eli5__local
question: 'Explain: Cross-Encoder Models — Reranking Strategies'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 241
total_tokens: 399
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:50:07-05:00'
sources: []
---

**Cross‑Encoder models are like a pair of expert judges who sit together and read every candidate’s full résumé before deciding who should move on to the next round.**

When you ask “Which answer best fits my question?” the system first makes a quick shortlist (like a hiring manager). Then, each shortlisted answer is fed **together** with your question into a cross‑encoder model—two texts that are processed at the same time. The model looks at every word of both sides, weighing how well they match. It assigns a single score to each pair and re‑orders them from best to worst.  

*Unavoidable terms:*  
- **Encoder**: A neural network that turns text into numbers (vectors).  
- **Reranking**: Re‑ordering candidates based on new, more accurate scores.  

This two‑step process keeps speed (the initial shortlist) and accuracy (the cross‑encoder’s deep comparison) balanced, giving you the most relevant answer first.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
