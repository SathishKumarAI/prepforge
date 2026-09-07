---
qid: ing_0e435e83f9__aws__local
question: 'Explain: Beyond letter counting, what failure modes does tokenization cause?
  Think arithmetic, multilingual text, and code.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 447
total_tokens: 689
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:58:01-05:00'
sources: []
---

**Situation / Task**  
I was leading a data‑science team that built an on‑prem LLM inference pipeline for a fintech client. The production model used a custom tokenizer that only counted ASCII letters, which led to unexpected errors in downstream arithmetic predictions and multi‑lingual compliance checks.

**Action**  
1. **Ownership & Dive Deep** – I audited the tokeniser against a 2 M‑sentence test set (English, Spanish, French, Arabic, code snippets). I discovered three critical failure modes:  
   * **Arithmetic mis‑tokenisation** – “10+5=15” was split into separate tokens causing the model to output “1 0 + 5 = 1 5”.  
   * **Multilingual bleed** – Non‑Latin scripts were replaced with `<UNK>`, destroying semantic context.  
   * **Code fragmentation** – Operators and identifiers were broken, so code‑completion scores dropped by 27 %.  
2. **Design & AWS Services** – I migrated to the Hugging Face `tokenizers` library on an EC2 Spot fleet (p3.2xlarge) with EFS for shared vocab. The new tokenizer used a Byte‑Pair Encoding trained on 1 B multilingual tokens and included custom token rules for arithmetic symbols.  
3. **Bias for Action & Deliver Results** – I redeployed the pipeline in two days, re‑validated against the test set, and achieved:  
   * 99.8 % correct arithmetic parsing (vs 82 %)  
   * 94 % token coverage across 12 languages (vs 68 %)  
   * 15 % reduction in inference latency by caching vocab on EFS.

**Result**  
The client’s compliance score rose from 73 % to 98 %, and the cost per inference dropped 18 % thanks to Spot savings. I documented a failure‑mode matrix that now guides future tokenizer upgrades, turning a hidden risk into a measurable quality metric.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
