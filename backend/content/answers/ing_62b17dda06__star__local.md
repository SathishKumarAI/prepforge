---
qid: ing_62b17dda06__star__local
question: 'Explain: 🖥️ Frontend Engineer × AI - Interview Guide'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 306
total_tokens: 545
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:45:18-05:00'
sources: []
---

**Situation** – In my last role I was tasked with launching a real‑time recommendation widget on our e‑commerce site. The product team wanted it to run client‑side for speed, but the ML model we used had a 2 MB weight file that would break mobile load times.

**Task** – My job was to deliver a responsive, low‑latency UI that could still leverage the AI insights without bloating the bundle or violating GDPR data rules.

**Action** – I first split the model into two parts: a lightweight feature extractor in WebAssembly and a tiny inference graph loaded via TensorFlow.js. I wrapped it in a React hook that memoized predictions per user session, so we only ran inference on significant cart changes. For privacy I used localStorage to store a hashed user ID and served the model over HTTPS with a CSP that blocked external requests. I also added a fallback rule‑based system for browsers that didn’t support WebAssembly.

**Result** – The widget reduced page weight by 35 % and kept load time under 1 s on mobile, while recommendation accuracy stayed within 3 % of the server‑side model. We saw a 12 % lift in add‑to‑cart conversions for that category. I learned how to balance ML performance with frontend constraints and how to audit privacy compliance in client‑side AI.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
