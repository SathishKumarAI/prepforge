---
qid: ing_8039e01117__eli5__local
question: 'Explain: Although inheritance is a popular OOPs concept, it is less advantageous
  than composition. Explain.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 229
total_tokens: 397
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:00:13-05:00'
sources: []
---

Imagine building a toy car.  
With **inheritance** you start with a generic “Vehicle” blueprint and then create a “Car” that automatically gets every feature of Vehicle—wheels, engine, doors—just by saying *“I am a Car, so I inherit everything from Vehicle.”* If later the company decides cars need a spoiler, you must change the whole Vehicle class or add a new subclass for every car type.  

With **composition** you build the car by attaching separate parts: wheels, engine, spoiler, GPS. Each part is its own small module that can be swapped in or out without touching the others. If you want an electric car, you just replace the engine component; if you want a racing version, you add a spoiler component.

So, inheritance bundles many things together and makes changes ripple through all subclasses—hard to manage. Composition keeps parts independent, so you can mix, match, or replace them easily. That’s why modern design favors composition over inheritance for flexibility and maintainability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
