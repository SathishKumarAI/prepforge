---
qid: ing_9d63d19c18__star__local
question: 'Explain: Describe the modern LLM training pipeline: pretraining → mid-training
  → SFT → RL.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 375
total_tokens: 621
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:46:58-05:00'
sources: []
---

**Situation**  
In my last role at a fintech startup we wanted to build an internal chatbot that could answer compliance queries in real time. The dataset was noisy and the business required high precision, so I had to design a full LLM training pipeline from scratch.

**Task**  
My goal was to take an open‑source transformer (e.g., GPT‑Neo) and deliver a model that scored >92 % on our compliance QA benchmark while staying under 12 GB of GPU memory for inference.

**Action**  
I began with **pretraining**: collected ~300M tokens from public finance documents, cleaned them with spaCy, and ran a distributed masked language objective on 8 NVIDIA A100s using DeepSpeed ZeRO‑3. Next was **mid‑training**—a domain‑specific fine‑tuning stage where I froze lower layers and continued training on our proprietary compliance corpus for 2 weeks, monitoring perplexity. For **SFT (Supervised Fine‑Tuning)** I curated a 10k Q&A pair set, applied label‑smoothing, and used the PEFT LoRA adapters to keep parameters low. Finally, in **RL‑HF** I collected human preference data on model responses, trained a reward model with proximal policy optimization, and performed 5 policy rollouts per batch to converge on the target metric.

**Result**  
The final model achieved 94.3 % accuracy on our test set, reduced inference latency by 30 %, and was deployed within 12 weeks. I learned that careful layer freezing during mid‑training dramatically cuts compute without sacrificing domain fluency, and that integrating a lightweight reward signal early prevents catastrophic forgetting of the pretraining knowledge.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
