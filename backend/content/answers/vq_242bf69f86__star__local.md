---
qid: vq_242bf69f86__star__local
question: How can generative AI be used in virtual reality and gaming?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 298
total_tokens: 536
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:51:39-05:00'
sources: []
---

**Situation**  
During my senior year I worked on a prototype for a campus VR escape‑room contest. The judges wanted an immersive, adaptive storyline that could respond to player choices in real time, but our team had only scripted dialogues and static branching paths.

**Task**  
I was tasked with creating a dynamic narrative engine that would generate new dialogue and environmental cues on the fly, keeping each playthrough unique while maintaining coherence with the game’s lore.

**Action**  
I integrated OpenAI’s GPT‑4 fine‑tuned on our world‑building documents. Using Unity’s C# API, I built an event‑driven script that fed player actions (e.g., solving a puzzle, interacting with NPCs) into the model as prompts. The AI produced contextual responses and suggested environmental changes, which we rendered via Unreal Engine’s procedural mesh system. To keep latency low, I cached frequently used templates and limited token usage to 256 per request, achieving sub‑300 ms response times.

**Result**  
The final demo scored a 4.8/5 on narrative immersion in the competition, and our prototype attracted interest from a local indie studio that later hired me as a technical writer. I learned how generative AI can bridge design intent with player agency, and how careful prompt engineering plus real‑time caching keeps VR experiences responsive.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
