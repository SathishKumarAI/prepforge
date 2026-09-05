---
qid: ing_e0dda28e1f__star__local
question: 'Explain: And ask it, is it a cat — Python Full Course for Beginners'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 393
total_tokens: 635
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:58:24-05:00'
sources: []
---

**Situation:**  
At my previous internship I was tasked with turning the company’s hand‑drawn sketch repository into a searchable database. The client needed an automated way to label drawings as “cat” or “non‑cat” so they could quickly find relevant assets for animation projects.

**Task:**  
Build and deploy a lightweight Python model that could classify sketches in real time, with at least 85 % accuracy, and expose it via a simple REST API the front‑end team could call from their design tool.

**Action:**  
I started by gathering ~3,000 labeled PNGs (1,800 cats, 1,200 others). Using OpenCV I preprocessed each image: resized to 128×128, converted to grayscale, and applied histogram equalization. For the classifier I chose a shallow Convolutional Neural Network in Keras—two Conv‑ReLU‑MaxPool blocks followed by a dense layer with softmax. I split the data 80/10/10 for train/val/test, used early stopping, and tuned learning rate and batch size via grid search. After training, I wrapped the model in Flask, added a `/predict` endpoint that accepts an image file, runs inference, and returns “cat” or “not_cat”. I containerized the service with Docker for easy deployment.

**Result:**  
The final model achieved 88 % accuracy on the test set and processed each sketch in ~30 ms. The API integration cut manual labeling time by 70 %, freeing designers to focus on creativity. I learned how to balance model complexity against inference latency, and gained confidence deploying ML services end‑to‑end.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
