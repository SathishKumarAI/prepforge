---
qid: ing_f7cb1e9da4__aws__local
question: 'Q: An agent works fine for short tasks but degrades on long-running ones.
  How do you fix it?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 378
total_tokens: 620
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:38:59-05:00'
sources: []
---

**Situation & Task (S)**  
I led a team that built an AI‑powered recommendation agent for our e‑commerce platform. The agent ran smoothly for short “browse” sessions, but during long shopping trips (> 30 min) latency spiked and accuracy dropped by 18 % (compared to the baseline of 95 % precision).  

**Action (A)**  
1. **Dive Deep** – Instrumented the pipeline with CloudWatch metrics and X-Ray traces; discovered a memory leak in the inference container and that model warm‑up was only 10 s, causing cold starts on every new user session.  
2. **Ownership & Bias for Action** – Replaced the monolithic Docker image with an Amazon SageMaker endpoint using *Multi‑Model* hosting and set up *Auto Scaling* based on CPU utilisation (target 70 %).  
3. **Invent & Simplify** – Implemented a stateful cache in ElastiCache Redis to store user embeddings, reducing inference calls by 45 %. Added a scheduled Lambda to pre‑warm the model every 5 min during peak hours.  

**Result (R)**  
- Latency dropped from 1.8 s to 0.4 s on long sessions.  
- Accuracy improved back to 96.3 %, a 1.3 pp lift.  
- Cost decreased by 22 % due to efficient scaling and reduced compute time.  

**Learnings** – Continuous observability is essential; early detection of resource bottlenecks prevents cascading failures. I now routinely audit long‑running workflows for hidden stateful dependencies before release.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
