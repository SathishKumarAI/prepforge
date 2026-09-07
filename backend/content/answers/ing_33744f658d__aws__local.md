---
qid: ing_33744f658d__aws__local
question: 'Q: How would you evaluate a RAG system? — Llm Evaluation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 520
total_tokens: 754
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:21:49-05:00'
sources: []
---

**Situation / Task**  
At my last role I led the launch of a Retrieval‑Augmented Generation (RAG) chatbot for a global customer‑support platform. The business asked me to *evaluate* the system’s quality before rolling it out to 10M users, so that we could prove ROI and avoid costly rework.

**Action**  
1. **Define metrics**:  
   - *Relevance*: precision@k (target > 0.85).  
   - *Safety*: hallucination rate (< 2 %).  
   - *Latency*: 90th‑percentile < 800 ms.  
   - *Cost*: per‑request GPU cost ≤ $0.003.  

2. **Create a synthetic test harness**:  
   • Use **Amazon SageMaker Ground Truth** to annotate 5,000 query–document pairs for relevance.  
   • Generate adversarial prompts via **OpenAI API** and inject them into the pipeline.  
   • Deploy the RAG model on **SageMaker Endpoint** with an autoscaling policy tied to CPU/GPU usage.

3. **Run end‑to‑end benchmarks**: 50 k concurrent requests, capturing latency & cost with **CloudWatch metrics**; evaluate hallucinations with a custom validator that flags unverified facts against the knowledge base.

4. **Iterate**: retrain retrieval indices (using **Amazon Kendra** for semantic search) until precision@3 hit 0.87 and hallucination dropped to 1.5 %.  

**Result**  
- Achieved **precision@3 = 0.87**, latency = 650 ms, cost = $0.0028/req.  
- Delivered a validated model that reduced customer‑support tickets by **18 %** in the pilot and cut average resolution time by **23 %**.

**Leadership Principles Highlighted**  
- **Customer Obsession**: metrics directly tied to user experience.  
- **Ownership / Dive Deep**: end‑to‑end pipeline, data‑driven tuning, learning from hallucination failures.  

Bar‑raisers look for quantified impact (18 % ticket drop), deep technical reasoning (choice of SageMaker vs Kendra), and evidence that I owned the problem through to measurable success.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
