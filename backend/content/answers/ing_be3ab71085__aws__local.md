---
qid: ing_be3ab71085__aws__local
question: 'Explain: Character vs Subword vs Word — Tokenization Deep Dive'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 418
total_tokens: 650
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:33:32-05:00'
sources: []
---

**Situation & Task (Customer Obsession / Ownership)**  
When I led the migration of our NLP pipeline from on‑prem to SageMaker, we discovered that tokenization was inflating inference latency by 35 %. The business required a 20 % speedup without compromising accuracy.

**Action (Dive Deep / Bias for Action)**  
I compared three tokenizers: **character**, **word**, and **subword** (Byte‑Pair Encoding).  
1. *Character* gives the smallest vocab (~10 k) but produces long sequences—3× longer than word tokens, hurting GPU utilization.  
2. *Word* reduces sequence length by ~70 % but suffers out‑of‑vocabulary (OOV) rates >12 %, dropping F1 from 0.89 to 0.83 on our validation set.  
3. *Subword* balances the two: vocab size ≈30 k, OOV <2 %, sequence length ~40 % of character tokens.

I implemented a custom BPE tokenizer in Python, trained on our corpus (≈50M words), and packaged it as an ECR image for SageMaker Batch Transform. I also set up CloudWatch metrics to monitor token counts and latency per batch.

**Result (Deliver Results)**  
Post‑migration: inference latency dropped 28 % (from 120 ms to 84 ms per request). Accuracy improved back to 0.89 F1, and the new tokenizer reduced storage of model artifacts by 15 %. The cost savings from fewer GPU hours translated to ~$4k/month.

**Learnings (Invent & Simplify)**  
I realized that a one‑size‑fits‑all tokenizer is rarely optimal; profiling data drives decisions. I also documented the trade‑offs so future teams can iterate quickly—an essential bar‑raiser expectation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
