---
qid: ing_5cade0501f__eli5__local
question: 'Explain: A user says "send Maya the photos from Saturday''s hike." Design
  the on-device path from that utterance to a structured app action with resolved
  parameters.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 266
total_tokens: 446
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:03:16-05:00'
sources: []
---

Think of your phone as a smart kitchen where you give a recipe (the user’s voice) and it automatically gathers all the ingredients, chops them up, and serves the dish to the right plate.

1. **Listen** – The phone’s microphone captures “send Maya the photos from Saturday’s hike.”  
2. **Translate words into meaning** – Speech‑to‑text turns the audio into text; natural‑language understanding (NLU) reads it as a *Send* command, with two pieces of information:  
   * Recipient = Maya  
   * Content = photos taken on Saturday.  
3. **Find the ingredients** – The device’s photo library is searched for images whose timestamp falls on that Saturday; it pulls those files into a small “photo basket.”  
4. **Pick the right plate** – The phone checks Maya’s contact to get her email address or messaging handle.  
5. **Serve** – It composes an email (or message) with the photo basket attached and sends it, all while staying on the device—no cloud upload needed.

That’s the whole journey from spoken request to a finished app action, step by step, without any extra jargon.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
