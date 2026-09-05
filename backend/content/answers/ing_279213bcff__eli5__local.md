---
qid: ing_279213bcff__eli5__local
question: 'Explain: Handling Intentional Duplicates — Web Crawler System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 264
total_tokens: 426
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:38:28-05:00'
sources: []
---

**Handling Intentional Duplicates – a Web‑Crawler’s “Back‑and‑Forth” Playlist**

Imagine a music streaming service that lets you add the same song to different playlists. When the player sees the same track again, it knows whether it should play the song from scratch or just jump to its next occurrence. A web crawler works like that playlist.

*Intentional duplicates* are pages that intentionally link back to each other (e.g., “Next” and “Previous” buttons on a photo album). The crawler must keep them all because they’re part of a sequence, but it should avoid re‑fetching the exact same content over and over. It does this by remembering the URL’s *identity* (a simple hash) and its *role* in the sequence. If it encounters the same identity again, it checks whether that role has changed; if not, it skips downloading the page again but still records the new link.

So, just as a playlist remembers each song once yet lets you shuffle through it many times, a crawler stores each unique page once but follows intentional duplicates to maintain the structure of the site.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
