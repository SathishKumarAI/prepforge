---
qid: ing_a54172da4a__think__local
question: 'Explain: ── Per-frame prompt ──────────────────────────────────────────────────────────'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 503
total_tokens: 697
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T11:59:09-05:00'
sources: []
---

### 1️⃣ Clarify the Scope & Assumptions  
- **What is “per‑frame”**? In video or sequential data, each image (or time step) is a *frame*.  
- **Prompting context**: We’re talking about prompting in vision‑language models (e.g., CLIP, Flamingo).  
- Assume the reader knows basic NLP prompting and wants to understand why we’d ask for a prompt per frame instead of one global prompt.

### 2️⃣ Mental Model / Framework  
1. **Vision‑Language Alignment**: A model maps an image embedding ↔ text embedding.  
2. **Temporal Dynamics**: Adjacent frames can differ drastically (lighting, motion).  
3. **Prompt as Condition**: The prompt steers the model’s output; a single prompt may not capture all frame nuances.

### 3️⃣ Step‑by‑Step Reasoning  
1. **Identify Frame‑Specific Needs** – e.g., “the dog is on the left” vs. “the car is in the rear”.  
2. **Generate Prompt per Frame** – feed each image to a language model (or use a learned prompt) that outputs a short textual description.  
3. **Condition the Base Model** – concatenate the frame‑specific prompt with the image embedding before classification or captioning.  
4. **Aggregate Results** – if needed, fuse predictions across frames (e.g., temporal smoothing).

### 4️⃣ Common Traps to Avoid  
- **Assuming One Prompt Suffices**: Overlooking that a single prompt may bias the model toward one frame’s context.  
- **Ignoring Computational Cost**: Generating prompts for every frame can be expensive; consider caching or lightweight models.  
- **Mixing Up “Prompt” vs. “Caption”**: A prompt is *conditioning* input, not an output description.

### 5️⃣ Sanity‑Check & Communicate  
- **Test on a Short Video**: Run per‑frame prompting and compare with global prompting; watch for misclassifications that disappear with per‑frame prompts.  
- **Explain in Plain Terms**: “We give the model a tiny, tailored instruction for each picture so it focuses on what matters in that exact moment.”  

By following this process, you can articulate why and how per‑frame prompting enhances vision‑language tasks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
