---
qid: vq_eb6e35bcc0__aws__local
question: What is Machine Learning Bias?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 225
output_tokens: 389
total_tokens: 614
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:20:57-05:00'
sources: []
---

**Answer (Amazon‑style)**  

*Leadership Principles:* **Customer Obsession** – we care about fair outcomes for all users; **Dive Deep** – investigate root causes and data patterns.

**Situation & Task**  
While launching a recommendation engine for our global marketplace, I noticed that certain seller categories were under‑represented in the top‑10 results. My goal was to quantify and eliminate this bias before launch.

**Action**  
1. **Data audit**: Ran stratified sampling across 12 regions; found a 3× higher precision for “electronics” vs. “handmade goods.”  
2. **Feature analysis**: Tracked the feature importance matrix in XGBoost—identified that seller‑rating and inventory size dominated, masking niche categories.  
3. **Model redesign**: Added an *under‑represented‑category* penalty term (α = 0.4) to the loss function and retrained on 50M interactions.  
4. **Deployment**: Deployed via SageMaker Pipelines; used CloudWatch metrics for real‑time bias score (≤ 0.05).  

**Result**  
Post‑deployment, category coverage rose from 28% to 92%, click‑through rate increased by 18%, and revenue from niche sellers grew 12% YoY—meeting our 15% uplift target. The model now runs on a **single SageMaker endpoint** (0.5 GB memory) with < 200 ms latency, costing $30/month versus the previous $75.

**Reflection**  
I learned that *bias isn’t just ethical—it’s measurable and fixable.* Next time I’ll add bias‑monitoring dashboards in production to catch drift early.  

---

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
