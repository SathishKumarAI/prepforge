---
qid: ing_f2e4c9d3fd__faang__local
question: 'Explain: Show me the code! — The Annotated ResNet-50 | Towards Data Science'
topic: Data Science
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 744
total_tokens: 986
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:04:15-05:00'
sources: []
---

**Clarify**  
You want a concrete, runnable example of an *annotated* ResNet‑50 implementation—i.e., a script that builds the network, prints layer summaries, and visualizes intermediate activations for a sample image. Assume PyTorch ≥1.8, CUDA available, and you’re working on ImageNet‑style RGB images.

**Approach**  
1. Load `torchvision.models.resnet50(pretrained=True)`.  
2. Replace the final fully‑connected layer with an identity to expose feature maps.  
3. Register forward hooks on selected conv layers (e.g., `layer1`, `layer3`).  
4. Preprocess a test image (`resize→center_crop→normalize`).  
5. Run inference, capture activations, and plot them using Matplotlib.

**Depth**  
```python
import torch, torchvision.transforms as T
from torchvision import models, datasets
import matplotlib.pyplot as plt

# 1️⃣ Build model
model = models.resnet50(pretrained=True)
model.fc = torch.nn.Identity()   # keep raw features
model.eval()

# 2️⃣ Hook helper
activations = {}
def hook(name):
    def fn(_, __, out): activations[name] = out.detach()
    return fn

# 3️⃣ Register hooks on two stages
for name in ['layer1', 'layer3']:
    getattr(model, name)[-1].register_forward_hook(hook(name))

# 4️⃣ Load & preprocess image
img_path = "sample.jpg"
prep = T.Compose([
    T.Resize(256), T.CenterCrop(224),
    T.ToTensor(),
    T.Normalize(mean=[0.485,0.456,0.406],
                std =[0.229,0.224,0.225])])
img = prep(torchvision.io.read_image(img_path)).unsqueeze(0)

# 5️⃣ Forward pass
with torch.no_grad():
    _ = model(img)

# 6️⃣ Visualize activations
def show(act, title):
    act = act.squeeze().cpu()
    n = int(act.shape[0]**0.5)
    fig, ax = plt.subplots(n, n, figsize=(8,8))
    for i in range(n*n):
        if i < act.shape[0]:
            ax[i//n,i%n].imshow(act[i], cmap='viridis')
            ax[i//n,i%n].axis('off')
    fig.suptitle(title)
    plt.show()

show(activations['layer1'], "Layer1 feature maps")
show(activations['layer3'], "Layer3 feature maps")
```
*Complexity*: Forward pass is **O(N)** in the number of parameters (~25M); memory ~200 MB for activations.  

**Edge cases**  
- Image size mismatches → use `resize`.  
- CUDA errors if GPU not available → fallback to CPU (`torch.device('cpu')`).  
- Large batch sizes may OOM; keep batch=1.

**Optimize & Communicate**  
If profiling shows the hook overhead dominates, consider `torch.jit.trace` for a faster scripted model and use `torch.utils.checkpoint` to trade compute for memory. Explain that hooks are non‑invasive and can be removed after debugging, keeping the pipeline clean. This concise, reproducible script demonstrates both architectural insight and practical deployment—exactly what FAANG interviewers expect.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
