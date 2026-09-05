---
qid: ing_2eefef0e6a__eli5__local
question: 'Explain: You are building a computer-use agent. Design the perception layer:
  screenshots, coordinates, accessibility tree.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 240
total_tokens: 409
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:49:59-05:00'
sources: []
---

Think of your computer‑use agent like a robot bartender who must know exactly where every drink and glass is before it can serve a cocktail.  
**Perception** is the bartender’s “vision system.”  

1. **Screenshots** – like taking a photo of the bar layout, they give the agent a picture of everything on screen at once.  
2. **Coordinates** – each pixel in that picture has an (x, y) address, just as every drink sits at a specific spot on the counter. The agent can point to any pixel by its coordinates.  
3. **Accessibility tree** – this is a map of objects that the system already knows about—buttons, menus, text boxes—along with labels and actions they support. It’s like a catalog that tells the bartender which items are “red wine,” “water,” or “shaker.”  

By combining these three views—raw image, exact positions, and a structured object list—the agent can reliably locate, identify, and interact with any UI element, just as the bartender mixes drinks with confidence.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
