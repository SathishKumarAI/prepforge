---
qid: ing_95b7e75d1d__eli5__local
question: 'Q: Why do system prompts carry more weight than user prompts in modern
  LLMs?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 241
total_tokens: 406
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:35:06-05:00'
sources: []
---

Think of a large language model (LLM) as a busy kitchen and the text it writes as a dish you order.  
The **system prompt** is like the chef’s secret recipe book: it tells the cook how to prepare every ingredient, what flavors are allowed, and which cooking style to follow. Because it shapes the whole process, it has the strongest influence on the final taste.  

A **user prompt** is a single customer request—“make me a salad with tomatoes.” It tells the chef *what* you want at this moment, but the recipe book still decides how the salad will be tossed, seasoned, and plated. In modern LLMs, the system prompt sets broad rules (e.g., tone, safety limits, style) that all user requests must respect, so it carries more weight than any single user instruction.

**Key terms:**  
- *System prompt*: foundational instructions given to the model before any user interaction.  
- *User prompt*: specific question or request from the person interacting with the model.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
