---
qid: ing_427d83939c__star__local
question: 'Explain: Frontend — ''The Open Source AI Stack'''
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 359
total_tokens: 596
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:41:42-05:00'
sources: []
---

**Situation** – At my last company we were tasked with prototyping an AI‑powered chatbot that could run entirely in the browser for our internal knowledge base. The deadline was two weeks before the quarterly product showcase, and we had to keep the bundle under 5 MB.

**Task** – Build a lightweight, fully open‑source frontend stack that loads a transformer model locally, performs inference with minimal latency, and renders an interactive UI without any server calls.

**Action** – I chose TensorFlow.js for model execution because it runs in WebGL and supports quantized models. I downloaded the DistilBERT checkpoint from Hugging Face’s 🤗 Hub, then used `tfjs-converter` to convert it into a .json bundle, compressing it with gzip‑wasi to 1 MB. For tokenization I wrapped the HuggingFace tokenizer in a Web Worker so the main thread stayed responsive. The UI was built with React and Material‑UI; I added a simple debounce on input to reduce inference spikes. Finally, I set up Vite for fast HMR and used Rollup plugins to tree‑shake unused TensorFlow.js code.

**Result** – The demo loaded in 3 seconds, responded within 200 ms per query, and the final bundle was 4.2 MB—well under our limit. We demonstrated it live at the showcase, and the product team adopted the stack for their customer support portal. I learned how to balance model size, WebGL performance, and developer ergonomics when building a truly open‑source AI frontend.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
