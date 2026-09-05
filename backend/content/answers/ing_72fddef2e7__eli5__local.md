---
qid: ing_72fddef2e7__eli5__local
question: What causes high latency in conversational AI?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 155
output_tokens: 226
total_tokens: 381
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:38:51-05:00'
sources: []
---

Imagine you’re ordering coffee at a busy café that uses a robot barista. The robot has to hear your order (speech recognition), think about what you asked (understanding the question), decide on the best reply (generating a response), and then speak it back (text‑to‑speech). If any step takes too long, the whole process feels sluggish.

In conversational AI the same steps happen inside a computer:

1. **Listening** – converting sound to text can be slow if the audio is noisy or the model is large.
2. **Thinking** – the system parses the text and searches its knowledge base; big models need more time to look up facts.
3. **Talking back** – turning words into speech again adds extra delay.

The “latency” you notice is basically how long it takes for all these parts to finish, just like waiting for your coffee while the robot barista works. The larger and more complex each part, the longer the wait.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
