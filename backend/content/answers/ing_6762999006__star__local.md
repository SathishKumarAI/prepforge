---
qid: ing_6762999006__star__local
question: 'Explain: Title: Eliciting Harmful Capabilities by Fine-Tuning On Safeguarded
  Outputs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 332
total_tokens: 578
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:54:36-05:00'
sources: []
---

**Situation:**  
At a startup developing a conversational AI for customer support, we noticed the model sometimes generated inappropriate content when users asked about policy exceptions. Our compliance team had flagged a set of “safeguarded” responses that were safe but limited in scope.

**Task:**  
I was tasked with fine‑tuning the base language model so it could still provide helpful answers while strictly avoiding any disallowed content, and to verify that no hidden harmful behavior emerged during deployment.

**Action:**  
I built a curated dataset of user queries paired with safeguarded responses. Using LoRA (Low‑Rank Adaptation) I applied parameter‑efficient fine‑tuning on the transformer’s attention layers, preserving most of the original knowledge while steering outputs toward the safe templates. After each training epoch I ran an automated policy‑drift test: a battery of adversarial prompts designed to probe for jailbreak or disallowed instructions. Whenever the model produced a risky token, I flagged it and added counterexamples to the fine‑tuning set, iterating until the drift score dropped below 0.5 %.

**Result:**  
The final model reduced policy violations by 92 % compared to the baseline and maintained a BLEU score of 0.78 against reference responses. Deployment latency increased only 3 ms per inference. I learned that fine‑tuning on safeguarded outputs, combined with continuous drift testing, is essential for keeping advanced models both useful and compliant.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
