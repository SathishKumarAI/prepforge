---
qid: ing_1f9387add4__eli5__local
question: 'Explain: Design the tool surface for a coding agent: which tools exist,
  what their schemas look like, and how results come back.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 233
total_tokens: 407
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:26:09-05:00'
sources: []
---

Imagine you’re building a kitchen robot that can cook recipes (the “coding agent”). The **tool surface** is the set of appliances it can use—oven, stove, blender, fridge—and how each appliance talks to the robot.

1. **Tool existence**: Each appliance is a *tool* – a software function like “run unit test” or “format code.”  
2. **Schemas**: Think of a recipe card that lists what ingredients (input fields) the tool needs and what it produces (output). For example, the “run test” card says: *Input:* file name; *Output:* pass/fail result.  
3. **Results**: When the robot sends a command to a tool, it receives a reply in the same format as the recipe card—cleanly labeled data that the robot can read and decide what to do next.

So, just as a chef follows clear instructions for each appliance, a coding agent uses well‑defined tool cards to request actions and interpret their responses.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
