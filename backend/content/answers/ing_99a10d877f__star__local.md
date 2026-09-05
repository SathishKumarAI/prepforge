---
qid: ing_99a10d877f__star__local
question: 'Explain: Pattern: Critic/Verifier — Design Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 366
total_tokens: 602
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:39:57-05:00'
sources: []
---

**Situation:**  
In a startup building an automated customer‑support chatbot, the initial model churned out inconsistent responses because the same intent could be triggered by multiple phrases. Our KPI was to keep the average response time under 2 seconds while maintaining an accuracy of ≥85 %.  

**Task:**  
I had to design a robust system that could reliably match user utterances to intents, verify confidence scores, and flag ambiguous cases for human review without slowing down the pipeline.

**Action:**  
I introduced a *Critic/Verifier* pattern: first, a lightweight “critic” layer pre‑filters input using a fast n‑gram matcher; then a “verifier” layer runs a transformer‑based intent classifier only on filtered candidates. I added an ensemble vote that requires at least two of three models to agree before committing a response. For edge cases where confidence < 0.7, the system automatically routes the query to a human queue and logs it for retraining. I used TensorFlow Lite for the critic and HuggingFace Transformers for the verifier, all orchestrated via a micro‑service architecture in Kubernetes.

**Result:**  
The dual‑layer approach cut inference time by 35 % (from 3.2 s to 2.1 s) while boosting overall intent accuracy from 82 % to 88 %. Ambiguous queries dropped by 60 %, and the retraining loop reduced misclassifications by 15 % month‑over‑month. I learned that separating quick sanity checks from deep verification can dramatically improve both speed and reliability in real‑time AI systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
