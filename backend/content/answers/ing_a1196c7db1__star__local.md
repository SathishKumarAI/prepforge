---
qid: ing_a1196c7db1__star__local
question: Compare JSON mode with schema-constrained decoding. How does constrained
  decoding actually enforce the schema?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 360
total_tokens: 603
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:54:49-05:00'
sources: []
---

**Situation:**  
During a recent project for a fintech client, we had to integrate an LLM into their compliance reporting system. The regulator required that all outputs be strictly valid JSON conforming to a pre‑defined schema describing transaction fields, dates, and monetary amounts.

**Task:**  
I needed to ensure every model response was not only syntactically correct JSON but also semantically aligned with the schema—no missing keys, no wrong data types, and proper range checks on numeric values.

**Action:**  
First, I enabled OpenAI’s **JSON mode**, which wraps the prompt in a system instruction that tells the model “return valid JSON.” Next, to enforce the schema itself, I used **schema‑constrained decoding**: I passed the exact JSON Schema as part of the request payload. The decoder then applies a *probability masking* algorithm—during token generation it zeros out any token sequences that would violate type constraints or required fields. It also performs real‑time validation after each token to backtrack if a partial output diverges from the schema, effectively pruning impossible branches in the decoding tree.

**Result:**  
All 1,200 generated reports were 100 % schema‑compliant on first pass—no post‑hoc corrections needed. The client’s compliance audit passed without issue, and our latency improved by ~15 ms compared to a naive post‑validation approach. I learned that coupling JSON mode with schema‑constrained decoding dramatically reduces error handling overhead while keeping generation speed high.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
