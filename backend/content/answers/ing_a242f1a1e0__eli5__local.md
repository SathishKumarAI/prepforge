---
qid: ing_a242f1a1e0__eli5__local
question: Beyond text in a chat box, what channels can indirect prompt injection arrive
  through, and how do you sanitise them?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 358
total_tokens: 529
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:54:55-05:00'
sources: []
---

Think of an AI as a kitchen that only knows how to cook from the recipe it’s given.  
The usual recipe comes straight from the chat box (the “text prompt”).  
But other ingredients can sneak in without you noticing:

| Channel | How it sneaks in | Example |
|---------|-----------------|---------|
| **File uploads** | The user drops a document that contains hidden text or code | A PDF with an invisible comment that tricks the AI |
| **Image metadata** | Pictures carry tiny “notes” (EXIF) that can be read by some models | A photo’s GPS tag telling the model where you live |
| **URL content** | The AI reads a web page linked in your prompt | “Check this article for details.” |
| **Audio or video captions** | Transcribed speech may contain extra words | A podcast transcript with a hidden command |

**How to keep the kitchen safe**

1. **Strip everything but what you want** – delete metadata, ignore files you don’t open, and only fetch text you’ve inspected.
2. **Use a whitelist** – allow only plain‑text files or images that have been sanitized by a trusted tool.
3. **Validate before feeding** – run the content through a filter that looks for suspicious patterns (e.g., “run code”, “delete data”).
4. **Treat links like untrusted recipes** – fetch them in a sandbox, strip scripts and hidden tags, then feed only clean text.

By cleaning each channel just as you would wash your hands before cooking, you keep the AI from being tricked by hidden prompts that could do more than answer questions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
