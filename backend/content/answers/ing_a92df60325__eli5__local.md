---
qid: ing_a92df60325__eli5__local
question: 'Explain: Write the server-side handler for streaming token generation.
  Handle client disconnects correctly.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 271
total_tokens: 436
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:06:03-05:00'
sources: []
---

Imagine a kitchen where the chef (the server) is preparing a long recipe (a stream of tokens). The waiter (the client) keeps asking for the next bite. Instead of sending the whole meal at once, the chef hands over one spoonful at a time, so the waiter can enjoy immediately.

In code, you write a *handler* that listens for a “next‑token” request. When it gets one, it generates the token and sends it back over an open connection (like passing the spoonful). If the waiter leaves the table—i.e., the client disconnects—the handler notices the broken socket or a cancel signal. It then stops generating more tokens, cleans up any temporary data, and exits gracefully so resources aren’t wasted.

Key terms:
- **Handler**: The piece of code that runs when a request arrives.
- **Streaming**: Sending pieces one by one instead of all at once.
- **Client disconnect**: When the user closes or loses the connection.

By checking for disconnection after each send, you keep the kitchen efficient and avoid sending food to an empty table.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
