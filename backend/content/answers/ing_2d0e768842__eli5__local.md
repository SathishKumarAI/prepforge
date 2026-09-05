---
qid: ing_2d0e768842__eli5__local
question: 'Explain: Model Inputs and Outputs — GitHub - zai-org/CogAgent: An open-sourced
  end-to-end VLM-based GUI Agent \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 238
total_tokens: 420
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:46:49-05:00'
sources: []
---

Think of the CogAgent as a smart chef who can cook meals just by looking at a recipe card and an image of ingredients.  
**Inputs** are what the chef sees:  
* A text prompt (the “recipe” – instructions or questions).  
* An image from a GUI screen (the “ingredients” – visual clues like buttons, menus, or icons).  
The model first turns both pieces into internal representations—a language‑style memory for the words and a vision‑style map for the picture.  

**Outputs** are what the chef produces:  
* A series of text commands that tell the computer what to click, type, or scroll—like a step‑by‑step cooking instruction list.  
These commands come from the same internal representation the model built, so it can “understand” both the language and the visual layout in one go.

In short: feed the agent a written prompt + a screenshot; it blends vision and text into one mental picture, then spits out actionable GUI instructions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
