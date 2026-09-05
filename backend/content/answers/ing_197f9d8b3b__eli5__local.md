---
qid: ing_197f9d8b3b__eli5__local
question: 'Explain: Sliding Windows vs. Summarization — Short Term Context'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 217
total_tokens: 377
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:16:34-05:00'
sources: []
---

Imagine a robot reading a long novel one page at a time.  
**Sliding windows** are like giving the robot a small clipboard that holds only the last few pages it has read. Every new page pushes out the oldest one, so the robot always remembers the most recent text but forgets earlier parts.

**Summarization** is like asking the robot to write a brief note after each chapter: “The hero faces danger, then finds help.” The clipboard now holds these notes instead of full pages. The robot keeps a compressed memory of everything it’s seen, not just the newest bits.

*Short‑term context* is what the robot can look at right now—either the raw recent pages (window) or the condensed notes (summary). Sliding windows keep detail but lose history; summarization keeps history but in a shorter form. Both trade off memory size against how much past information stays accessible.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
