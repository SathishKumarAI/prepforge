---
qid: ing_c9012880bd__eli5__local
question: 'Explain: Time-to-first-token for your on-device feature is 1.8 s. Walk
  me through diagnosing and fixing it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 290
total_tokens: 463
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:53:55-05:00'
sources: []
---

Think of the on‑device AI like a chef who has to pick up fresh ingredients before cooking.  
**Time‑to‑first‑token (1.8 s)** is how long it takes from when you tap “ask” until the chef starts chopping and you see the first bite of the answer.

### Diagnosing
1. **Check the prep time** – Is the device loading a heavy model file?  
2. **Look at the kitchen traffic** – Are other apps using the same CPU or memory, making the chef wait?  
3. **Measure the steps** – Use profiling tools to see if the first token is delayed by disk reads, decoding logic, or network calls.

### Fixing
1. **Lighten the load** – Replace the full model with a smaller, quantized version that still tastes good.  
2. **Pre‑warm the kitchen** – Keep the model loaded in memory when the app starts so the chef doesn’t have to fetch it again.  
3. **Optimize cooking steps** – Streamline the decoding algorithm and use faster integer math (e.g., 8‑bit arithmetic) to chop quicker.

After these tweaks, the chef will start chopping almost instantly, cutting that 1.8 s down to a pleasant few hundred milliseconds.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
