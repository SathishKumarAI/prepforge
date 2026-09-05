---
qid: ing_b7b3081167__star__local
question: 'Explain: The Quality Hierarchy — Fine Tuning Strategies'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 325
total_tokens: 561
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:38:45-05:00'
sources: []
---

**Situation** – At my previous startup we launched a chatbot that was great at answering FAQs but struggled with niche industry jargon. Our NPS dropped to 45 because users complained the bot gave generic answers.

**Task** – I needed to elevate the model’s domain‑specific performance without inflating training costs or latency, aiming for an NPS bump of at least 10 points within three sprints.

**Action** – First, I mapped a *Quality Hierarchy*: (1) base fine‑tuning on a large multilingual corpus, (2) domain‑focused data augmentation via in‑house expert annotations, and (3) continuous reinforcement learning from real user interactions.  
I started with the base model, then curated 5k labeled industry dialogues for stage‑two fine‑tuning using LoRA to keep parameter count low. For stage‑three, I set up a lightweight online RL loop that updated policy weights every 12 hours based on user satisfaction scores. Throughout, I monitored perplexity and response latency, keeping the latter under 200 ms.

**Result** – Within two sprints NPS rose from 45 to 58, while average latency stayed at 190 ms. The hierarchy allowed us to invest in high‑impact data first, then iterate cheaply with real traffic, teaching me that a staged fine‑tuning pipeline balances quality and operational cost effectively.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
