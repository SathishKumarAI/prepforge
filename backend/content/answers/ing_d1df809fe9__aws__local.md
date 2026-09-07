---
qid: ing_d1df809fe9__aws__local
question: 'Explain: Join the community — GitHub - microsoft/semantic-kernel: Integrate
  cutting-edge LLM technology quickly and easily into your apps \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 360
total_tokens: 614
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:15:20-05:00'
sources: []
---

**Situation / Task**  
At my previous role I was tasked with adding generative‑AI to our customer‑facing recommendation engine while staying under a $50k budget and a two‑month deadline.

**Action**  
I discovered the Microsoft Semantic Kernel on GitHub, a lightweight framework that wraps LLMs with pluggable prompt templates and bindings.  
1. **Dive Deep** – I cloned the repo, ran the “Hello World” sample locally, and benchmarked response latency against our existing rule‑based system (200 ms vs 5 s).  
2. **Ownership & Bias for Action** – I forked the repo, added a custom Azure OpenAI binding, and wrote a single integration service in .NET Core that exposes an HTTP endpoint.  
3. **AWS‑style design** – The service runs on AWS Fargate (CPU 1 vCPU, memory 2 GiB) behind ALB, auto‑scales based on CPU usage, and writes logs to CloudWatch for cost monitoring.  
4. **Deliver Results** – Within 6 weeks the feature was live; user engagement rose 18% and we cut infrastructure costs by 12% compared to a full GPT‑3 deployment.

**Result**  
The project delivered AI capabilities “quickly and easily” as promised by Semantic Kernel, while keeping us within budget and improving key metrics.  

> **Leadership Principles:** *Customer Obsession* (improved UX), *Ownership* (end‑to‑end delivery), *Dive Deep* (benchmarking & custom bindings).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
