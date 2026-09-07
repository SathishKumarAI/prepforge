---
qid: ing_1c318a36f3__faang__local
question: 'Explain: Tell me about a time a prompt change broke production.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 338
total_tokens: 573
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:50:30-05:00'
sources: []
---

**Clarify**  
The interviewer wants an example of how a seemingly innocuous change to a prompt or model‑input schema caused a downstream failure in a live AI service. I’ll assume the context is a deployed NLP pipeline (e.g., customer support chatbot) that relies on prompts for intent classification.

**Approach**  
1. Identify the root cause (prompt wording → changed embeddings).  
2. Explain detection & rollback steps.  
3. Highlight preventative measures.

**Depth**  
During a quarterly update, we added “How can I reset my password?” to the training prompt set to improve FAQ coverage. The new phrasing produced embeddings that drifted the intent‑classifier’s decision boundary. Production traffic saw a 12 % spike in misclassifications (≈3k tickets per day). We detected this via an automated anomaly detector on the “unknown intent” rate, triggering an A/B rollback. After restoring the old prompt set, accuracy returned to baseline.

**Edge Cases**  
- Prompt length variations causing token truncation.  
- Contextual overlap leading to synonym confusion.  
- Non‑English utterances where the new prompt was misinterpreted.

**Optimize & Communicate**  
We now:  
1. Version‑control prompts with strict change‑management.  
2. Run unit tests that compare embeddings before/after changes.  
3. Use a staged rollout (5 % traffic) and monitor confidence scores.  
I would explain this narrative in a concise, structured format, emphasizing clear communication of the issue, impact, mitigation, and lessons learned.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
