---
qid: ing_eafcf93b02__star__local
question: 'Explain: Compatible with Sourcegraph products — Cody - Sourcegraph docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 345
total_tokens: 584
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:18:03-05:00'
sources: []
---

**Situation:**  
At my previous role I was tasked with adding an intelligent code‑completion feature to our internal developer portal, which already leveraged Sourcegraph’s Cody engine for search and navigation. The portal served over 3,000 developers across multiple teams, and any lag in response time would break adoption.

**Task:**  
I needed to train a lightweight language model that could generate context‑aware suggestions while staying fully compatible with the existing Sourcegraph SDKs and respecting their data‑privacy policies. The goal was to reduce average latency below 200 ms per request and achieve at least a 30% improvement in suggestion relevance over the baseline.

**Action:**  
I started by profiling the current Cody API calls, then built a custom fine‑tuning pipeline on top of OpenAI’s GPT‑3.5 using the Sourcegraph `sourcegraph.com` SDK to ingest repository metadata and documentation files as training data. To keep inference fast, I distilled the model with knowledge distillation techniques and deployed it behind a Kubernetes Ingress that cached responses for 10 seconds. I also implemented a fallback mechanism: if latency exceeded 200 ms, the system would revert to Cody’s native search results.

**Result:**  
The new hybrid suggestion engine cut response time from 350 ms to 180 ms and improved developer satisfaction scores by 42% (measured via post‑deployment surveys). I learned how to balance model accuracy with strict latency constraints while staying within Sourcegraph’s ecosystem.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
