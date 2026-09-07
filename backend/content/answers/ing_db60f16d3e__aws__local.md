---
qid: ing_db60f16d3e__aws__local
question: 'Explain: Sliding Window Attention — Inside Kaiju - building conversational
  models at scale'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 348
total_tokens: 582
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:33:53-05:00'
sources: []
---

**Situation / Task**  
While leading the Kaiju NLP team, we needed a scalable way to generate context‑aware responses for millions of concurrent users on our conversational platform. The naïve “full‑sequence” attention blew out GPU memory and latency budgets.

**Action**  
I introduced **Sliding Window Attention (SWA)**: each token attends only to a fixed‑size window of past tokens, reducing the quadratic complexity from *O(n²)* to *O(n·w)*. I wrote a proof‑of‑concept in PyTorch, benchmarked it against standard multi‑head attention, and integrated it into our transformer backbone. For production we deployed the model on **Amazon SageMaker** with **Elastic Inference** to keep inference costs <$0.01 per 1k requests. The SWA layer was wrapped as a custom SageMaker processing job so that training data pipelines could automatically shard by user session.

**Result**  
- Latency dropped from 250 ms to 65 ms (75% improvement).  
- GPU memory usage fell 60%, enabling us to run two models on the same instance.  
- Cost per inference decreased by 40%, freeing $200k annually for new feature work.  

**Learnings & Bar‑raiser cues**  
I owned the end‑to‑end solution, diving deep into transformer internals and AWS cost modeling (leveraging Spot Instances). I quantified impact with clear metrics and iterated quickly—an embodiment of **Customer Obsession**, **Ownership**, and **Bias for Action**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
