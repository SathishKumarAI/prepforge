---
qid: ing_0d26b1f96d__aws__local
question: You are fine-tuning on a domain full of jargon and someone suggests adding
  new tokens to the tokenizer. What can go wrong, and how do you handle vocabulary
  changes correctly?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 464
total_tokens: 718
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:55:26-05:00'
sources: []
---

**Situation & Task (S)**  
At a fintech startup I was fine‑tuning GPT‑4 on our regulatory‑compliance corpus. A teammate suggested adding 3 k new tokens for legal jargon to improve recall.

**Action (A)**  

1. **Dive Deep into Tokenizer Impact** – Re‑tokenized the training set and measured *perplexity* (↓15%) but observed a 22% drop in downstream NER accuracy due to out‑of‑vocabulary splits.
2. **AWS SageMaker + Glue** – Built an ETL pipeline:  
   - **Glue** to extract, transform, and count token frequencies.  
   - **SageMaker Processing Job** to train a new SentencePiece model with the expanded vocab.  
3. **Versioning & Canary Deployment** – Stored each tokenizer in S3 (schema‑id) and deployed via SageMaker Model Registry. Ran A/B tests on 1 k production requests; hit 0.8 s latency vs baseline 0.7 s, but improved F1 by 4%.
4. **Rollback Strategy** – Enabled a “tokenizer rollback” switch in the inference endpoint that instantly swaps to the previous vocab if latency or error rates spike.

**Result (R)**  
The new tokenizer lifted compliance‑report precision from 86% to 90% while keeping cost under $0.0003 per request on SageMaker RealTime Inference. We documented the trade‑off and added a policy that any vocab change must pass a *tokenizer impact review*.

**Leadership Principles Highlighted**  
- **Ownership & Bias for Action** – I proactively built the pipeline, owned the rollback plan, and executed it within 48 hrs.  
- **Dive Deep** – Quantified perplexity, NER F1, latency, and cost to make data‑driven decisions.  

Bar‑raisers look for: depth of impact analysis, clear ownership, measurable metrics, and a learning loop (we now flag vocab changes as “high‑impact” in our ops playbook).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
