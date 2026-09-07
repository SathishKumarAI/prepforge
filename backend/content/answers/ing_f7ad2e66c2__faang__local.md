---
qid: ing_f7ad2e66c2__faang__local
question: How would you build the evaluation system for a Meta AI assistant before
  and after each model release?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 481
total_tokens: 722
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:15:52-05:00'
sources: []
---

**Clarify**  
We’re building an end‑to‑end evaluation pipeline that runs *before* a new GPT‑style assistant is rolled out and *after* it’s live. Key assumptions: (1) the model produces text responses to user prompts; (2) we have logged real user interactions; (3) there are both quantitative metrics (latency, throughput) and qualitative ones (user satisfaction, hallucination rate).  

**Approach**  
1. **Baseline suite** – unit tests on synthetic prompts + a live‑traffic “shadow” copy.  
2. **Metric catalog** – safety, factuality, diversity, latency, cost, engagement.  
3. **Data pipelines** – ingest logs → feature extraction → scoring dashboards.  
4. **Human‑in‑the‑loop** – crowdsource reviews on flagged samples; A/B tests with a control model.  

**Depth**  
- *Pre‑release*: Run the baseline suite on every checkpoint, compute regression metrics (e.g., BLEU for language, MRR for retrieval). Use automated alerts if any metric degrades >1σ.  
- *Post‑release*: Deploy shadow traffic to collect live responses; run real‑time scoring with a lightweight model (e.g., BERT‑score) and flag hallucinations via a knowledge‑base verifier. Store top‑k flagged samples for human review. Compute user‑centric KPIs: NPS, churn, time‑to‑resolution.  
Complexity: O(N log N) per batch for ranking; cost‑effective because shadow traffic is ~10% of live load.  

**Edge Cases**  
- Model drift on rare entities → test with synthetic edge cases.  
- Sudden latency spikes → circuit breaker thresholds.  
- Bias amplification → demographic stratified metrics.  

**Optimize & Communicate**  
Iterate the metric set based on feedback loops; use feature flags to roll out new evaluation components gradually. Present findings in concise dashboards and a one‑pager “Model Health” report for product leaders, highlighting any risk buckets and recommended mitigations. This structured pipeline ensures transparency, rapid detection of regressions, and data‑driven confidence before and after each model release.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
