---
qid: ing_1413c031fa__star__local
question: 'Explain: Fashion or Imitation Jewellery, Eyewear and Watches'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 426
total_tokens: 666
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:08:18-05:00'
sources: []
---

**Situation:**  
At my previous e‑commerce startup we launched a new “trendy accessories” line that included fashion jewelry, imitation jewelry, eyewear, and watches. Our catalog was over 12 000 SKUs, but the search engine kept mixing up items—customers were seeing sunglasses when they searched for brooches, and watch prices were off by an average of $30 because the system mis‑labelled “luxury” watches as “budget.”  

**Task:**  
I needed to build a robust image‑based classification pipeline that could accurately tag each product into one of four fine‑grained categories (fashion jewelry, imitation jewelry, eyewear, watches) and predict price tiers so the recommendation engine would serve relevant results.  

**Action:**  
I collected 4 k labeled images per category and trained a ResNet‑50 backbone with transfer learning, adding a custom attention layer to focus on small details like filigree or lens tint. I used data augmentation (random crops, color jitter) to simulate lighting variations from multiple vendors. For price tiering, I fine‑tuned a regression head using the same features and applied mean‑squared error loss with an L2 regularizer to avoid overfitting on noisy seller inputs. The model was deployed as a microservice behind our catalog ingestion pipeline; each new SKU ran through inference before being published.  

**Result:**  
Accuracy jumped from 68 % to 93 % on the validation set, and in production the mis‑label rate dropped by 87 %. Price predictions improved MAPE from 15 % to 4 %, reducing customer complaints about “too expensive” items. I learned that combining a strong CNN backbone with attention and careful data augmentation can solve subtle category distinctions in fashion tech, and that integrating ML models into the product lifecycle requires close collaboration with ops and QA teams.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
