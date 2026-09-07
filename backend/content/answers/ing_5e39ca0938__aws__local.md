---
qid: ing_5e39ca0938__aws__local
question: 'Explain: Tier 3: Run on a sample (expensive LLM, ~$5/1K)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 509
total_tokens: 750
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:58:44-05:00'
sources: []
---

**Situation & Task**  
In my last role I led the rollout of a new conversational AI for our e‑commerce platform. The product team wanted to test a *Tier 3* deployment: using a high‑cost LLM (≈$5 per 1 k tokens) on a realistic sample set before committing to full production.

**Action**  
I scoped the experiment with clear metrics—response latency ≤ 800 ms, error rate < 0.5 %, and user satisfaction > 4.2/5. To keep costs in check I:

| Component | AWS Service | Rationale |
|-----------|-------------|-----------|
| Model inference | **Amazon SageMaker Endpoint** (GPU‑optimized) | Low‑latency, auto‑scaling |
| Data storage | **S3 + Athena** | Serverless analytics on 10 GB of sample queries |
| Orchestration | **Step Functions** | Clear state machine for request → inference → post‑process |
| Cost monitoring | **AWS Budgets + CloudWatch Alarms** | Trigger alert if spend >$500 |

I configured a *spot‑instance* SageMaker endpoint with an 80 % capacity threshold, ensuring we could burst to 200 requests/sec while keeping the average cost at $4.6/1k tokens. We processed 50 000 sample queries in 12 hrs—total spend: **$230**, down from a projected $400.

**Result**  
The pilot met all SLAs; latency averaged 720 ms, error < 0.3 %. User satisfaction rose to 4.35/5. We validated the model’s business value and secured a $1M budget for full rollout—an **88 % ROI** on the experiment spend.

---

### Leadership Principles Highlighted  
- **Customer Obsession** – focused metrics on user experience.  
- **Ownership** – drove end‑to‑end cost control and rapid iteration.  

The bar‑raiser would note my *ownership* of the entire pipeline, my *dive deep* into cost/latency trade‑offs, the *quantified impact* (88 % ROI), and how I learned from a prior over‑provisioning failure to adopt spot instances.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
