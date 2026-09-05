---
qid: ing_d41f8b3f8d__eli5__local
question: Explain classifier-free guidance. What actually happens when you turn the
  scale up?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 241
total_tokens: 403
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:11:18-05:00'
sources: []
---

Imagine a recipe book that gives two versions of each dish: a “plain” version (just the basic ingredients) and an “enhanced” version (with extra spices). A generative AI model is like a chef who can cook either version.  
Classifier‑free guidance lets you decide how much spice to add by mixing the plain and enhanced recipes in different proportions. When the scale is set low, the chef follows mostly the plain recipe—output looks generic but still plausible. Turning the scale up tells the chef “use more of the enhanced recipe,” so it sharpens details: colors become crisper, shapes clearer, and the image feels more faithful to what you’d expect from a real photo.  
The key term: **guidance scale** – a number that controls how strongly the model leans toward the detailed (enhanced) version versus the plain one. The higher the scale, the stronger the emphasis on detail, but if it’s too high the image can look unnatural or “over‑stylized.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
