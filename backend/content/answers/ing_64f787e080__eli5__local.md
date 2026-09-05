---
qid: ing_64f787e080__eli5__local
question: 'Explain: Signals — TypeScript AI Framework for Agents and Apps | Mastra'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 253
total_tokens: 415
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:16:03-05:00'
sources: []
---

Imagine a smart home where every appliance talks to the central hub through tiny, clear messages called **signals**. In the *Mastra* TypeScript AI framework, agents (like your thermostat or lights) and apps send these signals instead of shouting over each other.  

A **signal** is just a plain object that says “something happened” – e.g., `{type: 'temperatureChange', value: 22}`. It has two parts:

1. **Name** (`type`) – tells the receiver what kind of event it is.  
2. **Payload** (`value`, `data`, etc.) – carries the useful information.

When an agent or app emits a signal, every other part of the system that cares about that name automatically receives it, just like devices listening for a specific topic on a smart‑home network. This keeps everything loose and modular: you can add new agents or apps without rewiring existing code; they simply listen for the signals they need.

So think of Mastra’s signals as the tidy, event‑driven messages that let AI agents and applications talk smoothly—just like a well‑organized smart‑home system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
