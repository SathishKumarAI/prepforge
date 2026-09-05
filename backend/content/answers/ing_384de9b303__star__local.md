---
qid: ing_384de9b303__star__local
question: Your on-device model must emit valid, schema-conforming tool calls. How
  do you guarantee validity rather than hope for it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 371
total_tokens: 621
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:21:01-05:00'
sources: []
---

**Situation:**  
In a recent project I was building an on‑device personal assistant that had to call external APIs via JSON schema‑conforming tool calls. The device ran on limited CPU and memory, so we couldn’t afford a heavyweight validator for every inference.

**Task:**  
I needed to guarantee that each generated tool call adhered strictly to the API’s OpenAPI schema—no missing required fields, no type mismatches—while keeping latency under 200 ms.

**Action:**  
First, I extracted the JSON Schema from the OpenAPI spec and compiled it into a lightweight, pre‑generated Rust library using `serde_json::Value` with compile‑time checks. The model was fine‑tuned on a curated dataset of valid calls, and during inference I wrapped the raw LLM output in a deterministic post‑processing pipeline:  
1. Parse the string to JSON.  
2. Run it through the compiled validator; if it fails, we automatically retry with a temperature‑controlled prompt that nudges the model toward missing keys.  
3. If retries still fail after two attempts, fall back to a “safe” no‑op call and log for later review.

**Result:**  
After deployment, 99.7 % of calls were schema‑valid on first try, reducing API error rates from 4.5 % to 0.3 %. Latency stayed below 180 ms on average, and the fallback mechanism caught only 0.1 % of edge cases, which we addressed in the next model update. I learned that coupling a small, statically‑compiled validator with a retry strategy is far more reliable than trusting raw LLM output alone.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
