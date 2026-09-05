---
qid: ing_aca51fd50a__star__local
question: 'Explain: You own an LLM feature in production. What does on-call actually
  look like for it, and tell me about a page you took.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 255
output_tokens: 331
total_tokens: 586
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:17:37-05:00'
sources: []
---

**Situation**  
When I launched the “Smart Summarizer” LLM feature at my last company, we had just moved from staging to full production with a live user base of 45 k daily active users. The model was integrated into our content platform via a Flask API behind an NGINX reverse proxy.

**Task**  
I needed to ensure zero‑downtime operation while keeping latency under 200 ms and the error rate below 0.5%. On-call meant monitoring, rapid triage, and deploying hotfixes without redeploying the entire stack.

**Action**  
During an on‑call shift I watched Grafana dashboards that plotted request latency, GPU utilisation, and a custom “confidence score drift” metric. When latency spiked at 4 pm, I identified a sudden drop in GPU memory from 6 GB to 2 GB due to a new batch size setting. I rolled back the config change via Ansible, restored the previous value, and then updated the Docker image with a lightweight quantisation tweak (int8 instead of float16). I also added a circuit‑breaker that throttled requests when GPU utilisation exceeded 80%, preventing further overload.

**Result**  
The feature returned to <150 ms latency within 12 minutes, and we avoided any SLA breaches. The incident log showed an uptime of 99.98% for the week. I learned that proactive metrics (like confidence drift) combined with automated rollback scripts can keep LLM services resilient under load.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
