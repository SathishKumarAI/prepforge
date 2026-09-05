---
qid: ing_d5def47a6f__eli5__local
question: 'Explain: Qwen2.5 extends context to 128K (and up to about 1M for the Turbo
  variant) using YaRN plus Dual Chunk Attention, mostly training-free. Explain how
  that works and why post-hoc extension is attractive.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 198
output_tokens: 317
total_tokens: 515
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:13:26-05:00'
sources: []
---

Imagine a giant book that normally fits on one shelf (the usual 8‑k or 16‑k token limit). Qwen2.5 wants to read far longer books—up to 128 K pages, and the Turbo version up to about a million. It does this by letting the model look at two “chunks” of text at once instead of one long line, like reading a paragraph on the left side of the page while simultaneously glancing at another paragraph on the right.  

The **Dual Chunk Attention** is that pair‑sided reading: each token can attend to its own chunk and also to the other chunk, so information travels across the whole 128 K span without having to process every single token in one go.  

To keep training light, Qwen2.5 uses **YaRN (Yielding a Recurrent Network)**, which is like a lightweight “bookmark” that remembers key points from earlier chunks and feeds them back when new chunks arrive. This makes the model’s memory act as a rolling summary, so it doesn’t need to retrain on longer texts.  

Post‑hoc extension—adding more context after the model has already been trained—is attractive because it lets you reuse the same powerful base network for very long documents without spending huge time and money training new weights. It’s like upgrading a phone with a bigger battery: you keep all the existing features but can now handle longer conversations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
