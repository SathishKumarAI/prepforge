---
qid: ing_f91efbc850__eli5__local
question: How do modern multimodal models get image and video understanding into an
  LLM, and what changes for video specifically?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 269
total_tokens: 439
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:09:14-05:00'
sources: []
---

Think of a modern AI as a giant library that reads books (text) but also has a photo‑album and a movie reel in the same room.  
A large language model (LLM) is like a super‑fast librarian who can pull out any book, skim it, and write a summary. To let it “see” pictures or videos, we give it a tiny helper: a visual encoder that turns each frame into a compact description—a kind of *image fingerprint*. The fingerprints are then fed to the same LLM as if they were words, so the librarian can mix sight with language.

For still images, one fingerprint per picture is enough. For video, the helper produces fingerprints for many frames (or key‑frames) and often adds a short “motion sketch” that tells the LLM how things change over time. This extra motion signal lets the model understand actions, sequences, and timing—just as adding a few more notes to a song changes its rhythm. The rest of the process stays the same: the fingerprints are treated like text tokens, letting the language model reason about what it “sees” just as easily as what it “reads.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
