---
qid: ing_a13e4299ce__star__local
question: Implement nucleus (top-p) sampling. What failure mode of top-k does it fix?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 348
total_tokens: 591
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:55:04-05:00'
sources: []
---

**Situation** – While leading the NLP team at a fintech startup, we launched a chatbot that generated personalized loan offers. The model used top‑k sampling (k=40) for inference, but users complained that the bot often produced repetitive or overly generic responses, especially in edge cases where the vocabulary was sparse.

**Task** – I needed to redesign the decoding strategy so that the bot could generate more diverse yet coherent replies without sacrificing speed, and eliminate the repetition problem caused by top‑k’s hard cutoff.

**Action** – I implemented nucleus (top‑p) sampling. First, I instrumented the model to compute token probabilities on each step, then sorted them and accumulated cumulative probability until it exceeded a threshold p=0.9. Tokens beyond this cumulative mass were discarded, creating a dynamic “soft” filter that adapts to the distribution’s shape. I replaced the hard k‑limit with this variable cutoff in our inference pipeline, integrated it into the existing TorchServe deployment, and added a fallback to top‑k when the effective vocabulary size dropped below 20 tokens.

**Result** – After deploying nucleus sampling, the bot’s response entropy increased by 35%, and user satisfaction scores rose from 4.2/5 to 4.7/5 within two weeks. The system maintained inference latency under 120 ms per request. I learned that top‑p’s adaptive filtering better preserves diversity in low‑probability tails, directly addressing the repetition failure mode of fixed top‑k.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
