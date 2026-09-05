---
qid: ing_27cea7c9e2__star__local
question: 'Explain: Evol-Instruct Pattern — Synthetic Data Generation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 374
total_tokens: 609
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:48:02-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup we were building an AI‑driven fraud detection model. Our training set was only 12 k labeled transactions, and the rare “fraudulent” class represented just 0.5%. The model’s recall on real‑world data was stuck around 65%, hurting compliance.

**Task** – I had to create a richer, balanced dataset without spending months labeling new samples or breaching privacy rules. The goal was to boost fraud recall above 85% while keeping the false‑positive rate under 3%.

**Action** – I implemented an Evol‑Instruct pattern: first, we wrote a concise instruction set that described “fraudulent” transaction characteristics (e.g., sudden large overseas transfer, mismatched device fingerprint). Then, using a language model fine‑tuned on our existing logs, we generated synthetic transactions conditioned on those instructions. We iterated the prompt with reinforcement learning—scoring each sample against fraud rules and feeding the top 20% back to the model for further refinement. Finally, we blended 40 k synthetic samples with the real data, applied stratified sampling, and retrained our XGBoost ensemble.

**Result** – The updated model achieved 88% recall at a 2.8% false‑positive rate on a held‑out test set, a 23 percentage point lift. Deployment reduced investigation tickets by 35%, saving the company ~$1 M annually. I learned that carefully crafted instruction prompts and iterative self‑feedback can turn limited data into a powerful training asset while respecting privacy constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
