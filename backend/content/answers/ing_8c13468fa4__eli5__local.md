---
qid: ing_8c13468fa4__eli5__local
question: 'Explain: Fetch traces and filter by span name — Ai Evals Complete Guide
  Langwatch Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 240
total_tokens: 407
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:18:33-05:00'
sources: []
---

Imagine your AI system is a giant library where every conversation it has is a book. **Fetching traces** means you pull out the whole book that records what happened during one interaction—who said what, how long each part took, and any errors. Think of it as grabbing a notebook that logs every step.

A **span name** is like the chapter title in that notebook. Each span marks a distinct operation: “User Input,” “Model Generation,” or “Response Formatting.” When you **filter by span name**, you’re telling your library software, “Show me only the chapters called ‘Model Generation’ so I can see how fast and accurate the AI’s answers are.” This lets developers zoom in on specific parts of a conversation without wading through the whole book. In LangWatch or Langfuse, it’s simply selecting the desired chapter from the notebook to analyze performance or troubleshoot.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
