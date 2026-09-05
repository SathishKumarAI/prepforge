---
qid: ing_fa3ea50ee1__eli5__local
question: 'Explain: Describe the throughput - latency tradeoff curve for an LLM server,
  and explain goodput.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 252
total_tokens: 420
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:11:05-05:00'
sources: []
---

Imagine a busy coffee shop that serves a popular latte recipe (the “large language model”). **Throughput** is how many lattes the barista can finish per minute—high throughput means lots of orders served quickly. **Latency** is the wait time from when you order to when you get your cup—low latency means you’re not stuck in line.

If the barista rushes, they can finish more cups (high throughput) but each latte takes longer to brew because they skip careful steps (high latency). If they take extra time per cup (low latency), fewer lattes are finished overall (low throughput). The **trade‑off curve** shows this balance: as you push for higher throughput, latency inevitably rises, and vice versa.

Now think of **goodput**. It’s the amount of useful coffee actually delivered to customers—excluding wasted beans or broken cups. In our LLM server, goodput is the number of correct, relevant answers returned per second after filtering out errors or empty responses. Goodput tells you how much *effective* work the system does, not just raw speed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
