---
qid: ing_ec15b1df4a__eli5__local
question: 'Explain: A 70B dense model at 8-bit weights, chips with ~230 MB of SRAM
  each. Walk me through the deployment and the unit economics.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 292
total_tokens: 472
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:49:18-05:00'
sources: []
---

Imagine a giant library that holds **70 billion** books (the model’s weights). Each book is tiny—just **8‑bit** pages—so the whole library fits on a few big shelves.

The “shelves” are chips with about **230 MB of SRAM** each. A single chip can hold roughly 30 billion 8‑bit weights, so you need two chips to store all 70 billion weights. When a user asks a question, the library’s librarian (the inference engine) quickly pulls out the needed pages from those two shelves and stitches them into an answer.

**Unit economics**:  
- **Hardware cost**: Two SRAM‑rich chips plus a modest CPU/FPGA add up to roughly \$200–\$300 per deployment.  
- **Energy**: Running inference uses about 10 W, so the electricity bill is only a few cents per month for constant operation.  
- **Maintenance**: The software that loads the weights and handles queries costs a few thousand dollars in development, but after that it’s mostly “set it and forget it.”  

So, you pay a one‑time \$300 hardware fee, a tiny monthly energy charge, and minimal upkeep to keep a 70 billion‑weight AI running on edge devices.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
