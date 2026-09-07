---
qid: ing_6a86d3b079__aws__local
question: When do you fine-tune versus prompt-engineer versus use RAG?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 462
total_tokens: 696
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:25:21-05:00'
sources: []
---

**Situation & Task**  
At my last role I led a product that needed real‑time legal document summarization for a Fortune‑500 client. The baseline model was GPT‑4; we had to decide whether to fine‑tune, prompt‑engineer, or adopt Retrieval‑Augmented Generation (RAG).  

**Action**  
1. **Dive Deep & Data‑Driven Analysis** – I benchmarked three approaches on 5 k legal briefs:  
   *Fine‑tuning* (S3‑based training) gave 82 % F1 but cost $0.30/sec GPU time and a 12‑hour cold‑start.  
   *Prompt engineering* with carefully crafted few‑shot prompts hit 78 % F1, latency <200 ms, and no extra compute.  
   *RAG* (Amazon Kendra + Bedrock) achieved 84 % F1, latency 350 ms, but required a DynamoDB index of 2 M documents (~$0.01/req).  

2. **Bias for Action & Ownership** – I set up an A/B test in production: 40 % traffic to RAG, 30 % to fine‑tuned model, 30 % to prompt‑engineered.  
3. **Deliver Results** – After two weeks we saw a 15 % increase in user satisfaction (NPS +10) and cut inference cost by 35 %.  

**Result**  
I documented the trade‑offs: fine‑tuning is best when data privacy and zero latency are critical; prompt engineering works for rapid iteration with minimal cost; RAG shines when up‑to‑date knowledge is required. This decision framework is now part of our AI Ops playbook, and I presented it to leadership, earning a “Bar‑Raiser” endorsement for its clear ownership and measurable impact.  

**Leadership Principles** – *Customer Obsession*, *Ownership*, *Dive Deep*, *Bias for Action*, *Deliver Results*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
