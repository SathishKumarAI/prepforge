---
qid: ing_a7bd0898ea__eli5__local
question: 'Explain: Metrics — TypeScript AI Framework for Agents and Apps | Mastra'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 290
total_tokens: 452
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:03:43-05:00'
sources: []
---

Imagine you’re building a smart assistant robot (the “Agent”) that can chat, play music, or order groceries. Every time the robot does something, we want to know **how well it’s doing**—that’s where *metrics* come in.

Think of metrics like a health‑check dashboard for your robot:  
- **Accuracy** tells you how often the robot understood your request correctly.  
- **Latency** measures how fast it replies (like how quickly you get a drink from the kitchen).  
- **Reliability** shows the percentage of time the robot stays online and functional.

In the Mastra TypeScript AI framework, these metrics are built right into the code. When you write an Agent or an App, you can ask the framework to record each interaction’s latency, success rate, or even how many times a user asks for clarification. The framework then aggregates this data, so you see clear charts: “This agent answered 92 % of questions correctly in the last week” or “Average response time is 1.3 seconds.”

So, metrics are simply *data points that tell you whether your AI behaves as expected*, just like a smart thermostat lets you know if the temperature stays within comfort range. They’re essential for tuning performance, spotting bugs early, and proving that your AI truly works for its users.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
