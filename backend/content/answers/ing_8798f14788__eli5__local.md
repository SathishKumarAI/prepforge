---
qid: ing_8798f14788__eli5__local
question: 'Explain: Q42: Design an evaluation system for comparing two LLMs on open-ended
  tasks.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 281
total_tokens: 448
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:11:06-05:00'
sources: []
---

Imagine you’re judging two chefs who must create a dish from any ingredients they like—there’s no single “correct” recipe, just how tasty and creative the result is.  
1. **Set a common menu** – give both models the same prompt (the chef’s brief).  
2. **Gather many taste‑tests** – collect dozens of responses so you can see patterns, not one lucky answer.  
3. **Rate each dish on clear scales**:  
   * *Fluency* (does it read naturally?)  
   * *Coherence* (is the story logical?)  
   * *Creativity* (new ideas or twists?)  
   * *Relevance* (does it stay on topic?).  
4. **Use blind scoring** – reviewers see no model names, so bias drops out.  
5. **Average and compare scores** – a higher average means the chef consistently makes better dishes.  
6. **Add a “challenge round”** – throw an unexpected twist in the prompt; the model that adapts best shows true flexibility.  

This system treats open‑ended tasks like a culinary contest: diverse, judged on multiple dimensions, and fair to all participants.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
