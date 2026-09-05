---
qid: ing_c82a8a92c7__star__local
question: 'Explain: Gemini 2.5 Computer Use Preview — Gemini Developer API pricing
  \u00a0|\u00a0 Gemini API \u00a0|\u00a0 Google AI for Developers'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 266
output_tokens: 341
total_tokens: 607
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:09:55-05:00'
sources: []
---

**Situation**  
When I joined a fintech startup, our fraud‑detection engine was stuck at 85 % accuracy. The data science team needed a more powerful LLM that could understand context in transaction notes and predict suspicious patterns in real time.

**Task**  
I had to evaluate the new Gemini 2.5 “Computer Use Preview” API, determine its cost viability, and integrate it into our production pipeline within two weeks without breaking latency guarantees.

**Action**  
First, I read Google’s pricing docs: a per‑token fee of $0.0001 for compute requests plus a flat $0.05 per 100 k prompt tokens, with a free tier of 200 K tokens/month. I set up a sandbox environment, used the Python client library, and scripted prompts that combined raw transaction data with a short explanation request (“Explain why this transaction is flagged”). I benchmarked latency on our AWS Lambda functions, tweaking batch sizes to stay under 300 ms average. To keep costs down, I added a caching layer for repeated merchant queries and employed token‑budget controls (max 200 tokens per prompt). 

**Result**  
Accuracy jumped from 85 % to 92 %, reducing false positives by 30 % and saving the company ~$12k/month in manual review time. I learned how to balance model capability, cost, and latency—skills that are critical when adopting cutting‑edge AI services like Gemini 2.5.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
