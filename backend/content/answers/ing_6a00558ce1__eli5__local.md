---
qid: ing_6a00558ce1__eli5__local
question: 'Q: What is the "Function Calling" abstraction in Semantic Kernel?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 211
total_tokens: 372
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:23:54-05:00'
sources: []
---

Imagine your computer is a chef, and you’re the restaurant manager who wants it to prepare dishes (answers) for customers. “Function calling” in Semantic Kernel is like giving the chef a recipe card that says exactly what ingredients (input) to use and what final dish (output) should look like.

In this system, the AI first reads the recipe card—this is a *function signature* that lists required inputs (“name”, “age”) and the type of result it should return. The AI then uses its language skills to fill in the blanks: it gathers the needed data, runs the appropriate internal routine (the function), and produces the finished dish.

So, function calling lets you tell the AI *what* you need and *how* to get it, instead of just asking a vague question. It’s a clear, structured way for the model to “call” specific tools or code blocks and return precise results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
