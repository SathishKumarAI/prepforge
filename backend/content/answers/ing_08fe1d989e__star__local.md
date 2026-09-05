---
qid: ing_08fe1d989e__star__local
question: 'Explain: 1.4 - Use of Bidirectional Context — A Complete Guide to BERT
  with Code | Towards Data Science'
topic: Data Science
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 305
total_tokens: 556
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:46:58-05:00'
sources: []
---

**Situation:**  
At my last role, our product team needed to improve the accuracy of a customer sentiment classifier that was currently at 78 % F1 on the test set. The model was a traditional LSTM that only used left‑to‑right context, so it missed subtle cues like sarcasm or negation.

**Task:**  
I had to redesign the encoder to capture bidirectional dependencies without blowing up inference latency, and then deploy the new model within two weeks for the next release cycle.

**Action:**  
I chose BERT as a lightweight transformer backbone. I fine‑tuned `bert-base-uncased` on our labeled 50k review dataset using Hugging Face’s 🤗 Transformers, adding a single linear classification head. To keep inference fast, I used ONNX Runtime with dynamic quantization (int8) and stripped the token type embeddings since we had only one sentence per input. I also experimented with a sliding‑window approach to handle longer inputs while preserving bidirectional context.

**Result:**  
The new BERT model achieved 87 % F1 on the same test set, an 9-point lift. Inference time increased from 12 ms to 18 ms per sample, still below our 50 ms latency budget. I learned that proper fine‑tuning and quantization can unlock the power of bidirectional context without compromising performance in production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
