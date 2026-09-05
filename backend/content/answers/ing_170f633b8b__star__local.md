---
qid: ing_170f633b8b__star__local
question: 'Explain: What they emphasise — Cognition Devin'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 328
total_tokens: 563
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:14:57-05:00'
sources: []
---

**Situation** – In late 2023 I was leading a cross‑functional team at a fintech startup to build an AI‑driven fraud detection engine for credit card transactions. Our existing rule‑based system missed about 12 % of high‑value fraudulent charges, and the compliance department demanded a more adaptive solution before the next regulatory audit.

**Task** – I had to design a cognitive model that could learn from new patterns in real time, reduce false positives by at least 30 %, and still explain its decisions for auditors.

**Action** – First, we mapped out user intent and contextual signals (time of day, merchant category, device fingerprint) to build a knowledge graph. Then I implemented a transformer‑based encoder that treats each transaction as a short “conversation” between the cardholder’s behavior history and the current activity. We fine‑tuned it on 5 M labeled transactions using Hugging Face’s 🤗 Transformers and deployed it in a microservice architecture with Kubernetes for autoscaling. To keep the model explainable, we integrated SHAP values into the API so every alert came with feature importance scores.

**Result** – Within two months of rollout, fraud detection accuracy improved from 88 % to 95 %, and false positives dropped by 38 %. The audit passed without additional controls, and I learned that combining a knowledge graph with transformer‑based cognition yields both performance and interpretability—key for regulated AI deployments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
