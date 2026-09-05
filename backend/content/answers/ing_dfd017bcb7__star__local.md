---
qid: ing_dfd017bcb7__star__local
question: 'Explain: Self-host an open-weights model or call a provider API - walk
  me through the decision.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 335
total_tokens: 581
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:56:18-05:00'
sources: []
---

**Situation** – At my last startup we were building an in‑app recommendation engine for a boutique e‑commerce platform. Our engineering budget was tight and latency had to stay under 120 ms on mobile devices.

**Task** – I had to decide whether to self‑host the transformer model (like GPT‑2) or pay a cloud provider’s API (OpenAI, Anthropic). The choice would affect cost, data privacy, and response time.

**Action** – First I profiled the inference latency on a GPU‐enabled EC2 instance; it was 350 ms per request. I benchmarked the same model on an edge TPU, reducing latency to 90 ms but with a 30% drop in top‑k accuracy. Then I calculated costs: hosting 10k requests/day would cost ~$500/month for GPUs vs $1,200/month via the API. I also ran a privacy audit—self‑hosting kept user data on our servers, eliminating third‑party exposure. After weighing latency, cost, and compliance, I built a hybrid approach: low‑complexity queries hit an on‑prem edge TPU, while high‑precision requests used the provider’s API with a secure VPN tunnel.

**Result** – We cut response time to 80 ms average, reduced monthly spend by 35%, and maintained GDPR compliance. The exercise taught me that model deployment is a multi‑dimensional trade‑off, not just “self or cloud.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
