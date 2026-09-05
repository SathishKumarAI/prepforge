---
qid: ing_be330e40fb__eli5__local
question: 'Explain: TCP three-way handshake — What Happens When You Type a URL Into
  Your Browser? - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 245
total_tokens: 414
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:38:37-05:00'
sources: []
---

**Think of your browser and the website as two people wanting to start a polite conversation over a noisy street.**

1. **First “Hello” (SYN)** – When you type a URL, your browser sends a tiny packet that says, *“Hi, I’d like to talk. Can we connect?”* This is the SYN flag.

2. **Reply “Sure” (SYN‑ACK)** – The website’s server listens on its own port and answers with *“Yes! I’m ready. You’re welcome.”* It echoes your request and adds an ACK (acknowledgement) that confirms it saw your hello.

3. **Final “Got it” (ACK)** – Your browser, now happy, sends back a final packet: *“Great, I got your reply. Let’s start chatting.”* This ACK closes the handshake loop.

Once all three packets exchange, the street is clear and both sides can send full messages—your web page loads. The handshake guarantees that both parties are ready before any data flows, preventing lost or misdirected conversations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
