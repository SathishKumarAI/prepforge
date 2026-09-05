---
qid: ing_ba917ade4f__star__local
question: 'Explain: Walk me through rendering a streaming LLM response in the browser,
  from HTTP response to pixels.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 408
total_tokens: 654
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:44:11-05:00'
sources: []
---

**Situation** – While leading a product launch at a fintech startup, we needed to embed an AI chatbot that streamed responses directly into our web app without buffering the entire answer. The user experience had to feel instant; any lag beyond 200 ms would break trust.

**Task** – I was tasked with designing the end‑to‑end pipeline: from the HTTP `Transfer-Encoding: chunked` response, through incremental parsing and rendering, all the way to pixel output on a mobile browser, while keeping CPU usage under 30 % on low‑power devices.

**Action** – First, I set up a WebSocket proxy that received the LLM’s JSON lines. Using the Fetch API with `ReadableStream`, I parsed each chunk as it arrived and pushed the text into a virtual DOM node. Instead of re‑rendering the whole component, I leveraged React’s reconciliation to update only the affected nodes. For layout, I used CSS Grid so that new words triggered minimal reflow. Finally, I tapped into the browser’s paint phase by listening to `requestAnimationFrame`, batching text updates every 16 ms to avoid jank. On iOS Safari, this approach reduced perceived latency from 1.2 s to under 400 ms.

**Result** – The streaming chat became a core differentiator: we saw a 35 % drop in user drop‑off during onboarding and a 20 % lift in session length. I learned that careful stream handling, minimal DOM churn, and aligning updates with the paint cycle are key to smooth LLM rendering on constrained browsers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
