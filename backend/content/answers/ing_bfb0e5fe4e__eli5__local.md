---
qid: ing_bfb0e5fe4e__eli5__local
question: Define TTFT, TPOT, and tokens/sec. What drives each one, and what are reasonable
  targets for a chat product?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 252
total_tokens: 425
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:40:46-05:00'
sources: []
---

Think of an AI chat like ordering coffee at a café.  
* **TTFT – Time To First Token** is the moment you get the first sip after placing your order. It’s driven by how fast the barista (the model) starts generating text, which depends on the model size and the server load. For a good chat app aim for < 0.5 seconds so users feel it “speaks” immediately.  
* **TPOT – Tokens Per Second** is how many words you can taste in one minute of conversation. It’s set by the same hardware and software limits that affect TTFT, plus any throttling rules. A smooth chat usually needs 10–30 tokens per second (about 2–6 words/sec).  
* **Tokens/second** is simply the rate at which those words come out; it tells you how quickly the model can keep up with back‑and‑forth dialogue.  

Balancing a low TTFT and a steady TPOT gives users a natural, responsive chat experience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
