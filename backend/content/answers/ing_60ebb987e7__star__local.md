---
qid: ing_60ebb987e7__star__local
question: 'Explain: Judge-prompt drift detection — Eval Gated Cicd'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 357
total_tokens: 595
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:41:58-05:00'
sources: []
---

**Situation:**  
At my last company we launched a chatbot that answered customer support tickets in real time. After two months of deployment the model’s accuracy on new queries slipped from 92 % to 78 %, and users complained about irrelevant responses.

**Task:**  
I had to detect when the prompt–model interaction was drifting (the “judge‑prompt drift”) and automatically trigger a re‑evaluation pipeline before the next sprint release, keeping uptime high without manual QA.

**Action:**  
1. Built a lightweight “eval gate” in our CI/CD using FastAPI that intercepted every live request, logged the raw prompt and the model’s token distribution.  
2. Implemented a drift metric: KL‑divergence between the current prompt distribution and a baseline cluster derived from the last production snapshot. If divergence exceeded 0.15, the gate flagged the sample.  
3. Configured GitHub Actions to run a nightly “retrain‑eval” job that fetched flagged prompts, ran them through our evaluation suite (BLEU, ROUGE, human‑annotated relevance), and produced a confidence score.  
4. If the score fell below 0.8, the pipeline automatically rolled back the deployment; otherwise it promoted the new weights.

**Result:**  
We caught drift before any customer impact, reducing support ticket volume by 35 % in the first month after implementation. The automated gate cut manual QA time by 70 %, and I learned how to blend statistical monitoring with a feedback‑driven CI/CD loop for AI systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
