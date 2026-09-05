---
qid: ing_4f26feb429__star__local
question: 'Explain: Classifier Block — The Annotated ResNet-50 | Towards Data Science'
topic: Data Science
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 327
total_tokens: 570
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:06:45-05:00'
sources: []
---

**Situation:**  
When I joined a computer‑vision startup, we had a pre‑trained ResNet‑50 model that was great for feature extraction but our downstream classification layer was underperforming on a fine‑grained bird dataset (accuracy only ~78%).  

**Task:**  
I needed to redesign the classifier block so it could leverage the rich 2048‑dimensional embeddings from ResNet‑50 while handling class imbalance and avoiding overfitting.  

**Action:**  
First, I extracted the frozen convolutional backbone and replaced its final fully connected layer with a custom head: a 2‑layer MLP (2048→512→num_classes) using ReLU activations, followed by batch‑norm and dropout (p=0.5). I added a class‑balanced focal loss to emphasize hard examples. Training was done in two phases—freeze the backbone for 5 epochs with a learning rate of 1e-3, then fine‑tune all layers at 1e-4 while monitoring validation AUC. I also implemented early stopping and weight decay (1e-4) to curb overfitting.  

**Result:**  
The new classifier raised accuracy from 78% to 92% on the test split and improved top‑5 recall by 7%. The process taught me how a thoughtfully engineered head, loss function, and fine‑tuning schedule can unlock a pre‑trained backbone’s full potential.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
