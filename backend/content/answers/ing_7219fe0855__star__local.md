---
qid: ing_7219fe0855__star__local
question: 'Explain: 🎛️ Fine-tuning, RLHF & Alignment — Cheatsheet'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 365
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:15:33-05:00'
sources: []
---

**Situation**  
At my last startup we had a pre‑trained language model that performed well on generic text generation but produced biased or unsafe content for our customer support chatbot. The product launch was in two months and the quality gate required an 80 % safety score on a curated test set.

**Task**  
I needed to align the model with user values, reduce harmful outputs, and keep inference latency under 200 ms so the chat stayed responsive.

**Action**  
1. **Fine‑tuning** – I started by gathering 10k real support logs and used LoRA adapters to update only 0.5 % of parameters, preserving speed while tailoring style.  
2. **RLHF (Reinforcement Learning from Human Feedback)** – We built a small human review panel that scored candidate responses on safety, relevance, and politeness. Those scores fed into a reward model trained with PPO; the policy network was then updated for 3 epochs.  
3. **Alignment checks** – I integrated an open‑source toxicity classifier as a hard filter during inference and ran automated prompt‑attack tests to ensure robustness. All changes were versioned in Git and deployed via Canary rolls.

**Result**  
The safety score jumped from 68 % to 87 %, user satisfaction metrics improved by 12 % in beta, and latency stayed at 190 ms. I learned that combining lightweight fine‑tuning with RLHF yields practical alignment without sacrificing performance, and that continuous human feedback loops are essential for maintaining model ethics over time.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
