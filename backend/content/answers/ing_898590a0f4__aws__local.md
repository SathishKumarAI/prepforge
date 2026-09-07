---
qid: ing_898590a0f4__aws__local
question: 'Explain: Tell me about a time you pushed back on shipping something you
  believed was unreliable.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 359
total_tokens: 596
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:37:11-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led the launch of an NLP inference micro‑service that would power our recommendation engine. The original sprint deadline was **5 days** after a 2‑week design review, and the team had committed to ship it on time.

**Action**  
I raised a “pushing back” flag during the sprint planning meeting, citing two key risks:

1. **Model drift** – our training data distribution had shifted by ~12% since the last model run.  
2. **Cold‑start latency** – profiling showed a 350 ms inference time on spot instances that would spike to >700 ms under peak load.

I proposed a lightweight “validation layer” using **Amazon SageMaker Model Monitor** and an auto‑scaling Lambda wrapper, adding ~1 day of work but guaranteeing <200 ms latency with a 99.9% SLA. I also requested a quick A/B test on a subset of traffic to validate drift mitigation.

**Result**  
The push back delayed the release by **2 days**, but post‑deployment we observed:

- **Latency dropped from 700 ms to 180 ms** (30% improvement).  
- **User engagement increased by 18%** within the first week, translating to $450K additional ARR.  

**Reflection**  
I learned that owning the product’s quality sometimes means deferring shipping. The bar‑raiser was looking for ownership, depth of analysis, and a clear, data‑driven impact—all of which I demonstrated through the metrics above.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
