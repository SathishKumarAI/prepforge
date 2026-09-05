---
qid: ing_9617d385a5__star__local
question: 'Explain: TL;DR — Sierra'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 330
total_tokens: 562
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:33:02-05:00'
sources: []
---

**Situation** – At my last job I led the internal “Sierra” knowledge‑base bot that pulled up-to-date compliance docs for our legal team. By the end of Q2, usage had dropped 35 % because lawyers complained it returned too much jargon and never hit the key point in a single sentence.

**Task** – My goal was to reduce cognitive load by generating concise TL;DR summaries for each doc while keeping accuracy above 92 %. I had to do this without breaking existing search pipelines or adding latency beyond 200 ms per request.

**Action** – I built a lightweight transformer wrapper (distilBERT) fine‑tuned on our own Q&A pairs. The model first classified the document into topic clusters, then extracted the top three “signal” sentences using ROUGE scores against a gold TL;DR set. Finally, I added a post‑processing rule that truncated any answer over 120 characters and inserted a “Sierra: TL;DR” header for clarity. Deployment was via our Kubernetes autoscaler with a canary rollout.

**Result** – After three weeks the bot’s click‑through rate rose from 62 % to 87 %, and user satisfaction scores improved by 18 points on the internal survey. I learned that balancing model size, latency, and domain‑specific fine‑tuning is key when delivering AI at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
