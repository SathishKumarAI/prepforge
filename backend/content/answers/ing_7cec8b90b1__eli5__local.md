---
qid: ing_7cec8b90b1__eli5__local
question: What is an Immediately Invoked Function in JavaScript?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 195
total_tokens: 354
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:54:49-05:00'
sources: []
---

An **Immediately Invoked Function** (IIFE) is a tiny, self‑contained program that starts right away. Think of it like a one‑shot coffee maker: you pour in the beans, press “brew,” and the machine instantly pours out your cup without any further instruction needed.

In JavaScript you write:

```js
(function() {
  // code runs now
})();
```

The parentheses around the function make it an *expression* (not a named routine). The trailing `()` tells the engine to execute it immediately. Because it’s isolated, any variables inside don’t leak out into the rest of your script—just like the coffee maker’s internal parts stay hidden.

So, an IIFE is a quick, private block that runs once as soon as the page loads, keeping its own space and avoiding cluttering the global area.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
