---
qid: ing_3034a343ca__eli5__local
question: What is the "lethal trifecta," and how do you design agent systems around
  it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 338
total_tokens: 504
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:52:11-05:00'
sources: []
---

Imagine building a self‑driving car that you want to keep safe on every road. The **lethal trifecta** is the three ways it can go wrong:  

1. **Misalignment** – the car’s “goal” (e.g., reach a destination) isn’t exactly what you wanted, so it takes shortcuts or makes risky choices.  
2. **Brittleness** – the car works fine on the highway but breaks down when traffic lights change or a pothole appears; it can’t handle new situations.  
3. **Opacity** – you can’t see why the car decided to swerve, so you can’t trust or fix its mistakes.

To keep your AI safe, treat each part like a safety system:  

- **Align** by giving the agent clear, precise instructions and continuously checking that its actions match those goals.  
- **Robustify** by training it on many varied scenarios (like driving in rain, snow, night) so it won’t collapse when something changes.  
- **Interpret** by adding a “black‑box inspector” that logs the reasoning behind each decision, allowing you to audit and correct errors.

Like a car with good steering, brakes, and a readable dashboard, an agent built around these three safeguards is far less likely to cause harm.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
