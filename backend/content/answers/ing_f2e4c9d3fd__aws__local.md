---
qid: ing_f2e4c9d3fd__aws__local
question: 'Explain: Show me the code! — The Annotated ResNet-50 | Towards Data Science'
topic: Data Science
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 479
total_tokens: 718
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:25:50-05:00'
sources: []
---

**Customer Obsession & Deliver Results**

> **Situation:** A client needed a production‑ready image classifier for medical scans with > 90 % accuracy and < 2 s inference latency.  
> **Task:** Build and deploy an annotated ResNet‑50 pipeline, provide transparent code, and demonstrate real‑world performance.  
> **Action:**  
> ```python
> import torch, torchvision
> from torchvision import transforms, models
> from PIL import Image
> 
> # 1️⃣ Load pretrained backbone (ImageNet)
> model = models.resnet50(pretrained=True).eval()
> 
> # 2️⃣ Freeze all layers except the last FC for fine‑tuning
> for p in model.parameters(): p.requires_grad = False
> model.fc = torch.nn.Linear(model.fc.in_features, NUM_CLASSES)
> 
> # 3️⃣ Data augmentation & normalization
> transform = transforms.Compose([
>     transforms.Resize(256),
>     transforms.CenterCrop(224),
>     transforms.RandomHorizontalFlip(),
>     transforms.ToTensor(),
>     transforms.Normalize(mean=[0.485, 0.456, 0.406],
>                          std =[0.229, 0.224, 0.225])
> ])
> 
> # 4️⃣ Inference wrapper
> def predict(img_path):
>     img = Image.open(img_path).convert('RGB')
>     inp = transform(img).unsqueeze(0)
>     with torch.no_grad():
>         logits = model(inp)
>     return logits.argmax().item()
> ```
> **Result:** Deployed on SageMaker endpoints (Multi‑Model), achieving 92 % accuracy and 1.7 s latency on an m5.large instance—30 % faster than baseline, cost $0.10/hr vs $0.25/hr for GPU.  
> **Learned:** Fine‑tuning only the head reduces overfitting; freezing early layers preserves learned features.

**Bar‑raiser cues:** ownership of end‑to‑end pipeline, deep dive into layer freezing, quantified accuracy/latency, cost trade‑offs, and clear learning loop.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
