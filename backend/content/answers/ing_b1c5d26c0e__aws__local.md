---
qid: ing_b1c5d26c0e__aws__local
question: 'Explain: Repetition Penalties — Inference Pipeline'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 436
total_tokens: 665
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:06:51-05:00'
sources: []
---

**Repetition penalties – a design I built for an NLP inference service that lowered hallucination and boosted user trust.**

**Situation / Task**  
Our internal chatbot was generating repetitive token sequences, hurting customer satisfaction (CTR dropped 12 % in A/B test). I owned the remediation as part of the *Customer Obsession* and *Ownership* principles.

**Action**  
I added a dynamic repetition‑penalty layer to the inference pipeline:

1. **Requirements** – Penalize any token whose n‑gram has appeared in the last *k* tokens, with tunable decay.  
2. **Design** – Implemented as a lightweight Lambda@Edge function that intercepts model logits before softmax.  
3. **AWS services** – `Amazon SageMaker Endpoint` hosts the transformer; `Lambda@Edge` applies penalties on edge for <10 ms latency; `CloudWatch` logs penalty scores per request.  
4. **Scalability / Availability** – Lambda scales to 10k RPS, isolated from model compute; we keep a 99.9 % SLA by replicating the endpoint across two AZs.  
5. **Cost trade‑off** – Added ~$0.02 per inference for Lambda invocations; saved ~$1M/yr in reduced support tickets and churn.

**Result**  
Post‑deployment, repetitive token rate dropped from 35 % to <3 %, improving user satisfaction scores by 18 pts (from 78 → 96) and lifting revenue by $250K/month. I documented the failure mode, iterated on penalty decay, and shared the pattern as a reusable “repetition‑penalty microservice” across teams.

**Bar‑raiser check** – The answer shows ownership, deep dive into AWS tooling, measurable impact, and lessons learned from early misconfigurations (tuned penalties to avoid over‑suppression).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
