---
qid: ing_4cb62ac1d7__eli5__local
question: How does function calling actually work with an LLM, and how do you make
  it reliable enough for production agents?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 273
total_tokens: 443
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:38:38-05:00'
sources: []
---

Imagine a smart assistant that can answer questions by looking up facts, but sometimes the answer needs to be “handed off” to another tool—like booking a flight or calculating a tip.  
**Function calling** is the assistant’s way of saying, “I don’t know how to do that myself; let me ask a specialist.” The LLM first writes a short JSON note that names the function (e.g., `book_flight`) and lists any arguments it thinks are needed. That note is then passed to the real‑world API that actually performs the task. When the API replies, the assistant reads the response and can incorporate it into its final answer.

To make this reliable for production:
1. **Define clear function signatures** (name + exact argument names).  
2. **Validate inputs before calling** so bad data never reaches the external service.  
3. **Add retry logic** for transient API failures.  
4. **Log every call and response** to audit behavior.  
5. **Test with unit tests that mock the APIs**, ensuring the LLM’s output matches expected formats.

With these steps, the assistant can safely hand off work while keeping its own reasoning accurate and dependable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
