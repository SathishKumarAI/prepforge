---
qid: ing_9669734e42__aws__local
question: 'Explain: How do you evaluate an LLM feature online? Design the A/B test
  and name the implicit feedback signals you''d use.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 421
total_tokens: 666
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:05:51-05:00'
sources: []
---

**Situation & Task**  
At my last role I led a new LLM‑powered search feature for an e‑commerce platform. The goal was to increase conversion while keeping latency <200 ms and cost under $0.05/lookup.

**Action – Design**  
1. **A/B Test Setup** – 10 % of traffic routed to the *LLM* bucket; 90 % stayed on legacy ranking (control).  
2. **Metrics** – Primary: **Conversion Rate (CR)** and **Average Order Value (AOV)**. Secondary: **Time‑to‑First‑Result** and **API Cost per Request**.  
3. **Implicit Feedback Signals** –  
   * Click‑through rate on LLM‑ranked results (CTR)  
   * Dwell time >30 s (engagement)  
   * Add‑to‑Cart (ATC) after clicking a result  
   * Session abandonment before checkout  
4. **Infrastructure** – Lambda + API Gateway for the inference endpoint, SageMaker RealTimeInference for the LLM, CloudWatch Alarms on latency and cost, DynamoDB to store per‑user signal aggregates.

5. **Statistical Decision** – Sequential hypothesis testing (α=0.01) with interim looks every 48 h; stop if ΔCR ≥2% and ΔAOV ≥3%.

**Result**  
After two weeks the LLM bucket achieved a **+3.8% CR** and **+4.5% AOV**, while latency stayed at 180 ms and cost rose only 12 %. The experiment validated the feature before full rollout.

**Reflection (Bar‑raiser lens)**  
I owned the end‑to‑end pipeline, dove deep into signal relevance, quantified impact with real business metrics, and learned that early stopping safeguards against overfitting to noisy implicit signals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
