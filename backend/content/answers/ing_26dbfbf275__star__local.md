---
qid: ing_26dbfbf275__star__local
question: 'Explain: SFT mechanics — Fine Tuning And Alignment'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 364
total_tokens: 600
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:46:11-05:00'
sources: []
---

**Situation**  
In mid‑2023 I was part of a startup building a conversational AI for legal document review. Our baseline model, GPT‑4‑lite, scored 78 % on the internal compliance test but misinterpreted nuance in contract clauses, leading to a 12 % error rate in client outputs.

**Task**  
I had to bring that error rate below 5 % while keeping inference latency under 200 ms for real‑time chat. That meant fine‑tuning the base model on our domain data and aligning it with user intent signals from previous interactions.

**Action**  
First, I curated a balanced dataset of 50k contract excerpts annotated by legal experts. Using LoRA adapters, I fine‑tuned the transformer weights for only 3 epochs—reducing training time to 4 hrs on a single A100 GPU. Next, I implemented reinforcement learning from human feedback (RLHF): we collected 1k “ideal” responses and used Proximal Policy Optimization to shape the policy toward compliance signals. Finally, I added a lightweight alignment layer that re‑weights logits based on user‑provided tags (“high risk”, “low risk”), ensuring the model prioritized critical clauses.

**Result**  
After deployment, the error rate dropped to 3.2 % and latency stayed at 185 ms. The client adoption grew by 27 % in Q4, and I documented a reusable SFT pipeline that cut future training cycles by 70 %. This experience taught me how targeted fine‑tuning combined with alignment signals can turn a generic LLM into a reliable domain specialist.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
