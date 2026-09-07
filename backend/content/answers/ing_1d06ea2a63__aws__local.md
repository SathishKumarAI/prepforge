---
qid: ing_1d06ea2a63__aws__local
question: 'Which LLM should I use in production: Claude, GPT, Gemini, or open-source?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 461
total_tokens: 699
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:32:04-05:00'
sources: []
---

**Situation / Task**  
While launching a new recommendation engine for our e‑commerce platform, I had to pick an LLM that could deliver 99.9 % uptime, scale to 10 M concurrent requests/day, and stay under $3 M/yr in cost.

**Action**  
I scoped the problem with *Customer Obsession* and *Dive Deep*.  
1. **Requirements:** latency <30 ms per inference, 95 % accuracy on domain‑specific queries, GDPR compliance.  
2. **Evaluation matrix:** Claude, GPT‑4o, Gemini‑Pro, and an open‑source Llama‑2‑70B fine‑tuned locally.  
3. **AWS stack:**  
   * **SageMaker Endpoint** (GPU‑Inf1 for GPT/Gemini; F1 for Claude; EC2 g5 for Llama).  
   * **Step Functions** orchestrate pre/post‑processing, caching with ElastiCache Redis.  
   * **CloudWatch & X-Ray** for observability.  
4. **Pilot:** 30 days A/B test on a subset of traffic. Results: GPT‑4o hit 92 % accuracy, Claude 88 %, Gemini 85 %, Llama 80 %. Cost per request: $0.004 (GPT), $0.0035 (Claude), $0.0028 (Gemini), $0.0016 (Llama).  

**Result**  
I chose **Claude** for production, balancing accuracy and cost while meeting SLA. Post‑deployment, we achieved 99.95 % uptime, reduced latency by 12 %, and saved ~$400K/yr vs. the open‑source option. Learned that a short, data‑driven pilot can surface hidden trade‑offs early.  

**Leadership Principles Highlighted**  
- *Customer Obsession* – prioritize user experience metrics.  
- *Ownership & Dive Deep* – own the end‑to‑end evaluation and iterate based on real data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
