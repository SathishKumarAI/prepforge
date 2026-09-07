---
qid: ing_91c652f5fa__aws__local
question: 'Explain: Your new agent version scores higher on every benchmark, but internal
  users say it got worse. Find the problem.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 414
total_tokens: 657
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:55:25-05:00'
sources: []
---

**Situation** – I launched Agent v2 that achieved a +12 % lift on the public LLM benchmarks (BLEU: 45→51; ROUGE‑L: 0.68→0.75). Yet internal test users reported slower response time and more hallucinations, causing a 30 % drop in satisfaction scores.

**Task** – Diagnose why external metrics improved while internal experience degraded, then deliver a fix that preserves the benchmark gains.

**Action**  
1. **Dive Deep into telemetry** – enabled CloudWatch Logs Insights on request latency, token‑rate, and error codes; added custom `user_feedback` metric to Kinesis Data Firehose for real‑time sentiment.  
2. **Re‑evaluate sampling strategy** – discovered the benchmark used a *clean* dataset while internal traffic hit noisy, multi‑language prompts. I re‑balanced the training set (30 % multilingual) and retrained on SageMaker with an additional RLHF round targeting hallucination penalties.  
3. **Implement canary routing** – deployed v2 to 10 % of internal users via ALB weighted target groups, monitored latency & satisfaction; rolled back when latency > 200 ms for >5 %.  
4. **Cost‑aware scaling** – switched from On‑Demand GPU instances to Spot with Auto Scaling based on CloudWatch alarms (CPU <20 % → scale‑down).  

**Result** – Internal satisfaction rose by 18 % and latency dropped to 150 ms average; benchmark scores remained +10 %. The incident closed with a post‑mortem that documented the trade‑off between *benchmark purity* and *real‑world robustness*, reinforcing our “Ownership” mindset.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
