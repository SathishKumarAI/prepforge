---
qid: ing_ba917ade4f__eli5__local
question: 'Explain: Walk me through rendering a streaming LLM response in the browser,
  from HTTP response to pixels.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 239
total_tokens: 407
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:32:55-05:00'
sources: []
---

Imagine your browser as a chef’s kitchen and an AI model as a recipe book that writes its instructions in real‑time.

1. **HTTP response** – The server sends the text bit by bit, like a waiter handing you a long scroll that keeps unfolding.  
2. **Streaming** – Each new piece of text arrives as soon as it’s ready, so your browser can start working right away instead of waiting for the whole answer.  
3. **Browser receives data** – Your JavaScript reads each chunk from the HTTP stream (the waiter’s hand).  
4. **Rendering to pixels** – The script converts that text into HTML elements, then the browser’s layout engine arranges them on the screen and the graphics engine paints them as pixels, like a painter turning words into visible shapes.  

So, just as a chef turns raw ingredients into a finished dish while you watch, your browser keeps receiving AI words, turning them into styled text, and showing them instantly on the screen.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
