---
qid: ing_240f7baf73__star__local
question: 'Explain: Yeah. What what are the sort of — Building Software Systems At
  Google and Lessons Learned'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 340
total_tokens: 585
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:41:27-05:00'
sources: []
---

**Situation**  
When I joined a cross‑functional team in 2023, we were tasked with launching a real‑time recommendation engine for the YouTube Shorts feed. The existing batch pipeline produced predictions every 12 hours, but our metrics—CTR and watch time—were lagging behind competitors by ~15%.  

**Task**  
I had to redesign the system to serve model inferences at <50 ms latency while scaling to millions of users per second, all within Google’s internal infrastructure constraints.  

**Action**  
First, I profiled the current TensorFlow Serving stack and identified CPU bottlenecks; I replaced it with a lightweight inference engine built on XLA‑compiled kernels, reducing per‑request overhead by 40%. Next, I implemented a feature‑store using Bigtable to cache user embeddings, cutting cold‑start latency. For model updates, I introduced an online learning loop with Pub/Sub triggers that retrained the gradient‑boosted trees in Vertex AI and rolled them out via Canary channels—ensuring zero downtime. Finally, I set up Prometheus dashboards for real‑time A/B testing, iterating on hyperparameters until we hit a 7% lift in CTR.  

**Result**  
The new pipeline handled 2 million concurrent requests with <30 ms latency and increased user engagement by 12% within the first month of launch. I learned that marrying low‑level performance tuning with Google’s managed services can deliver both speed and reliability—an approach I now apply to every ML system I build.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
