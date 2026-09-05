---
qid: ing_69ed4b2447__eli5__local
question: 'Explain: A robotics customer asks for 50,000 hours of manipulation demonstrations
  across 12 tasks and three robot embodiments. Design the collection and data pipeline,
  and tell me what makes a single demonstration worth keeping.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 273
total_tokens: 462
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:23:49-05:00'
sources: []
---

Think of building a giant library of “recipe cards” that teach a robot how to cook (manipulate objects).  
**Step 1 – Gather the cards:**  
*Set up three kitchen stations (the robot embodiments) and pick 12 dishes (tasks). For each dish, record many cooking sessions—50 000 in total. Use cameras, force sensors, and motion trackers so every bite, stir, or lift is captured.  
**Step 2 – Organize the library:**  
*Store each card in a database tagged with station, dish, time stamp, and sensor readings. Run an automatic “clean‑up” script that removes duplicate cards, bad lighting, or noisy sensor spikes—just like pruning out blurry photos.  
**Step 3 – Decide what stays:**  
A card is worth keeping if it shows the robot successfully completing the task **without error**, uses a realistic amount of force (no crushing), and includes clear start‑to‑end motion so the learning algorithm can learn from it. Think of it as keeping only those recipe cards that actually taste good and are easy to follow.  

This pipeline turns raw video into a polished, searchable cookbook for the robot’s brain.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
