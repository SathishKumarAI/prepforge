---
qid: ing_8424ad698c__star__local
question: 'Explain: Model Cascading (Efficiency Tiers) — Cost Optimization Playbook'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 414
total_tokens: 654
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:57:33-05:00'
sources: []
---

**Situation**  
At my last company we were rolling out a recommendation engine for an e‑commerce platform that served 12 million daily requests. The initial inference pipeline used a single large transformer model (≈300 M parameters) which cost us $2,500 per day in GPU usage and had an average latency of 350 ms—too slow for our live promotion events.

**Task**  
I was tasked with reducing inference costs by at least 40 % while keeping the recommendation quality within a 1.5 % drop in click‑through rate (CTR).

**Action**  
I designed a *model cascading* architecture:  
1. **Tier 0 – Lightweight rule engine** (Python + Pandas) to filter out obvious non‑eligible items, cutting downstream load by ~30 %.  
2. **Tier 1 – Distilled BERT** (≈15 M parameters, ONNX runtime on CPU), serving 70 % of the remaining traffic with <80 ms latency.  
3. **Tier 2 – Full transformer** (300 M params) reserved for the top‑10 candidates per user, running only on GPU instances during peak hours.  
I added a dynamic load balancer that monitored real‑time CTR feedback and shifted traffic between tiers accordingly. We also integrated Prometheus metrics to track cost vs. performance in real time.

**Result**  
After deployment we cut inference spend from $2,500 to $1,300 per day (48 % savings) while the overall CTR dropped only 0.8 %. Latency improved from 350 ms to an average of 120 ms during high‑traffic periods. I learned that careful tiering and real‑time monitoring can turn a monolithic model into a cost‑effective, low‑latency service without sacrificing user experience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
