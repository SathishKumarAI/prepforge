---
qid: ing_75c9f66528__star__local
question: What surprised you the most about the Perplexity AI interview process?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 302
total_tokens: 541
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:30:05-05:00'
sources: []
---

**Situation:**  
During a recent hiring round for an AI research role at a fast‑growth startup, we were asked to complete an online interview that involved building a small language model demo in real time.

**Task:**  
I had to design and train a lightweight transformer from scratch within 90 minutes, evaluate its perplexity on a held‑out dataset, and then explain my design choices—all while the panel observed my screen.

**Action:**  
I started by quickly sketching the architecture: a 6‑layer GPT variant with rotary positional encodings. I used PyTorch for rapid prototyping and leveraged Hugging Face’s `transformers` library to load a pre‑trained BERT backbone, fine‑tuned it on our custom corpus using mixed‑precision training on an NVIDIA RTX 3090. I monitored loss curves live, swapped the AdamW optimizer for LAMB when overfitting appeared, and finally computed perplexity with the standard `torch.exp` trick to avoid overflow.

**Result:**  
The demo model achieved a perplexity of 12.3 on our test set—well below the company’s target threshold of 15. The panel praised my ability to iterate quickly under pressure and my clear explanation of trade‑offs between model size, latency, and accuracy. I learned that the interview not only tests coding skill but also how well you communicate complex decisions in real time, a valuable insight for future projects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
