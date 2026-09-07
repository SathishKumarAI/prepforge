---
qid: ing_d90ec01c87__aws__local
question: 'Explain: You''re dropped into an unfamiliar multi-file codebase with a
  failing behaviour and an LLM assistant available. Walk me through how you''d fix
  it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 376
total_tokens: 625
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:29:51-05:00'
sources: []
---

**Situation & Task (S)**  
I was dropped into a 15‑file Python microservice that used an LLM for intent extraction. The service had started returning `None` for every request after a recent dependency bump – latency spiked from 120 ms to >3 s and error rate hit 18%. I needed to restore functionality and prevent regressions.

**Approach (A)**  
1. **Dive Deep + Ownership** – I ran the test suite, isolated the failing module (`intent_parser.py`), and added instrumentation to log prompt‑response cycles.  
2. **Bias for Action** – Using the LLM assistant, I asked it to generate a minimal reproducible example of the prompt that triggers `None`. The assistant suggested a token‑limit issue caused by an updated tokenizer.  
3. **AWS Design** – I refactored the service to use *Amazon SageMaker Runtime* for inference instead of the local model, added *API Gateway* throttling, and stored prompts in *DynamoDB* with TTL. This reduced cold‑start latency to 80 ms and capped request cost at $0.0001 per call.

**Result (R)**  
- Latency dropped from 3 s → 120 ms (90% improvement).  
- Error rate fell to <1%.  
- Cost per inference decreased by 70%.  

I documented the failure in a post‑mortem, updated the CI pipeline with prompt‑validation tests, and shared lessons on token limits. This exemplifies **Customer Obsession** (quick fix for users) and **Ownership** (end‑to‑end resolution).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
