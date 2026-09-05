---
qid: ing_93e6357c9d__eli5__local
question: 'Explain: Weighted Score Fusion — Hybrid Search'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 155
output_tokens: 217
total_tokens: 372
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:32:10-05:00'
sources: []
---

Imagine you’re looking for a song in a music library that’s split into two parts: one part is sorted by the lyrics (text search), and the other is sorted by the melody (audio similarity). If you only listen to the lyrics, you might miss songs with the same words but different tunes. If you only follow the tune, you might find tracks with a similar sound but unrelated words.

**Weighted Score Fusion** is like combining both clues at once. For each candidate song, we give it two scores: one from how well its lyrics match your query and another from how close its melody is to what you’re looking for. We then assign a weight to each score (maybe 70 % lyric importance, 30 % tune importance) and add them together. The songs with the highest combined score surface first.

In hybrid search this lets us respect both textual relevance and non‑textual similarity, giving users results that are more complete and useful than either method alone.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
