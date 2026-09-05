---
qid: ing_6c7bd1cd0c__eli5__local
question: 'Explain: Cons: — Rate Limiting Algorithms Explained with Code'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 225
total_tokens: 384
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:27:34-05:00'
sources: []
---

Imagine you’re at a busy café that only lets one person order every minute to keep the line moving smoothly.  
A **rate‑limiting algorithm** is like the café’s rule‑keeper: it watches how many “orders” (requests) each customer makes and stops them if they exceed the allowed pace.

Two common ways this rule works:

1. **Token Bucket** – Think of a bucket that fills with one token every minute. A request takes a token to go through; if the bucket is empty, the request waits or fails.  
2. **Leaky Bucket (Fixed Window)** – Picture a bucket that leaks at a steady rate. Each request adds water; when the bucket overflows, the extra requests are dropped.

In code you’d see a loop that checks a counter or token count before letting an API call proceed, ensuring no one can flood the system. This keeps everything fair and prevents crashes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
