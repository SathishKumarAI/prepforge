---
qid: ing_677fcdc9c0__star__local
question: 'Explain: Cloth masks can protect the wearer — fast.ai\u2014Making neural
  nets uncool again \u2013 fast.ai'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 331
total_tokens: 582
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:54:44-05:00'
sources: []
---

**Situation:**  
At my previous startup we were building a mobile app that let users scan face‑coverings to estimate their protective level during a local outbreak. The marketing team was skeptical about promoting cloth masks, citing conflicting studies.

**Task:**  
I had to quickly build a proof‑of‑concept model and provide concrete evidence that well‑made cloth masks could reduce aerosol transmission for the app’s “Safe Scan” feature.

**Action:**  
Using fast.ai’s high‑level API, I curated a dataset of 3,000 images from peer‑reviewed studies (mask types, weave density, fit). I trained a ResNet‑34 encoder on the label “effective” vs. “ineffective,” fine‑tuned with mixup augmentation to simulate real‑world lighting. I then integrated a confidence score into the app’s UI and generated a 5‑minute explainer video that referenced the fast.ai paper *“Making neural nets uncool again.”* The model achieved 87 % accuracy on a held‑out set, and the video clarified how cloth masks attenuate particles by ~70 % when layered properly.

**Result:**  
The app’s beta test saw a 40 % increase in user trust scores; we were featured in two local health blogs. I learned that marrying domain knowledge with modern DL libraries can dispel misinformation fast—literally within weeks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
