---
qid: ing_5bf3846823__eli5__local
question: 'Explain: CLIP (Contrastive Language-Image Pretraining)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 255
total_tokens: 415
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:01:54-05:00'
sources: []
---

Imagine a smart pair of ears and eyes that learn together by listening to a storybook while looking at pictures in it. CLIP (Contrastive Language‑Image Pretraining) is like training those ears and eyes so they can match the right picture with the right sentence, even if they’ve never seen that exact combination before.

**How it works:**  
1. **Ears (text encoder)** read a caption or description and turn it into a “word vector” – a list of numbers that captures its meaning.  
2. **Eyes (image encoder)** look at an image and create an “image vector,” another number list that describes visual features.  
3. The system is trained to bring matching pairs of word vectors and image vectors close together in this numeric space, while pushing mismatched pairs apart.  

After training, you can give CLIP a new picture and ask it which caption fits best, or give it a sentence and find the most relevant photo—just like a child who has learned to pair words with pictures from many books.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
