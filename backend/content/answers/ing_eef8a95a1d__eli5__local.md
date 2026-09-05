---
qid: ing_eef8a95a1d__eli5__local
question: 'Explain: Real-Time Media — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 282
total_tokens: 442
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:53:21-05:00'
sources: []
---

**Real‑time media (like live video or voice) needs data to arrive quickly and in order, but it can also tolerate a few missing packets.**

Think of sending a stream of postcards through the postal service.

* **TCP = “Express Mail”**  
  The post office guarantees every postcard arrives and in the exact order you sent them. If one gets lost, the sender waits for a return receipt and resends it. This is great for things that must be complete (e.g., downloading a file), but the waiting slows down the flow—good for data you can’t afford to miss.

* **UDP = “Standard Mail”**  
  Postage goes out without tracking; if a postcard falls off the truck, you just keep going. The sender doesn’t wait for a receipt, so the stream moves faster. If a few postcards are missing, the receiver simply skips them—acceptable for live video where a brief glitch is better than a pause.

**Key terms**  
* **Packet** – a small chunk of data sent over the network.  
* **Latency** – delay between sending and receiving.  

In real‑time media, UDP wins because speed matters more than perfection; TCP’s reliability would introduce unwanted delays.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
