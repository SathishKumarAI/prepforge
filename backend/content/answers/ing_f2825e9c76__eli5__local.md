---
qid: ing_f2825e9c76__eli5__local
question: How do you handle streaming when the model is emitting tool calls or structured
  JSON?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 211
total_tokens: 374
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:58:20-05:00'
sources: []
---

Imagine your AI is a chef cooking a dish while you watch it on a live stream. Most of the time the chef just talks—“Add salt,” “Stir for two minutes”—and you can see those instructions as they happen. But sometimes the chef needs to fetch an ingredient from another kitchen (a *tool call*) or write down a recipe card (structured JSON). When that happens, the stream pauses briefly: the chef stops talking, grabs the ingredient or writes the card, then resumes cooking.

In practice, the AI sends a small “pause” packet when it’s about to use a tool or output structured data. Your program waits for the whole packet (the complete tool request or JSON block), processes it—e.g., calls an API or stores the JSON—then tells the AI to continue streaming. This keeps the live conversation fluid while ensuring every special action is handled correctly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
