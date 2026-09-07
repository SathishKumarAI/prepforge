---
qid: ing_814421e901__aws__local
question: 'Explain: The interview loop — Sarvam Ai'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 394
total_tokens: 622
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:17:14-05:00'
sources: []
---

**Situation & Task**  
I led the launch of *Sarvam AI*, an internal recommendation engine that powers our e‑commerce catalog. The goal was to reduce manual tagging effort by 70 % while keeping click‑through rate (CTR) above 12 %.  

**Action – Interview Loop Design**  
1. **Define Success Metrics** – CTR, model accuracy, latency < 200 ms, cost <$0.05/req.  
2. **Build a Prototype in SageMaker** – use PyTorch for sequence‑to‑sequence learning, train on 10M product pairs.  
3. **Deploy with Lambda + API Gateway** – autoscale to 5k RPS, enable caching via CloudFront.  
4. **Run A/B Tests (30 % traffic)** – compare Sarvam vs. legacy rule‑based system.  
5. **Collect Feedback & Iterate** – gather dev/ops logs, user CTR data, retrain weekly with new product feeds.  

**Result**  
- CTR rose from 10.3 % to 13.7 % (Δ+2.4 pp).  
- Manual tagging hours dropped 70 %, saving ~$250k annually.  
- Latency averaged 140 ms; cost per request $0.03, below target.

**Leadership Principles**  
*Customer Obsession* – focused on end‑user CTR.  
*Ownership* – drove the full loop from data ingestion to production monitoring.  

**Bar‑raiser cues** – demonstrated ownership, deep dive into metrics, quantified impact, and a post‑mortem that revealed latency spikes due to cold starts; we added provisioned concurrency to mitigate it.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
