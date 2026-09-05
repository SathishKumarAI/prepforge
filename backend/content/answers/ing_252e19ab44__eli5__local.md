---
qid: ing_252e19ab44__eli5__local
question: 'Explain: Mobile App (Client) — Spotify System Design - by Neo Kim and Hayk'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 227
total_tokens: 393
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:34:54-05:00'
sources: []
---

Imagine your phone is a smart kitchen that can cook any song you want, but it doesn’t have all the ingredients stored locally – those are in a huge pantry (Spotify’s servers).  
When you tap “Play,” the app (the chef) asks the pantry for the recipe: a short list of URLs to audio files and metadata. The pantry replies with links that point to cloud‑based storage (Amazon S3 or similar).  
The app then streams the song bit by bit, just like piping hot soup from the stove to your bowl. While it’s listening, it keeps a tiny “menu” cache: the most recent tracks you’ve played and their cover art, so next time you can open them instantly without another pantry call.  
If you start a new playlist, the app fetches only that playlist’s list of links; the actual music files stay in the pantry until needed. This keeps your phone light (no huge downloads) while still letting you enjoy instant playback.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
