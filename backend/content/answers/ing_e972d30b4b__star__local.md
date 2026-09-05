---
qid: ing_e972d30b4b__star__local
question: 'Explain: Fine-tuning, RLHF & Alignment - Interview Questions'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 289
total_tokens: 527
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:14:59-05:00'
sources: []
---

**Situation:** In my last role at a fintech startup, we launched an automated customer‑support chatbot that was great at answering FAQs but often gave vague or slightly inaccurate responses when users asked about policy changes.

**Task:** I needed to refine the model so it could provide precise, policy‑compliant answers while still sounding natural and keeping user engagement high.

**Action:** First, I performed **fine‑tuning** on a base transformer using our internal support logs (≈50 k labeled Q&A pairs). I added a custom loss that penalized factual errors. Next, to steer the model toward safe behavior, I implemented an **RLHF loop**: we collected human feedback on 2,000 generated responses, trained a reward model to score helpfulness and compliance, then used Proximal Policy Optimization to adjust the policy network. Finally, for long‑term safety, I introduced an **alignment layer** that flagged any responses deviating from our legal guidelines before deployment.

**Result:** Post‑deployment, the bot’s accuracy on policy questions jumped from 73 % to 92 %, and user satisfaction scores rose by 18 %. I learned that combining data‑driven fine‑tuning with human‑in‑the‑loop reinforcement yields robust, trustworthy AI behavior.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
