---
qid: ing_e8edc1f216__aws__local
question: 'Explain: Building an eval set — Evaluation And Observability'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 417
total_tokens: 647
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:04:41-05:00'
sources: []
---

**Situation / Task**  
While leading a Gen‑AI team at AWS, I was asked to create an *Evaluation & Observability* framework that would let us continuously validate LLM responses against user intent and detect drift before it hit production.

**Action**  
1. **Ownership & Customer Obsession** – I mapped the real customer journey: 10 % of queries trigger “high‑stakes” business logic (e.g., pricing, compliance). I built a *golden‑set* of 5 k labeled examples from that slice and added synthetic edge cases.  
2. **Dive Deep & Bias for Action** – Implemented a pipeline in **AWS Step Functions** orchestrating:  
   - **S3** bucket → **Glue** crawler → **Athena** to generate query‑intent statistics.  
   - **SageMaker Ground Truth** auto‑labeling with manual review.  
   - **CloudWatch Metrics** + **Amazon Lookout for Metrics** for drift alerts.  
3. **Invent & Simplify** – Wrapped the whole flow in a CDK construct so new teams could spin it up in 5 min.  
4. **Deliver Results** – After deployment, we reduced model‑drift incidents by **87 %** and cut manual review time from 12 h to 1 h weekly.

**Result**  
The observability layer now feeds real‑time alerts into the Ops console; any degradation triggers an automated retrain cycle. It cost <$2k/month, runs with >99.9 % availability, and scales linearly with query volume.  

**Bar‑raiser notes** – I demonstrated clear ownership, deep technical design, quantified impact (87 % drop), and learned from early false positives to tighten labeling thresholds.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
