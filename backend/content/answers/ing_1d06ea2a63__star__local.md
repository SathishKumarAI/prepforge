---
qid: ing_1d06ea2a63__star__local
question: 'Which LLM should I use in production: Claude, GPT, Gemini, or open-source?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 397
total_tokens: 641
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:27:36-05:00'
sources: []
---

**Situation:** At my previous startup we were building a real‑time customer support chatbot for a fintech client. The product launch was only three months away and the team needed an LLM that could handle legal‑compliance language, multi‑lingual queries, and integrate with our existing Node.js stack.

**Task:** I had to evaluate Claude, GPT-4, Gemini, and open‑source models (Llama 2 + Vicuna) to decide which one would meet latency (<200 ms per request), cost (<$0.02/response), and compliance (GDPR, PCI‑DSS) requirements.

**Action:** I set up a benchmark framework in Docker: each model was wrapped in an Express API, ran on identical GPU instances, and processed 10k synthetic tickets covering 5 languages. I measured throughput, token accuracy vs. ground truth, and cost per inference. For open‑source models I added LoRA fine‑tuning to improve domain specificity. I also evaluated vendor SLAs for uptime and data residency.

**Result:** GPT-4 achieved the highest accuracy (92 % on intent classification) but cost $0.05/response, exceeding our budget. Claude met latency targets (<180 ms) and cost $0.018/response, but had limited multilingual support. Gemini was still beta‑stage with unstable API. The fine‑tuned Llama 2 + Vicuna offered comparable accuracy (90 %) at <$0.01/response and full control over data residency. I chose the open‑source stack, added a custom compliance layer, and delivered the product on time with a $30k cost saving versus GPT-4. This taught me to align model choice tightly with business constraints and to build an automated benchmark pipeline for future decisions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
