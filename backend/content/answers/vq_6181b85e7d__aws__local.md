---
qid: vq_6181b85e7d__aws__local
question: What are the limitations of Generative AI?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 412
total_tokens: 640
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:54:06-05:00'
sources: []
---

**Answer (Amazon‑style)**  

During my last role building a generative‑AI product for enterprise content creation, I led a sprint to quantify its limitations and translate them into engineering constraints.

**Situation / Task** – We launched a prototype that generated marketing copy in real time. Post‑launch analytics showed 32 % of users flagged outputs as “inaccurate or irrelevant.” The business goal was <5 % error rate before scaling to production.

**Action** – I owned the issue, diving deep into the model’s training data and inference pipeline.  
1. **Bias & Hallucination**: Re‑trained the model on a curated 10 M‑sentence dataset (Amazon SageMaker, GPU instances).  
2. **Latency**: Added a caching layer with Amazon ElastiCache (Redis) to serve frequent prompts within 200 ms.  
3. **Cost/Scale**: Implemented spot‑instance autoscaling and used Lambda@Edge for edge inference, reducing per‑request cost by 18 % while keeping 99.9 % availability.

**Result** – After three iterations, the error rate dropped to 4.2 %, latency to 150 ms, and we cut inference spend from $0.12 to $0.098 per request. User satisfaction scores rose from 3.1/5 to 4.6/5 in a quarterly survey.

**Leadership Principles Highlighted**  
- **Customer Obsession**: Prioritized user‑reported inaccuracies.  
- **Ownership**: Took full responsibility for end‑to‑end performance.  

**Bar‑raiser takeaways** – Demonstrated ownership, quantified impact (error rate, cost), showed depth by dissecting data and architecture, and learned from failure (iterative retraining).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
