---
qid: ing_196b650a82__aws__local
question: How many examples? — Few Shot And Icl
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 490
total_tokens: 719
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:23:48-05:00'
sources: []
---

**Situation & Task**  
At my last role at an e‑commerce startup, we wanted to launch a recommendation engine that could personalize product suggestions with minimal labeled data. The engineering team was split between *few‑shot* fine‑tuning and *in‑context learning (ICL)* using a large language model (LLM). I owned the experiment design to prove which approach delivered higher click‑through rates (CTR) while staying cost‑effective.

**Action & Technical Design**  
1. **Define “examples”** – For few‑shot, we used 5–10 labeled user interaction pairs per product category; for ICL, we constructed prompts with 3–7 context examples and the target recommendation.  
2. **Model Selection** – We chose Amazon Bedrock’s `anthropic.claude-3-haiku` (few‑shot) and `amazon.titan-text-lite-v1` (ICL).  
3. **Infrastructure** – Deployed on AWS Lambda with API Gateway, autoscaling based on request latency; used DynamoDB for caching prompts to reduce repeated LLM calls.  
4. **Metrics** – A/B test over 14 days:  
   * Few‑shot CTR: **2.8%** (+15% vs baseline).  
   * ICL CTR: **3.1%** (+18% vs baseline), but cost per inference was **$0.04** higher due to longer prompt tokens.

**Result & Learning**  
ICL gave a modest 10 bps lift over few‑shot but at 30 % higher compute spend. The key takeaway: *for high‑volume, low‑label scenarios, few‑shot fine‑tuning is more cost‑efficient; ICL shines when prompt engineering can be reused across many queries.*  

**Leadership Principles Highlighted**  
- **Ownership** – I drove the end‑to‑end experiment and owned post‑mortem analysis.  
- **Dive Deep** – Analyzed token usage, latency, and cost per inference to surface trade‑offs.  
- **Deliver Results** – Delivered a data‑driven recommendation strategy that increased CTR by 18 % with clear cost implications.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
