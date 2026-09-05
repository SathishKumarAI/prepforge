---
qid: ing_2753f2bb2b__star__local
question: What does "grounding" mean for a VLM, and how does a model actually output
  a bounding box?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 353
total_tokens: 601
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:47:10-05:00'
sources: []
---

**Situation** – In my last role I was tasked with adding a “referring expression” feature to our visual‑language chatbot so users could ask for specific objects (“Show me the red mug on the left”) and receive an image with that object highlighted. The model we had was a CLIP‑based VLM, but it didn’t natively produce bounding boxes.

**Task** – I needed to implement grounding: map natural language references to precise pixel coordinates, so the chatbot could overlay a box on the correct region in real time without a heavy inference pipeline.

**Action** – First, I added a lightweight object detector (YOLO‑v8) that produced candidate boxes with class scores. Then I fed the image and the user query into the VLM to get a similarity vector for each box’s cropped patch. By normalizing these similarities across all candidates, I could rank them and pick the top match. Finally, I wrapped this in a FastAPI endpoint so the client could receive the bounding box coordinates (x, y, w, h) alongside the image. I tuned the temperature hyperparameter to balance precision vs recall.

**Result** – The feature reduced user clicks by 35 % on our internal test set and achieved an average IoU of 0.78 with human‑annotated boxes. I learned that grounding is essentially a two‑stage pipeline: detection + language‑aware re‑scoring, and that careful calibration of the similarity metric can drastically improve accuracy without extra GPU cost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
