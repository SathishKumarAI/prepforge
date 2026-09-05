---
qid: ing_b7b0243294__star__local
question: 'Explain: Safety and Alignment — Inside Kaiju - building conversational
  models at scale'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 339
total_tokens: 579
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:38:37-05:00'
sources: []
---

**Situation** – While leading the Kaiju project, we were scaling a multilingual chatbot to serve 1 M daily users across 15 countries. The model’s response quality was high, but early tests revealed subtle bias spikes in sensitive contexts and occasional unsafe content leaks.

**Task** – I had to design an end‑to‑end safety & alignment pipeline that kept the user experience smooth, complied with GDPR/CCPA, and prevented policy violations at production speed (≤200 ms per request).

**Action** – First, we built a multi‑layer filter: a lightweight rule‑based pre‑processor for obvious profanity, followed by an open‑source toxicity classifier fine‑tuned on our internal logs. For alignment, I introduced reinforcement learning from human feedback (RLHF) with a “conversational safety” reward model that penalized misaligned answers. We deployed the model behind a canary system, monitoring real‑time signal metrics (toxicity score distribution, user‑flag rates). When anomalies appeared, an automated rollback and retraining loop kicked in. We also established a cross‑functional “Safety Ops” team to review edge cases weekly.

**Result** – The latency stayed below 200 ms; toxicity scores dropped from 12% flagged responses to <0.8%, while user satisfaction (NPS) rose from 42 to 58 within three months. I learned that continuous, data‑driven alignment coupled with rapid rollback is essential when scaling conversational AI responsibly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
