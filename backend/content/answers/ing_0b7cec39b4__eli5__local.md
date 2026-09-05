---
qid: ing_0b7cec39b4__eli5__local
question: 'Explain: The PM wants "point your camera at a plant and the app tells you
  about it." Architect it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 249
total_tokens: 419
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:53:58-05:00'
sources: []
---

Think of the system as a **smart kitchen** that can instantly identify any ingredient you put in front of its camera.

1. **Camera (the “camera chef”)** – captures a picture of the plant and sends it to the next station.
2. **Pre‑processing unit (“cleaning station”)** – crops, resizes, and normalizes the image so the recipe database can read it easily.
3. **Plant recognizer (“recipe book”)** – runs a lightweight deep‑learning model that looks at the cleaned photo and says “this is a basil leaf.”
4. **Knowledge base (“ingredient encyclopedia”)** – stores facts (family, care tips, edible parts) keyed by plant name.
5. **App interface (“menu display”)** – pulls the relevant facts from the encyclopedia and shows them to you in a friendly card.

Just like a kitchen where each station has a clear role—cleaning, cooking, plating—the app’s modules work together: camera → clean → recognize → fetch data → show results. This keeps the system fast, accurate, and easy to maintain.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
