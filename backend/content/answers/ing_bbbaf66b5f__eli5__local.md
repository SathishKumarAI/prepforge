---
qid: ing_bbbaf66b5f__eli5__local
question: 'Q: How does DSPy solve the "fragility" of prompt engineering?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 265
total_tokens: 428
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:34:59-05:00'
sources: []
---

Imagine you’re cooking a recipe that’s very picky about how the ingredients are mixed—if you stir just a little too fast, the dish falls apart. That’s what “prompt engineering” feels like for AI: tiny changes in wording can make a model give totally different answers.

DSPy treats the recipe as a *structured plan* rather than a single instruction. Think of it like building a Lego tower: each block is a small, well‑defined step (e.g., “ask for a summary,” then “verify with two sources”). By keeping blocks separate and chaining them in a fixed order, the whole tower stays sturdy even if one block’s color changes slightly.

**Key terms**

- **Prompt engineering** – tweaking the text you give to an AI so it behaves the way you want.  
- **DSPy** – a Python framework that lets you write these small steps as reusable “functions” and chain them together, making the overall workflow less sensitive to wording changes.

So DSPy turns fragile, all‑at‑once prompts into a reliable sequence of Lego blocks—each step clear, each piece interchangeable, and the final result robust.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
