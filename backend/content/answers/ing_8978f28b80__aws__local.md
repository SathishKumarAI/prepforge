---
qid: ing_8978f28b80__aws__local
question: How do you evaluate a model before and after fine-tuning?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 494
total_tokens: 726
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:37:04-05:00'
sources: []
---

**Situation & Task**  
When I led the NLP team at my previous company, we had to decide whether a new BERT‑based sentiment model should be fine‑tuned for each product line or used as a shared base. The goal was to maximize accuracy while keeping inference cost < 5 % of our existing platform.

**Action – Evaluation Before Fine‑Tuning**  
1. **Baseline metrics**: Run the pre‑trained model on a held‑out validation set (10k reviews) and record *macro‑F1*, *AUC* and latency per request (average 28 ms).  
2. **Feature importance & calibration**: Use SHAP to identify tokens that drive predictions; check temperature scaling for probability calibration.  
3. **Infrastructure cost**: Deploy the model on SageMaker Endpoint (ml.m5.large) and measure CPU usage, cost $0.06/hr per instance → ~$43/month.

**Action – Evaluation After Fine‑Tuning**  
1. Fine‑tune with 200k product‑specific reviews; re‑run the same validation pipeline.  
2. **Result**: Macro‑F1 rose from 0.78 to 0.86 (+10 pp), AUC from 0.88 to 0.94, latency increased only 3 ms (≈12 % increase).  
3. **Cost impact**: Same instance type; however, inference throughput doubled, so we could reduce the number of instances by 30 %, cutting monthly cost to $30.

**Result & Learnings**  
- The fine‑tuned model delivered a *10‑percentage‑point* lift in business‑critical KPI (customer sentiment accuracy), while keeping latency <30 ms and reducing cost.  
- **Ownership**: I set up automated CI/CD with CodePipeline, ensuring every tweak was tested against the same metrics.  
- **Dive Deep**: Investigated why certain tokens shifted after fine‑tuning; discovered a domain shift that informed future data collection.  

**Bar‑raiser takeaway** – Demonstrating ownership through end‑to‑end pipelines, diving deep into feature shifts, and quantifying impact with real metrics are the signals I focus on in interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
