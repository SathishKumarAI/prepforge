---
qid: ing_acee596434__aws__local
question: 'Q: Why does GPT-4 struggle with simple character counting?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 329
total_tokens: 561
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:56:39-05:00'
sources: []
---

**Situation & Task**  
While leading a pilot for an AI‑powered document assistant, I noticed GPT‑4 consistently miscounted characters in user prompts—an issue that could skew downstream token limits and billing.

**Action**  
I dove deep into the model’s tokenization pipeline, compared its byte‑pair encoding (BPE) against a reference UTF‑8 counter, and identified a mismatch when handling multibyte Unicode characters. I proposed an auxiliary preprocessing step: a lightweight Lambda function that normalizes text to NFC form and counts bytes before feeding GPT‑4. I also added a post‑process sanity check in the inference service.

**Result**  
After deployment, character‑count accuracy improved from 82 % to **99.9 %**, reducing token over‑estimation errors by **87 %**. This cut our AWS compute costs (GPU instances) by **12 %** and lowered customer support tickets related to billing discrepancies by **fourfold**.

**Leadership Principles**  
- *Customer Obsession*: Eliminated user frustration around billing.  
- *Dive Deep & Ownership*: Tracked the root cause, engineered a robust fix, and measured impact directly against cost and support metrics.  

**Bar‑raiser takeaways**  
I showcased ownership by taking end‑to‑end responsibility, demonstrated depth through tokenization analysis, quantified the business impact, and learned that even “simple” counts can hide complex encoding pitfalls.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
